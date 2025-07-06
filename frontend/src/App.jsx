import React, { useState } from 'react';
import axios from 'axios';
import BusinessCard from './components/BusinessCard';

import './index.css';

function App() {
  const [form, setForm] = useState({ name: '', location: '' });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post('https://growthproai-xd6i.onrender.com/business-data', form);
    setData(res.data);
    setLoading(false);
  };

  const regenerateHeadline = async () => {
    const res = await axios.get(`https://growthproai-xd6i.onrender.com/regenerate-headline?name=${form.name}&location=${form.location}`);
    setData((prev) => ({ ...prev, headline: res.data.headline }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white shadow-md p-6 rounded-xl mb-6">
        <h1 className="text-xl font-semibold mb-4">Local Business Dashboard</h1>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
          type="text"
          placeholder="Business Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="input mb-4"
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          required
        />
        <button
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          type="submit">
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>

      {data && (
        <BusinessCard data={data} onRegenerate={regenerateHeadline} />
      )}
    </div>
  );
}

export default App;