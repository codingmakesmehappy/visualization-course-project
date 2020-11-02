import "./index.css";
import echarts from "echarts";

class App {
  constructor() {
    console.log("Greeting!");
    this.initChart1();
  }
  initChart1() {
    var myChart = echarts.init(
      document.getElementById("chart1") as HTMLDivElement,
    );
    myChart.setOption({
      title: {
        text: "ECharts entry example",
      },
      tooltip: {},
      xAxis: {
        data: ["shirt", "cardign", "chiffon shirt", "pants", "heels", "socks"],
      },
      yAxis: {},
      series: [
        {
          name: "sales",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  }
}

document.addEventListener("DOMContentLoaded", async (_) => {
  const app = new App();
});
