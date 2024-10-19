import "./App.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function App() {
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("https://fakestoreapi.com/products");
  //     console.log(response.data); // This will log the array of products
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     // error.stack
  //   }
  // };

  // fetchData();

  // Create a client

  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return axios
        .get("https://fakestoreapi.com/products")
        .then((res) => res.data);
    },
    // Optional: staleTime, cacheTime, retry, etc.
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);
  return (
    <div>
      <div className="product-card">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="Fjallraven Backpack"
          className="product-image"
        />
        <div className="product-info">
          <h2 className="product-title">
            Fjallraven - Foldsack No. 1 Backpack
          </h2>
          <p className="product-description">
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve.
          </p>
          <p className="product-price">$109.95</p>
          <div className="product-rating">
            <span>Rating: 3.9</span>
            <span> (120 reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
