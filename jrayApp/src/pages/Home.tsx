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

  return (
    <div>
      <MainLayout>
        <MainContent bgimages={bgimages} header="Welcome to your dream home." />
        <AboutMe />
      </MainLayout>
    </div>
  );
}

export default Home;
