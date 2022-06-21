function ProductCard(props) {
    return (
        <div class="card" style={{ width: "18rem" }}>
        <img src={props.data.img} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{props.data.name}</h5>
            <h6 class="card-title">₹ {props.data.price}</h6>
            <p class="card-text"></p>
            <button disabled = {props.cartItems.some(obj => obj.id ===props.data.id)} onClick={() => props.handleAddToCart(props.data.id)} href="#" class="btn btn-primary">Add to Cart</button>
          </div>
      </div>    
    )
}

export default ProductCard;