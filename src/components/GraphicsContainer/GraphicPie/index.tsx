import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

export function PieChart() {
  return (
    <React.Fragment>
      <div>
        <h3 className="mt-3">Lançamentos de Foguetes</h3>
        <Chart
          type="pie"
          width={470}
          height={200}
          series={[23, 17, 30, 10, 20]}
          options={{
            noData: { text: "Empty Data" },
            labels: ["COTS 1", "Jason 3", "CRS-9", "RatSat", "Amos-6"],
            chart: {
              foreColor: "#E1E1E6",
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}
