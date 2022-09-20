 import React from 'react'
 import "./newhotels.css";
 
 const NewHotels = () => {
   return (
    <><div class="center" style={{ height: 400, width: '100%' }}>
 
 <section class="component">
 
 <div class="credit-card">
   <h2>Add New Hotel</h2>
   <form>
  <input type="file"  />
     
     <input type="text" placeholder="Name" />
     <div class="line"><input type="text" placeholder="Title" /> <input type="text" placeholder="Type" />
      <input type="number" placeholder='Price' />
       <input type="text" placeholder='Address' />
       <input type="text" placeholder='City' />
     </div>
     <div class="line">
     <label>Featured  : 
     <select placeholder='Featured'>
      <option>Yes</option>
      <option>No</option>
     </select>
     </label>

     <label>Rooms :
     <select placeholder='Featured'>
      <option>King room</option>
      <option>Taj Room</option>
      <option>Softman Room</option>
     </select>
     </label>
   
       <input class="litle" type="text" placeholder="Distance From City" />
       <input class="tall" type="text" placeholder="Description" />
     </div>
     <button type="submit" class="valid-button">Submit</button>
   </form>
 </div>
</section>
</div>
    </>
   )
 }
 
 export default NewHotels;