function CartList(props) {
    return (
        <>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{props.data.name}</div>
                    ₹ {props.data.price}
                </div>
                <button onClick={() => props.handleRemoveFromCart(props.data.id)} class="badge bg-primary rounded-pill">X</button>
            </li>
        </> 

    )
}
export default CartList;