'use client';

import { useEffect, useState } from 'react';
import ReactDropdown from 'react-dropdown';

type Props = {
  stepData: ParsedData | undefined;
};

function Step({ stepData }: Props) {
  const [inputList, setInputList] = useState<any[]>([]);

  useEffect(() => {
    setInputList([
      {
        concept: { ...stepData?.concept },
        errorCategory: { ...stepData?.errorCategory },
      },
    ]);
  }, [stepData]);

  const addNewInputList = () => {
    const newList = [
      ...inputList,
      {
        concept: { ...stepData?.concept },
        errorCategory: { ...stepData?.errorCategory },
      },
    ];

    setInputList([...newList]);
  };

  const removeRow = (index: number) => {
    const filteredData = inputList.filter((_, i) => i !== index);
    setInputList([...filteredData]);
  };

  const handleChange = (
    name: React.ReactNode,
    value: string,
    index: number
  ) => {
    const tobeMutated = inputList[index];

    const mutatedData = {
      ...tobeMutated,
      [name as string]: {
        ...tobeMutated[name as string],
        value,
      },
    };

    inputList.splice(index, 1, mutatedData);
    setInputList([...inputList]);
  };

  const handleNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('file:step.tsx, line#60', inputList);
    const isEmpty = inputList.some(
      (item) => (item.errorCategory.value as string).trim() === ''
    );

    if (isEmpty && inputList.length >= 2) {
      alert('Error category is required');
    } else {
      // proceed to next step
      alert('next step');
    }
  };

  if (!stepData) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleNextStep}>
      {/* field name */}
      <div>
        <p>Step name: {stepData.label}</p>
      </div>

      {/* new field button */}
      <div>
        <button className='add-btn' type='button' onClick={addNewInputList}>
          Add New Field
        </button>
      </div>

      {inputList.map((item, index) => {
        return (
          <div className='flex' key={index}>
            {/* error category */}

            <div className='step-input'>
              <label>{stepData.errorCategory.field}: </label>
              <ReactDropdown
                options={stepData.errorCategory.options}
                onChange={(e) => handleChange('errorCategory', e.value, index)}
                value={item.errorCategory.value}
                placeholder='Select an option'
              />
            </div>
            {/*  */}

            <div className='step-input'>
              <label>{stepData.concept.field}</label>
              <input
                type='text'
                required={inputList.length >= 2}
                placeholder='Enter a concept'
                value={item.concept.value}
                onChange={(e) => handleChange('concept', e.target.value, index)}
              />
            </div>
            {/* Remove Button */}
            <div className='step-input'>
              <button
                className='remove-btn'
                type='button'
                onClick={() => removeRow(index)}
              >
                X
              </button>
            </div>
          </div>
        );
      })}

      {/* Next step */}
      <div>
        <button className='add-btn' type='submit'>
          Next Step
        </button>
      </div>
    </form>
  );
}

export default Step;
