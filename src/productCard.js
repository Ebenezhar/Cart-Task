function ProductCard(props) {
    return (
        <div class="card" style={{ width: "18rem" }}>
        <img src={props.data.img} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{props.data.name}</h5>
            <h6 class="card-title">₹ {props.data.price}</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button onClick={() => props.handleAddToCart(props.data.id)} href="#" class="btn btn-primary">Add to Cart</button>
          </div>
      </div>    
    )
}

export default ProductCard;