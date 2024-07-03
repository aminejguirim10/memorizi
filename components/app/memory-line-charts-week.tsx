"use client";
import { useEffect, useState } from "react";
import { Chart } from "chart.js";

function MemoryLineChartsWeek({ data }: { data: Number[] }) {
  const [currentWeek, setCurrentWeek] = useState<string[]>([]);

  useEffect(() => {
    const currentDate = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentWeek = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date(
        currentDate.getTime() - (currentDate.getDay() - i) * 24 * 60 * 60 * 1000
      );
      currentWeek.push(
        days[day.getDay()] +
          " " +
          day.toLocaleDateString("en-US", { month: "short", day: "numeric" })
      );
    }

    setCurrentWeek(currentWeek);
  }, []);

  useEffect(() => {
    var ctx = (
      document.getElementById("myChartLine") as HTMLCanvasElement
    ).getContext("2d");
    if (ctx) {
      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: currentWeek,
          datasets: [
            {
              data: data.map((num) => num.valueOf()),
              label: "Date",
              borderColor: "#23C7FA",
              backgroundColor: "#80e1ff",
              fill: false,
            },
          ],
        },
      });
    }
  }, [currentWeek, data]);

  return (
    <>
      {/* line chart */}
      <h1 className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 font-bold text-xl md:text-2xl capitalize text-[#FB8F23] max-md:text-center">
        Line chart of Images uploaded by day of current week
      </h1>
      <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8  h-screen flex my-auto max-sm:-mt-[250px] max-md:-mt-[200px] md:-mt-[100px] w-full">
        <div className="border border-gray-400 pt-0 rounded-xl  max-sm:w-[350px] max-md:w-[600px]  w-full h-fit my-auto  shadow-xl">
          <canvas id="myChartLine"></canvas>
        </div>
      </div>
    </>
  );
}

export default MemoryLineChartsWeek;
