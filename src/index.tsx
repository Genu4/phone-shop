import { title } from 'process'
import React from 'react'
import ReactDOM from 'react-dom/client'

//Element

// JSX
// const h1 = <h1 id="title" className="test">Hello world</h1>

//without JSX
// const h1 = React.createElement("h1", {id: 'title', className:'test'}, "Hello React")

//Component повертають зовнішній вигляд. назва з великої! 

function App() {
return (
  <div>
    <h1>
      Hello React.js
    </h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam doloribus saepe magnam, non quas quod placeat tenetur velit, ab vero laboriosam voluptate consequuntur laborum quasi perferendis soluta provident fuga eaque.
    </p>
  </div>
)
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode><App></App></React.StrictMode>)

