import { Link } from 'react-router-dom';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { CustomButton } from './shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-foundry-primary text-primary-white relative h-full"
    >
      <img
        src="/images/logo_clustered.png"
        alt="clustered_logos"
        className="absolute right-0 top-0"
      />
      <div className="container py-10 md:py-16 lg:grid grid-cols-[0.4fr,1fr,0.4fr] gap-x-5">
        <div className="space-y-3 flex flex-col items-center lg:items-start">
          <img
            src="/icons/logo_white.svg"
            alt="logo-white"
            className="w-[2.3rem]"
          />
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, est?
          </p>
          <div className="flex items-center gap-x-3">
						{socials.map((item, index) => (
							<a
								key={index}
								href={item.href}
								target="_blank"
								className="hover:opacity-80">
								<Icon icon={item.icon} fontSize={30} />
							</a>
						))}
					</div>
        </div>
        <div className="hidden lg:grid grid-cols-3">
          {FOOTER_ITEMS.map((item, index) => (
            <div key={index}>
              <h1 className="text-primary-white mb-2 text-[17px] font-medium">
                {item.header}
              </h1>
              <div className="h-[0.2rem] w-[15%] mb-2 bg-gray-200/20 rounded-full" />
              <div className="flex gap-y-1 flex-col">
                {item.links.map((itx, idx) => (
                  <Link className="hover:opacity-80" key={idx} to={itx.href}>
                    {itx.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* mobile */}
        <div className="lg:hidden block mt-5">
          <Accordion
            itemClasses={{
              base: 'py-0 w-full',
              title: 'font-normal text-medium text-primary-white',
              trigger:
                ' py-0 data-[hover=true]:bg-default-100  rounded-lg h-10 flex items-center',
              indicator: 'text-medium',
              content: 'text-small  text-white',
            }}
            isCompact
          >
            {FOOTER_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                aria-label="Accordion 1"
                title={item.header}
              >
                <div className="flex gap-y-1 flex-col">
                  {item.links.map((itx, idx) => (
                    <Link className="hover:opacity-80" key={idx} to={itx.href}>
                      {itx.title}
                    </Link>
                  ))}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-3">
          <h1 className="text-primary-white mb-2 text-[17px] font-medium">
            Download Mobile App
          </h1>
          <div className="h-[0.2rem] w-[15%] mb-2 bg-gray-200/20 rounded-full" />
          <div className="flex items-center gap-x-4">
            {[
              {
                title: 'App Store',
                icon: '/icons/Apple.svg',
                link: '',
              },
              {
                title: 'Google play',
                icon: '/icons/playstore.svg',
                link: '',
              },
            ].map((item, index) => (
              <CustomButton
                key={index}
                className="flex gap-x-3 bg-foundry-secondary p-8 rounded-md items-center "
              >
                <img src={item.icon} alt={item.title} />
                <div className="flex flex-col items-start">
                  <p className="text-[#EBEBEB] text-sm">Download on the</p>
                  <p className="text-lg text-white">{item.title} </p>
                </div>
              </CustomButton>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-black/40" />
      <div className="py-3 text-center text-xs">
        Foundry © 2024. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

const socials = [
	{
		icon: 'bi:facebook',
		href: 'https://www.facebook.com/profile.php?id=61558790128679',
	},
	{
		icon: 'bi:instagram',
		href: 'https://www.instagram.com/Foundry_platform/',
	},
	{
		icon: 'simple-icons:linkedin',
		href: 'https://www.linkedin.com/company/foundryplatform',
	},
	{
		icon: 'fa-brands:youtube',
		href: 'https://www.youtube.com/@foundry-platform',
	},
];

const FOOTER_ITEMS = [
  {
    header: 'My Account',
    links: [
      {
        title: 'My Account',
        href: '',
      },
      {
        title: 'Order History',
        href: '',
      },
      {
        title: 'Shopping Cart',
        href: '',
      },
      {
        title: 'Wishlist',
        href: '',
      },
    ],
  },
  {
    header: 'Helps',
    links: [
      {
        title: 'Contact',
        href: '',
      },
      {
        title: 'Faqs',
        href: '',
      },
      {
        title: 'Terms & Conditions',
        href: '',
      },
      {
        title: 'Privacy',
        href: '',
      },
    ],
  },
  {
    header: 'Proxy',
    links: [
      {
        title: 'About',
        href: '',
      },
      {
        title: 'Shop',
        href: '',
      },
      {
        title: 'Product',
        href: '',
      },
      {
        title: 'Track Order',
        href: '',
      },
    ],
  },
];
