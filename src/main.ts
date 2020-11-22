import echarts from "echarts";
import Reveal from "reveal.js";
// import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/serif.css";
import "./index.css";
import datepicker from "js-datepicker";
import "js-datepicker/dist/datepicker.min.css";

const predictionData = {
  "2020/11/15": 53451916.0,
  "2020/11/16": 53954773.0,
  "2020/11/17": 54457630.0,
  "2020/11/18": 54960487.0,
  "2020/11/19": 55463344.0,
  "2020/11/20": 55966201.0,
  "2020/11/21": 56469058.0,
  "2020/11/22": 56971915.0,
  "2020/11/23": 57474772.0,
  "2020/11/24": 57977629.0,
  "2020/11/25": 58480486.0,
  "2020/11/26": 58983343.0,
  "2020/11/27": 59486200.0,
  "2020/11/28": 59989056.0,
  "2020/11/29": 60491913.0,
  "2020/11/30": 60994770.0,
  "2020/12/01": 61497627.0,
  "2020/12/02": 62000484.0,
  "2020/12/03": 62503341.0,
  "2020/12/04": 63006198.0,
  "2020/12/05": 63509055.0,
  "2020/12/06": 64011912.0,
  "2020/12/07": 64514769.0,
  "2020/12/08": 65017626.0,
  "2020/12/09": 65520483.0,
  "2020/12/10": 66023340.0,
  "2020/12/11": 66526197.0,
  "2020/12/12": 67029054.0,
  "2020/12/13": 67531911.0,
  "2020/12/14": 68034767.0,
  "2020/12/15": 68537624.0,
  "2020/12/16": 69040481.0,
  "2020/12/17": 69543338.0,
  "2020/12/18": 70046195.0,
  "2020/12/19": 70549052.0,
  "2020/12/20": 71051909.0,
  "2020/12/21": 71554766.0,
  "2020/12/22": 72057623.0,
  "2020/12/23": 72560480.0,
  "2020/12/24": 73063337.0,
  "2020/12/25": 73566194.0,
  "2020/12/26": 74069051.0,
  "2020/12/27": 74571908.0,
  "2020/12/28": 75074765.0,
  "2020/12/29": 75577622.0,
  "2020/12/30": 76080478.0,
  "2020/12/31": 76583335.0,
};


class App {
  private deck: Reveal;
  private datePicker: any;

  constructor() {
    console.log("Greeting!");
    // this.initChart1();
    this.deck = new Reveal({
      // plugins: [Markdown],
    });
    this.deck.initialize({
      width: 1280,
      height: 800,
    });
    this.datePicker = this.initDatePicker();
    // setInterval(() => {
    //   // const iframe = document.querySelector(".flourish-embed iframe") as HTMLIFrameElement;
    //   const containers = document.querySelectorAll(".fl-layout-container");
    //   console.log(containers);
    //   containers.forEach(ele => {
    //     console.log(ele);
    //     ele.remove();
    //   });
    // }, 500);

  }

  initDatePicker() {
    return datepicker("#prediction_date", {
      formatter: (input, date, instance) => {
        const value = date.toLocaleDateString();
        input.value = value; // => '1/1/2099'
      },
      onSelect: (instance, date: Date) => {
        const dateStr = `${date.getFullYear()}/${("0" + (date.getMonth() + 1)).slice(-2)}/${("0" + date.getDate()).slice(-2)}`;
        const $result = document.querySelector("#prediction_result") as HTMLDivElement;
        $result.style.display = "block";
        $result.textContent = `${predictionData[dateStr]}`;
      },
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
