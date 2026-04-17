import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plantsData = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Peace Lily", price: 20, image: "https://via.placeholder.com/100" },
  ],
  Outdoor: [
    { id: 3, name: "Fern", price: 12, image: "https://via.placeholder.com/100" },
    { id: 4, name: "Bamboo", price: 18, image: "https://via.placeholder.com/100" },
  ],
  Succulent: [
    { id: 5, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/100" },
    { id: 6, name: "Cactus", price: 8, image: "https://via.placeholder.com/100" },
  ],
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  // Total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Check if item already added
  const isAdded = (id) => cart.find(item => item.id === id);

  return (
    <div>

      {/* ✅ Navbar */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart ({totalItems})</Link>
      </nav>

      <h2>Our Plants</h2>

      {/* ✅ Categories */}
      {Object.keys(plantsData).map((category) => (
        <div key={category}>
          <h3>{category}</h3>

          {plantsData[category].map((plant) => {
            const added = isAdded(plant.id);

            return (
              <div key={plant.id} style={{ marginBottom: "15px" }}>
                
                {/* ✅ Image */}
                <img src={plant.image} alt={plant.name} width="100" />

                {/* ✅ Details */}
                <h4>{plant.name}</h4>
                <p>Price: ₹{plant.price}</p>

                {/* ✅ Add to Cart */}
                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={added}
                >
                  {added ? "Added" : "Add to Cart"}
                </button>

              </div>
            );
          })}
        </div>
      ))}

    </div>
  );
};

export default ProductList;
