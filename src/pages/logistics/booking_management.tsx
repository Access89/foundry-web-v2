import { CustomButton } from '@/components/shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

const BookingManagement = () => {
	return (
		<main>
			<section className="container">
				<div className=" border-3 border-white rounded-xl px-5 lg:px-28 md:pt-16 md:pb-28 relative overflow-hidden flex flex-col-reverse">
					<div className="my-auto pt-5 md:pt-10 mb-5 md:mb-0 lg:max-w-lg md:max-w-xs">
						<h1 className="font-medium text-3xl md:text-4xl">
							Effortlessly mange your entire network through one intuitive
							interface.
						</h1>
						<p className="text-secondary-black my-7">
							Streamline booking processes to optimise resource allocation and
							ensure timely deliveries.
						</p>

						<div className="flex items-center gap-x-4">
							<CustomButton className="bg-transparent border-2 border-primary px-5 ">
								Get Started
							</CustomButton>
							<CustomButton className="bg-foundry-primary text-white font-medium px-5 ">
								Contact Sales
							</CustomButton>
						</div>
					</div>
					<img
						src="/images/LS_3.webp"
						alt="pos device"
						className="md:w-[19rem] lg:w-[21rem] md:absolute right-10 top-0"
					/>
				</div>
			</section>

			<section className="container py-10 pt-28 lg:pt-20">
				<div className="flex justify-between">
					<h2 className="font-medium text-3xl md:text-4xl mb-5">
						Connect Everywhere You Sell
					</h2>
				</div>
				<div className="md:grid md:grid-cols-auto-fill-300 gap-8 space-y-5 md:space-y-0">
					{[
						'Make reservations using the booking application.',
						'Integrate seamlessly with your current workflow',
						'Monitor real-time expenses amidst truck options.',
					].map((item, index) => (
						<div key={index} className="space-y-2">
							<div className="border-2 border-white p-3 rounded-xl h-[15rem]"></div>
							<p>{item}</p>
						</div>
					))}
				</div>
			</section>

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

					<div className="bg-[#D9D9D9]/30 flex justify-center items-center h-[25rem]">
						<img src="/icons/camera.svg" alt="camera" className="w-[5rem]" />
					</div>
				</div>
			</section>

			<section className="my-10">
				<div className="container">
					<div className="md:grid grid-cols-[0.5fr,1fr] gap-x-10 mb-5">
						<h2 className="font-medium text-3xl lg:text-4xl mb-5">
							Make your daily tasks easier.
						</h2>
						<p className="text-sm max-w-xl">
							Manage and streamline operations across multiple locations, sales
							channels, and employees to improve efficiency and your bottom
							line.
						</p>
					</div>

					<div className="md:grid grid-cols-[0.5fr,1fr] gap-x-10 mb-5 text-sm text-secondary-black border-b pb-1 uppercase">
						<h5>your business goals</h5>
						<h5>how to solve it with foundry</h5>
					</div>
					{goalsConst.map((item, index) => (
						<div
							key={index}
							className="md:grid grid-cols-[0.5fr,1fr] gap-x-10 text-sm text-secondary-black border-b mt-3 pb-3 ">
							<div className="flex items-center gap-x-2 mb-1.5 md:mb-0 text-[#272727] text-base uppercase font-medium">
								<span className="p-1 px-2 rounded-md border border-black">
									{index + 1}
								</span>
								<p>{item.title}</p>
							</div>
							<h5>{item.desc}</h5>
						</div>
					))}
				</div>
			</section>

			<section className="my-10">
				<div className="container">
					<div className="md:grid grid-cols-[0.4fr,1fr] gap-x-10 mb-5">
						<h2 className="font-medium text-3xl lg:text-4xl">
							See Logistics success stories
						</h2>
					</div>
					<div className="flex items-center gap-x-5">
						{[
							{
								title: 'Read Foundry Reviews',
								link: '',
							},
							{
								title: 'View all Testimonials',
								link: '',
							},
						].map((item, index) => (
							<Link
								key={index}
								to={item.link}
								className="flex items-center gap-x-2 text-primary group hover:opacity-80">
								{item.title}
								<Icon
									icon="fluent-emoji-high-contrast:right-arrow"
									fontSize={19}
									className="text-secondary group-hover:translate-x-1  transition-all"
								/>
							</Link>
						))}
					</div>

					<div className="md:grid md:grid-cols-auto-fill-300 gap-8 space-y-5 md:space-y-0 mt-5">
						<div className="bg-[#2D6145] text-white px-4 py-5 rounded-xl h-full flex flex-col">
							<p className="text-2xl md:max-w-[15rem]">
								"Stock loss has reduced and sales are booming. Foundry has grown
								and helped us implement all these different parts."
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
						</div>

						<div className="overflow-hidden rounded-xl relative">
							<img
								src="/images/LS_4.webp"
								alt="a store with a woman in front of it"
								className="h-full"
							/>
							<div className="absolute bottom-5 left-5 right-5 rounded-md bg-[#FAFAFA]/20 backdrop-blur-sm p-3">
								<p className="text-white font-medium flex items-end max-w-[10.5rem]">
									The importance of data to WeNaturals
									<img src="/icons/play.svg" alt="" className="w-[1rem] mb-1" />
								</p>
							</div>
						</div>
						<div className="bg-[#2D6145] text-white px-4 py-5 rounded-xl ">
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
						</div>
					</div>
				</div>
			</section>

			<section className=" bg-foundry-primary p-5 md:p-10 my-10 w-full text-primary-white">
				<div className="container">
					<div className="md:grid grid-cols-[0.5fr,1fr] gap-x-10 my-5 text-sm">
						<h5 className="font-medium text-3xl lg:text-4xl">
							Foundry by numbers
						</h5>
						<div className="divide-y divide-[#FAFAFA]/20">
							{[
								{
									topContent: '200+',
									bottomContent: 'Powered by Foundry',
								},
								{
									topContent: '50M+',
									bottomContent: 'Disbursed in Foundry Loans Origination',
								},
								{
									topContent: '$10M+',
									bottomContent: 'Individual sales transactions annually',
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
		</main>
	);
};

export default BookingManagement;

const goalsConst = [
	{
		title: 'Your business goals',
		desc: 'Expand your revenue streams by exploring new avenues.Monitor profit margins through inventory management and reporting functionalities.Synchronize orders, products, and stock levels seamlessly between your POS system and website.',
	},
	{
		title: 'Your business goals',
		desc: 'Expand your revenue streams by exploring new avenues.Monitor profit margins through inventory management and reporting functionalities.Synchronize orders, products, and stock levels seamlessly between your POS system and website.',
	},
	{
		title: 'Your business goals',
		desc: 'Expand your revenue streams by exploring new avenues.Monitor profit margins through inventory management and reporting functionalities.Synchronize orders, products, and stock levels seamlessly between your POS system and website.',
	},
];
