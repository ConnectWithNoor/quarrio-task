'use client';

import fetchData from '@/app/{utils}/fetchData';
import { useEffect, useState } from 'react';
import ReactDropdown from 'react-dropdown';
import Step from './step';

import 'react-dropdown/style.css';

function StepsContainer() {
  const [stepsData, setStepsData] = useState<ParsedData[]>([]);
  const [stepData, setStepData] = useState<ParsedData>();
  const [resultData, setResultData] = useState<any>();
  const [index, setIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData();
      setStepsData(data);
      setStepData(data[0]);
    };

    fetch();
  }, []);

  const stepForward = (inputList: any[]) => {
    const sanitizedInputList = inputList.map((item) => ({
      concept: item.concept.value,
      errorCategory: item.errorCategory.value,
    }));

    const newData = {
      [stepData?.name as string]: sanitizedInputList,
    };

    setResultData({
      ...resultData,
      ...newData,
    });

    if (index < 4) {
      setIndex(index + 1);
      const nextStep = stepsData[index + 1];
      setStepData(nextStep);
    }
  };

  const stepBackward = () => {
    if (index >= 0) {
      setIndex(index - 1);
      const nextStep = stepsData[index - 1];
      setStepData(nextStep);
    }
  };

  const handleStepperFinish = () => {
    setIsFinished(!isFinished);
  };

  if (isFinished) {
    return (
      <div className='container'>
        <pre>{JSON.stringify(resultData, null, 2)}</pre>

        <div className='right'>
          <button className='add-btn' onClick={handleStepperFinish}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='step-inputs-container'>
        {/* status */}
        <div className='step-inputs-container'>
          <div className='step-input'>
            <label>Status </label>
            <ReactDropdown options={['Pass', 'Fail']} placeholder='Pass' />
          </div>
        </div>

        <Step
          stepData={stepData}
          stepForward={stepForward}
          stepBackward={stepBackward}
          stepCount={index}
          handleStepperFinish={handleStepperFinish}
        />
      </div>
    </>
  );
}

export default StepsContainer;
