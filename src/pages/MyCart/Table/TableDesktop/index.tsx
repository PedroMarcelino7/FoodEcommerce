import { useCart } from "../../../../hooks/useCart"
import { Container } from "./styles"

export function TableDesktop() {
    const { cart } = useCart()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Lanche</th>
                        <th>Quantidade</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={`${item.snack} - ${item.id}`} >
                            <td>
                                <img src={item.image} alt={item.name} />
                            </td>
                            <td>
                                <h4>{item.name}</h4>
                                <span>{item.price}</span>
                            </td>
                            <td>
                                {item.quantity}
                            </td>
                            <td>
                                <h5>{item.subtotal}</h5>
                            </td>
                            <td>
                                Deletar
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}