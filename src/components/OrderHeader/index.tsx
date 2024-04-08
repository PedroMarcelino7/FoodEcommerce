import { Link } from 'react-router-dom'

import LogoImg from '../../assets/logo.svg'
import {ReactComponent as CartIcon} from '../../assets/shopping-cart.svg'

import { Container } from './styles'

import { useCart } from '../../hooks/useCart'

export function OrderHeader() {
    const { cart } = useCart()

    return (
        <Container>
            <Link to='/'>
                <img src={LogoImg} alt="Logo" />
            </Link>

            <div>
                <div>
                    <h3>Meus pedidos</h3>

                    <span>
                        <strong>
                            {cart.length}
                        </strong>
                    </span>
                </div>
                <CartIcon />
            </div>
        </Container>
    )
}