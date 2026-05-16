import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const data = {
    labels: ["Food", "Transport", "Rent", "Shopping"],
    datasets: [
      {
        data: [320, 120, 900, 150],
        backgroundColor: ["#3b82f6", "#facc15", "#ef4444", "#8b5cf6"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow">
     <h3 className="text-sm font-semibold text-gray-700 mb-3">
        Expenses by Category
      </h3>
      <Pie data={data} />
    </div>
  );
}