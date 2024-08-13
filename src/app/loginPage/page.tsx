"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      setError("Usuário ou senha incorretos");
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow justify-center items-center p-10 bg-zinc-200">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 w-1/4 p-10 bg-green-primary rounded-xl text-brown-primary font-bold"
        >
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
            required
          />
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="button-login">
            Login
          </button>
          {error && <div className="text-red-500">{error}</div>}
        </form>
      </div>
      <Footer />
    </div>
  );
}
