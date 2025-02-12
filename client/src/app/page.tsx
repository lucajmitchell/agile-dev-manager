"use client";

import { useEffect, useState } from "react";

function Home() {

  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => { setUsers(data); });
  }, []);

  return (
    <main>
      <h1>Users:</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}, {user.email}, {user.password}</li>
        ))}
      </ul>
    </main>
  );
}

export default Home;
