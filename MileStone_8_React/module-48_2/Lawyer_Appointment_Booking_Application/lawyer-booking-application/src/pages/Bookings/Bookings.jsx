import React, { useEffect, useState } from "react";
import { getLawyer, removeLawyer } from "../../utils/LocalStorage";
import Appointments from "../../components/Appointments/Appointments";
import { Link } from "react-router";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Bookings = () => {
  const [lawyer, setLawyer] = useState([]);

  useEffect(() => {
    setLawyer(getLawyer());
  }, []);

  const handelRemove = (license) => {
    removeLawyer(license);
    setLawyer(getLawyer());
  };

  if (lawyer.length < 1) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-xl font-bold md:text-2xl mb-4">
          You Have not Booked any Appointment yet.
        </h1>
        <p>
          Review your upcoming meetings, case discussions, and important
          deadlines—all in one place, so you can focus on delivering results.
        </p>
        <Link to="/">
          <button className="btn btn-primary mt-2">Book an Appointment</button>
        </Link>
      </div>
    );
  }

  // barChart start
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const newLawyer = lawyer.map((lw) => {
    const { name, consultation_fee_tk } = lw;
    const data = {
      name,
      consultation_fee_tk,
    };
    return data;
  });

  // barChart end

  return (
    <div className="py-12">
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={newLawyer}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="consultation_fee_tk"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {newLawyer.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <div className="text-center mt-5">
          <h1 className="text-2xl font-bold mb-4">My Today Appointments</h1>
          <p>
            Stay on top of your legal schedule with today’s appointments. From
            client consultations to court appearances, this section keeps you
            informed and prepared.
          </p>
        </div>
        {lawyer.map((law) => (
          <Appointments key={law.id} law={law} handelRemove={handelRemove} />
        ))}
      </div>
    </div>
  );
};

export default Bookings;
