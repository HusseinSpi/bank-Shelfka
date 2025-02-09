import { Link, useNavigate } from "react-router-dom";

// components
import Input from "../components/Form/Input";
import Button from "../components/Form/Button";

const Signin = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/home", { replace: true });
  };

  return (
    <div className="flex flex-v-center flex-h-center h-full">
      <div className="bg" />
      <div className="text">
        <h1 className="text-shadow">Hello! 👋</h1>
        <p className="text-shadow">
          Please sign in to your account or sign up a new account.
        </p>

        <form
          method="post"
          action="/"
          className="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="form-line">
            <div className="label-line">
              <label htmlFor="email" className="text-shadow">
                Email
              </label>
            </div>
            <Input
              required
              tabIndex={0}
              name="email"
              type="email"
              autoComplete={false}
              placeholder="Please enter your email"
            />
          </div>
          <div className="form-line">
            <div className="label-line flex flex-h-center flex-space-between">
              <label htmlFor="password" className="text-shadow">
                Password
              </label>
              <Link to="/" className="text-shadow">
                Forgot password?
              </Link>
            </div>
            <Input
              required
              tabIndex={0}
              name="password"
              type="password"
              autoComplete={false}
              placeholder="Please enter your password"
            />
          </div>
          <div className="form-line">
            <Button type="submit" text="Sign in" tabIndex={0} />
          </div>
        </form>

        <div className="links">
          <Link to="/signup" className="text-shadow">
            Click here
          </Link>
          &nbsp;
          <span className="text-shadow">if you don&apos;t have an account</span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
