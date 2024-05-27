import Logo from "../ui/logo";
import SearchBox from "../ui/search-box";
import ContentLayout from "./content-layout";

const Navbar = () => {
  return (
    <nav className="bg-background  sticky shadow-md h-[10vh] bg-primary top-0">
      <ContentLayout
        style={{
          display: "flex ",
          alignItems: "center",
          height: "100%",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Logo />
        <SearchBox />
      </ContentLayout>
    </nav>
  );
};

export default Navbar;
