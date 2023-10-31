import React from "react";
import Chart from "react-apexcharts";

function Barchart() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <h3 className="text-center ">Lançamentos por Ano</h3>

        <Chart
          type="bar"
          width={450}
          height={200}
          forecolor="#E1E1E6"
          series={[
            {
              name: "Launches",
              data: [578, 787, 245, 876, 324, 123, 435],
            },
          ]}
          options={{
            colors: ["#00875F"],

            xaxis: {
              tickPlacement: "on",
              categories: [
                "2017",
                "2018",
                "2019",
                "2020",
                "2021",
                "2022",
                "2023",
              ],
            },
            chart: {
              foreColor: "#E1E1E6",
              stacked: true,
              toolbar: {
                show: false,
              },
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}

export default Barchart;
