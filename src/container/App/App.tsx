import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'
import { CartDataProps } from 'appTypes';

const App = () => {
    const [cartData, setCartData] = useState<CartDataProps>({
        products: {},
        count: 0,
        recentProductId: '0'
    })

    const addProductToCart = (id: number, count: number, price: number) => {
        setCartData((prevState: CartDataProps) => {
            let currentProduct = {
                count: 0,
                price: 0
            };

            if(prevState.products[id]) {
                currentProduct = prevState.products[id]
            } else {
                prevState.products[id] = currentProduct;
            }

            currentProduct.count += count;
            currentProduct.price += currentProduct.count * price;

            prevState.recentProductId = id + '';
            prevState.count += count;

            return {...prevState};
        })
    }

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
