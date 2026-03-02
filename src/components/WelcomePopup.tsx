import React, { useState } from "react";
import { X, Ticket, CheckCircle } from "lucide-react";

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Physiotherapy",
  });

  // Generate a unique 8-character token
  const generateToken = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `HEAL-${result}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToken = generateToken();
    setToken(newToken);
    setSubmitted(true);
    // Here you would typically send formData + newToken to your database
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl bg-white overflow-hidden rounded-2xl flex flex-col md:flex-row shadow-2xl">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 p-1 rounded-full bg-white/20 hover:bg-red-600 text-maroon-900 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Visual Side (Left) */}
        <div className="md:w-1/2 bg-maroon-900 relative min-h-[200px]">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
            alt="Healing Hands"
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-900 via-transparent to-transparent p-8 flex flex-col justify-end">
            <h2 className="text-3xl font-bold text-white leading-tight">
              Begin Your <br />
              <span className="text-red-500">Transformation</span>
            </h2>
            <p className="text-red-100 mt-2 text-sm">
              Join our holistic circle for exclusive sessions.
            </p>
          </div>
        </div>

        {/* Form Side (Right) */}
        <div className="md:w-1/2 p-8 lg:p-12 bg-white flex flex-col justify-center">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-maroon-900">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full border-b-2 border-maroon-100 focus:border-red-600 outline-none py-2 transition-all"
                  placeholder="John Doe"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-maroon-900">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  className="w-full border-b-2 border-maroon-100 focus:border-red-600 outline-none py-2 transition-all"
                  placeholder="hello@healing.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="space-y-1 text-maroon-900">
                <label className="text-[10px] uppercase tracking-widest font-bold">
                  Interested In
                </label>
                <select
                  className="w-full bg-transparent border-b-2 border-maroon-100 focus:border-red-600 py-2 outline-none cursor-pointer"
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                >
                  <option>Physiotherapy</option>
                  <option>Face Reading</option>
                  <option>Past Life Regression</option>
                  <option>Breast Therapy</option>
                  <option>Sahaja Yoga</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg mt-4"
              >
                GENERATE MY HEALING TOKEN
              </button>
            </form>
          ) : (
            <div className="text-center animate-in fade-in zoom-in duration-500">
              <div className="flex justify-center mb-4">
                <CheckCircle size={64} className="text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-maroon-900">
                Welcome, {formData.name}!
              </h3>
              <p className="text-gray-500 mt-2">
                Your unique session token is:
              </p>

              <div className="mt-6 p-6 bg-maroon-50 rounded-xl border-2 border-dashed border-maroon-200">
                <span className="text-3xl font-mono font-black text-maroon-900 tracking-tighter">
                  {token}
                </span>
              </div>

              <p className="text-xs text-gray-400 mt-6 uppercase tracking-widest">
                Quote this token during your first consultation
              </p>

              <button
                onClick={() => setIsOpen(false)}
                className="mt-8 text-maroon-900 font-bold hover:text-red-600 transition-colors"
              >
                Continue to Website →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
