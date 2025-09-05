import { RxMagnifyingGlass } from "react-icons/rx";

const SearchBar = () => {
  return (
    <div className="relative w-200 mr-4 flex border border-white  box-border shadow-xl rounded-md ">
      <RxMagnifyingGlass
        className="absolute -right-1 bg-red-400 rounded-md top-1/2 transform -translate-y-1/2 text-white p-1"
        size={40}
      />

      <input
        type="text"
        placeholder="Search your task..."
        className="pl-10 pr-3 py-2 w-full rounded-md bg-white focus:outline-none"
      />
    </div> 
  );
};

export default SearchBar;
