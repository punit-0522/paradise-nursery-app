import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulent" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 20, category: "Indoor" },
  { id: 4, name: "Cactus", price: 8, category: "Succulent" },
  { id: 5, name: "Fern", price: 12, category: "Outdoor" },
  { id: 6, name: "Bamboo", price: 18, category: "Outdoor" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/cart">Cart ({totalItems})</Link>
      </nav>

      <h2>Plants</h2>

      {plants.map(plant => {
        const added = cart.find(i => i.id === plant.id);

        return (
          <div key={plant.id}>
            <h3>{plant.name}</h3>
            <p>₹{plant.price}</p>

            <button
              onClick={() => dispatch(addToCart(plant))}
              disabled={added}
            >
              {added ? "Added" : "Add to Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
