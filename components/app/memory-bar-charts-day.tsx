"use client"
import { useEffect } from "react"
import { Chart } from "chart.js"

function MemoryBarChartsDay({ data }: { data: Number[] }) {
  useEffect(() => {
    var ctx = (
      document.getElementById("myChartBar") as HTMLCanvasElement
    ).getContext("2d")
    if (ctx) {
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          datasets: [
            {
              data: data.map((num) => num.valueOf()),
              label: "Date",
              borderColor: "#b79676",
              backgroundColor: "#bda68f",
              borderWidth: 2,
            },
          ],
        },
      })
    }
  }, [data]) //data is the prop passed to the component to render the chart in case of change in data

  return (
    <>
      {/* Bar chart */}
      <h1 className="mx-auto mt-10 max-w-7xl px-4 text-xl font-bold capitalize text-[#FB8F23] max-md:-mt-[200px] max-md:text-center max-sm:-mt-[250px] sm:px-6 md:text-2xl lg:px-8">
        Bar chart of Images uploaded by day of week
      </h1>
      <div className="mx-auto my-auto flex h-screen w-full max-w-7xl px-4 max-md:-mt-[200px] max-sm:-mt-[250px] sm:px-6 md:-mt-[100px] lg:px-8">
        <div className="my-auto h-fit w-full rounded-xl border border-gray-400 pt-0 shadow-xl max-md:w-[600px] max-sm:w-[350px]">
          {/* Canva id must be unique if you have multiple Charts */}
          <canvas id="myChartBar"></canvas>
        </div>
      </div>
    </>
  )
}

export default MemoryBarChartsDay
