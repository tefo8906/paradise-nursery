import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../features/cart/CartSlice';
import { Link } from 'react-router-dom';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const checkout = () => alert('Checkout Coming Soon!');

  if (items.length === 0) {
    return (
      <main className="cart-page empty-cart">
        <h1>Shopping Cart</h1>
        <p>Your cart is currently empty.</p>
        <Link className="continue-shopping" to="/plants">Continue Shopping</Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-layout">
        <section className="cart-items">
          {items.map(item => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Unit Price: ${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                </div>
                <p className="item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button className="delete-button" onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
              </div>
            </article>
          ))}
        </section>
        <aside className="cart-summary">
          <h2>Cart Summary</h2>
          <p>Total Items: {items.reduce((sum, item) => sum + item.quantity, 0)}</p>
          <h3>Total Amount: ${total.toFixed(2)}</h3>
          <button className="checkout-button" onClick={checkout}>Checkout</button>
          <Link className="continue-shopping" to="/plants">Continue Shopping</Link>
        </aside>
      </div>
    </main>
  );
}
