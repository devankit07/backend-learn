import { useState } from "react";
import axios from "axios";


const App = () => {
  const [user , setUser] = useState([]);

  axios.get("http://localhost:8000/api/user").then(res=>{
    setUser(res.data.user);
    console.log(res.data);
  })
  
  return (
    <div className="users">
      {user.map(user=>{
        return <div className="user">
          <h1>{user.name}</h1>
          <h3>{user.email}</h3>
          <p>{user.age}</p>
        </div>
      })}
      
    </div>
  )
}

export default App
