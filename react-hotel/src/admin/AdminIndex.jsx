import './adminindex.css'
import MainDash from './maindash/MainDash';
import RightSide from './rightSide/RightSide';
import Sidebar from './sidebar/sidebar';

function AdminIndex() {
  return (
    <div className="App">
      <div className="AppGlass">
        {/* <Sidebar/>
        <MainDash/>
        <RightSide/> */}
        <Sidebar/>
        <MainDash/>
        <RightSide/>
       
      </div>
    </div>
  );
}

export default AdminIndex;