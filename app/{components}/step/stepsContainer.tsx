'use client';

import fetchData from '@/app/{utils}/fetchData';
import { useEffect, useState } from 'react';
import ReactDropdown from 'react-dropdown';
import Step from './step';

function StepsContainer() {
  const [stepsData, setStepsData] = useState<ParsedData[]>([]);
  const [stepData, setStepData] = useState<ParsedData>();

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData();
      setStepsData(data);
      setStepData(data[0]);
    };

    fetch();
  }, []);

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

        <Step stepData={stepData} />
      </div>
    </>
  );
}

export default StepsContainer;
