import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Field,
  Image,
  ImageField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface FooterProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields?: {
    Logo: ImageField;
    Copyright: Field<string>;
  };
}
export const Footer = (props: FooterProps): JSX.Element => {
  const { fields } = props;
  if (!fields) return <></>;

  return (
    <div className="border-t-[1px] sticky">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center max-w-40">
            <Image field={fields?.Logo} />
          </a>
          <div>
            <Text field={fields?.Copyright} />
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Footer;
