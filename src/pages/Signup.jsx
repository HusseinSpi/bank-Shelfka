import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Form/Input";
import Button from "../components/Form/Button";

const Registration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = JSON.stringify(formData);

    try {
      const response = await fetch("http://your-backend-url/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);

        navigate("/home", { replace: true });
      } else {
        console.error("Registration failed:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  };

  return (
    <div className="flex flex-v-center flex-h-center h-full">
      <div className="bg" />
      <div className="text">
        <h1 className="text-shadow">Create an Account</h1>
        <p className="text-shadow">Fill in your details to register.</p>

        <form
          method="post"
          action="/"
          className="form"
          noValidate
          onSubmit={handleSubmit}
        >
          {/* Username Field */}
          <div className="form-line">
            <div className="label-line">
              <label htmlFor="username" className="text-shadow">
                Username
              </label>
            </div>
            <Input
              required
              tabIndex={0}
              name="username"
              type="text"
              autoComplete="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          {/* Email Field */}
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
              autoComplete="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password Field */}
          <div className="form-line">
            <div className="label-line">
              <label htmlFor="password" className="text-shadow">
                Password
              </label>
            </div>
            <Input
              required
              tabIndex={0}
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Address Field */}
          <div className="form-line">
            <div className="label-line">
              <label htmlFor="address" className="text-shadow">
                Address
              </label>
            </div>
            <Input
              required
              tabIndex={0}
              name="address"
              type="text"
              autoComplete="street-address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Phone Number Field */}
          <div className="form-line">
            <div className="label-line">
              <label htmlFor="phone" className="text-shadow">
                Phone Number
              </label>
            </div>
            <Input
              required
              tabIndex={0}
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <div className="form-line">
            <Button type="submit" text="Register" tabIndex={0} />
          </div>
        </form>

        <div className="links">
          <span className="text-shadow">Already have an account? </span>
          <Link to="/login" className="text-shadow">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
