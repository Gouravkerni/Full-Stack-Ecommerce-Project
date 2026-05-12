import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { email, password } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();

    const result = await login(email, password);

    if (result.success) {
      navigate("/");
    }

    // console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
  <div className="w-full max-w-md bg-card border border-border-soft rounded-2xl p-10">
    <h2 className="text-2xl font-medium mb-2">
      Welcome back
    </h2>
    <p className="text-sm text-text-muted mb-8">
      Discover calm. Continue shopping.
    </p>

    <form onSubmit={submitHandler} className="space-y-5">
      <div>
        <label className="block text-sm mb-1 text-text-muted">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChangeHandler}
          className="w-full rounded-xl border border-border-soft px-4 py-3 text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="block text-sm mb-1 text-text-muted">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onChangeHandler}
          className="w-full rounded-xl border border-border-soft px-4 py-3 text-sm focus:outline-none focus:border-accent"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-xl text-sm font-medium transition"
      >
        Login
      </button>
    </form>
  </div>
</div>

  );
};

export default Login;
