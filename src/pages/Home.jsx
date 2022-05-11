import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import SuperHeader from "../components/SuperHeader";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <SuperHeader />
      <Navbar />;
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </>
  );
};
export default Home;
