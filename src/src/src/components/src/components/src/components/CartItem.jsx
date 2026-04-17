import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalCost = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link>
      </nav>

      <h2>Shopping Cart</h2>

      <h3>Total Items: {totalItems}</h3>
      <h3>Total Cost: ₹{totalCost}</h3>

      {cart.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} width="100" />
          <h4>{item.name}</h4>
          <p>Unit Price: ₹{item.price}</p>
          <p>Total: ₹{item.price * item.quantity}</p>

          <button onClick={() => dispatch(updateQuantity({ id: item.id, type: "increase" }))}>
            +
          </button>

          <span> {item.quantity} </span>

          <button onClick={() => dispatch(updateQuantity({ id: item.id, type: "decrease" }))}>
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <br />

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CartItem;
