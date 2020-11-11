import "./index.css";
import echarts from "echarts";
import Reveal from "reveal.js";
// import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/serif.css";

class App {
  constructor() {
    console.log("Greeting!");
    // this.initChart1();
    let deck = new Reveal({
      // plugins: [Markdown],
    });
    deck.initialize({
      width: 1440,
      height: 960,
    });
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
