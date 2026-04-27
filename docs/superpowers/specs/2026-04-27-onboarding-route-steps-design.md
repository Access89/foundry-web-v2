# Onboarding Route Steps Design

## Goal

Refactor onboarding so every step is a refresh-safe page with its own route, Formik-managed field state, and persisted Redux draft state.

## Current State

The active app entry is `src/AppNew.tsx`. Onboarding currently mixes two navigation models:

- `src/pages/onboarding/index.tsx` renders `country`, `business-information`, and `basic-information` as internal tabs held in component state.
- `src/pages/onboarding/_components/_tabs/password.tsx` is already rendered as `/onboarding/password`.
- `subscriber` is already persisted through `redux-persist` in `src/store/store.ts`.
- Step validity is coordinated through shared `safe` and `showValidationErrors` flags in `subscriber`, which couples unrelated steps.

## Routes

The onboarding flow will use URL paths as the source of navigation:

- `/onboarding` redirects to `/onboarding/country`.
- `/onboarding/country` selects the country.
- `/onboarding/business-information` collects business name, owner, location, business type, and nature of business.
- `/onboarding/basic-information` collects email and phone number.
- `/onboarding/password` collects password and confirms password.
- `/onboarding/download-apps-and-other-offers` remains the post-submit destination.

Existing links that include `plan_id`, such as `/onboarding?plan_id=5`, will continue to work. The route layer will read the query parameter, persist it into `subscriber.plan_id`, and keep it available during step navigation.

## Architecture

Onboarding will be reorganized around a route-first module structure:

- A shared onboarding layout owns the shell: max width, spacing, back action, primary action area, and route outlet.
- Step metadata lives in one config file so step order, previous route, next route, and labels are not duplicated.
- Each step page owns its Formik instance and validation rules for only its fields.
- Redux remains the durable draft store. Formik initializes from `state.subscriber`, and field changes dispatch `updateSubscriberState`.
- Local Formik validation replaces global `safe` and `showValidationErrors` for page progression.

## Proposed File Structure

- `src/pages/onboarding/index.tsx`
  - Root route component. Reads `plan_id`, redirects `/onboarding` to `/onboarding/country`, and renders nested onboarding routes.
- `src/pages/onboarding/_layouts/onboarding-layout.tsx`
  - Shared wrapper for each step page.
- `src/pages/onboarding/_config/steps.ts`
  - Step IDs, paths, next/previous routes, and display labels.
- `src/pages/onboarding/_hooks/use-onboarding-plan.ts`
  - Reads and persists `plan_id` from the current URL.
- `src/pages/onboarding/_hooks/use-onboarding-guard.ts`
  - Redirects users to the earliest incomplete step when they open a later URL directly.
- `src/pages/onboarding/_utils/validation.ts`
  - Formik/Yup validation schemas and helper functions for step completeness.
- `src/pages/onboarding/_components/_tabs/Country.tsx`
  - Converted from tab content into a route step component with local validation behavior.
- `src/pages/onboarding/_components/_tabs/business-information.tsx`
  - Kept as the business route step, but internally named clearly.
- `src/pages/onboarding/_components/_tabs/basic-information.tsx`
  - Kept as the contact route step, but internally named clearly.
- `src/pages/onboarding/_components/_tabs/password.tsx`
  - Converted to use the shared route layout and local submit validation.
- `src/pages/onboarding/_components/_form/*.tsx`
  - Typed to support Formik values, errors, touched, and handlers without `any` where practical.
- `src/AppNew.tsx`
  - Updated to route all `/onboarding/*` child pages through the onboarding root.

## Data Flow

1. A user enters onboarding from pricing or directly.
2. The onboarding root stores `plan_id` from the URL into `subscriber.plan_id` if present.
3. The current step page initializes Formik from persisted `subscriber` values.
4. Each field change updates Formik state and dispatches the corresponding `subscriber` field update.
5. Continue validates the active Formik form.
6. If valid, navigation moves to the next route. If invalid, the page marks fields touched and shows local field errors.
7. The password step builds the existing payload from persisted `subscriber` fields and navigates to `/onboarding/download-apps-and-other-offers`.

## Guard Behavior

The flow should prevent incomplete direct jumps:

- Country is always accessible.
- Business information requires `country` and `country_code`.
- Basic information requires country and completed business information.
- Password requires country, completed business information, and valid contact information.

If a later route is opened without required persisted data, the user is redirected to the earliest incomplete step.

## Validation

Validation should preserve the current intent:

- Country is required.
- Business name, owner name, location, business type, and nature of business are required.
- Owner name accepts letters and spaces.
- Email is required and must be a valid email.
- Phone is required, numeric only, and 7 to 15 digits.
- Password requires at least 8 characters, uppercase, lowercase, number, and special character.
- Confirm password is required and must match password.

Email availability checking remains on the contact step. The implementation should avoid stale `setTimeout` behavior where possible by using a debounced effect or a ref so only the latest email is checked.

## UI Behavior

The visual design stays close to the current onboarding UI:

- Same centered width and mobile padding.
- Same back arrow affordance.
- Same primary button placement.
- Same country picker modal and existing NextUI controls.

The main UX change is route-based navigation. Browser refresh and browser Back/Forward should preserve the correct step because the URL represents the current step and `subscriber` is persisted.

## Error Handling

- Continue on an invalid step marks that step's fields as touched and shows a toast: "Please fill in all required fields correctly".
- Email already exists keeps the user on the contact step, shows the existing toast, and blocks progression until the email is changed or revalidated.
- Post-submit API behavior in `download-apps-and-other-offers` remains unchanged.

## Testing And Verification

The repo does not currently include a dedicated test runner in `package.json`. Verification for this refactor will use:

- `npm run build`
- `npm run lint`

The validation and step-completeness helpers should be written as plain functions where practical so unit tests can be added later without needing to render the UI.

## Out Of Scope

- Redesigning the onboarding visuals.
- Changing the account creation API payload shape.
- Changing the download/apps recommendation screen.
- Adding a new testing framework unless separately requested.
