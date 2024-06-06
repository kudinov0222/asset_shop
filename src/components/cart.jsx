function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;
    return (
        <div className="cart teal white-text lighter-2" onClick={handleBasketShow}>
            <i class="material-icons">shopping_basket</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    );
}
export {Cart};