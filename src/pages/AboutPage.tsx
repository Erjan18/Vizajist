import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700">
          Welcome to our page. We are dedicated to providing exceptional service and value to our customers.
        </p>
      </div>
    </div>
  );
}