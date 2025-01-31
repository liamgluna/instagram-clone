import { useState } from "react";

const LoginForm = ({ darkMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = email.trim() === "" || password.trim() === "";

  return (
    <div className="flex flex-col items-center">
      <div
        className={`mb-6 flex w-80 flex-col items-center rounded border p-8 ${
          darkMode ? "border-gray-600 bg-black" : "border-gray-300 bg-white"
        }`}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          alt="Instagram Logo"
          className={`mb-8 h-16 ${darkMode ? "filter invert" : ""}`}
        />

        <form className="w-full">
          <input
            type="email"
            placeholder="Phone number, username, or email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mb-2 h-10 w-full rounded border px-3 text-sm ${
              darkMode
                ? "border-gray-600 bg-zinc-900 text-white"
                : "border-stone-300 bg-gray-100 text-gray-700"
            }`}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`mb-2 h-10 w-full rounded border px-3 text-sm ${
              darkMode
                ? "border-gray-600 bg-zinc-900 text-white"
                : "border-stone-300 bg-gray-100 text-gray-700"
            }`}
          />
          <button
            className={`mt-2 h-9 w-full rounded text-lg font-semibold text-white ${
              isDisabled ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500"
            }`}
            disabled={isDisabled}
          >
            Log in
          </button>
          <div className="my-4 flex items-center justify-between">
            <hr className="w-1/3 border-gray-400" />
            <span className="text-sm font-semibold text-gray-600">OR</span>
            <hr className="w-1/3 border-gray-400" />
          </div>
          <div className="mt-3 flex items-center justify-center font-semibold text-blue-700">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
              className="mr-2 w-5"
              alt="Facebook logo"
            />
            <a href="#">Log in with Facebook</a>
          </div>
          <div className="mt-3 text-center">
            <a href="#" className="text-sm text-blue-500">
              Forgot password?
            </a>
          </div>
        </form>
      </div>

      <div
        className={`w-80 border p-4 text-center text-sm ${
          darkMode
            ? "border-gray-600 bg-black text-white"
            : "bg-white text-black"
        }`}
      >
        <span>
          Don't have an account?{" "}
          <a href="#" className="font-semibold text-blue-500">
            Sign up
          </a>
        </span>
      </div>

      <div className="mt-4 text-center text-sm">
        <p className={`${darkMode ? "text-white" : "text-black"}`}>
          Get the app.
        </p>
        <div className="mt-4 flex">
          <img
            src="https://static.cdninstagram.com/rsrc.php/v4/yt/r/Yfc020c87j0.png"
            className="mx-1 h-10"
            alt="App store"
          />
          <img
            src="https://static.cdninstagram.com/rsrc.php/v4/yz/r/c5Rp7Ym-Klz.png"
            className="mx-1 h-10"
            alt="Google Play"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
