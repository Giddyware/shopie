import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import SuperHeader from "../components/SuperHeader";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <>
      <SuperHeader />
      <Navbar />;
      <Slider />
      <Categories />
    </>
  );
};
export default Home;
