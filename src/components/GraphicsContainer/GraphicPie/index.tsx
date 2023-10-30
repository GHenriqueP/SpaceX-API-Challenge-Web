import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

//interface StudentData {
//  subject: string;
//  marks: string;
//}

export function PieChart() {
  //const [studentSubject, setStudentSubject] = useState<string[]>([]);
  //const [studentMarks, setStudentMarks] = useState<number[]>([]);

  //useEffect(() => {
  //  const sSubject: string[] = [];
  //  const sMarks: number[] = [];
  //
  //  const getStudentData = async () => {
  //    try {
  //      const reqData = await fetch(
  //        "http://localhost/reactgraphtutorial/marks"
  //      );
  //      const resData: StudentData[] = await reqData.json();
  //
  //      for (let i = 0; i < resData.length; i++) {
  //        sSubject.push(resData[i].subject);
  //        sMarks.push(parseInt(resData[i].marks));
  //      }
  //
  //      setStudentSubject(sSubject);
  //      setStudentMarks(sMarks);
  //    } catch (error) {
  //      console.error("Error fetching data:", error);
  //    }
  //  };
  //
  //  getStudentData();
  //}, []);
  return (
    <React.Fragment>
      <div>
        <h3 className="mt-3">Lançamentos de Foguetes</h3>
        <Chart
          type="pie"
          width={470}
          height={200}
          series={[20, 20, 20, 20, 20]}
          options={{
            noData: { text: "Empty Data" },
            labels: ["Algo1", "Algo2", "Algo3", "Algo4", "Algo5"],
            chart: {
              foreColor: "#E1E1E6",
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}
