import React, { useState } from "react";
import { authService } from "fbase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Auth() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [newCount, setNewCount] = useState(true);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    let data;
    e.preventDefault();

    try {
      if (newCount) {
        data = await createUserWithEmailAndPassword(
          authService,
          form.email,
          form.password
        );
        alert("회원가입이 완료되었습니다 !");
      } else {
        data = await signInWithEmailAndPassword(
          authService,
          form.email,
          form.password
        );
      }
    } catch (error) {
      alert("error");
    }

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

        <input type='submit' value={newCount ? "Create Account" : "Sign In"} />
      </form>
    </div>
  );
}

export default Auth;
