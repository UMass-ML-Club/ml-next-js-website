'use client';

import { FormEvent, useState } from 'react';
import { FormProps } from '../../shared/types';
import { CircularProgress } from '@mui/material';

const Form = ({ title, description, inputs, radioBtns, textarea, checkboxes, btn, btnPosition }: FormProps) => {
  const [inputValues, setInputValues] = useState([] as any); // TODO: type this
  const [loading, setLoading] = useState(false);
  const [radioBtnValue, setRadioBtnValue] = useState('');
  const [textareaValues, setTextareaValues] = useState('');
  const [checkedState, setCheckedState] = useState<boolean[]>(new Array(checkboxes && checkboxes.length).fill(false));

  // Update the value of the entry fields
  const changeInputValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // Update checked radio buttons
  const changeRadioBtnsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioBtnValue(event.target.value);
  };

  // Update the textarea value
  const changeTextareaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValues(event.target.value);
  };

  // Update checkbox radio buttons
  const changeCheckboxHandler = (index: number) => {
    setCheckedState((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.map(() => {
        newValues[index] = !checkedState[index];
      });
      return newValues;
    });
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // const res = await fetch('/api/sendEmail', {
    //   method: 'POST',
    //   // headers: {
    //   //   'Content-Type': 'application/json',
    //   // },
    //   body: JSON.stringify({
    //     name: inputValues[0],
    //     email: inputValues[1],
    //     message: textareaValues,
    //   }),
    // });
    // const data = await res.json();
    // console.log(data);

    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: JSON.stringify({
          name: inputValues[0],
          email: inputValues[1],
          message: textareaValues,
        }),
      });

      if (!response.ok) {
        console.log('falling over');
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData['message']);

      alert('Message successfully sent');
    } catch (err) {
      console.error(err);
      alert('Error, please try resubmitting the form');
    }

    // Prepare the data to be logged
    // const logData = {
    //   inputValues,
    //   radioBtnValue,
    //   textareaValues,
    //   checkedState,
    // };
    // Write the data to the logging file
    // try {
    //   // Make an HTTP POST request to the logging endpoint
    //   const response = await fetch('/api/logging', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(logData),
    //   });

    //   if (response.ok) {
    //     console.log('Data logged successfully');
    //   } else {
    //     console.error('Failed to log data');
    //   }
    // } catch (error) {
    //   console.error('Error logging data:', error);
    // }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
    setLoading(true);
    const res = await fetch('/api/sendQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: inputValues.name,
        email: inputValues.email,
        message: textareaValues,
      }),
    });
    const data = await res.json();
    console.log(data);
    setLoading(false);
    // setInputValues([]); Clearing input values doesn't work on website
    setTextareaValues('');
  };

  return (
    <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
      {title && <h2 className={`${description ? 'mb-2' : 'mb-4'} text-2xl font-bold`}>{title}</h2>}
      {description && <p className="mb-4">{description}</p>}
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="mb-6">
          {/* Inputs */}
          <div className="mx-0 mb-1 sm:mb-4">
            {inputs.map(({ type, label, name, autocomplete, placeholder }, index) => (
              <div key={`item-input-${index}`} className="mx-0 mb-1 sm:mb-4">
                <label htmlFor={name} className="pb-1 text-xs uppercase tracking-wider">
                  {label}
                </label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  autoComplete={autocomplete}
                  value={inputValues[index]}
                  onChange={changeInputValueHandler}
                  placeholder={placeholder}
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                />
              </div>
            ))}
          </div>
          {/* Radio buttons */}
          {radioBtns && (
            <div className="mx-0 mb-1 sm:mb-3">
              <label className="pb-1 text-xs uppercase tracking-wider">{radioBtns?.label}</label>
              <div className="flex flex-wrap">
                {radioBtns.radios.map(({ label }, index) => (
                  <div key={`radio-btn-${index}`} className="mr-4 items-baseline">
                    <input
                      type="radio"
                      name={label}
                      value={`value${index}`}
                      checked={radioBtnValue === `value${index}`}
                      onChange={changeRadioBtnsHandler}
                      className="cursor-pointer"
                    />
                    <label className="ml-2">{label}</label>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Textarea */}
          {textarea && (
            <div className={`mx-0 mb-1 sm:mb-4`}>
              <label htmlFor={textarea.name} className="pb-1 text-xs uppercase tracking-wider">
                {textarea.label}
              </label>
              <textarea
                id={textarea.name}
                name={textarea.name}
                cols={textarea.cols}
                rows={textarea.rows}
                value={textareaValues}
                onChange={(e) => changeTextareaHandler(e)}
                placeholder={textarea.placeholder}
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
              />
            </div>
          )}
          {/* Checkboxes */}
          {checkboxes && (
            <div className="mx-0 mb-1 sm:mb-4">
              {checkboxes.map(({ label }, index) => (
                <div key={`checkbox-${index}`} className="mx-0 my-1 flex items-baseline">
                  <input
                    type="checkbox"
                    name={label}
                    checked={checkedState[index]}
                    onChange={() => changeCheckboxHandler(index)}
                    className="cursor-pointer"
                  />
                  <label className="ml-2">{label}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          className={`${btnPosition === 'left' ? 'text-left' : btnPosition === 'right' ? 'text-right' : 'text-center'}`}
        >
          <button
            type={btn.type}
            className="btn btn-primary sm:mb-0"
            // onClick={handleClick}
          >
            {loading ? <CircularProgress color="secondary" size={20} /> : btn.title}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
