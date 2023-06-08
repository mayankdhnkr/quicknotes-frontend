import React, { useState , useEffect } from 'react'

const UserDetail = () => {
    const host = process.env.REACT_APP_API_URL;
    
    const [user, setUser] = useState({name:"",email:""})

    useEffect(() => {
        getUsers();
        // eslint-disable-next-line
    }, []);

    // Get all users
    const getUsers = async () => {
        // API CALL
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });
        const json = await response.json();
        setUser(json);
    };

  return (
      <div className="container ">
          <div className="mt-4 w-lg-75 mx-auto border border-opacity-75 border-3 p-5">
              <h1 className="mb-4">User Detail</h1>
              <h4>
                  Name : <span className="font-monospace">{user.name}</span>
              </h4>
              <h4>
                  Email : <span className="font-monospace">{user.email}</span>
              </h4>
          </div>
      </div>
  );
}

export default UserDetail