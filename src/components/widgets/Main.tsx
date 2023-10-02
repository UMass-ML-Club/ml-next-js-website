import Image from 'next/image';
import React from 'react';
import { mainAnimationData } from '~/shared/data';

export default function Main() {
  return (
    <main className="p-2">
      <div className="flex justify-center items-center p-4 font-sans text-4xl">
        Welcome to the University of Massachusetts Amherst Machine Learning Club!
      </div>
      <p className="flex justify-center items-center py-4 font-sans">
        The place to learn all about ML at UMass Amherst. No experience necessary.
      </p>

      {/** add in animated gif grid for information about the club */}
      <div className="m-2 grid grid-rows-3 md:grid-cols-3 md:grid-rows-1">
        {mainAnimationData.map((item, index) => (
          <div className="m-2 flex flex-col items-center" key={index}>
            <Image
              src={`/images/${item.src}`}
              alt={`AI Animation: ${index}`}
              width={250}
              height={250}
              className="rounded-[25%]"
            />
            <p className="flex items-center justify-center">{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

// TODO: add animations from https://iconscout.com/lotties/machine-learning
