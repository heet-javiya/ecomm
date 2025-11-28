"use client";

import React, { useState } from "react";
import AddressForm from "@/components/account/AddressForm/AddressForm";

export type Address = {
  id: number;
  name: string;
  streetAddress?: string;
  buildingNumber?: string;
  streetName?: string;
  city?: string;
  state?: string;
  postCode?: string;
  country?: string;
  phone?: string;
};

interface Props {
  addresses?: Address[];
  onAdd?: () => void;
  onEdit?: (a: Address) => void;
  onRemove?: (id: number) => void;
  view?: "list" | "form";
  onViewChange?: (view: "list" | "form") => void;
  onSave?: (data: Omit<Address, "id"> & Partial<Pick<Address, "id">>) => void;
}

export function Addresses(props: Props) {
  const isControlled = Array.isArray(props.addresses);

  // internal state used when uncontrolled (no props passed)
  const [internalAddresses, setInternalAddresses] = useState<Address[]>([
    {
      id: 1,
      name: "Thomas",
      streetAddress: "82754 Christopher Ferry",
      city: "Romaguerastad",
      state: "MT",
      postCode: "84320-6068",
      country: "",
      phone: "726 528 942",
    },
  ]);

  const addresses = isControlled ? (props.addresses as Address[]) : internalAddresses;

  // view state for standalone mode: either show list or form
  const [view, setView] = useState<"list" | "form">("list");
  const [editing, setEditing] = useState<Address | null>(null);

  // Use parent view if provided, otherwise use internal view
  const currentView = props.view ?? view;

  function handleAddClick() {
    if (isControlled) {
      if (props.onAdd) props.onAdd();
      if (props.onViewChange) props.onViewChange("form");
      return;
    }
    setEditing(null);
    setView("form");
  }

  function handleEditClick(a: Address) {
    if (isControlled) {
      setEditing(a);
      if (props.onEdit) props.onEdit(a);
      if (props.onViewChange) props.onViewChange("form");
      return;
    }
    setEditing(a);
    setView("form");
  }

  function handleRemove(id: number) {
    if (isControlled) {
      if (props.onRemove) props.onRemove(id);
      return;
    }
    setInternalAddresses((prev) => prev.filter((p) => p.id !== id));
  }

  function handleSave(data: Omit<Address, "id"> & Partial<Pick<Address, "id">>) {
    if (isControlled) {
      // Call parent's onSave callback to save the data
      if (props.onSave) {
        props.onSave(data);
      }
      if (props.onViewChange) props.onViewChange("list");
      return;
    }

    if (data.id) {
      setInternalAddresses((prev) => prev.map((p) => (p.id === data.id ? { ...p, ...(data as Address) } : p)));
    } else {
      const nextId = internalAddresses.length ? Math.max(...internalAddresses.map((s) => s.id)) + 1 : 1;
      setInternalAddresses((prev) => [...prev, { ...(data as Address), id: nextId }]);
    }
    setView("list");
  }

  function handleCancel() {
    if (isControlled) {
      if (props.onViewChange) props.onViewChange("list");
      return;
    }
    setView("list");
  }

  if (currentView === "form") {
    return (
      <div className="flex flex-col gap-10">
        <AddressForm initialData={editing} onCancel={handleCancel} onSave={handleSave} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="lg:flex-row flex-col flex justify-between">
        <h2 className="text-2xl font-bold">Address Inforamtion</h2>

        <button
          onClick={handleAddClick}
          className="bg-amber-400 text-white px-8 py-3 rounded-md text-[20px] font-semibold hover:bg-amber-500 inline-flex gap-5 items-center"
        >
          <img src="/images/categories/add-square.png" alt="" className="flex-1 w-6 h-6" />Add New Address
        </button>
      </div>
      <div className="py-10 border-t border-[#bbbbbb] grid md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <div key={address.id} className="border border-[#bbbbbb] rounded-lg p-6 flex flex-col justify-between min-h-[180px]">
            <div className="flex gap-4 items-start">
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-text-dark">{address.name}</h3>
                <div className="text-text-gray leading-6 text-xs">
                  {address.buildingNumber ? `${address.buildingNumber} ` : ""}
                  {address.streetName ? `${address.streetName}, ` : ""}
                  {address.streetAddress && <>{address.streetAddress},<br /></>}
                  {address.city && <>{address.city},<br /></>}
                  {address.state} {address.postCode}
                </div>
                <div className="mt-2 font-semibold text-xs text-[#1D1D1D]">{address.phone}</div>
              </div>
              <div className="flex flex-col items-end h-full self-end justify-end">
                <div className="flex gap-2 items-center text-[#F0BA43] text-xs font-medium ">
                  <button className="hover:underline" onClick={() => handleEditClick(address)}>
                    Edit
                  </button>
                  <span className="mx-1 text-gray-300">|</span>
                  <button
                    className="hover:underline"
                    onClick={() => handleRemove(address.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
