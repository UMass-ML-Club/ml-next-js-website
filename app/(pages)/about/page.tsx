import type { Metadata } from 'next';
import Contact from '~/components/widgets/Contact';

import FAQs from '~/components/widgets/FAQs';
import FAQs2 from '~/components/widgets/FAQs2';
import Features4 from '~/components/widgets/Features4';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import Team from '~/components/widgets/Team';
import { featuresData3, hero2Data, statsData, faqsData, faqsData2 } from '~/shared/data';

export const metadata: Metadata = {
  title: `About us`,
};

const Page = () => {
  return (
    <>
      <div className="flex justify-center p-8">
        <h1 className="text-6xl underline">About Us</h1>
      </div>
      <hr style={{ width: '100%', borderTop: '6px solid black' }} />;
      <div className="flex justify-center pt-8">
        <h1 className="text-5xl">UMass ML Club, by the numbers </h1>
        <span className="ml-1 flex inline-flex justify-center self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-hash"
          >
            <line x1="4" x2="20" y1="9" y2="9" />
            <line x1="4" x2="20" y1="15" y2="15" />
            <line x1="10" x2="8" y1="3" y2="21" />
            <line x1="16" x2="14" y1="3" y2="21" />
          </svg>
        </span>
      </div>
      <Stats {...statsData} />
      <Team />
      <FAQs {...faqsData} />
      
      <FAQs2 {...faqsData2} />
      <Features4 {...featuresData3} />
      <Contact />
    </>
  );
};

export default Page;
