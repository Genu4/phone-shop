import { title } from 'process'
import React from 'react'
import ReactDOM from 'react-dom/client'

//Element

// JSX
// const h1 = <h1 id="title" className="test">Hello world</h1>

//without JSX
// const h1 = React.createElement("h1", {id: 'title', className:'test'}, "Hello React")

//Component повертають зовнішній вигляд. назва з великої!
type TitleProps = {
    
    title: string
    text?: string
    num?: number
}


const Title = ({title, text='Test', num}: TitleProps) => {
    return <h1>{text} {title} {num}</h1>
}
const Content = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                doloribus saepe magnam, non quas quod placeat tenetur velit, ab
                vero laboriosam voluptate consequuntur laborum quasi perferendis
                soluta provident fuga eaque. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Odio ratione nesciunt molestiae
                vitae laborum ea dolores fugiat nihil? In eveniet recusandae
                adipisci asperiores quis natus debitis voluptate aperiam quae
                quibusdam?
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                doloribus saepe magnam, non quas quod placeat tenetur velit, ab
                vero laboriosam voluptate consequuntur laborum quasi perferendis
                soluta provident fuga eaque.
            </p>
        </>
    )
}

const App = () => {
    return (
        <React.Fragment>
            <Title text="Hello" title="React" num = {10}/>
            <Title text="Hi" title="React.js" />
            <Title title="Bla-bla" />
            <Content />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
