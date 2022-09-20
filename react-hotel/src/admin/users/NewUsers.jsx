 import React from 'react'
 import "./newusers.css";
 
 const NewUsers = () => {
   return (
    <><div class="center" style={{ height: 400, width: '100%' }}>

  <section class="component">
 
  <div class="credit-card">
    <h2>Add New User</h2>
    <form>
   <input type="file"  />
      
      <input type="text" placeholder="User Name" />
      <div class="line"><input type="email" placeholder="Email" /> <input type="password" placeholder="Password" />
       <input type="number" placeholder='Phone' />
        <input type="text" placeholder='Country' />
      </div>
      <div class="line">
        <input class="litle" type="text" placeholder="City" />
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
 
 export default NewUsers;