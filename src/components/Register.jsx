import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = ({ setShowRegister }) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  // Formik hook to manage form state, validation, and submission
  const formik = useFormik({
    initialValues: {
      firstName: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
      const errors = {};

      // Validate first name
      if (!values.firstName) {
        errors.firstName = "Required";
      } else if (values.firstName.length > 15) {
        errors.firstName = "Must not exceed 15 characters";
      }

      // Validate surname
      if (!values.surname) {
        errors.surname = "Required";
      } else if (values.surname.length > 20) {
        errors.surname = "Must not exceed 20 characters";
      }

      // Validate email
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      // Validate password (minimum 8 characters, uppercase, lowercase, number, special char)
      if (!values.password) {
        errors.password = "Password is required";
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(values.password)
      ) {
        errors.password =
          "Must be 8+ characters, include uppercase, lowercase, number, and special character";
      }

      // Validate password confirmation
      if (!values.confirmPassword) {
        errors.confirmPassword = "Required";
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords must match";
      }

      return errors;
    },

    // On successful form submission
    onSubmit: (values) => {
      login(values.email); // call login from context
      navigate("/", { replace: true }); // Redirect to homepage
    },
  });

  return (
    <div className="flex flex-col flex-grow items-center justify-center w-full" style={{ minHeight: 'calc(100vh - 150px)' }}>
        <h2 className="mb-4 text-white">Sign Up</h2>
      {/* Register form */}
      <h2 className="m-4">Register</h2>
      <form
        className="flex flex-col p-4 rounded w-full"
        onSubmit={formik.handleSubmit}
      >
        {/* First Name Field */}
        <label htmlFor="firstName">First Name</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="firstName"
          name="firstName"
          placeholder="Bob"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div className="error">{formik.errors.firstName}</div>
        )}

        {/* Surname Field */}
        <label htmlFor="surname">Surname</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="surname"
          name="surname"
          placeholder="Jones"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.surname}
        />
        {formik.touched.surname && formik.errors.surname && (
          <div className="error">{formik.errors.surname}</div>
        )}

        {/* Email Field */}
        <label htmlFor="email">Email</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="email"
          name="email"
          placeholder="bob@mail.com"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}

        {/* Password Field */}
        <label htmlFor="password">Password</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="password"
          name="password"
          type="password"
          placeholder="******"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="error">{formik.errors.password}</div>
        )}

        {/* Confirm Password Field */}
        <label htmlFor="confirmPassword" className="w-full px-3 py-2" >Confirm Password</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="******"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className="error">{formik.errors.confirmPassword}</div>
        )}

        {/* Submit Button */}
        <button type="submit" className="w-full px-3 py-2 mt-8 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          Register
        </button>
      </form>

      {/* Back to login button */}
      <button
        onClick={() => setShowRegister(false)}
        className="w-full px-3 py-2 text-center rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ border: "none"}}
      >
        Back to Login
      </button>
    </div>
  );
};

export default Register;
