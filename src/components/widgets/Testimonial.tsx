import Image from 'next/image';
import RightArrow from '../atoms/RightArrow'
import { testimonialData } from '~/shared/data';
import HeaderWidget from '../common/HeaderWidget';

const Testimonial = () => {
  const { header, testimonials } = testimonialData;
//TODO: Grid with 2 diff width cols: cards and button, 90-10 ratio or whatever. Cards is a div that flex-wraps as it shrinks, and button vertically centers button
  //Or,
  return (
    <section className="bg-umass-neutral-light dark:bg-umass-neutral-dark" id="testimonial">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {header && <HeaderWidget header={header} titleClassname="text-2xl sm:text-3xl" />}
        <div className="flex flex-wrap justify-center">
          <div className="items-center grid grid-cols-1 gap-3 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {testimonials.map(({ name, occupation, comment, image, icon: Icon, href }, index) => (
              <div
                key={`item-testimonial-${index}`}
                className="col-span-3 flex-auto sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
              >
                <div className="h-full bg-umass-red flex-flow card flex border-b-[3px] border-transparent text-center justify-center hover:border-primary-600 hover:shadow-lg hover:transition hover:duration-100">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`item-testimonial-${index}`}
                    className="card-body"
                  >
                    <div className="mb-4 flex justify-center">
                      <div className="text-center">
                        <h3 className="font-semibold text-3xl">{name}</h3>
                        <span className="">{occupation}</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
            <RightArrow></RightArrow>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
