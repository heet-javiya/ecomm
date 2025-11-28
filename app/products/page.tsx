import React from "react";

export default function ProductsListPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          {/* Filter components will go here */}
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Products</h1>
            <select className="border rounded px-4 py-2">
              <option>Sort by</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Products will be mapped here */}
          </div>
        </main>
      </div>
    </div>
  );
}
