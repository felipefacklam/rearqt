'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function FormUsuarioPage() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/loginPage');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  const handleAddUser = async (event) => {
    event.preventDefault();

    const newUser = {
      username,
      password,
    };

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      const data = await response.json();
      console.log('User created successfully:', data);

      // Clear form fields or display a success message
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Error creating user:', error);

      // Display an error message to the user
    }
  };

  return (
    <div>
      <h1>Add User</h1>

      <form onSubmit={handleAddUser}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
