import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

function App() {
  let mainNavItems = ["Available Properties", "Recently Closed", "Contact"];
  let mainBrand = "Julie Ray";
  let brandimg = "images/berkhath.png";
  let bgimages = ["images/supermountain.jpg", "images/condo.jpg", "images/dining.jpg", "images/cutesmall.jpg", "images/entry.jpg", "images/evening.jpg", "images/kitchen.jpg", "images/land.jpg", "images/mountain.jpg"];

  return (
    <div>
      <Navbar brandimg={brandimg} header={mainBrand} items={mainNavItems} />
      <MainContent bgimages={bgimages} header="Welcome to your dream home." />
    </div>
  );
}

export default App;
