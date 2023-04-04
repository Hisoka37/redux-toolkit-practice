import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CardContainer";
import Navbar from "./components/Navbar";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";



function App() {
  const {cartItem} = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  useEffect (() => {
dispatch(calculateTotals());
  }, [cartItem]);
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
