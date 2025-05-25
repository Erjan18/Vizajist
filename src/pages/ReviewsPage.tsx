import React from 'react';

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Reviews</h1>
      <div className="space-y-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="h-12 w-12 rounded-full bg-gray-200"></div>
            <div className="ml-4">
              <h3 className="font-semibold">John Doe</h3>
              <div className="flex text-yellow-400">★★★★★</div>
            </div>
          </div>
          <p className="text-gray-600">Sample review content</p>
        </div>
      </div>
    </div>
  );
}