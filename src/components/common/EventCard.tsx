import {UpcomingEvent} from '../../shared/types'

export default function EventCard({event, idx}:{event:UpcomingEvent, idx:number}) {
  return (
    <div
      key={`item-testimonial-${idx}`}
      className=""
    >
      <div className="bg-umass-red card border-b-[3px] border-transparent hover:border-primary-600 hover:shadow-lg hover:transition hover:duration-100">
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
              <span className="">{event.location}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
