import Link from 'next/link';
import { CallToActionProps } from '~/shared/types';
import Card from './Card';

const CallToAction2 = ({ title, subtitle, items }: CallToActionProps) => (
  <section className="bg-primary-900 text-gray-200" id="callToActionTwo">
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:pt-20">
      <div className="row-gap-10 grid gap-6 md:grid-cols-2">
        <div className="mx-auto md:my-auto md:ml-0 md:pb-6 md:pr-24">
          <h2 className="mb-3 flex justify-center text-6xl font-bold md:justify-start">{title}</h2>
          <p className="text-center text-xl text-gray-200 dark:text-slate-300 md:text-left">{subtitle}</p>
        </div>
        <div className="relative -mb-6">
          {items &&
            items.map(({ title, description, href, form }, index) => {
              console.log(typeof form)
              return (
              <div key={`call-to-action-item-${index}`}>
                {href ? (
                  <Link href={href} className="w-full sm:mb-0" rel="noopener noreferrer" key={`item-cta-${index}`}>
                    <Card title={title} description={description} href={href} form={form} />
                  </Link>
                ) : (
                  <Card title={title} description={description} href={href} form={form} />
                )}
              </div>
            )})}
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction2;
