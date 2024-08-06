import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Field,
  Image,
  ImageField,
  Link,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface nav {
  url?: string;
  fields?: {
    Title?: Field<string>;
  };
}
interface HeaderProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields?: {
    Logo: ImageField;
    MainNavigation?: nav[];
  };
}
export const Header = (props: HeaderProps): JSX.Element => {
  const { fields } = props;
  if (!fields) return <></>;

  return (
    <div className="border-b-[1px] sticky">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center max-w-48">
            <Image field={fields?.Logo} />
          </a>
          <div className="md:flexd items-end lg:order-2 hidden">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-end w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {fields?.MainNavigation?.map((nav: nav, index: number) => (
                <li key={index}>
                  <Link
                    className='className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                    field={{
                      href: nav?.url?.toLocaleLowerCase(),
                      // title: linkdata?.value?.title
                      //   ? linkdata?.value?.title
                      //   : linkdata?.value?.text,
                      // target: linkdata?.value?.target ? linkdata?.value?.target : '_self',
                    }}
                  >
                    {nav.fields?.Title?.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
