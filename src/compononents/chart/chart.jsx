import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const data = {
  labels: ["2023-01", "2023-02", "2023-03", "2023-04", "2023-05", "2023-06"],
  datasets: [
    {
      label: "Beverages",
      data: [10, 20, 30, 40, 50, 60],
      backgroundColor: "#FFC107",
    },
    {
      label: "Condiments",
      data: [5, 10, 15, 20, 25, 30],
      backgroundColor: "#9C27B0",
    },
    {
      label: "Produce",
      data: [15, 30, 45, 60, 75, 90],
      backgroundColor: "#2196F3",
    },
    {
      label: "Confection",
      data: [2, 7, 15, 39, 40, 55],
      backgroundColor: "#FF5733",
    },
    {
      label: "Dairy Product",
      data: [1, 45, 33, 100, 6, 77],
      backgroundColor: "#FFB233",
    },
    {
      label: "Seafood",
      data: [50, 22, 12, 120, 200, 5],
      backgroundColor: "#FF33D1",
    },
  ],
};

const options = {
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 15,
        fontSize: 14,
      },
    },
    title: {
      display: true,
      text: "Order Trend - By Month",
      font: {
        size: 20,
      },
    },
  },
};

const ChartBar = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: "bar",
      data: data,
      options: options,
    });

    return () => chart.destroy();
  }, []);

  return (
    <canvas
      ref={chartRef}
      style={{
        width: "600px",
        height: "250px",
      }}
    />
  );
};

export default ChartBar;
