import Nav from "./components/Nav/Nav";
import Recommended from "./components/Recommended/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import Products from "./Products/Products";

function App() {
  return (
    <>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
