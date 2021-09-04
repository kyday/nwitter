import React, { useState } from "react";

function Auth() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({ email: "", password: "" });
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          name='email'
          type='email'
          placeholder='Email'
          value={form.email}
          onChange={(e) => onChange(e)}
        />

        <input
          name='password'
          type='password'
          placeholder='Password'
          value={form.password}
          onChange={(e) => onChange(e)}
        />

        <input type='submit' value='Log In' />
      </form>
    </div>
  );
}

export default Auth;
