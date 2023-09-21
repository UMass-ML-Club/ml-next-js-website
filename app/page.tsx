import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
import Features3 from '~/components/widgets/Features3';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonial from '~/components/widgets/Testimonial';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import {
  callToActionData,
  content2Data,
  contentData,
  faqsData2,
  featuresData,
  heroData,
  pricingData,
  socialProofData,
} from '~/shared/data';
import Contact from '~/components/widgets/Contact';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <main>
        <div className="m-4 flex items-center justify-center">
          <h1 className="flex items-center justify-center font-sans text-4xl">
            Welcome to the University of Massachusetts Amherst Machine Learning Club
          </h1>
        </div>
        <p className="mt-4 flex items-center justify-center font-sans">
          The place to learn all about ML at UMass Amherst. No experience necessary.
        </p>
        <Testimonial />
        <FAQs2 {...faqsData2} />
        <Team />
        <Contact />
        <CallToAction2 {...callToActionData} />
      </main>
    </>
  );
}
