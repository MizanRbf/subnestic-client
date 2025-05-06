import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";

// Register Component
const Register = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [passError, setPassError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Handle ShowPassword
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Context
  const { createUser, updateUser, googleLogin } = useContext(AuthContext);

  // Handle Google SignIn
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  // Handle Register
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setPassError("");

    // Password Verification
    if (password.length < 6) {
      setPassError("Must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPassError("Must have an Uppercase letter in the password ");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPassError("Must have a Lowercase letter in the password ");
      return;
    }

    setErrorMessage("");

    // CreateUser

    createUser(email, password)
      .then(() => {
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {})
          .catch((error) => {
            setErrorMessage(error);
          });
        Swal.fire({
          title: "Good job!",
          text: "You have registered successfully!",
          icon: "success",
        });
        navigate("/auth/login");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-center">Register your account</h2>
        <hr className="border-base-300 my-3" />

        <form onSubmit={handleRegister} className="fieldset">
          {/* Name */}
          <label className="label">Your Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Enter your Name"
            required
          />
          {/* Photo */}
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input w-full"
            placeholder="Enter your photo url"
            required
          />
          {/*Email */}
          <label className="label">Email Address</label>
          <input
            type="email"
            name="email"
            className="input  w-full"
            placeholder="Enter your email address"
            required
          />
          {/* Password */}
          <label className="label">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input  w-full"
              placeholder="Enter your password"
              required
            />
            <button
              className="absolute top-3 right-8 cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <FaEye size={15} /> : <LuEyeClosed size={15} />}
            </button>
          </div>

          <p className="text-red-500">{passError}</p>
          {/* CheckBox */}
          <label className="label">
            <input type="checkbox" className="checkbox" />
            Accept terms & conditions
          </label>

          <button type="submit" className="btn btn-primary mt-4 text-white">
            Register
          </button>
        </form>
        {/* ErrorMessage */}
        <p className="text-red-500">{errorMessage}</p>

        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-red-600" to="/auth/login">
            Login
          </Link>
        </p>
        {/* Google Button*/}
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-black mt-3 border-primary"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
