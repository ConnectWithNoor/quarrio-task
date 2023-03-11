import Dropdown from 'react-dropdown';

import 'react-dropdown/style.css';

type Props = {
  data: ParsedData;
  item: ResultData;
  index: number;
  isRequired: boolean;
  removeRow: (index: number) => void;
  handleChange: (
    name: React.ReactNode,
    value: string,
    property: string
  ) => void;
};

function StepItem({
  data,
  index,
  item,
  removeRow,
  handleChange,
  isRequired,
}: Props) {
  return (
    <>
      {/* step label */}
      <div>
        <span>
          Step# 0{index + 1}: <span className='bold'>{data.label}</span>
        </span>
      </div>

      {/* row container */}
      <div className='step-inputs-container'>
        {/* Status */}
        <div className='step-input'>
          <label>Status: </label>
          <Dropdown options={['Pass', 'Fail']} placeholder='Select an option' />
        </div>

        {/* error category */}
        <div className='step-input'>
          <label>{data.errorCategory.field}: </label>
          <Dropdown
            options={data.errorCategory.options}
            onChange={(e) => handleChange('errorCategory', e.value, data.name)}
            value={item[data.name].errorCategory}
            placeholder='Select an option'
          />
        </div>
        {/*  */}
        <div className='step-input'>
          <label>{data.concept.field}</label>
          <input
            type='text'
            required={isRequired}
            placeholder='Enter a concept'
            value={item[data.name].concept}
            name={data.concept.field}
            onChange={(e) =>
              handleChange(e.target.name, e.target.value, data.name)
            }
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
    </>
  );
}

export default StepItem;
