import Hero from "../components/Hero";
import Image from "../components/Image";
import CityList from "../components/CityList";
import Search from "../components/Search";
import NewsList from "../components/NewsList";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <Hero />
      <CityList />
      <Search />
      <Image />
      <NewsList />
      <Footer />
    </>
  );
}

export default RootLayout;
