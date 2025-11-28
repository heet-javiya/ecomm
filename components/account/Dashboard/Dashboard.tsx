"use client";

import React from "react";

export function Dashboard() {
  return (
    <div className="flex flex-col sm:items-start items-center gap-2.5 sm:gap-4">
      <h2 className="text-base sm:text-2xl font-bold text-text-dark">Hello Thomas !</h2>
      <p className="text-xs sm:text-base leading-6 text-center sm:text-start text-text-gray">From your account dashboard. you can easily check & view your recent orders,
        manage your shipping and billing addresses and edit your password and account details.
      </p>
    </div>
  );
}
