import { signUpUser } from '@/app/lib/utils/action'
import React from 'react'

const TestingTodo = async () => {
  return (
    <form action={signUpUser}>
        <div>
        <input name={"newTodo"} id="newTodo" type="text" placeholder="Add todo"  className='border border-collapse'/>
        <button>Add</button>
    </div>
    </form>
  )
}

export default TestingTodo