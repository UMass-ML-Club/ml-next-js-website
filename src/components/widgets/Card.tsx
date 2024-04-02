'use client';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import { IconChevronRight } from '@tabler/icons-react';
import { FormEvent, useState } from 'react';
import { Item } from '~/shared/types';

const Card = ({ title, description, href, form }: Item) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
    setLoading(true);
    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    const data = await res.json();
    setLoading(false);
    setEmail('');
    console.log(data);
  };
  return (
    <div className="mb-6 rounded-md border-gray-400 bg-primary-50 px-5 py-4 text-base font-medium text-gray-700 shadow-md dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div className="w-full">
          <h3 className="mb-3 text-xl font-bold dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-slate-400">{description}</p>
        </div>
        {href && (
          <div className="flex h-10 w-10 items-center justify-center">
            <IconChevronRight className="h-6 w-6 text-primary-600 dark:text-slate-200" />
          </div>
        )}
      </div>
      {form && (
        <div className="mt-2">
          <form className="rounded-md border border-gray-400 bg-white shadow-md" onSubmit={handleSubmit}>
            {/** TODO: add onClick handler for the email list sign up */}
            <div className="flex items-center">
              {form.icon && (
                <span className="rounded-bl rounded-tl border-r-[1px] border-gray-400 px-2 py-2 dark:bg-[#3b3b3b]">
                  <form.icon className="h-6 w-6 text-primary-600 dark:text-gray-400" />
                </span>
              )}
              <span className="rounded-bl rounded-tl border-r-[1px] border-gray-400 px-2 py-2 dark:bg-[#3b3b3b]">
                <div className="h-6 w-6 text-primary-600 dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-mail-plus"
                  >
                    <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    <path d="M19 16v6" />
                    <path d="M16 19h6" />
                  </svg>
                </div>
              </span>
              <input
                type={form.input.type}
                name={form.input.name}
                autoComplete={form.input.autocomplete}
                placeholder={form.input.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 pl-2 pr-4 dark:text-gray-300"
              />
              <button
                type={form.btn.type}
                className="rounded-br rounded-tr border-l-[1px] border-gray-400 bg-primary-600 px-4 py-2 text-white"
              >
                {loading ? <CircularProgress color='secondary' size={20}/>:form.btn.title}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Card;
