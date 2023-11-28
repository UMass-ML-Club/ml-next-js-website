/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { announcementData } from '~/shared/data';

const Announcement = () => {
  const { title, callToAction, callToAction2 } = announcementData;

  return (
    <div className="hidden overflow-hidden text-ellipsis whitespace-nowrap border-b border-umass-neutral-light bg-umass-neutral px-3 py-2 text-sm text-gray-200 md:block">
      <span className="bg-blue-800 px-1 py-0.5 text-xs font-semibold">{title}</span>{' '}
      {callToAction && callToAction.text && callToAction.href && (
        <a
          href={callToAction.href}
          target="_blank"
          rel="noreferrer noopened"
          className="cursor-pointer text-gray-100 hover:underline"
        >
          {callToAction.icon && <callToAction.icon className="-ml-1.5 mr-1 h-5 w-5" />} {callToAction.text}
        </a>
      )}
      {callToAction2 && callToAction2.text && callToAction2.href && (
        <div className="float-right inline-flex items-center">
          <p className="font-serif">Join the Discord:</p>
          <a href={callToAction2.href} target="_blank" rel="noreferrer" className="ml-[2px]" title={callToAction2.text}>
            <Image src="/svg/discord.svg" alt="Join the ML discord" width={25} height={25} />
          </a>
        </div>
      )}
    </div>
  );
};

export default Announcement;
