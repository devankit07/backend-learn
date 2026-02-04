import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  function fetchnotes() {
    axios
      .get("https://student-portal-nsv4.onrender.com/api/user")
      .then((res) => {
        setUser(res.data.note);
      });
  }

  useEffect(() => {
    fetchnotes();
  }, []);

  // API: CREATE
  function handlesubmit(e) {
    e.preventDefault();
    const { name, email, age } = e.target.elements;
    axios
      .post("https://student-portal-nsv4.onrender.com/api/user", {
        name: name.value,
        email: email.value,
        age: age.value,
      })
      .then(() => {
        fetchnotes();
        e.target.reset();
      });
  }

  // API: DELETE
  function handledelete(noteId) {
    axios
      .delete("https://student-portal-nsv4.onrender.com/api/user/" + noteId)
      .then(() => {
        fetchnotes();
      });
  }

  // UI: TOGGLE EDIT MODE
  function startEdit(u) {
    setEditId(u._id);
    setEditFormData({ name: u.name, email: u.email, age: u.age });
  }

  // API: UPDATE
  // API: UPDATE (Using PATCH for Age only)
  function handleUpdateSubmit(id) {
    axios
      .patch("https://student-portal-nsv4.onrender.com/api/user/" + id, {
        age: editFormData.age,
      })
      .then(() => {
        setEditId(null);
        fetchnotes();
      })
      .catch((err) => console.log("Update error:", err));
  }

  return (
    <div className="app-wrapper">
      <h1>User Managment Portal</h1>
      <div className="form-section">
        <form className="user-form" onSubmit={handlesubmit}>
          <input name="name" type="text" placeholder="Name" required />
          <input name="email" type="text" placeholder="Email" required />
          <input name="age" type="text" placeholder="Age" required />
          <button className="add-btn">Add New User</button>
        </form>
      </div>

      <div className="users">
        {user.map((val) => (
          <div className="user" key={val._id}>
            {editId === val._id ? (
              <div className="edit-view">
                <input
                  value={editFormData.name}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, name: e.target.value })
                  }
                />
                <input
                  value={editFormData.email}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, email: e.target.value })
                  }
                />
                <input
                  value={editFormData.age}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, age: e.target.value })
                  }
                />
                <div className="btn-row">
                  <button
                    className="save-btn"
                    onClick={() => handleUpdateSubmit(val._id)}
                  >
                    Save
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={() => setEditId(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="display-view">
                <div className="avatar">{val.name.charAt(0)}</div>
                <h2>{val.name}</h2>
                <h3>{val.email}</h3>
                <p>Age: {val.age}</p>
                <div className="btn-row">
                  <button
                    className="del-btn"
                    onClick={() => handledelete(val._id)}
                  >
                    Delete
                  </button>
                  <button className="upd-btn" onClick={() => startEdit(val)}>
                    Update Age
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
