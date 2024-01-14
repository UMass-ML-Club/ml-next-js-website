import {eventData} from "../../../src/shared/data"
const dateComp = (a:{date:Date},b:{date:Date}) => {
  return a.date<b.date?-1:1
}
export default function Page() {
  const eventList = eventData.testimonials;
  const events = eventList.filter((event)=>event.date > new Date()).sort(dateComp)
  return (
    <main className="bg-umass-neutral">
      <h1 className="text-4xl text-white text-center">All Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {events.map(({name, location, description, date}, index) => (
        <div
          key={`item-testimonial-${index}`}
          className=""
        >
          <div className="bg-umass-red card border-b-[3px] border-transparent hover:border-primary-600 hover:shadow-lg hover:transition hover:duration-100">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              key={`item-testimonial-${index}`}
              className="card-body"
            >
              <div className="mb-4 flex justify-center">
                <div className="text-center">
                  <h3 className="font-semibold text-3xl">{name}</h3>
                  <span className="">{location}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      ))}
      </div>
    </main>
  )
}
