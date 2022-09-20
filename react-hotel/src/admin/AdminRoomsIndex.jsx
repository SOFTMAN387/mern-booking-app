import './adminindex.css'
import RoomsMainDash from './maindash/RoomsMainDash';
import RightSide from './rightSide/RightSide';
import Sidebar from './sidebar/sidebar';

function AdminRoomsIndex() {
  return (
    <div className="App">
      <div className="AppGlass">
        {/* <Sidebar/>
        <MainDash/>
        <RightSide/> */}
        <Sidebar/>
        <RoomsMainDash/>
        <RightSide/>
       
      </div>
    </div>
  );
}

export default AdminRoomsIndex;