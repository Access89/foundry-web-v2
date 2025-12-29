import React, { useState, useEffect } from "react";
import {
  Check,
  Store,
  Users,
  Warehouse,
  BarChart3,
  Users2,
  Plus,
  FileText,
  Banknote,
  Globe,
  Boxes,
  ArrowLeft,
  CreditCard,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

// --- TypeScript Interfaces ---

interface PlanLimits {
  users: number;
  warehouses: number;
  shops: number;
}

interface PlanFeatures {
  shops: string;
  users: string;
  warehouses: string;
  pos: string;
  payment: string;
  inventory: string;
  reports: string;
  crm: string;
}

interface Plan {
  id: string;
  name: string;
  subname?: string;
  description: string;
  basePrice: number | null;
  type: "fixed" | "per-shop" | "custom";
  unitLabel: string;
  limits: PlanLimits;
  features: PlanFeatures;
  addonsText: string;
  color: string;
  popular: boolean;
}

interface Addon {
  id: string;
  title: string;
  price: number;
  description: string;
  IconComponent: LucideIcon;
  iconColor: string;
  features: string[];
}

interface PricingHomeProps {
  onSelectPlan: (plan: Plan, isAnnual: boolean) => void;
  onSelectAddon: (addon: Addon) => void;
}

interface CheckoutFlowProps {
  selectedPlan: Plan;
  initialAddon: Addon | null;
  initialAnnual: boolean;
  onBack: () => void;
  onSuccess: () => void;
  onChangePlan: () => void;
}

interface SuccessViewProps {
  onReset: () => void;
}

// --- Constants & Data ---

const EXTRA_USER_PRICE = 5; // USD per month
const EXTRA_WAREHOUSE_PRICE = 15; // USD per month
const EXTRA_SHOP_PRICE = 15; // USD per month (For fixed plans adding branches)

const PLANS: Plan[] = [
  {
    id: "service",
    name: "Service Business",
    description: "Consultants, agencies, clinics, logistics",
    basePrice: 15,
    type: "fixed",
    unitLabel: "Location",
    limits: {
      users: 1,
      warehouses: 0,
      shops: 1,
    },
    features: {
      shops: "1",
      users: "1",
      warehouses: "0",
      pos: "Not included",
      payment: "Standard payments",
      inventory: "Basic",
      reports: "Basic",
      crm: "Customer only",
    },
    addonsText: "Extra users, locations, payroll",
    color: "blue",
    popular: false,
  },
  {
    id: "retail-starter",
    name: "Retail Starter",
    description: "Small shops & single-counter retail",
    basePrice: 30,
    type: "fixed",
    unitLabel: "Shop",
    limits: {
      users: 1,
      warehouses: 0,
      shops: 1,
    },
    features: {
      shops: "1",
      users: "1",
      warehouses: "0",
      pos: "Lite POS",
      payment: "Standard payments",
      inventory: "Basic",
      reports: "Daily sales summary",
      crm: "Customer only",
    },
    addonsText: "Users, full inventory, invoicing, expense",
    color: "teal",
    popular: false,
  },
  {
    id: "retail-business",
    name: "Retail Business",
    description: "Growing shops needing full POS & inventory",
    basePrice: 150,
    type: "per-shop",
    unitLabel: "Shop",
    limits: {
      users: 5,
      warehouses: 1,
      shops: 1,
    },
    features: {
      shops: "1",
      users: "Up to 5",
      warehouses: "1",
      pos: "Full POS",
      payment: "Integrated payments",
      inventory: "Full",
      reports: "Daily, weekly, monthly",
      crm: "Customer & supplier",
    },
    addonsText: "Shops, warehouses, users, inventory",
    color: "primary",
    popular: true,
  },
  {
    id: "chain",
    name: "Chain Stores",
    subname: "Multi-Branch",
    description: "Large retail chains & franchises",
    basePrice: null,
    type: "custom",
    unitLabel: "Shop",
    limits: {
      users: 999,
      warehouses: 999,
      shops: 999,
    },
    features: {
      shops: "Multiple (custom)",
      users: "Multiple (custom)",
      warehouses: "Multiple (custom)",
      pos: "Full POS",
      payment: "Payment & Bank Integration",
      inventory: "Advanced & multi-branch",
      reports: "Consolidated reporting",
      crm: "Customer & supplier, multi-branch",
    },
    addonsText: "Custom modules available",
    color: "slate",
    popular: false,
  },
];

const ADDONS: Addon[] = [
  {
    id: "payroll",
    title: "Payroll Management",
    price: 5,
    description:
      "Streamline your employee payments and tax filings directly from your POS.",
    IconComponent: Banknote,
    iconColor: "text-primary",
    features: [
      "Automated salary calculations",
      "Tax deduction reports",
      "Payslip generation",
    ],
  },
  {
    id: "inventory",
    title: "Advanced Inventory",
    price: 10,
    description:
      "For businesses with complex stock needs across multiple locations.",
    IconComponent: Boxes,
    iconColor: "text-teal-600",
    features: [
      "Multi-warehouse transfer",
      "Low stock alerts",
      "Batch & expiry tracking",
    ],
  },
  {
    id: "accounting",
    title: "Accounting & Invoicing",
    price: 8,
    description:
      "Professional invoicing and expense tracking to keep your finances in check.",
    IconComponent: FileText,
    iconColor: "text-blue-600",
    features: [
      "Professional invoice templates",
      "Expense tracking",
      "Profit & Loss reports",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce Connect",
    price: 15,
    description:
      "Sync your physical store with your online presence effortlessly.",
    IconComponent: Globe,
    iconColor: "text-secondary",
    features: [
      "Real-time stock sync",
      "Online order management",
      "Delivery tracking",
    ],
  },
];

// --- Sub-Components ---

const PricingHome: React.FC<PricingHomeProps> = ({
  onSelectPlan,
  onSelectAddon,
}) => {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  // Helper to calculate display price
  const getDisplayPrice = (plan: Plan): string => {
    if (plan.type === "custom") return "Custom Pricing";
    const price = isAnnual
      ? Math.floor((plan.basePrice || 0) * 12 * 0.9)
      : plan.basePrice || 0;
    return `$${price.toLocaleString()}`;
  };

  const getPeriod = (plan: Plan): string => {
    if (plan.type === "custom") return "";
    const base = isAnnual ? "/ year" : "/ month";
    return plan.type === "per-shop"
      ? `/ ${plan.unitLabel.toLowerCase()} ${base}`
      : base;
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="max-w-10xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Pricing that scales with you
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            From single service providers to large retail chains, we have a plan
            for everyone.
          </p>

          <div className="mt-8 flex justify-center items-center space-x-4">
            <span
              className={`text-sm font-medium ${
                !isAnnual ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Monthly billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label="Toggle between monthly and annual billing"
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                isAnnual ? "bg-primary" : "bg-gray-200"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${
                isAnnual ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Annual billing{" "}
              <span className="ml-1 text-primary font-bold">(Save 10%)</span>
            </span>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl ${
                plan.popular
                  ? "border-2 border-primary transform scale-105 z-10"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-primary">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6 md:p-8 flex-1">
                <h3
                  className={`text-xl font-bold ${
                    plan.popular ? "text-primary" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                {plan.subname && (
                  <span className="block text-sm font-medium text-gray-500">
                    {plan.subname}
                  </span>
                )}
                <p className="mt-2 text-sm text-gray-500 h-10">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight text-gray-900">
                    {getDisplayPrice(plan)}
                  </span>
                  <span className="ml-1 text-sm font-semibold text-gray-500 whitespace-nowrap">
                    {getPeriod(plan)}
                  </span>
                </div>

                <ul className="mt-8 space-y-3">
                  <li className="flex items-start">
                    <Store className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="ml-3 text-sm text-gray-700">
                      <span className="font-semibold">
                        {plan.features.shops}
                      </span>{" "}
                      {plan.unitLabel}
                      {plan.features.shops !== "1" && "s"}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="ml-3 text-sm text-gray-700">
                      <span className="font-semibold">
                        {plan.features.users}
                      </span>{" "}
                      User{plan.features.users !== "1" && "s"}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Warehouse
                      className={`h-5 w-5 flex-shrink-0 ${
                        plan.features.warehouses === "0"
                          ? "text-gray-300"
                          : "text-primary"
                      }`}
                    />
                    <p
                      className={`ml-3 text-sm ${
                        plan.features.warehouses === "0"
                          ? "text-gray-400"
                          : "text-gray-700"
                      }`}
                    >
                      {plan.features.warehouses} Warehouses
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <p className="ml-3 text-sm text-gray-700">
                      {plan.features.pos}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CreditCard className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="ml-3 text-sm text-gray-700">
                      {plan.features.payment}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Boxes className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="ml-3 text-sm text-gray-700">
                      <span className="font-semibold">Inventory:</span>{" "}
                      {plan.features.inventory}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <BarChart3 className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="ml-3 text-sm text-gray-700">
                      {plan.features.reports}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Users2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="ml-3 text-sm text-gray-700">
                      {plan.features.crm}
                    </p>
                  </li>
                </ul>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 uppercase flex items-center mb-2">
                    <Plus className="w-3 h-3 mr-1" /> Add-ons Available
                  </p>
                  <p className="text-sm text-gray-600 leading-snug">
                    {plan.addonsText}
                  </p>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-b-2xl mt-auto border-t border-gray-100">
                <button
                  onClick={() => onSelectPlan(plan, isAnnual)}
                  className={`block w-full text-center rounded-lg px-6 py-3 text-sm font-semibold shadow-sm transition-all ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary-dark shadow-primary-light"
                      : "bg-white text-primary ring-1 ring-inset ring-primary-light hover:ring-primary hover:bg-primary-light"
                  }`}
                >
                  {plan.type === "custom"
                    ? "Contact Sales"
                    : "Start 30-Day Trial"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Powerful Add-ons
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Customize your plan with additional modules as you grow.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {ADDONS.map((addon) => {
              const IconComponent = addon.IconComponent;
              return (
                <div
                  key={addon.id}
                  className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6 sm:w-2/3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-light rounded-lg">
                        <IconComponent
                          className={`w-6 h-6 ${addon.iconColor}`}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {addon.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                      {addon.description}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 sm:w-1/3 flex flex-col justify-center items-center border-l border-gray-100 sm:border-t-0 border-t">
                    <div className="text-center">
                      <p className="text-sm text-gray-500 font-medium">
                        Starting at
                      </p>
                      <p className="text-3xl font-bold text-gray-900 mt-1">
                        ${addon.price}
                      </p>
                      <p className="text-xs text-gray-400">/ month</p>
                    </div>
                    <button
                      onClick={() => onSelectAddon(addon)}
                      className="mt-4 w-full bg-white text-primary border border-primary-light px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-light transition-colors"
                    >
                      Add to Plan
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckoutFlow: React.FC<CheckoutFlowProps> = ({
  selectedPlan,
  initialAddon,
  initialAnnual,
  onBack,
  onSuccess,
  onChangePlan,
}) => {
  const [isAnnual, setIsAnnual] = useState<boolean>(initialAnnual || false);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(
    initialAddon ? [initialAddon.id] : []
  );
  const [shopCount, setShopCount] = useState<number>(1);
  const [userCount, setUserCount] = useState<number>(selectedPlan.limits.users);
  const [warehouseCount, setWarehouseCount] = useState<number>(
    selectedPlan.limits.warehouses
  );

  // Determine if extra warehouses can be added
  const canAddWarehouses: boolean =
    selectedPlan.id !== "service" && selectedPlan.id !== "retail-starter";

  // Update resource defaults if plan changes
  useEffect(() => {
    setUserCount(selectedPlan.limits.users);
    setWarehouseCount(selectedPlan.limits.warehouses);
    setShopCount(1);
  }, [selectedPlan]);

  // If initialAddon changes, update state
  useEffect(() => {
    if (initialAddon && !selectedAddons.includes(initialAddon.id)) {
      setSelectedAddons((prev) => [...prev, initialAddon.id]);
    }
  }, [initialAddon, selectedAddons]);

  const toggleAddon = (id: string): void => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // Pricing Logic
  const getPeriodPrice = (monthlyPrice: number): number =>
    isAnnual ? monthlyPrice * 12 * 0.9 : monthlyPrice;

  const getPlanCost = (): number => {
    if (!selectedPlan || selectedPlan.type === "custom") return 0;
    let base = getPeriodPrice(selectedPlan.basePrice || 0);
    if (selectedPlan.type === "per-shop") {
      base = base * shopCount;
    }
    return base;
  };

  const getExtrasCost = (): number => {
    let cost = 0;

    // Extra Users
    const extraUsers = Math.max(0, userCount - selectedPlan.limits.users);
    if (extraUsers > 0) cost += getPeriodPrice(EXTRA_USER_PRICE * extraUsers);

    // Extra Warehouses
    const extraWarehouses = Math.max(
      0,
      warehouseCount - selectedPlan.limits.warehouses
    );
    if (extraWarehouses > 0)
      cost += getPeriodPrice(EXTRA_WAREHOUSE_PRICE * extraWarehouses);

    // Extra Shops for fixed plans
    if (selectedPlan.type === "fixed" && shopCount > 1) {
      cost += getPeriodPrice(EXTRA_SHOP_PRICE * (shopCount - 1));
    }

    return cost;
  };

  const getAddonCost = (): number => {
    return ADDONS.filter((addon) => selectedAddons.includes(addon.id)).reduce(
      (sum, addon) => sum + getPeriodPrice(addon.price),
      0
    );
  };

  const totalCost = getPlanCost() + getExtrasCost() + getAddonCost();

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-in slide-in-from-right-8 duration-500">
      <button
        onClick={onBack}
        className="flex items-center text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Plans
      </button>

      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
        {/* Left Column: Configuration */}
        <div className="lg:col-span-7 space-y-8">
          {/* Plan Summary Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Your Plan</h2>
                <p className="text-sm text-gray-500">
                  Configure your subscription details
                </p>
              </div>
              <button
                onClick={onChangePlan}
                className="text-primary text-sm font-medium hover:text-primary-dark"
              >
                Change
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${selectedPlan.color}-100 mr-4`}
                >
                  <Store className={`w-5 h-5 text-${selectedPlan.color}-600`} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {selectedPlan.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {selectedPlan.features.shops} {selectedPlan.unitLabel}{" "}
                    included
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">
                  $
                  {getPeriodPrice(selectedPlan.basePrice || 0).toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">
                  {isAnnual ? "/ year" : "/ month"}
                </p>
              </div>
            </div>

            {/* Config Options */}
            <div className="mt-6 space-y-4">
              {/* Billing Cycle */}
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">
                  Billing Cycle
                </span>
                <div className="flex items-center space-x-3 bg-gray-100 p-1 rounded-lg">
                  <button
                    onClick={() => setIsAnnual(false)}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                      !isAnnual
                        ? "bg-white shadow-sm text-gray-900"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setIsAnnual(true)}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                      isAnnual
                        ? "bg-white shadow-sm text-primary"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    Yearly (-10%)
                  </button>
                </div>
              </div>

              {/* Resource Counters */}
              <div className="py-2 space-y-4">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Configure Resources
                </h4>

                {/* Shops / Branches */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Number of {selectedPlan.unitLabel}s
                    </p>
                    <p className="text-xs text-gray-500">
                      {selectedPlan.type === "per-shop"
                        ? "Multiplies base plan cost"
                        : `Extra ${selectedPlan.unitLabel.toLowerCase()}s +$${EXTRA_SHOP_PRICE}/mo`}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => setShopCount(Math.max(1, shopCount - 1))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-medium">
                      {shopCount}
                    </span>
                    <button
                      onClick={() => setShopCount(shopCount + 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Users */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Team Size (Users)
                    </p>
                    <p className="text-xs text-gray-500">
                      {userCount <= selectedPlan.limits.users
                        ? `Included (Up to ${selectedPlan.limits.users})`
                        : `Extra users +$${EXTRA_USER_PRICE}/mo`}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        setUserCount(
                          Math.max(selectedPlan.limits.users, userCount - 1)
                        )
                      }
                      className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-colors ${
                        userCount <= selectedPlan.limits.users
                          ? "text-gray-300 cursor-not-allowed"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                      disabled={userCount <= selectedPlan.limits.users}
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-medium">
                      {userCount}
                    </span>
                    <button
                      onClick={() => setUserCount(userCount + 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Warehouses */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Warehouses
                    </p>
                    <p className="text-xs text-gray-500">
                      {!canAddWarehouses
                        ? "Not available on this plan"
                        : warehouseCount <= selectedPlan.limits.warehouses
                        ? `Included`
                        : `Extra warehouses +$${EXTRA_WAREHOUSE_PRICE}/mo`}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        setWarehouseCount(
                          Math.max(
                            selectedPlan.limits.warehouses,
                            warehouseCount - 1
                          )
                        )
                      }
                      className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-colors ${
                        warehouseCount <= selectedPlan.limits.warehouses
                          ? "text-gray-300 cursor-not-allowed"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                      disabled={
                        warehouseCount <= selectedPlan.limits.warehouses
                      }
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-medium">
                      {warehouseCount}
                    </span>
                    <button
                      onClick={() => setWarehouseCount(warehouseCount + 1)}
                      className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-colors ${
                        !canAddWarehouses
                          ? "text-gray-300 cursor-not-allowed bg-gray-50"
                          : "text-gray-600 hover:bg-gray-50 hover:border-gray-400"
                      }`}
                      disabled={!canAddWarehouses}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add-ons List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Premium Modules
            </h2>
            <div className="space-y-3">
              {ADDONS.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                const addonPrice = getPeriodPrice(addon.price);

                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex items-start p-4 rounded-lg border cursor-pointer transition-all ${
                      isSelected
                        ? "border-primary bg-primary-light ring-1 ring-primary"
                        : "border-gray-200 hover:border-primary-light hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`mt-0.5 mr-3 flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-primary border-primary"
                          : "bg-white border-gray-300"
                      }`}
                    >
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3
                          className={`text-sm font-semibold ${
                            isSelected ? "text-primary-dark" : "text-gray-900"
                          }`}
                        >
                          {addon.title}
                        </h3>
                        <span className="text-sm font-medium text-gray-900">
                          ${addonPrice.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {addon.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Summary & Checkout */}
        <div className="lg:col-span-5 mt-8 lg:mt-0 space-y-6 lg:sticky lg:top-24">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Order Summary</h2>
            </div>

            <div className="p-6 space-y-4">
              {/* Line Items */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">
                  {selectedPlan.name} ({isAnnual ? "Yearly" : "Monthly"})
                  {selectedPlan.type === "per-shop" && shopCount > 1
                    ? ` x ${shopCount} ${selectedPlan.unitLabel.toLowerCase()}s`
                    : ""}
                </span>
                <span className="font-medium text-gray-900">
                  ${getPlanCost().toLocaleString()}
                </span>
              </div>

              {/* Extras Detail */}
              {getExtrasCost() > 0 && (
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase">
                    Additional Resources
                  </p>
                  {userCount > selectedPlan.limits.users && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {userCount - selectedPlan.limits.users} Additional
                        User(s)
                      </span>
                      <span className="font-medium text-gray-900">
                        $
                        {getPeriodPrice(
                          EXTRA_USER_PRICE *
                            (userCount - selectedPlan.limits.users)
                        ).toLocaleString()}
                      </span>
                    </div>
                  )}
                  {warehouseCount > selectedPlan.limits.warehouses && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {warehouseCount - selectedPlan.limits.warehouses}{" "}
                        Additional Warehouse(s)
                      </span>
                      <span className="font-medium text-gray-900">
                        $
                        {getPeriodPrice(
                          EXTRA_WAREHOUSE_PRICE *
                            (warehouseCount - selectedPlan.limits.warehouses)
                        ).toLocaleString()}
                      </span>
                    </div>
                  )}
                  {selectedPlan.type === "fixed" && shopCount > 1 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {shopCount - 1} Additional {selectedPlan.unitLabel}(es)
                      </span>
                      <span className="font-medium text-gray-900">
                        $
                        {getPeriodPrice(
                          EXTRA_SHOP_PRICE * (shopCount - 1)
                        ).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {selectedAddons.length > 0 && (
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase">
                    Premium Modules
                  </p>
                  {ADDONS.filter((a) => selectedAddons.includes(a.id)).map(
                    (addon) => (
                      <div
                        key={addon.id}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-gray-600">{addon.title}</span>
                        <span className="font-medium text-gray-900">
                          ${getPeriodPrice(addon.price).toLocaleString()}
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}

              <div className="border-t border-gray-200 pt-4 flex justify-between items-end">
                <div>
                  <p className="text-sm text-gray-500">Total due today</p>
                  <p className="text-xs text-green-600 font-medium">
                    30-Day Free Trial included
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-gray-900">
                    ${totalCost.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Registration Form (Simplified) */}
            <div className="bg-gray-50 p-6 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Create your account
              </h3>
              <div className="space-y-3">
                <button
                  onClick={onSuccess}
                  className="w-full mt-4 bg-primary text-white px-4 py-3 rounded-lg text-sm font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary-light"
                >
                  Get Started
                </button>
                <p className="text-xs text-center text-gray-400 mt-3">
                  By clicking "Get Started", you agree to our Terms of Service.
                  No credit card required for trial.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-light rounded-lg p-4 border border-primary-light flex items-start">
            <ShieldCheck className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
            <p className="text-xs text-primary-dark">
              <strong>Secure Checkout:</strong> Your data is encrypted with
              256-bit SSL security. We never sell your information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuccessView: React.FC<SuccessViewProps> = ({ onReset }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 animate-in zoom-in-95 duration-500">
    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
      <Check className="w-8 h-8 text-green-600" />
    </div>
    <h1 className="text-3xl font-bold text-gray-900 mb-2">
      Welcome to POSMaster!
    </h1>
    <p className="text-gray-500 max-w-md mb-8">
      Your 30-day free trial has been successfully activated. We've sent a
      verification email to your inbox.
    </p>
    <div className="flex gap-4">
      <button
        onClick={onReset}
        className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
      >
        Back to Site
      </button>
      <button className="px-6 py-2 bg-primary rounded-lg text-white hover:bg-primary-dark font-medium transition-colors shadow-lg shadow-primary-light">
        Go to Dashboard
      </button>
    </div>
  </div>
);

// --- Main Component ---

const PricingPage: React.FC = () => {
  const [currentView, setCurrentView] = useState<
    "home" | "checkout" | "success"
  >("home");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [initialAddon, setInitialAddon] = useState<Addon | null>(null);
  const [isAnnualSelection, setIsAnnualSelection] = useState<boolean>(false);

  const handleSelectPlan = (plan: Plan, isAnnual: boolean): void => {
    if (plan.type === "custom") {
      window.alert("Contacting sales..."); // Placeholder for sales modal
      return;
    }
    setSelectedPlan(plan);
    setIsAnnualSelection(isAnnual);
    setInitialAddon(null);
    setCurrentView("checkout");
    window.scrollTo(0, 0);
  };

  const handleSelectAddon = (addon: Addon): void => {
    // Default to Retail Business if they click an Add-on directly
    const defaultPlan = PLANS.find((p) => p.id === "retail-business");
    if (defaultPlan) {
      setSelectedPlan(defaultPlan);
      setInitialAddon(addon);
      setCurrentView("checkout");
      window.scrollTo(0, 0);
    }
  };

  const handleBack = (): void => {
    setCurrentView("home");
    window.scrollTo(0, 0);
  };

  const handleSuccess = (): void => {
    setCurrentView("success");
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 pt-20">
      <main>
        {currentView === "home" && (
          <PricingHome
            onSelectPlan={handleSelectPlan}
            onSelectAddon={handleSelectAddon}
          />
        )}

        {currentView === "checkout" && selectedPlan && (
          <CheckoutFlow
            selectedPlan={selectedPlan}
            initialAddon={initialAddon}
            initialAnnual={isAnnualSelection}
            onBack={handleBack}
            onSuccess={handleSuccess}
            onChangePlan={() => setCurrentView("home")}
          />
        )}

        {currentView === "success" && <SuccessView onReset={handleBack} />}
      </main>
    </div>
  );
};

export default PricingPage;
