// components/ProfilePage.js
import React, { useState } from 'react';
import SignedInNavbar from './SignedInNavbar';

const ProfilePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const notifications = [
    { text: 'Selena comments on your post about Algorithm tasks', time: '20 minutes ago', type: 'comment', icon: '💬' },
    { text: 'Well done! You have submitted your task', time: 'Yesterday', type: 'success', icon: '✅' },
    { text: 'Your task is overdue for 13 hours and 25 minutes', time: '23 August 2024', type: 'task', icon: '⚠️' },
    { text: 'Mr. Dika added new quiz on PHP course', time: '28 September 2024', type: 'event', icon: '📅' },
  ];

  return (
    <div>
      <SignedInNavbar />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Profile Page</h1>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1">
            <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
              <img src="/default-avatar.png" alt="Profile" className="rounded-full mb-4" />
              <h2 className="text-xl font-bold text-center">John Doe</h2>
              <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg">Profile</button>
              <button className="w-full bg-gray-200 text-gray-700 py-2 mt-2 rounded-lg">Message</button>
            </div>

            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Links</h3>
              <div className="space-y-2">
                <input type="text" placeholder="Website" className="w-full p-2 border rounded" />
                <input type="text" placeholder="X/Twitter" className="w-full p-2 border rounded" />
                <input type="text" placeholder="LinkedIn" className="w-full p-2 border rounded" />
                <input type="text" placeholder="YouTube" className="w-full p-2 border rounded" />
                <input type="text" placeholder="Facebook" className="w-full p-2 border rounded" />
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full p-2 border rounded" />
                <input type="text" placeholder="Last Name" className="w-full p-2 border rounded" />
                <textarea placeholder="Bio" className="w-full p-2 border rounded col-span-2"></textarea>
                <textarea placeholder="Description" className="w-full p-2 border rounded col-span-2"></textarea>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Image Preview</h3>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="w-full h-48 bg-gray-200 flex justify-center items-center mb-4">
                    <span className="text-gray-400">No image selected</span>
                  </div>
                  <input type="file" className="mb-2" />
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">Save Image</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProfilePage;
