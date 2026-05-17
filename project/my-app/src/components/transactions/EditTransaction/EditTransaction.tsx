import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { databases, DB_ID, TRANSACTIONS_COLLECTION, updateDocument } from "../../../services/appwrite.ts/appwrite";
import TransactionForm from "../TransactionForm/TransactionForm";

const EditTransaction = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    databases.getDocument(DB_ID, TRANSACTIONS_COLLECTION, id!).then((res) => {
      setData(res);
    });
  }, [id]);

  const handleSubmit = async (form: any) => {
    await updateDocument(TRANSACTIONS_COLLECTION, id!, form);
    window.location.href = "/transactions";
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Edit Transaction</h2>
      <TransactionForm onSubmit={handleSubmit} initialData={data} />
    </div>
  );
};

export default EditTransaction;
