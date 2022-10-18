import React from "react";
import millify from "millify";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

import styles from "./LineChart.module.css";

const LineChart = ({ coinHistory, currentPrice, coinName, color }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp *1000).toLocaleDateString());
  }

  // console.log("coinHistory",coinHistory);
  console.log("timeStamp",coinTimestamp);
  // console.log("coin Price",coinPrice);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: color,
        borderColor: color,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className={styles.Line_header}>
        <h2> {coinName} price chart</h2>
        <h4>
          Current {coinName} Price : {millify(currentPrice)}
        </h4>
      </div>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
