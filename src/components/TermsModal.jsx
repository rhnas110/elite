import React from 'react';

export default function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg max-w-lg w-full p-8">
        <h2 className="text-2xl font-semibold mb-4">Terms & Conditions</h2>
        <p className="text-sm mb-6">
          Welcome to our company. These terms and conditions outline the rules and regulations for the use of our
          platform. By accessing this website, you agree to comply with these terms. Please read them carefully. 
          <br /><br />
          1. Usage of our services is subject to compliance with all applicable laws.  
          <br />
          2. Users are responsible for keeping their accounts secure.
          <br />
          3. We reserve the right to terminate or suspend accounts that violate our guidelines.
          <br />
          4. Any data submitted will be handled in accordance with our privacy policy.
          <br /><br />
          For more detailed information, please reach out to our support team.
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
