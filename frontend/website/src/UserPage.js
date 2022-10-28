import { useState } from "react";
import { Link } from "react-router-dom";

function User({ user }) {
  const [active, setActive] = useState(user.is_active)
  function clickEvent(e){
    setActive(!active);
  }
  return(
    <a href="#" className={"list-group-item list-group-item-action "+(active ? "active" : "")} aria-current="true">
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-1">{user.name}</h6>
        <small>{active ? "Active" : "Inactive"}</small>
      </div>
      <p className="mb-1">{user.email}</p>
      <button onClick={clickEvent} type="button" className={active ? "btn btn-outline-warning" : "btn btn-outline-primary"}>{active ? "Deactivate" : "Activate"}</button>
    </div>
    </a>
  )
}

function UserList({ users }){
  return <div className="list-group">
    {users.map((user) => <User user={user} key={user.name}></User>)}
  </div>
}

const userList = [
  {
    name: "Gabriel",
    is_active: true,
    email: "gabriel@tec.mx"
  },
  {
    name: "Vanessa",
    is_active: true,
    email: "vanessa@tec.mx"
  }
]

function UserPage() {
  return (
    <>
    <h1>User List</h1>
    <UserList users={userList}></UserList>
    <Link to ="/">
      <button type="button" className="btn btn-outline-primary">Return to Home</button>
    </Link>
    </>
  );
}

export default UserPage;