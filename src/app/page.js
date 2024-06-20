"use client";

import Weather from "@/components/Weather";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <Weather />
    </div>
  );
}
