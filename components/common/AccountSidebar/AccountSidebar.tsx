"use client";

import { cn } from "@/lib/utils";

const accountLinks = [
  { id: "dashboard", label: "Dashboard" },
  { id: "orders", label: "Orders" },
  { id: "privacy", label: "Privacy & Security" },
  { id: "addresses", label: "Address Details" },
  { id: "paymentMethods", label: "Payment Methods" },
  { id: "giftCards", label: "Gift Cards & Coupons" },
  { id: "wishlist", label: "Whishlist" },
];

interface AccountSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function AccountSidebar({ activeTab, onTabChange }: AccountSidebarProps) {
  return (
    <ul className="space-y-2">
      {accountLinks.map((link) => (
        <li key={link.id}>
          <button
            onClick={() => onTabChange(link.id)}
            className={cn(
              "w-full text-left px-4 py-2 rounded-[10px] transition-colors border border-[#bbbbbb] lg:text-start text-center",
              activeTab === link.id
                ? "bg-[#F0BA43] border-[#f0ba43] text-white"
                : "hover:bg-gray-100"
            )}
          >
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  );
}