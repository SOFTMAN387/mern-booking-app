import '../../admin/adminindex.css';
import MainDashRooms from './NewRoomsIndex';
import RightSide from '../rightSide/RightSide';
import Sidebar from '../sidebar/sidebar';

function IndexRooms() {
  return (
    <div className="App">
      <div className="AppGlass">
        {/* <Sidebar/>
        <MainDash/>
        <RightSide/> */}
        <Sidebar/>
        <MainDashRooms/>
        <RightSide/>
       
      </div>
    </div>
  );
}

export default IndexRooms;