import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Link } from 'react-router-dom';
import { CustomButton } from '../shared/shared_customs';

interface InfoSectionWithVideoProps {
	videoElement: React.ReactNode;
}

const InfoSectionWithVideo = ({ videoElement }: InfoSectionWithVideoProps) => {
	return (
		<section className=" bg-foundry-primary p-5 md:p-10 my-16 w-full text-primary-white">
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
								href: 'https://developer.access89.com/',
							},
							{
								topContent: 'Integrations',
								href: 'https://developer.access89.com/',
							},
							{
								topContent: 'Apps',
								href: 'https://play.google.com/store/apps/developer?id=access+89&hl=en_US&pli=1',
							},
							// {
							// 	topContent: 'Help',
							// 	href: '',
							// },
						].map((item, index) => (
							<div
								key={index}
								className="py-3 space-y-1 border-b border-[#FAFAFA]/20">
								<CustomButton as={'a'} target="_blank" href={item.href}>
									{item.topContent}
								</CustomButton>
								{/* <h2 className="text-xl">{item.topContent}</h2> */}
								{/* <p>{item.bottomContent}</p> */}
							</div>
						))}
					</div>
					{videoElement}
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
	);
};

export default InfoSectionWithVideo;
