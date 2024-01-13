import { useState } from 'react'
import { Post } from './Post'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Post
        author="Sávio Luiz"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa incidunt, saepe accusantium reiciendis similique necessitatibus enim veritatis ratione et iste vitae autem voluptas omnis cumque eos recusandae inventore illum."
      />

      <Post
        author="Luiz Paiva"
        content="Outro Post"
      />
    </div>

  )
}

