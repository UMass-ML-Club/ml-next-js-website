import Image from 'next/image';
const RightArrow = () => (
  <div className="flex col-span-1">
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="transparent" />
    <line x1="70" y1="50" x2="50" y2="30" stroke="black" stroke-width="3" />
    <line x1="70" y1="50" x2="50" y2="70" stroke="black" stroke-width="3" />
  </svg>
  </div>
);

export default RightArrow;
