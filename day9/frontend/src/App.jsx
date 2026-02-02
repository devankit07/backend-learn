import { useState } from "react";
import axios from "axios"

const App = () => {
  const [user, setuser] = useState([
    {
      name: "user 1",
      email: "sampalegmail.com",
      age: "25",
    },
    { name: "user 2", email: "sampalegmail.com", age: "25" },
    {
      name: "user 3",
      email: "sampalegmail.com",
      age: "25",
    },
    { name: "user 4", email: "sampalegmail.com", age: "25" },
    { name: "user 4", email: "sampalegmail.com", age: "25" },
    { name: "user 4", email: "sampalegmail.com", age: "25" },
    { name: "user 4", email: "sampalegmail.com", age: "25" },
    { name: "user 4", email: "sampalegmail.com", age: "25" },
    { name: "user 4", email: "sampalegmail.com", age: "25" },
    { name: "user 4", email: "sampalegmail.com", age: "25" },
    { name: "user 4", email: "sampalegmail.com", age: "25" },

  ]);

  axios.get("http://localhost:8080/api/user").then((res)=>{
    setuser(res.data.note)
  })
  return <div className="users">
    {user.map(user=>{
      return <div className="user">
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
        <p>{user.age}</p>
      </div>
    })}
  </div>;
};

export default App;
