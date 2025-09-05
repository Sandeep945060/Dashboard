import SearchBar from "./Searchbar"
import NoticeIcon from "./NoticeIcon"
import CalendarIcon from "./CalenderIcon"
import DateDisplay from "./DateDisplay";
const Topbar = () => {

    
return (
<div className="fixed top-0 left-0 w-full flex justify-between items-center p-5 bg-yellow-50 shadow-md"> 
    <div className="text-2xl font-bold text-red-400">Dash<span className="text-black">board</span></div>
  {/* Left */}
  <SearchBar/>

  {/* Right */}
  <div className="flex items-center space-x-4">
    <NoticeIcon />

    <div className="flex items-center gap-4">
        <CalendarIcon />
      </div>

    <DateDisplay />
    

    
   
  </div>
 
</div>


)}
export default Topbar