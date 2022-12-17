import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

type Props = {}

const App = (props: Props) => {
    return (
        <div>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
            </StyledEngineProvider>
        </div>
    )
}
export default App
