import Image from 'next/image';
import { UpcomingEvent } from '../../shared/types';

const dateString = (date: Date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  // @ts-ignore
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  return formattedDate;
};
export default function EventCard({ event, idx }: { event: UpcomingEvent; idx: number }) {
  const key = process.env.GOOGLE_MAPS_API_KEY; // This is a secret, so it should be stored in an environment variable
  if (!key) {
    throw new Error('API KEY is not defined');
  }

  return (
    <div key={`item-testimonial-${idx}`} className="h-full w-full">
      <div className="card border-b-[3px] border-transparent bg-umass-red px-2 hover:border-primary-600 hover:shadow-lg hover:transition hover:duration-100">
        <a href="#" target="_blank" rel="noopener noreferrer" key={`item-testimonial-${idx}`} className="card-body">
          <div className="mb-4 flex justify-center">
            <div className="text-center">
              <h3 className="text-3xl font-semibold">{event.name}</h3>
              <span className="">{dateString(event.date)}</span>
              <br />
              <b className="text-lg text-umass-neutral-light">{event.location}</b>
              <p>{event.description}</p>
            </div>
          </div>
        </a>
        {event.location_id && (
          <div className="flex justify-center">
            <iframe
              width="600"
              height="450"
              // style="border:0"
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJU2GiMXfS5okRpmPHaKEzDSI&key=${key}`}
            ></iframe>
          </div>
        )}
        {/* {event.image && (
          <Image
            src={event.image.src}
            alt={event.image.alt}
            width={400}
            height={400}
            className="w-full h-48 object-cover"
          />
        )} */}
      </div>
    </div>
  );
}
