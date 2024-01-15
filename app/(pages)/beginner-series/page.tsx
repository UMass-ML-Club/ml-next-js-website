import React from 'react';
import Lecture from '../../../src/components/lecture';
import { lectureSeriesData } from '../../../src/shared/data';
import Fade from '../../../src/components/Fade';

const Page: React.FC = () => {
  return (
    <main className="m-8">
      {lectureSeriesData.map((lecture, index) => {
        return (
          <Fade direction={index % 2 == 0 ? 'right' : 'left'} key={index}>
            <Lecture
              image={lecture.image}
              title={lecture.title}
              description={lecture.description}
              hrefs={lecture.hrefs}
              lecturers={lecture.lecturers}
            />
          </Fade>
        );
      })}
    </main>
  );
};

export default Page;
