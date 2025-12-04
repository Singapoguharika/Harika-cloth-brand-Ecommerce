import { Navbar, Main, Product, Footer } from "../components";
import ShopByCategory from "../components/ShopByCategory";
import BrandCarousel from "../components/BrandCarousel"; // <-- Add this import

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <ShopByCategory />
      <BrandCarousel />  {/* Add the brand carousel here */}
      <Product />
      <Footer />
    </>
  );
}

export default Home;
