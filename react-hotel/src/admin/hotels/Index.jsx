import '../../admin/adminindex.css';
import MainDashHotels from './NewHotelsIndex';
import RightSide from '../rightSide/RightSide';
import Sidebar from '../sidebar/sidebar';

function IndexHotels() {
  return (
    <div className="App">
      <div className="AppGlass">
        {/* <Sidebar/>
        <MainDash/>
        <RightSide/> */}
        <Sidebar/>
        <MainDashHotels/>
        <RightSide/>
       
      </div>
    </div>
  );
}

export default IndexHotels;