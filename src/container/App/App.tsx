import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'
import { idText } from 'typescript'

type CartDataProps = {
    id: number
    count: number
    totalPrice: number
}

const App = () => {
    const [cartData, setCartData] = useState<CartDataProps>({
        id: 0,
        count: 0,
        totalPrice: 0,
    })


    const addProductToCart = (id: number, count: number, price: number) =>
        setCartData((prevState: CartDataProps) => ({
            id: id,
            count: count,
            totalPrice: prevState.totalPrice + count * price,
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
