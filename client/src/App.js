import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {(typeof backendData === "object" && backendData.length > 0) ? (
          backendData.map((user) => (
            <li key={user.id}>
              {user.username}, {user.password}
            </li>
          ))
        ) : (
          <li>No users</li>
        )}
      </ul>
    </div>
  );
}

export default App;
