import InfoSectionWithGoals from '@/components/reusable/info_section_with_goals';
import InfoSectionWithVideo from '@/components/reusable/info_section_with_videos';
import InfoSectionWithLinksAndCards from '@/components/reusable/infosection_links_cards';
import { Icon } from '@iconify/react/dist/iconify.js';
import { cn } from '@nextui-org/react';
import { motion } from 'framer-motion';

const Restaurants = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 100 }}
			transition={{ duration: 1.5 }}>
			{/* connect everywhere */}
			<section className="container py-10 pt-28 lg:pt-20">
				<h2 className="font-medium text-3xl md:text-4xl mb-5">
					Built for restaurants. Build for you.
				</h2>

				<div className="md:grid md:grid-cols-auto-fill-300 gap-8 space-y-5 md:space-y-0">
					{[
						{
							title: 'Menu Management',
							image: '/images/RES_1.webp',
						},
						{
							title: 'Table side service',
							image: '/images/RES_2.webp',
						},
						{
							title: 'Kitchen Display System',
							image: '/images/RES_3.webp',
						},
					].map((item, index) => (
						<div key={index} className="space-y-2 text-sm ">
							<div className="border-2 border-white p-3 rounded-xl h-[15rem] relative overflow-hidden flex flex-col justify-center items-center">
								<img
									src={item.image}
									alt={item.title}
									className={cn('w-[15rem] z-10', index === 1 && 'w-[6.5rem]')}
								/>
								{index === 1 && (
									<img
										src={'/images/RES_BG.webp'}
										className="object-contain w-full absolute top-0 left-0 right-0 z-5"
									/>
								)}
							</div>
							<h2 className="md:text-base text-sm font-medium ">
								{item.title}
							</h2>
						</div>
					))}
				</div>
			</section>

			<section className=" bg-primary p-5 md:p-10 my-10 w-full text-primary-white">
				<div className="container">
					<div className="md:grid grid-cols-[0.5fr,1fr] mb-5">
						<h2 className="font-medium text-3xl lg:text-4xl mb-5">
							Broaden to embrace hospitality.
						</h2>
						<p className="text-sm max-w-xl  justify-self-end">
							Acquire the intuitive POS system that seamlessly links your front
							and back of house, enabling staff to fulfil orders swiftly and
							accurately.
						</p>
					</div>

					<div className="bg-[#D9D9D9]/30 flex justify-center items-center h-[25rem]">
						<img src="/icons/camera.svg" alt="camera" className="w-[5rem]" />
					</div>
				</div>
			</section>

			<InfoSectionWithGoals
				sectionTitle="	Streamline your service throughout."
				sectionDescription="When your technology integrates seamlessly, customers can order
							how and where they prefer, your staff can work more efficiently,
							and you can monitor the bottom line effectively."
				goalsTitle="Your Business Goals"
				solutionTitle="How to Solve It with Foundry"
				goals={goalsConst}
			/>

			<InfoSectionWithLinksAndCards
				title="See Restaurants success stories"
				links={[
					{ title: 'Read Foundry Reviews', link: '' },
					{ title: 'View all Testimonials', link: '' },
				]}
				cards={[
					{
						type: 'text',
						content: (
							<>
								<p className="text-2xl md:max-w-[15rem]">
									"Stock loss has reduced and sales are booming. Foundry has
									grown and helped us implement all these different parts."
								</p>
								<div className="mt-auto">
									<p className="text-xs mt-7 mb-10">Cecilia Dekyi, Cepodek</p>
									<button className="flex items-center gap-x-2">
										Read the case study
										<Icon
											icon="fluent-emoji-high-contrast:right-arrow"
											fontSize={19}
										/>
									</button>
								</div>
							</>
						),
					},
					{
						type: 'image',
						content: (
							<>
								<img
									src="/images/LS_4.webp"
									alt="a store with a woman in front of it"
									className="h-full"
								/>
								<div className="absolute bottom-5 left-5 right-5 rounded-md bg-[#FAFAFA]/20 backdrop-blur-sm p-3">
									<p className="text-white font-medium flex items-end max-w-[10.5rem]">
										The importance of data to WeNaturals
										<img
											src="/icons/play.svg"
											alt=""
											className="w-[1rem] mb-1"
										/>
									</p>
								</div>
							</>
						),
					},
					{
						type: 'text',
						content: (
							<div className="md:max-w-[15rem] flex flex-col h-full">
								<p className="text-3xl font-medium">SHIELD Microfinance</p>
								<p className="text-2xl mt-5 mb-7">47%</p>
								<p className="text-sm my-5">revenue increase year over year</p>
								<p className="text-base mt-10">30,000</p>
								<div className="mt-auto">
									<p className="text-sm mb-8">transactions per month</p>
									<button className="flex items-center gap-x-2">
										See their Foundry Setup
										<Icon
											icon="fluent-emoji-high-contrast:right-arrow"
											fontSize={19}
										/>
									</button>
								</div>
							</div>
						),
					},
				]}
			/>
			<InfoSectionWithVideo
				videoElement={
					<div className="bg-[#D9D9D9]/30 flex justify-center items-center h-[25rem]">
						<img src="/icons/camera.svg" alt="camera" className="w-[5rem]" />
					</div>
				}
			/>
		</motion.section>
	);
};

export default Restaurants;

const goalsConst = [
	{
		title: 'manage cash flow',
		desc: [
			'Expand your revenue streams by exploring new avenues.Monitor profit margins through inventory management and reporting functionalities.Synchronize orders, products, and stock levels seamlessly between your POS system and website.',
		],
	},
	{
		title: 'reach diners',
		desc: [
			'Expand your revenue streams by exploring new avenues.Monitor profit margins through inventory management and reporting functionalities.Synchronize orders, products, and stock levels seamlessly between your POS system and website.',
		],
	},
	{
		title: 'Manage your team',
		desc: [
			'Expand your revenue streams by exploring new avenues.Monitor profit margins through inventory management and reporting functionalities.Synchronize orders, products, and stock levels seamlessly between your POS system and website.',
		],
	},
];
