import React, { useState } from "react";

const BudgetForm = ({ onSubmit, initialData }: any) => {
  const [form, setForm] = useState(
    initialData || { name: "", spent: "", limit: "" }
  );

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onSubmit(form); }}>
      <input
        name="name"
        placeholder="Budget Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="spent"
        type="number"
        placeholder="Spent"
        value={form.spent}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="limit"
        type="number"
        placeholder="Limit"
        value={form.limit}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <button className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
    </form>
  );
};

export default BudgetForm;
