import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'

type CartDataProps = {
    totalCount: number
    totalPrice: number
}

const App = () => {
    const [cartData, setCartData] = useState<CartDataProps>({
        totalCount: 10,
        totalPrice: 100,
    })

    const addProductToCart = (total: number, price: number) =>
        setCartData((prevState: CartDataProps) => ({
            totalCount: prevState.totalCount + total,
            totalPrice: prevState.totalPrice + total * price,
        }))
    return (
        <div>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header cartData={cartData} />
                <button onClick={() => addProductToCart(5, 500)}>
                    {' '}
                    add to cart
                </button>
                <Main />
            </StyledEngineProvider>
        </div>
    )
}
export default App
