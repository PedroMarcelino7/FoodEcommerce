import { Container } from "./styles";

import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import menuImg from '../../assets/menu.svg'

export function Sidebar() {
    return (
        <Container>
            <button>
                <img src={menuImg} alt="Menu" />
            </button>

            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <BurgerIcon />
                            <span>Hambúrgueres</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}