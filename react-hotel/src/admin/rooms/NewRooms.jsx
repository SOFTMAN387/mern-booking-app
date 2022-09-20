 import React from 'react'
 import "./newrooms.css";
 
 const NewRooms = () => {
   return (
    <><div class="center" style={{ height: 400, width: '100%' }}>
 
 <section class="component">
 
 <div class="credit-card">
   <h2>Add New Room</h2>
   <form>
  <input type="file"  />
     
     <input type="text" placeholder="Title" />
     <div class="line">
      <input type="number" placeholder='Price' />
       <input type="number" placeholder='Max-People' />
     </div>
     <div class="line">
       <input class="litle" type="text" placeholder="Description" />
       {/* <input class="tall" type="text" placeholder="CCV" /> */}
     </div>
     <button type="submit" class="valid-button">Submit</button>
   </form>
 </div>
</section>
</div>
    </>
   )
 }
 
 export default NewRooms;