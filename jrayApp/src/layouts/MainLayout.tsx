import Navbar from "../components/Navbar";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Contact", path: "/contact" },
];

interface Props {
  children: React.ReactNode;
}

function MainLayout({ children }: Props) {
  let mainNavItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Available Properties",
      path: "/available",
    },
    {
      label: "Recently Closed",
      path: "/closed",
    },
  ];

  let mainBrand = "Julie Ray";
  let brandimg = "images/berkhath.png";

  return (
    <>
      <Navbar brandimg={brandimg} header={mainBrand} items={mainNavItems} />
      {children}
    </>
  );
}

export default MainLayout;
