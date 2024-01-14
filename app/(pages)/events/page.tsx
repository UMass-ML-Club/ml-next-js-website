import {eventData} from "../../../src/shared/data"
import EventCard from '../../../src/components/common/EventCard'
import {UpcomingEvent} from "../../../src/shared/types"
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
      {events.map((event, index) => (
        <EventCard event={event} idx={index}></EventCard>
        ))}
      </div>
    </main>
  )
}
