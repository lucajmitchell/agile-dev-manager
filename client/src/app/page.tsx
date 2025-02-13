"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
      <div className="grid grid-cols-4 gap-4">
        {users.map(user => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent>
              Hello, {user.name}! Your email is {user.email}. Your password is {user.password}.
            </CardContent>
            <CardFooter>
              <Button>Button</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default Home;
