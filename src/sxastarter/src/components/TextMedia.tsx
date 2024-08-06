import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Image,
  ImageField,
  Text,
  Field,
  RichText,
  useSitecoreContext,
  // DictionaryPhrases,
} from '@sitecore-jss/sitecore-jss-nextjs';
// import useDictionary from 'src/hooks/useDictionary';
// import { useI18n } from 'next-localization';

// interface nav {
//   url?: string;
//   fields?: {
//     Title?: Field<string>;
//   };
// }
interface ContentProps {
  title?: Field<string>;
  bodyCopy?: Field<string>;
}
interface TextMediaProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields?: {
    Image: ImageField;
    Title?: Field<string>;
    bodyCopy?: Field<string>;
    // MainNavigation?: nav[];
  };
  children?: React.ReactElement<React.HTMLProps<HTMLElement>> | null;
}
const Content: React.FC<ContentProps> = ({ title, bodyCopy }) => (
  <>
    <Text tag="h2" className="text-5xl mb-4" field={title} />
    <RichText tag="div" className="text-xl mb-4" field={bodyCopy} />
  </>
);
export const TextMedia: React.FC<TextMediaProps> = ({
  fields,
  rendering,
  children,
}): JSX.Element => {
  // const { getDictionaryValue } = useDictionary();
  const sitecoreContext = useSitecoreContext();
  console.log('sitecoreContext: ', sitecoreContext);
  const BackgroundDark = rendering?.params?.BackgroundDark;

  // const i18n = useI18n<DictionaryPhrases>();

  // const context = useSitecoreContext();
  // const pageLanguage = context?.sitecoreContext?.language || 'en';
  // console.log(i18n.table(pageLanguage)?.DictionaryItem, 'i18ni18ni18ni18n');
  if (!fields) return <></>;

  return (
    <div className={`${BackgroundDark && 'bg-slate-200'}`}>
      {/* {getDictionaryValue('DictionaryItem')} */}
      <div className="container mx-auto max-w-screen-xl">{children}</div>
    </div>
  );
};

export const Default = (props: TextMediaProps): JSX.Element => {
  return (
    <TextMedia {...props}>
      <>
        <div className="grid grid-cols-2 ">
          <div className="flex flex-col self-center	pr-12">
            <Content title={props.fields?.Title} bodyCopy={props.fields?.bodyCopy} />
          </div>
          <div>
            <Image field={props.fields?.Image} />
          </div>
        </div>
      </>
    </TextMedia>
  );
};
export const ImageLeft = (props: TextMediaProps): JSX.Element => {
  return (
    <TextMedia {...props}>
      <>
        <div className="grid grid-cols-2">
          <div>
            <Image field={props.fields?.Image} />
          </div>
          <div className="flex flex-col self-center	pl-12">
            <Content title={props.fields?.Title} bodyCopy={props.fields?.bodyCopy} />
          </div>
        </div>
      </>
    </TextMedia>
  );
};
