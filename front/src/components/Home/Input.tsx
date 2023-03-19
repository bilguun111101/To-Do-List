import React, { FC } from 'react';

type Props = {
  onChange: any;
  value: string;
  onClick: () => void;
}

const Input: FC<Props> = (props) => {
  const { onChange, value, onClick } = props;
  return (
    <div className='relative flex items-center bg-white rounded-2xl px-4'>
      <input
          className='
              block
              rounded-md
              px-6
              pt-6
              pb-1
              w-full
              text-md
              bg-neutral-700
              appearance-none
              focus:outline-none
              focus:ring-0
              peer
              invalid:border-b-1
              bg-white
              rounded-lg
          '
          placeholder=''
          onChange={onChange}
          value={value}
      />
      <label htmlFor="your plan"
          className='
              absolute 
              text-md
              text-zinc-400
              duration-150 
              transform 
              -translate-y-3 
              scale-75 
              top-4 
              z-10 
              origin-[0] 
              left-6
              peer-placeholder-shown:scale-100 
              peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75
              peer-focus:-translate-y-3
          '
      >
        Write your plan ...
      </label>
      <div>
        <button 
          onClick={onClick}
          className='text-slate-600 active:text-slate hover:text-slate-700 transition'
        >Add</button>
      </div>
    </div>
  )
}

export default Input