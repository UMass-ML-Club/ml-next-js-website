import { IconArrowDownRight } from '@tabler/icons';

interface Item {
  question: string;
  answer: string;
}

export interface FAQsProps {
  title?: string;
  subtitle?: string;
  highlight?: string;
  items: Array<Item>;
}

const faqs: FAQsProps = {
  title: "Frequently Asked Questions",
  subtitle: "Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.",
  highlight: "FAQS",
  items: [
    {
      question: 'What do I need to start?',
      answer: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      question: 'How to install the NextJS + Tailwind CSS template?',
      answer: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      question: "What's something that you completely don't understand?",
      answer: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      question: "What's an example of when you changed your mind?",
      answer: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      question: 'What is something that you would really like to try again?',
      answer: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      question: 'If you could only ask one question to each person you meet, what would that question be?',
      answer: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ]
};

const FAQs = () => {
  const { title, subtitle, highlight, items } = faqs;

  return (
    <section id="faqsOne">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 text-center">
          {highlight && (
            <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
              {highlight}
            </p>
          )}
          {title && (
            <h2 className="font-heading mb-4 text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
              {subtitle}
            </p>
          )}
        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:gap-x-16 md:grid-cols-2">
            {items.map(({ question, answer }, index) => (
              <div className="space-y-8" key={`faqs-item-${index}`}>
                <div>
                  <h3 className="mb-4 text-xl font-bold">
                    <IconArrowDownRight name="tabler:arrow-down-right" className="w-7 h-7 text-primary-800 inline-block" />
                    {question}
                  </h3>
                  {answer && (
                    <div className="text-gray-700 dark:text-gray-400">
                      {answer} 
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs;