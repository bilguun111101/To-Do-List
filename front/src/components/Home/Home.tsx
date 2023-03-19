import { FC, useState } from 'react';
import Input from './Input';
import { Plan } from './Plan';

export const Home: FC = () => {
  const [text, setText] = useState<string>("");
  const AddYourPlan = (): void => {
    if(!text) return;
    console.log(text);
    setText("");
  }
  return (
    <section className='bg-purple-600 w-full h-screen py-11 px-12 lg:px-28 flex flex-col gap-6'>
        <h1 className='text-white font-medium text-4xl mb-10'>Todo App</h1>
        <Input
            onChange={(el: any) => 
                setText(el.target.value)
            }
            value={text}
            onClick={AddYourPlan}
        />
        <div className='lg:px-8 w-full h-2/4 overflow-scroll flex flex-col gap-4'>
            <Plan />
        </div>
    </section>
  )
}
