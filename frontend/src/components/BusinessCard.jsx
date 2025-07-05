import React from 'react';
const BusinessCard = ({ data, onRegenerate }) => (
  <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-full text-center">
    <h2 className="text-2xl font-bold mb-2">{data.rating}★</h2>
    <p className="text-gray-600 mb-2">{data.reviews} reviews</p>
    <p className="italic text-lg mb-4">"{data.headline}"</p>
    <button className="btn" onClick={onRegenerate}>Regenerate SEO Headline</button>
  </div>
);

export default BusinessCard;