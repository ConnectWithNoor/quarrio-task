'use client';

import fetchData from '@/app/{utils}/fetchData';
import { useEffect, useState } from 'react';
import ReactDropdown from 'react-dropdown';
import Step from './step';

function StepsContainer() {
  const [stepsData, setStepsData] = useState<ParsedData[]>([]);
  const [stepData, setStepData] = useState<ParsedData>();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData();
      setStepsData(data);
      setStepData(data[0]);
    };

    fetch();
  }, []);

  const stepForward = () => {
    if (index <= 4) {
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
        />
      </div>
    </>
  );
}

export default StepsContainer;
