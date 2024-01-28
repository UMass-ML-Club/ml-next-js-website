import Image from 'next/image';
const RightArrow = () => (
  <a href="/events">
  <div className="col-span-1 flex-col">
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 hover:scale-125">
    <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="white" className="dark:stroke-transparent" />
    <line x1="70" y1="52" x2="50" y2="30" stroke="black" strokeWidth="6" className="stroke-umass-red" />
    <line x1="70" y1="48" x2="50" y2="70" stroke="black" strokeWidth="6" className="stroke-umass-red"/>
  </svg>
  <p style={{paddingLeft: ".6rem"}}>More Events</p>
  </div>
  </a>

);

export default RightArrow;
