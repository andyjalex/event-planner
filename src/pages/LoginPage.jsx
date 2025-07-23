import { useState } from "react";
import { useFormik } from "formik";
import Register from "../components/Register";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  // Track whether the register screen should be shown
  const [showRegister, setShowRegister] = useState(false);
  // Track login state
  const [loggedIn, setLoggedIn] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  // Handle logout: clear form values and update login state
  const handleLogout = () => {
    formik.values.email = "";
    formik.values.password = "";
    setLoggedIn(false);
  };

  // Toggle between login and register views
  const handleToggleRegisterScreen = () => {
    console.log(showRegister);
    setShowRegister(true);
  };

  // Formik form setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      // Email validation
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      // Password validation
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Must be at least 8 characters";
      }

      console.log(errors);
      return errors;
    },

    // When the form is successfully submitted
    onSubmit: (values) => {
        console.log(values)
      login(values.email); // call login from context
      
      navigate("/", { replace: true }); // Redirect to homepage
    },
  });

  return (
    <div className="flex bg-gray-100 items-center justify-center">
      {/* Main container area */}
      <div
        className="flex flex-col items-center justify-center w-100"
        style={{ minHeight: `calc(100vh - 150px)` }}
      >
        {/* Show register screen if toggled */}
        {showRegister ? (
          <Register setShowRegister={setShowRegister} />
        ) : // If not logged in, show login form
        !loggedIn ? (
          <div
            className="flex flex-col items-center justify-center w-full"
            style={{ minHeight: "calc(50vh)" }}
          >
            <h2 className="m-4">Sign In</h2>
            <form
              className="flex flex-col items-center justify-center p-4 w-full"
              onSubmit={formik.handleSubmit}
            >
              {/* Email field */}
              <input
                className="w-full px-3 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="email"
                placeholder="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />

              {/* Password field */}
              <input
                className="w-full px-3 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="password"
                placeholder="password"
                type="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
              />

              {/* Error messages */}
              {formik.touched.password && formik.errors.password && (
                <div className="error">{formik.errors.password}</div>
              )}
              {formik.touched.email && formik.errors.email && (
                <div className="error">{formik.errors.email}</div>
              )}

              {/* Submit button (Login) */}
              <button
                type="submit"
                className="w-full px-3 py-2 mt-8 text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {loggedIn ? "Logout" : "Login"}
              </button>
            </form>
          </div>
        ) : (
          // If logged in, show welcome message
          <div>
            <h1>Welcome {formik.values.email}</h1>

            {/* Logout button */}
            <button
              type="button"
              className="my-2"
              onClick={loggedIn ? handleLogout : undefined}
            >
              {loggedIn ? "Logout" : "Login"}
            </button>
          </div>
        )}

        {/* Show register toggle if not logged in or registering */}
        {!showRegister && !loggedIn && (
          <div>
            Not Registered?
            <button
              className="px-4 rounded"
              style={{ border: "none" }}
              onClick={handleToggleRegisterScreen}
            >
              Register here.
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
