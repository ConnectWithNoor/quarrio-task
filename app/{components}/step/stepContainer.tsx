'use client';

import { useCallback, useState } from 'react';
import StepItem from './stepItem';

type Props = {
  respData: ParsedData[];
};

function StepContainer({ respData }: Props) {
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

    const newData = filteredData.splice(mutatedIndex, 0, mutatedData);
    console.log('file:stepContainer.tsx, line#63', filteredData);
    // setInputData(newData);
  };

  return (
    <div className='container'>
      <div className='right' onClick={addNewRow}>
        {inputData.length === 5 ? (
          <button className='add-btn'>Finish</button>
        ) : (
          <button className='add-btn'>Next</button>
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
          />
        );
      })}
    </div>
  );
}

export default StepContainer;
