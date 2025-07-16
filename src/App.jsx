import { useState } from 'react';

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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1c1c1c] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-[#111] border border-purple-700 rounded-2xl shadow-xl shadow-purple-900/40 p-8 space-y-6"
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
          { name: 'spidrPin', placeholder: 'Spidr Pin' },
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
