import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Paper, Stack, Typography, useTheme } from "@mui/material";
interface MyComponentProps {}

const LineChart: React.FC<MyComponentProps> = () => {
  const theme = useTheme();
  const state: ApexOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    grid: {
      borderColor: `${theme.palette.text.primary}`,
    },
    dataLabels: {
      enabled: false,
      style: {},
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: `${theme.palette.text.primary}`,
        },
      },
      crosshairs: {
        show: true,
        position: "back",
        stroke: {
          color: "#b6b6b6",
          width: 1,
          dashArray: 0,
        },
      },
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          colors: `${theme.palette.text.primary}`,
        },
      },
    },

    stroke: {
      curve: "smooth",
    },
    colors: [`${theme.palette.primary.main}`, `#f1c555`],
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
    <Paper elevation={0} sx={{ p: 2 }}>
      <Stack>
        <Typography fontWeight="bold" variant="h5" color="text.secondary">
          Yearly Sales
        </Typography>

        <ReactApexChart
          height={400}
          options={state}
          series={[
            {
              name: "Total Income",
              data: [31, 40, 28, 51, 42, 109, 100],
            },
            {
              name: "Total Expense",
              data: [11, 32, 45, 32, 34, 52, 41],
            },
          ]}
          type="area"
        />
      </Stack>
    </Paper>
  );
};

export default LineChart;
