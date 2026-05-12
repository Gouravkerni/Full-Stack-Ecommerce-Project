import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { name, email, password } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();

    const result = await register(name, email, password);

    if (result.success) {
      navigate("/login");
    }

    // console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
  <div className="w-full max-w-md bg-card border border-border-soft rounded-2xl p-10">
    <h2 className="text-2xl font-medium mb-2">
      Create account
    </h2>
    <p className="text-sm text-text-muted mb-8">
      Begin your calm journey
    </p>

    <form onSubmit={submitHandler} className="space-y-5">
      <input
        name="name"
        value={formData.name}
        onChange={onChangeHandler}
        placeholder="Full name"
        className="w-full rounded-xl border border-border-soft px-4 py-3 text-sm focus:outline-none focus:border-accent"
      />

      <input
        name="email"
        value={formData.email}
        onChange={onChangeHandler}
        placeholder="Email address"
        className="w-full rounded-xl border border-border-soft px-4 py-3 text-sm focus:outline-none focus:border-accent"
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={onChangeHandler}
        placeholder="Password"
        className="w-full rounded-xl border border-border-soft px-4 py-3 text-sm focus:outline-none focus:border-accent"
      />

      <button
        type="submit"
        className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-xl text-sm font-medium transition"
      >
        Register
      </button>
    </form>
  </div>
</div>

  );
};

export default Register;
