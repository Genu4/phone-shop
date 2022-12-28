import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'
import { idText } from 'typescript'

type CartDataProps = {
    id: number
    totalCount: number
    totalPrice: number
}

const App = () => {
    const [cartData, setCartData] = useState<CartDataProps>({
        id: 0,
        totalCount: 0,
        totalPrice: 0,
    })

    const addProductToCart = (id: number, total: number, price: number) =>
        setCartData((prevState: CartDataProps) => ({
            id: id,
            totalCount: prevState.totalCount + total,
            totalPrice: prevState.totalPrice + total * price,
        }))

    
    return (
        <div>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header cartData={cartData} />
                <Main addProductToCart={addProductToCart} />
            </StyledEngineProvider>
        </div>
    )
}
export default App
