import {useState, useEffect} from "react";
function Users(){
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  useEffect(() =>{
    getUsers()
  }, [])

  async function getUsers(){
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      setUsers(data)
  }

  async function addUser(){
      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          name,
          age
        })
      })
      setName("");
      setAge("");
      getUsers();
  }

  async function deleteUser(id) {
      await fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE"
      })
      getUsers();
  }
  
  return(
      <div>
          <h1>Lista użytkowników</h1>
            <input 
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input 
            type="Number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}/>
            <button onClick={addUser}>Add User</button>
            {users.map((user) => (
              <div key={user._id}>
                <p>
                  {user.name} - {user.age}
                </p>
                <button onClick={() => deleteUser(user._id)}>Delete</button>
              </div>

            ))}
      </div>
  )
}
export default Users;