import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Form/Input";
import Button from "../components/Form/Button";

const EmailVerification = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState("");

  // Handle input changes for the verification code
  const handleChange = (e) => {
    setVerificationCode(e.target.value);
  };

  // Handle form submission to verify the code
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the payload in JSON format
    const payload = JSON.stringify({ code: verificationCode });

    try {
      // Send the verification code to the back-end
      const response = await fetch("http://your-backend-url/api/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      });

      if (response.ok) {
        // Successful verification
        const data = await response.json();
        console.log("Verification successful:", data);
        // Redirect the user to the login page or home page after successful verification
        navigate("/login", { replace: true });
      } else {
        // Handle errors returned by the back end
        console.error("Verification failed:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred during verification:", error);
    }
  };

  return (
    <div className="flex flex-v-center flex-h-center h-full">
      <div className="bg" />
      <div className="text">
        <h1 className="text-shadow">Email Verification</h1>
        <p className="text-shadow">
          Enter the verification code sent to your email.
        </p>

        <form className="form" noValidate onSubmit={handleSubmit}>
          <div className="form-line">
            <div className="label-line">
              <label htmlFor="code" className="text-shadow">
                Verification Code
              </label>
            </div>
            <Input
              required
              tabIndex={0}
              name="code"
              type="text"
              placeholder="Enter your code"
              value={verificationCode}
              onChange={handleChange}
            />
          </div>
          <div className="form-line">
            <Button type="submit" text="Verify" tabIndex={0} />
          </div>
        </form>

        <div className="links">
          <Link to="/resend-code" className="text-shadow">
            Resend Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
