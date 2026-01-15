import { CustomButton } from '@/components/shared/shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Accordion, AccordionItem, Image, cn } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';
import Retail from './retail';
import MicroFinance from './micro_finance';
import Restaurants from './restaurants';
import Schools from './school';
import CreditUnions from './credit_union';
import AllExperience from './all_experience';
import { useInView } from 'react-intersection-observer';

const UseCases = () => {
	const navigate = useNavigate();
	const { ref, inView } = useInView({
		threshold: 0,
		initialInView: true,
	});

	const { search } = useLocation();

	const params = new URLSearchParams(search);
	const view = params.get('v');

	const displayView: Record<string, JSX.Element> = {
		all: <AllExperience />,
		retail: <Retail />,
		'micro-finance': <MicroFinance />,
		restaurants: <Restaurants />,
		'credit-unions': <CreditUnions />,
		schools: <Schools />,
	};

	return (
		<main>
			{/* hero */}
			<section ref={ref} className="container">
				<div className="bg-primary/10 rounded-xl relative overflow-hidden flex flex-col">
					<div className="lg:px-28 md:pt-16 md:pb-28 px-5 flex flex-col-reverse md:flex-col">
						<div className="lg:max-w-lg md:max-w-xs">
							<h1 className="font-medium text-3xl md:text-4xl">
								Enabling every aspect of your business operations.
							</h1>
							<p className="text-secondary-black my-7">
								Work smarter, enhance efficiency through automation, and unlock
								new revenue streams with the software and hardware platform
								trusted by millions of businesses.
							</p>
							<div className="flex items-center gap-x-4">
								<CustomButton
									className="bg-transparent border-2 border-primary px-5 "
									onPress={() => navigate('/pricing')}
								>
									Get Started
								</CustomButton>
								<CustomButton className="bg-primary text-white font-medium px-5 ">
									Contact Sales
								</CustomButton>
							</div>
						</div>
						<Image
							src="/images/LS_3.webp"
							alt="AI marketplace"
							width={336}
							height={458}
							classNames={{
								wrapper: 'md:absolute right-10 rounded-none top-0',
								img: 'rounded-none',
							}}
						/>
					</div>

					<div className="border-t p-4 mt-16 flex items-center flex-col md:flex-row gap-5">
						<p className="text-secondary flex items-center text-sm gap-x-3 text-nowrap">
							Customise your experience by
							<Icon
								icon="fluent-emoji-high-contrast:right-arrow"
								fontSize={16}
								className="text-secondary group-hover:translate-x-1  transition-all"
							/>
						</p>
						<div className="flex items-center flex-wrap gap-2">
							{navLinks.map((subNav, index) => {
								return (
									<CustomButton
										key={index}
										as={Link}
										to={subNav.link}
										onPress={() =>
											window.scrollTo({
												top: 733,
												left: 0,
												behavior: 'smooth',
											})
										}
										className={cn(
											'relative cursor-pointer overflow-hidden rounded-md text-secondary bg-transparent border-2 border-secondary font-medium flex items-center gap-x-2 transition-all custom-button hover:text-white',
											view === subNav.link.split('=')[1] &&
												'bg-secondary text-white',
										)}>
										{subNav.title}
									</CustomButton>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			{!inView && (
				<div className="lg:hidden flex sticky top-0 z-50 w-full shadow-md bg-white">
					<Accordion
						itemClasses={{
							base: 'py-0 w-full ',
							title: 'font-normal text-medium',
							trigger:
								' py-3 px-4 data-[hover=true]:bg-default-100 rounded-none bg-white rounded-lg flex items-center ',
							indicator: 'text-medium',
							content: 'text-small bg-white',
						}}
						isCompact>
						<AccordionItem
							aria-label="navlink-mobile"
							title={
								<div>
									{navLinks.map(
										(item) =>
											view === item.link.split('=')[1] && (
												<div key={item.link} className="text-xl">
													{item.title}
												</div>
											),
									)}
								</div>
							}>
							<div className="space-y max-w-[16rem] mx-auto">
								<p className="text-secondary flex items-center text-sm gap-x-3 text-nowrap mb-3">
									Customise your experience by
									<Icon
										icon="fluent-emoji-high-contrast:right-arrow"
										fontSize={16}
										className="text-secondary group-hover:translate-x-1  transition-all"
									/>
								</p>
								{navLinks.map((subNav, index) => {
									return (
										<CustomButton
											key={index}
											as={Link}
											to={subNav.link}
											onPress={() =>
												window.scrollTo({
													top: 733,
													left: 0,
													behavior: 'smooth',
												})
											}
											className={cn(
												'relative cursor-pointer overflow-hidden rounded-md text-secondary bg-transparent border-2 border-secondary font-medium flex items-center gap-x-2 transition-all custom-button hover:text-white mb-3',
												view === subNav.link.split('=')[1] &&
													'bg-secondary text-white',
											)}>
											{subNav.title}
										</CustomButton>
									);
								})}
							</div>
						</AccordionItem>
					</Accordion>
				</div>
			)}

			<AnimatePresence>
				{!inView && (
					<motion.div
						exit={{ opacity: 0 }}
						className={
							'border-t p-3 sticky top-0 bg-white z-50 w-full  justify-between shadow-sm hidden lg:flex'
						}>
						<motion.div
							initial={{ x: 40 }}
							animate={{ x: 0 }}
							exit={{ x: 40, opacity: 0 }}
							className="flex items-center gap-5 ">
							<p className="text-secondary flex items-center text-sm gap-x-3 text-nowrap">
								Customise your experience by
								<Icon
									icon="fluent-emoji-high-contrast:right-arrow"
									fontSize={16}
									className="text-secondary group-hover:translate-x-1 transition-all"
								/>
							</p>
							<div className="flex gap-5 max-w-[1200px]">
								{navLinks.map((subNav, index) => {
									return (
										<CustomButton
											key={index}
											as={Link}
											to={subNav.link}
											onPress={() =>
												window.scrollTo({
													top: 733,
													left: 0,
													behavior: 'smooth',
												})
											}
											className={cn(
												'relative cursor-pointer overflow-hidden rounded-md text-secondary bg-transparent border-2 border-secondary font-medium flex items-center gap-x-2 transition-all custom-button hover:text-white',
												view === subNav.link.split('=')[1] &&
													'bg-secondary text-white',
											)}>
											{subNav.title}
										</CustomButton>
									);
								})}
							</div>
						</motion.div>
						<motion.div
							initial={{ x: -40 }}
							animate={{ x: 0 }}
							exit={{ x: -40, opacity: 0 }}
							className=" items-center gap-x-4 hidden xl:flex">
							<CustomButton
								className="bg-transparent border-2 border-primary px-5 "
								onPress={() => navigate('/pricing')}
							>
								Get Started
							</CustomButton>
							<CustomButton className="bg-primary text-white font-medium px-5 ">
								Contact Sales
							</CustomButton>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{displayView[String(view)]}
		</main>
	);
};

export default UseCases;

const navLinks = [
	{
		title: 'All',
		link: '/use-cases?v=all',
	},
	{
		title: 'Retail',
		link: '/use-cases?v=retail',
	},
	{
		title: 'Micro Finance / Credit',
		link: '/use-cases?v=micro-finance',
	},
	{
		title: 'Credit Unions',
		link: '/use-cases?v=credit-unions',
	},
	{
		title: 'Schools',
		link: '/use-cases?v=schools',
	},
	{
		title: 'Restaurants',
		link: '/use-cases?v=restaurants',
	},
];
