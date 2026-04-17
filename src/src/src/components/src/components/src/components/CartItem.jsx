import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalCost = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/plants">Plants</Link>
      </nav>

      <h2>Shopping Cart</h2>
      <h3>Total Cost: ₹{totalCost}</h3>

      {cart.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => dispatch(increase(item.id))}>+</button>
          <button onClick={() => dispatch(decrease(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon")}>Checkout</button>

      <br />
      <Link to="/plants">Continue Shopping</Link>
    </div>
  );
};

export default CartItem;
