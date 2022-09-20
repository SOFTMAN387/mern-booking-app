import '../../admin/adminindex.css';
import MainDashUsers from './NewUsersIndex';
import RightSide from '../rightSide/RightSide';
import Sidebar from '../sidebar/sidebar';

function IndexUsers() {
  return (
    <div className="App">
      <div className="AppGlass">
        {/* <Sidebar/>
        <MainDash/>
        <RightSide/> */}
        <Sidebar/>
        <MainDashUsers/>
        <RightSide/>
       
      </div>
    </div>
  );
}

export default IndexUsers;