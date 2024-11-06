import InfoSectionWithGoals from '@/components/reusable/info_section_with_goals';
import InfoSectionWithVideo from '@/components/reusable/info_section_with_videos';
import InfoSectionWithLinksAndCards from '@/components/reusable/infosection_links_cards';
import SalesSection from '@/components/reusable/sales_section';
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const Retail = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 100 }}
			transition={{ duration: 1.5 }}>
			<SalesSection
				title={'Connect Everywhere You Sell'}
				linkText="Try the Foundry POS Demo"
				items={[
					{
						title: 'Hardware and POS systems built to enable sales anywhere.',
						image: '/images/UC_1.webp',
					},
					{
						title: 'Ensure secure payments wherever your customers are.',
						image: '/images/UC_2.webp',
					},
					{
						title:
							'Options for in-store pickup, online ordering, delivery, and shipping.',
						image: '/images/UC_3.webp',
					},
				]}
			/>

			<section className=" bg-foundry-primary p-5 md:p-10 my-10 w-full text-primary-white">
				<div className="container">
					<div className="md:grid grid-cols-[0.5fr,1fr] mb-5">
						<h2 className="font-medium text-3xl lg:text-4xl mb-5">
							Optimise your operations.
						</h2>
						<p className="text-sm max-w-xl  justify-self-end">
							Make informed decisions with streamlined data at your fingertips.
							Efficient inventory management, customizable catalogs, and
							real-time stock reporting ensure you never miss a sale.
						</p>
					</div>

					<div className="w-full bg-gray-100">
						<ReactPlayer
							width={'100%'}
							url="https://youtu.be/yb4NvfS7kTM?si=5VQrTXbFsDlOo-sL"
						/>
					</div>
				</div>
			</section>

			<InfoSectionWithGoals
				sectionTitle="Make your daily tasks easier."
				sectionDescription="	Manage and streamline operations across multiple locations, sales
							channels, and employees to improve efficiency and your bottom
							line."
				goalsTitle="Your Business Goals"
				solutionTitle="How to Solve It with Foundry"
				goals={goalsConst}
			/>

			<InfoSectionWithLinksAndCards
				title="See Retail success stories"
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
					<div className="w-full bg-gray-100  h-[25rem]">
						<ReactPlayer
							width={'100%'}
							height={'100%'}
							url="https://youtu.be/yb4NvfS7kTM?si=5VQrTXbFsDlOo-sL"
						/>
					</div>
				}
			/>
		</motion.section>
	);
};

export default Retail;

const goalsConst = [
	{
		title: 'Your business goals',
		desc: [
			'Expand your revenue streams by exploring new avenues.Monitor profit margins through inventory management and reporting functionalities.Synchronize orders, products, and stock levels seamlessly between your POS system and website.',
		],
	},
	{
		title: 'Your business goals',
		desc: [
			'Expand your revenue streams by exploring new avenues.Monitor profit margins through inventory management and reporting functionalities.Synchronize orders, products, and stock levels seamlessly between your POS system and website.',
		],
	},
	{
		title: 'Your business goals',
		desc: [
			'Expand your revenue streams by exploring new avenues.Monitor profit margins through inventory management and reporting functionalities.Synchronize orders, products, and stock levels seamlessly between your POS system and website.',
		],
	},
];
