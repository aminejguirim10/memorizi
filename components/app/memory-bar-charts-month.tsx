"use client";
import { useEffect } from "react";
import { Chart } from "chart.js";

function MemoryBarChartsMonth({ data }: { data: Number[] }) {
  useEffect(() => {
    var ctx = (
      document.getElementById("myChartBarMonth") as HTMLCanvasElement
    ).getContext("2d");
    if (ctx) {
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              data: data.map((num) => num.valueOf()),
              label: "Date",
              borderColor: "#ffa64d",
              backgroundColor: "#ffc171",
              borderWidth: 2,
            },
          ],
        },
      });
    }
  }, [data]); //data is the prop passed to the component to render the chart in case of change in data

  return (
    <>
      {/* Bar chart */}
      <h1 className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-sm:-mt-[250px] max-md:-mt-[200px] mt-10 font-bold text-xl md:text-2xl capitalize text-[#FB8F23] max-md:text-center">
        Bar chart of Images uploaded by month
      </h1>
      <div className=" mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8  h-screen flex my-auto max-sm:-mt-[250px] sm:-mt-[200px] md:-mt-[100px] w-full">
        <div className="border border-gray-400 pt-0 rounded-xl  max-sm:w-[350px] max-md:w-[600px]  w-full h-fit my-auto  shadow-xl">
          {/* Canva id must be unique if you have multiple Charts */}
          <canvas id="myChartBarMonth"></canvas>
        </div>
      </div>
    </>
  );
}

export default MemoryBarChartsMonth;
