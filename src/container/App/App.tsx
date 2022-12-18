import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'

type Props = {}

const App = (props: Props) => {
    return (
        <div>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Main />
            </StyledEngineProvider>
        </div>
    )
}
export default App
