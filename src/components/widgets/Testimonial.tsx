import Image from 'next/image';
import RightArrow from '../atoms/RightArrow';
import { eventData } from '~/shared/data';
import HeaderWidget from '../common/HeaderWidget';
import EventCard from '../common/EventCard';
import Calendar from '../atoms/Calendar';
import Link from 'next/link';
const dateComp = (a: { date: Date }, b: { date: Date }) => {
  return a.date < b.date ? -1 : 1;
};

const Testimonial = () => {
  const { header, testimonials } = eventData;
  const events = testimonials
    .filter((event) => event.date > new Date())
    .sort(dateComp)
    .slice(0, 3);
  //TODO: Take first 3 of these (last 3?)
  //TODO: Grid with 2 diff width cols: cards and button, 90-10 ratio or whatever. Cards is a div that flex-wraps as it shrinks, and button vertically centers button
  //Or,
  return (
    <section className="bg-umass-neutral-light dark:bg-umass-neutral-dark" id="testimonial">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {header && <HeaderWidget header={header} titleClassname="text-2xl sm:text-3xl" />}
        <div className="mb-8 flex items-center justify-center">
          <Link
            className="ease-out duration-300 hover:text-umass-red"
            href={'https://calendar.google.com/calendar/u/1?cid=dW1hc3MubWxjbHViQGdtYWlsLmNvbQ'}
          >
            <Calendar />
          </Link>
        </div>
        <div className="flex flex-wrap justify-center lg:pl-40 xl:pl-48">
          <div className="grid grid-cols-1 items-center justify-items-center gap-3 dark:text-white sm:grid-cols-2 sm:justify-items-start md:grid-cols-2 "> {/** lg:grid-cols-4 xl:grid-cols-4 */}
            {events.map((event, index) => (
              <EventCard key={index} event={event} idx={index}></EventCard>
            ))}
            <RightArrow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
