import Link from 'next/link'
import { TfiEmail } from 'react-icons/tfi'
import LogoIcon from "@/assets/logo.svg";

const footerNavs = [
   {
      label: 'Contact Us',
      items: [
         {
            href: 'https://www.google.com/maps/place/Mizone+%2F+Malabar+Innovation+Entrepreneurship+Zone/@11.9840837,75.364086,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba43f54946f7cdd:0x20d73d44cd69f732!8m2!3d11.9840837!4d75.3666609!16s%2Fg%2F11h3nn3bmp?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D',
            name: 'Address: AstraBiz , Mizone Office, Kannur',
         },
         {
            href: 'https://wa.me/917025761022?text=Hello%20AstraBiz,%20I%20would%20like%20to%20know%20more%20about%20your%20services.',
            name: 'Whatsapp : +91 7025761022',
         },
         {
            href: 'mailto:rishikeshkaroth@gmail.com',
            name: 'Email : rishikeshkaroth@gmail.com',
         },
      ],
   },
   {
      label: 'Legal',
      items: [
         {
            href: '/terms',
            name: 'Terms',
         },

         {
            href: '/privacy',
            name: 'Privacy',
         },
      ],
   },
]

const footerSocials = [
   {
      href: 'mailto:rishikeshkaroth@gmail.com',
      name: 'Email',
      icon: <TfiEmail className="size-4" />,
   },
   
]

export function Footer() {
   return (
      <footer id='footer'>
         <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
          <hr />
            <div className="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
               <div className="mb-12 flex flex-col gap-4">
                  <Link href="/" className="flex items-center gap-2">
                     <LogoIcon className="w-8 h-8 border rounded-lg" />
                     <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                        AstraBiz
                     </span>
                  </Link>
               </div>
               <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
                  {footerNavs.map(nav => (
                     <div key={nav.label}>
                        <h2 className="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white">
                           {nav.label}
                        </h2>
                        <ul className="grid gap-2">
                           {nav.items.map(item => (
                              <li key={item.name}>
                                 <Link
                                    href={item.href}
                                    className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                                 >
                                    {item.name}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </div>

            <div className="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
               <div className="flex space-x-5 sm:mt-0 sm:justify-center">
                  {footerSocials.map(social => (
                     <Link
                        key={social.name}
                        href={social.href}
                        className="fill-gray-500 text-gray-500 hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600"
                     >
                        {social.icon}
                        <span className="sr-only">{social.name}</span>
                     </Link>
                  ))}
               </div>
               <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  Copyright ©
                  {' '}
                  {new Date().getFullYear()}
                  {' '}
                  <Link href="/" className="cursor-pointer">
                     AstraBiz
                  </Link>
                  . All Rights Reserved.
               </span>
            </div>
         </div>
         {/*   <SiteBanner /> */}
      </footer>
   )
}