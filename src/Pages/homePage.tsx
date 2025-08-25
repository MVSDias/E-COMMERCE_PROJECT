import Banner from "../Components/Banner";
import NavMenu from "../Components/NavMenu";
import ProductCard from "../Components/ProductCard";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <NavMenu />
      <Banner />
      <div>
        <ProductCard />
      </div>
    </div>
  );
};

export default HomePage;
