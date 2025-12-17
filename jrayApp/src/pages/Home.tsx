import MainContent from "../components/MainContent";
import AboutMe from "../components/AboutMe";
import MainLayout from "../layouts/MainLayout";

function Home() {
  let bgimages = [
    "images/supermountain.jpg",
    "images/condo.jpg",
    "images/dining.jpg",
    "images/cutesmall.jpg",
    "images/entry.jpg",
    "images/evening.jpg",
    "images/kitchen.jpg",
    "images/land.jpg",
    "images/mountain.jpg",
  ];

  let aboutme =
    "Introducing Julie Ray, an exceptional real estate agent who has made waves in the industry. Her success story began with the acquisition of a Winter Park real estate company in 1997. She later merged with Century 21, resulting in the creation of Century 21 Winter Park Real Estate. Julie's success continued as she owned and managed various commercial properties, including the Vasquez Center, two Century 21 Winter Park Real Estate offices, the Mulligan House, and one Century 21 Grand Lake Real Estate office. Julie's passion for real estate has taken her to multiple locations, including Winter Park, Fraser, Tabernash, Grand Lake, all of Grand County, and even the Denver Area. With a proven track record of success, she is the ideal choice for anyone looking to buy or sell property in these areas. Trust her expertise and experience to help you achieve your real estate goals today.";

  return (
    <div>
      <MainLayout>
        <MainContent bgimages={bgimages} header="Welcome to your dream home." />
        <AboutMe aboutme={aboutme} />
      </MainLayout>
    </div>
  );
}

export default Home;
