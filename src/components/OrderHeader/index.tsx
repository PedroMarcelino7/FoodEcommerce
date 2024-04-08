import { Link } from 'react-router-dom'
import LogoImg from '../../assets/logo.svg'

import { Container } from './styles'

export function OrderHeader() {
    return (
        <Container>
            <Link to='/'>
                <img src={LogoImg} alt="Logo" />
            </Link>
        </Container>
    )
}