import {UpcomingEvent} from '../../shared/types'

const dateString = (date:Date) => {
  const options = {weekday: "long", year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
  // @ts-ignore
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  return formattedDate;
}
export default function EventCard({event, idx}:{event:UpcomingEvent, idx:number}) {
  return (
    <div
      key={`item-testimonial-${idx}`}
      className="h-full w-full"
    >
      <div className="bg-umass-red card border-b-[3px] px-2 border-transparent hover:border-primary-600 hover:shadow-lg hover:transition hover:duration-100">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          key={`item-testimonial-${idx}`}
          className="card-body"
        >
          <div className="mb-4 flex justify-center">
            <div className="text-center">
              <h3 className="font-semibold text-3xl">{event.name}</h3>
              <span className="">{dateString(event.date)}</span><br/><b className="text-lg text-umass-neutral-light">{event.location}</b>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
