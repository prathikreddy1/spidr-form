import { useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    airFryerCost: '',
    spidrPin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-black overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute top-0 left-0 w-full h-full z-0"
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "#0f0f0f",
            },
          },
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 1,
            },
            opacity: {
              value: 0.3,
            },
            color: {
              value: "#ffffff",
            },
          },
        }}
      />

      {/* Form Box */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-xl bg-[#111] border border-purple-700 rounded-2xl shadow-xl shadow-purple-900/40 p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-white tracking-wider">
          Spidr Interest Form 🕸️
        </h2>
        {[
          { name: 'firstName', placeholder: 'First Name' },
          { name: 'lastName', placeholder: 'Last Name' },
          { name: 'phone', placeholder: 'Phone Number' },
          { name: 'email', placeholder: 'Email Address', type: 'email' },
          { name: 'airFryerCost', placeholder: 'Guess Air Fryer Cost ($)', type: 'number' },
          { name: 'spidrPin', placeholder: 'Spidr Pin (####-####-####-####)' },
        ].map(({ name, placeholder, type = 'text' }) => (
          <input
            key={name}
            name={name}
            placeholder={placeholder}
            type={type}
            value={formData[name]}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-[#222] text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        ))}
        <button
          type="submit"
          className="w-full py-3 text-white font-semibold rounded bg-purple-600 hover:bg-purple-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
