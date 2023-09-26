import Image from 'next/image';

const Logo = () => (
  <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
    <div className="h-[100px] w-[100px] md:h-auto md:w-auto">
      <Image src={'/images/logo.png'} alt="Logo" width={200} height={200} />
    </div>
  </span>
);

export default Logo;
