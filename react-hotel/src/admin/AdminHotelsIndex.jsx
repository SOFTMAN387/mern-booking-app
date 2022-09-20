import './adminindex.css'
import HotelsMainDash from './maindash/HotelsMainDash';
import RightSide from './rightSide/RightSide';
import Sidebar from './sidebar/sidebar';

function AdminHotelsIndex() {
  return (
    <div className="App">
      <div className="AppGlass">
        {/* <Sidebar/>
        <MainDash/>
        <RightSide/> */}
        <Sidebar/>
        <HotelsMainDash/>
        <RightSide/>
       
      </div>
    </div>
  );
}

export default AdminHotelsIndex;