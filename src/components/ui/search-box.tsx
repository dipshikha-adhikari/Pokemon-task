import { CiSearch } from "react-icons/ci";
import { useGlobalContext } from "../../context/app-context";
import { LiaTimesSolid } from "react-icons/lia";
import Input from "./input";

const SearchBox = () => {
  return (
    <>
      <SearchBoxMobile />
      <SearchBoxDesktop />
    </>
  );
};

export default SearchBox;

const SearchBoxMobile = () => {
  const { setSearchBoxOpen, searchBoxOpen } = useGlobalContext();
  return (
    <div>
      <CiSearch
        fontSize={20}
        className="cursor-pointer md:hidden"
        onClick={() => setSearchBoxOpen(true)}
      />
      {searchBoxOpen && (
        <section className="absolute md:hidden p-xs left-0 top-0 w-full bg-white">
          <div className="flex items-center  border-sm border-gray-300  rounded-sm">
            <LiaTimesSolid
              fontSize={20}
              className="cursor-pointer"
              onClick={() => setSearchBoxOpen(false)}
            />
            <div className="w-full">
              <Input />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

const SearchBoxDesktop = () => {
  return (
    <div className="border-sm hidden md:block">
      <Input />
    </div>
  );
};
