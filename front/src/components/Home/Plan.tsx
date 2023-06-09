import { FC } from 'react';
import { GrFormClose } from "react-icons/gr";
import { FaExchangeAlt } from "react-icons/fa";

type Props = {
    text: string;
    completed: boolean;
}

export const Plan: FC<Props> = ({
    text,
    completed
}) => {
  return (
    <div 
        className='
            flex 
            justify-between 
            w-full
            rounded-md
            px-6
            py-3
            w-full
            text-md
            bg-neutral-700
            appearance-none
            focus:outline-none
            focus:ring-0
            peer
            invalid:border-b-1
            bg-white
            rounded-3xl
        '
    >
        <div className='w-4/6 h-full overflex-x-scroll flex items-center'>
            <p>
                { text }
            </p>
        </div>
        <div className='w-2/6 h-full flex items-center gap-4 items-center justify-end pr-6'>
            <button
                className='
                    hover:opacity-80 
                    transation 
                    active:opacity-50
                '
            >
                <FaExchangeAlt size={20} color="red" />
            </button>
            <button
                className='
                    hover:opacity-80 
                    transation 
                    active:opacity-50
                '
            >
                <GrFormClose size={30} color="#000" />
            </button>
        </div>
    </div>
  )
}
