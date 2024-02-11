import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useTheme } from "@mui/material";
interface MyComponentProps {}

const RadialChart: React.FC<MyComponentProps> = () => {
  const theme = useTheme();
  const state: ApexOptions = {
    chart: {
      height: 350,
      type: "radialBar",
      zoom: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "65%",
        },
        dataLabels: {
          name: {
            fontSize: "26px",
          },
          value: {
            fontSize: "32px",
            color: `${theme.palette.text.secondary}`,
          },
          total: {
            show: true,
            label: "Total",
            fontSize: "16px",
            color: `${theme.palette.text.primary}`,
            formatter: function (w) {
              let total = 2324;
              let h = total.toLocaleString();
              return `${h}`;
            },
          },
        },
      },
    },
    labels: ["Men", "Women"],
    colors: [`${theme.palette.primary.main}`, `#f1c555`],
    stroke: {
      lineCap: "round",
    },
    legend: {
      show: true,
      position: "bottom",
      labels: {
        colors: `${theme.palette.text.secondary}`,
        useSeriesColors: false,
      },
    },
  };

  return (
    <ReactApexChart
      height={400}
      options={state}
      series={[74, 42]}
      type="radialBar"
    />
  );
};

export default RadialChart;
