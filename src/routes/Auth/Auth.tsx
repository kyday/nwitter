import React, { useState } from "react";
import { authService } from "fbase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ReactComponent as Icon } from "../../images/icon.svg";

function Auth() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [newCount, setNewCount] = useState(true);

  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (newCount) {
        await createUserWithEmailAndPassword(
          authService,
          form.email,
          form.password
        )
          .then(() => alert("회원가입이 완료되었습니다 !"))
          .catch((e) => console.log(e));
      } else {
        await signInWithEmailAndPassword(
          authService,
          form.email,
          form.password
        );
      }
    } catch (e) {
      console.log(e);
      // setError(error);
    }

    setForm({ email: "", password: "" });
  };

  return (
    <div>
      <img
        alt='mainBackground'
        src='https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png'
      />
      <Icon height='fit-content' />
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
        {error}
      </form>
    </div>
  );
}

export default Auth;
