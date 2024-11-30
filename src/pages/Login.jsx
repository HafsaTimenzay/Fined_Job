import React from "react";

const Login = () => {
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
