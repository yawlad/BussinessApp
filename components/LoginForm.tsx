"use client";

import AuthService from "@/app/services/AuthService";
import dataStore from "@/stores/DataStore";
import { useState } from "react";

const LoginForm = () => {
  const [password, setPassword] = useState<string>("");
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      password,
    };

    try {
      await AuthService.login(data);
      dataStore.logIn()
    } catch (error) {
      console.error("Client Error:", error);
    }
  };

  return (
    <div className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center">
      <form action="" onSubmit={handleSubmit}>
        Password:{" "}
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
