"use client";

import React, { useState } from "react";

interface Coupon {
  id: number;
  title: string;
  description: string;
  discount: number;
  validUntil: string;
  minOrder: string;
  cashback: string;
  code: string;
}

const coupons: Coupon[] = [
  {
    id: 1,
    title: "70% Discount Coupon",
    description: "Get 70% off on your entire order on all prepaid items",
    discount: 70,
    validUntil: "15.12.2026",
    minOrder: "$200",
    cashback: "+5%",
    code: "SAVE70",
  },
  {
    id: 2,
    title: "20% Discount Coupon",
    description: "Get 20% off on your entire order on all bulk flowers",
    discount: 20,
    validUntil: "15.12.2026",
    minOrder: "$200",
    cashback: "+5%",
    code: "SAVE20",
  },
  {
    id: 3,
    title: "Festive Sale",
    description: "Get 50% off on your entire order on all flowers",
    discount: 50,
    validUntil: "15.12.2026",
    minOrder: "$200",
    cashback: "+5%",
    code: "FESTIVE50",
  },
];

export function GiftCards() {
  const [giftCardBalance] = useState(200.0);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleShowCode = (code: string) => {
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="grid lg:grid-cols-10 grid-cols-1 lg:gap-6">
      {/* Header */}
      <div className="flex items-center justify-between col-span-10">
        <h2 className="text-2xl font-bold">Gift Cards & Coupons</h2>
      </div>

      {/* Gift Card Balance Section */}
      <div className="flex flex-col gap-4 col-span-6 ">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-700">Your Gift Card Balance:</p>
          <p className="text-lg font-bold">${giftCardBalance.toFixed(2)}</p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
          <button className="bg-[#F0BA43] text-[#1D1D1D] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
            Update your balance
          </button>
          <button className="border border-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Redeem your gift card
          </button>
        </div>
      </div>

      {/* Coupon Card Details Section */}
      <div className="flex flex-col gap-4 col-span-9">
        <h3 className="text-lg font-semibold">Gift Coupon Card Details</h3>

        <div className="flex flex-col gap-4">
          {coupons.map((coupon) => (
            <div key={coupon.id} className="border border-gray-200 rounded-lg p-6 flex items-start justify-between gap-6">
              {/* Left content */}
              <div className="flex-1 flex flex-col gap-3">
                <h4 className="font-semibold text-base">{coupon.title}</h4>
                <p className="text-sm text-gray-600">{coupon.description}</p>
                <p className="text-xs text-gray-500">
                  Valid until: {coupon.validUntil} • Min. order {coupon.minOrder} • +{coupon.cashback} Cashback
                </p>
                <button className="text-sm font-semibold text-gray-800 hover:text-gray-600 transition-colors w-fit">
                  More details
                </button>
              </div>

              {/* Right content: discount % and button */}
              <div className="flex flex-col items-end gap-4 shrink-0">
                <div className="text-center">
                  <p className="text-3xl font-bold">{coupon.discount}%</p>
                  <p className="text-sm font-semibold">OFF</p>
                </div>
                <button
                  onClick={() => handleShowCode(coupon.code)}
                  className="bg-[#F0BA43] text-[#1D1D1D] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm"
                >
                  {copiedCode === coupon.code ? "Copied!" : "Show Code"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
