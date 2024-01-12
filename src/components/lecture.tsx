import Image from 'next/image';
import React from 'react';
import { Href } from '~/shared/data';

function Lecture({
  image,
  title,
  description,
  hrefs,
  lecturers,
}: {
  image: string;
  title: string;
  description: string;
  hrefs: Href[];
  lecturers: string[];
}) {
  // TODO: link lecturers to their pages?
  return (
    <div className="m-2 h-auto w-full rounded-md bg-gray-200/20 p-8">
      <div className="flex flex-col md:flex-row">
        {image ? (
          <Image src={image} alt={title} width={500} height={500} className="w-auto rounded-sm md:w-[40%]" />
        ) : null}
        <div className="my-4 h-[2px] w-auto bg-gray-400 px-4 md:mx-4 md:my-0 md:h-0 md:h-auto md:w-[2px] md:px-0 md:py-4"></div>
        <div>
          <div className="text-3xl font-bold">
            <i>{title}</i>
          </div>
          <div className="mt-2">
            {lecturers.length > 0 && (
              <>
                Lecturer(s):{' '}
                {lecturers.map((lecturer, index) => (
                  <React.Fragment key={lecturer}>
                    {lecturer}
                    {index !== lecturers.length - 1 ? ', ' : ''}
                  </React.Fragment>
                ))}
              </>
            )}
          </div>
          <div className="mt-2 text-xl">{description}</div>
          <div className="mt-2">
            {hrefs.length > 0 && (
              <>
                Link(s):{' '}
                {hrefs.map((href, index) => (
                  <React.Fragment key={index}>
                    <a target="_blank" href={href.link}>
                      <i>{href.name}</i>
                    </a>
                    {index !== hrefs.length - 1 ? ', ' : ''}
                  </React.Fragment>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lecture;
