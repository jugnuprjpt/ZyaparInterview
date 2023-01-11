import React, { useState } from "react";

function ZyparInterview() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(null);

  const [users, setUsers] = useState([]);

  const addUser = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      adress,
    };

    if (edit) {
      let copy = users;
      Object.assign(copy[active], user);
      setUsers([...copy]);

      setActive(null);
      setEdit(false);
    } else {
      setUsers([...users, user]);
    }
    setName("");
    setEmail("");
    setAdress("");
  };

  const handelEdit = (index) => {
    const user = users[index];
    setName(user.name);
    setEmail(user.email);
    setAdress(user.adress);

    setActive(index);
    setEdit(true);
  };

  const handelDelete = (index) => {
    users.splice(index, 1);
    setUsers([...users]);
  };

  return (
    <>
      <h1 style={{marginLeft:"650px"}}>Crud operation Employee new added</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
            <form onSubmit={addUser}>
              <div className="form-group">
                <label htmlFor="">Employe Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="">Employe Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="">Employe Adress</label>
                <input
                  type="text"
                  className="form-control"
                  value={adress}
                  onChange={(e) => setAdress(e.target.value)}
                />
              </div>
              <button className=" btn btn-success form-control mt-3">
                {edit ? "Update" : "Add"}
              </button>
            </form>
          </div>
        </div>
        <table className=" table table-bordered mt-5">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Adress</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.adress}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => handelEdit(index)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handelDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ZyparInterview;
