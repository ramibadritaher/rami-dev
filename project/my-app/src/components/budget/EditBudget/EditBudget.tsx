import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BUDGETS_COLLECTION, databases, DB_ID, updateDocument } from "../../../services/appwrite.ts/appwrite";
import BudgetForm from "../BudgetForm/BudgetForm";

const EditBudget = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    databases.getDocument(DB_ID, BUDGETS_COLLECTION, id!).then((res) => {
      setData(res);
    });
  }, [id]);

  const handleSubmit = async (form: any) => {
    await updateDocument(BUDGETS_COLLECTION, id!, form);
    window.location.href = "/budgets";
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Edit Budget</h2>
      <BudgetForm onSubmit={handleSubmit} initialData={data} />
    </div>
  );
};

export default EditBudget;
