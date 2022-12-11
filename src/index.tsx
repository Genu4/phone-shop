import { title } from 'process'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Content} from './Content'

type TitleProps = {
    title: string
    text?: string
    num?: number
}

const Title = ({ title, text = 'Test', num }: TitleProps) => {
    return (
        <h1>
            {text} {title} {num}
        </h1>
    )
}


const App = () => {
    return (
        <React.Fragment>
            <Title text="Hello" title="React" />
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
