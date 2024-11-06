import InfoSectionWithGoals from '@/components/reusable/info_section_with_goals';
import InfoSectionWithLinksAndCards from '@/components/reusable/infosection_links_cards';
import SalesSection from '@/components/reusable/sales_section';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

const Schools = () => {
	return (
		<section>
			<SalesSection
				title={'Promoting economic development and financial inclusion.'}
				items={[
					{
						title: 'Hardware and POS systems built to enable sales anywhere.',
						image: '/images/MF_1.png',
					},
					{
						title: 'Ensure secure payments wherever your customers are.',
						image: '/images/MF_2.png',
					},
					{
						title:
							'Options for in-store pickup, online ordering, delivery, and shipping.',
						image: '/images/MF_3.png',
					},
				]}
			/>
			<InfoSectionWithGoals
				sectionTitle="Make your daily tasks easier."
				sectionDescription="Manage and streamline operations across multiple locations, sales
							channels, and employees to improve efficiency and your bottom
							line."
				goalsTitle="Your Business Goals"
				solutionTitle="How to Solve It with Foundry"
				goals={goalsConst}
			/>

			<InfoSectionWithLinksAndCards
				title="See School success stories"
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

			<section className=" bg-foundry-primary p-5 md:p-10 my-16 w-full text-primary-white">
				<div className="container">
					<div className="md:grid grid-cols-[0.5fr,1fr] gap-x-10 my-5 text-sm">
						<h5 className="font-medium text-3xl lg:text-4xl">
							Foundry by numbers
						</h5>
						<div className="divide-y divide-[#FAFAFA]/20">
							{[
								{
									topContent: '400',
									bottomContent: 'Placeholder',
								},
								{
									topContent: '400',
									bottomContent: 'Placeholder',
								},
								{
									topContent: '400',
									bottomContent: 'Placeholder',
								},
							].map((item, index) => (
								<div key={index} className="py-3 space-y-1">
									<h2 className="text-5xl">{item.topContent}</h2>
									<p>{item.bottomContent}</p>
								</div>
							))}
						</div>
					</div>

					<div className="md:grid grid-cols-[0.4fr,1fr] gap-x-10 my-16 text-sm">
						<div>
							<h5 className="font-medium text-3xl lg:text-4xl mb-3">
								Build custom experiences
							</h5>

							{[
								{
									topContent: 'APIs',
									bottomContent: 'Placeholder',
								},
								{
									topContent: 'Integrations',
									bottomContent: 'Placeholder',
								},
								{
									topContent: 'Apps',
									bottomContent: 'Placeholder',
								},
								{
									topContent: 'Help',
									bottomContent: 'Placeholder',
								},
							].map((item, index) => (
								<div
									key={index}
									className="py-3 space-y-1 border-b border-[#FAFAFA]/20">
									<h2 className="text-xl">{item.topContent}</h2>
									<p>{item.bottomContent}</p>
								</div>
							))}
						</div>
						<div className="bg-[#D9D9D9]/30 flex justify-center items-center h-[25rem]">
							<img src="/icons/camera.svg" alt="camera" className="w-[5rem]" />
						</div>
					</div>

					<div className="my-16">
						<div className="md:grid grid-cols-[0.5fr,1fr] gap-x-10 mb-8 text-sm">
							<h5 className="font-medium text-3xl lg:text-4xl">Get Support</h5>
						</div>
						<div className="grid grid-cols-auto-fill-300 gap-5 space-y-5 md:space-y-0">
							{[
								{
									description: 'For around the clock product support.',
									icon: '/icons/support.svg',
									linkTitle: 'Visit Support',
									link: '',
								},
								{
									description:
										'For exclusive insights from Foundry business experts.',
									icon: '/icons/trend.svg',
									linkTitle: 'Visit The Bottom Line',
									link: '',
								},
								{
									description: 'To connect with other business owners.',
									icon: '/icons/chat.svg',
									linkTitle: 'Visit Foundry Hub',
									link: '',
								},
							].map((item, index) => (
								<div
									key={index}
									className="bg-[#5F9779] p-6 rounded-xl h-[300px] flex flex-col">
									<img src={item.icon} alt="support" className="w-[2rem]" />
									<div className="mt-auto text-xl max-w-[15rem]">
										<h5 className="pb-4">{item.description}</h5>
										<Link
											to={item.link}
											className="text-sm flex items-center gap-x-1 hover:opacity-80 group">
											{item.linkTitle}
											<Icon
												icon="iconamoon:arrow-right-2-duotone"
												fontSize={20}
												className="group-hover:translate-x-1 transition-all"
											/>
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="md:grid grid-cols-[0.4fr,1fr] gap-x-10 mb-4 text-sm">
						<h5 className="font-medium text-3xl lg:text-4xl">
							Learn more about Foundry.
						</h5>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Schools;

const goalsConst = [
	{
		title: 'your business goals',
		desc: [
			'Expand your revenue streams by exploring new avenues.Monitor profit margins through inventory management and reporting functionalities.Synchronize orders, products, and stock levels seamlessly between your POS system and website.',
		],
	},
	{
		title: 'your business goals',
		desc: [
			'Expand your revenue streams by exploring new avenues.Monitor profit margins through inventory management and reporting functionalities.Synchronize orders, products, and stock levels seamlessly between your POS system and website.',
		],
	},
	{
		title: 'your business goals',
		desc: [
			'Expand your revenue streams by exploring new avenues.Monitor profit margins through inventory management and reporting functionalities.Synchronize orders, products, and stock levels seamlessly between your POS system and website.',
		],
	},
];
