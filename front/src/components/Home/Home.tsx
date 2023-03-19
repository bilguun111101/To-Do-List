import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import Input from './Input';
import { Plan } from './Plan';

type list_type = {
  _id?: string;
  text: string;
  completed: boolean;
  __v: number;
}

export const Home: FC = () => {
  const [text, setText] = useState<string>("");
  const [list, setList] = useState<list_type[] | []>([]);
  const AddYourPlan = async() => {
    if(!text) return;
    const json = { text, completed: true }
    try {
      await axios.post("http://localhost:5000/todo-list", json);
    } catch (error) { console.log(error) }
    setText("");
  }
  useEffect(() => {
    (async() => {
      try {
        const { data } = await axios.get("http://localhost:5000/todo-list");
        setList(data);
      } catch (error) { console.log(error) }
    })()
  }, [])
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
            {/* <Plan /> */}
            {
              list?.map((el, idx) => {
                const { text, completed } = el;
                return (
                  <Plan
                    key={idx}
                    text={text}
                    completed={completed}
                  />
                )
              })
            }
        </div>
    </section>
  )
}
