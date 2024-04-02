import type { Metadata } from 'next';

import CallToActionItem from '~/components/widgets/CallToAction';
import FAQs4 from '~/components/widgets/FAQs4';
import { callToActionData2, faqs4Data } from '~/shared/data';

export const metadata: Metadata = {
  title: 'FAQs',
};

const Page = () => {
  return (
    <>
      <FAQs4 {...faqs4Data} />
      <CallToActionItem data={callToActionData2} />
    </>
  );
};

export default Page;
