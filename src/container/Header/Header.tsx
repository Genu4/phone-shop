import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import './Header.scss'
import logo from 'assets/logo.svg'

import Menu from 'components/Menu/Menu'
import CartHeader from 'components/CartHeader/CartHeader'

import { CartDataProps } from 'appTypes';

type Props = {
    cartData: CartDataProps
}

// В этом компоненте мы опять вынуждены в пропсы передавать объект
// cartData, чтоб его можно было опять через пропсы спустить
// компоненту CartHeader (хоть это и по дебильному)

const Header = ({cartData}: Props) => {
    return (
        <AppBar position="static" className="app-bar">
            <Container maxWidth="lg">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <Menu />
                    <CartHeader cartData={cartData}/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
