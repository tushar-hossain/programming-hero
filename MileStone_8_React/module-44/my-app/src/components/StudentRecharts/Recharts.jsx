import React from "react";
import {
    Bar,
    BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    studentId: "S001",
    name: "Ariana Rahman",
    results: {
      math: 88,
      physics: 92,
      chemistry: 85,
    },
  },
  {
    studentId: "S002",
    name: "Kabir Hossain",
    results: {
      math: 76,
      physics: 81,
      chemistry: 79,
    },
  },
  {
    studentId: "S003",
    name: "Fatema Jahan",
    results: {
      math: 95,
      physics: 89,
      chemistry: 91,
    },
  },
  {
    studentId: "S004",
    name: "Tariq Hasan",
    results: {
      math: 64,
      physics: 70,
      chemistry: 67,
    },
  },
  {
    studentId: "S005",
    name: "Nusrat Akter",
    results: {
      math: 90,
      physics: 94,
      chemistry: 88,
    },
  },
  {
    studentId: "S006",
    name: "Zahidul Islam",
    results: {
      math: 72,
      physics: 68,
      chemistry: 74,
    },
  },
  {
    studentId: "S007",
    name: "Sharmin Sultana",
    results: {
      math: 85,
      physics: 79,
      chemistry: 82,
    },
  },
  {
    studentId: "S008",
    name: "Reaz Ahmed",
    results: {
      math: 91,
      physics: 88,
      chemistry: 93,
    },
  },
  {
    studentId: "S009",
    name: "Mim Chowdhury",
    results: {
      math: 78,
      physics: 80,
      chemistry: 77,
    },
  },
  {
    studentId: "S010",
    name: "Hasan Mahmud",
    results: {
      math: 69,
      physics: 74,
      chemistry: 70,
    },
  },
];

const newData = data.map((dataRes) => {
  const student = {
    name: dataRes.name,
    studentId: dataRes.studentId,
    math: dataRes.results.math,
    physics: dataRes.results.physics,
    chemistry: dataRes.results.chemistry,
  };
  return student;
});

const Recharts = () => {
  return (
    <div className="mt-20">
      <h2>Recharts</h2>
      <div className="bg-amber-500 w-70">
        <LineChart width={200} height={200} data={newData}>
          <Line type="monotone" dataKey="math" stroke="#8884d8" />
        </LineChart>
      </div>

      <div className="w-70 mt-5">
        <LineChart
          width={200}
          height={200}
          data={newData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="math" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>

      <div>
        <BarChart width={730} height={250} data={newData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="physics" fill="#8884d8" />
          <Bar dataKey="chemistry" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Recharts;
