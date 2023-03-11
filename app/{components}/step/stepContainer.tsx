'use client';

import { useCallback, useState } from 'react';
import StepItem from './stepItem';

type Props = {
  respData: ParsedData[];
};

function StepContainer({ respData }: Props) {
  const [isFinished, setIsFinised] = useState(false);
  const [inputData, setInputData] = useState<ResultData[]>([
    {
      [respData[0].name]: {
        concept: '',
        errorCategory: '',
      },
    },
  ]);

  const addNewRow = useCallback(() => {
    if (inputData.length < 5) {
      setInputData((prev) => [
        ...prev,
        {
          [respData[inputData.length].name]: {
            concept: '',
            errorCategory: '',
          },
        },
      ]);
    }
  }, [inputData.length, respData]);

  const removeRow = useCallback(
    (index: number) => {
      if (index !== inputData.length - 1) {
        alert('Sorry, You cant remove the element from between');
      } else {
        inputData.splice(index, 1);
        setInputData([...inputData]);
      }
    },
    [inputData]
  );

  const handleChange = (
    name: React.ReactNode,
    value: string,
    property: string
  ) => {
    const mutatedIndex = inputData.findIndex((item) => item[property]);
    const filteredData = inputData.filter((item) => !item[property]);

    const tobeMutated = inputData.filter((item) => item[property])[0];
    const mutatedData = {
      [property]: {
        ...tobeMutated[property],
        [name as string]: value,
      },
    };

    filteredData.splice(mutatedIndex, 0, mutatedData);

    setInputData([...filteredData]);
  };

  const handleFinish = () => {
    console.log('file:stepContainer.tsx, line#69', inputData);
    setIsFinised(!isFinished);
  };

  if (isFinished) {
    return (
      <div className='container'>
        <code>{JSON.stringify(inputData)}</code>

        <div className='right'>
          <button className='add-btn' onClick={handleFinish}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className='container' onSubmit={handleFinish}>
      <div className='right' onClick={addNewRow}>
        {inputData.length === 5 ? (
          <button className='add-btn' type='submit'>
            Finish
          </button>
        ) : (
          <button className='add-btn' type='button'>
            Next
          </button>
        )}
      </div>
      {inputData.map((item, index) => {
        return (
          <StepItem
            key={index}
            data={respData[index]}
            item={item}
            index={index}
            removeRow={removeRow}
            handleChange={handleChange}
            isRequired={inputData.length > 1}
          />
        );
      })}
    </form>
  );
}

export default StepContainer;
