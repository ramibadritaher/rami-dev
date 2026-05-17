import React, { useState } from "react";

const TransactionForm = ({ onSubmit, initialData }: any) => {
  const [form, setForm] = useState(
    initialData || { date: "", desc: "", category: "", amount: "" }
  );

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onSubmit(form); }}>
      <input name="date" type="date" value={form.date} onChange={handleChange}
        className="w-full border p-2 rounded" />

      <input name="desc" placeholder="Description" value={form.desc} onChange={handleChange}
        className="w-full border p-2 rounded" />

      <input name="category" placeholder="Category" value={form.category} onChange={handleChange}
        className="w-full border p-2 rounded" />

      <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange}
        className="w-full border p-2 rounded" />

      <button className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
    </form>
  );
};

export default TransactionForm;
