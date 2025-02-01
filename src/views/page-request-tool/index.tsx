"use client";
import React, { useState } from "react";

const RequestToolUI = () => {
  const [feedback, setFeedback] = useState("");

  const handleSendFeedback = () => {
    const subject = encodeURIComponent("Tool Request Feedback");
    const body = encodeURIComponent(feedback);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=khan.zannat97@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank"); // Opens Gmail in a new tab
  };

  return (
    <div className="h-[calc(100vh-120px)] md:h-[calc(100vh-100px)] flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Request a New Tool
      </h1>

      <textarea
        className="w-full max-w-md p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
        placeholder="Feel free to describe the tool you need...😃"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        rows={4}
      />
      <button
        className="mt-4 px-6 py-2 bg-primary border border-primary hover:bg-transparent transition duration-500 text-white hover:text-primary font-semibold rounded-md disabled:bg-gray-400 disabled:border-gray-400 disabled:text-white disabled:cursor-not-allowed"
        onClick={handleSendFeedback}
        disabled={!feedback.trim()}
      >
        Send Request
      </button>
    </div>
  );
};

export default RequestToolUI;
