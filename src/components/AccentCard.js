// components/AccentCard.js
import React from "react";

export default function AccentCard({ children, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-purple-100 to-purple-50 shadow-md ring-1 ring-purple-200/60 ${className}`}>
      {/* Accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-purple-600/80" />
      <div className="p-6 sm:p-8">{children}</div>
    </div>
  );
}
