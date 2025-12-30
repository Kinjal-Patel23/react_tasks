import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const App = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    skills: [],
  });

  const [submitData, setSubmitData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleForm = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    if (!emailPattern.test(form.email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (form.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    setSubmitData(form);

    setForm({
      name: "",
      email: "",
      password: "",
      gender: "",
      skills: [],
    });
  };

  const handleInput = (e) => {
    const { name, value, checked } = e.target;

    if (name === "skills") {
      if (checked) {
        setForm({ ...form, skills: [...form.skills, value] });
      } else {
        setForm({
          ...form,
          skills: form.skills.filter((skill) => skill !== value),
        });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-2 items-center justify-center bg-linear-to-r from-pink-300 via-purple-500 to-blue-300">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Registration Form
        </h1>

        <form className="space-y-4" onSubmit={handleForm}>
          <input
            type="text"
            name="name"
            value={form.name}
            required
            placeholder="Full Name"
            onChange={handleInput}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email Address"
            onChange={handleInput}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              placeholder="Password"
              onChange={handleInput}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div>
            <p className="text-gray-700 font-semibold mb-2">Gender</p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="accent-purple-500"
                  onChange={handleInput}
                />
                Male
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="accent-purple-500"
                  onChange={handleInput}
                />
                Female
              </label>
            </div>
          </div>

          <div>
            <p className="text-gray-700 font-semibold mb-2">Skills</p>
            {["React js", "Node js", "Express js", "MongoDB"].map((skill) => (
              <label key={skill} className="block">
                <input
                  type="checkbox"
                  name="skills"
                  value={skill}
                  onChange={handleInput}
                />{" "}
                {skill}
              </label>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
      {submitData && (
        <div className="ml-8 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-2">Submitted Data</h2>
          <p>
            <strong>Name:</strong> {submitData.name}
          </p>
          <p>
            <strong>Email:</strong> {submitData.email}
          </p>
          <p>
            <strong>Gender:</strong> {submitData.gender}
          </p>
          <p>
            <strong>Skills:</strong> {submitData.skills.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
