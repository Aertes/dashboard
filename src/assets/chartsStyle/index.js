let defaultOption = {
  title: {
    text: 'NoData'
  },
  legend: {
    data: ['NoData']
  },
  xAxis: {
    data: ["NoData"]
  },
  yAxis: {},
  series: [{
    name: 'NoData',
    type: 'bar',
    data: [0, 0, 0, 0, 0, 0]
  }]
}

function chartTypeOne(legendDate, xAxisData, yAxisName1, yAxisName2, series) {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "cross" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: legendDate
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    barWidth: 10,
    xAxis: {
      type: "category",
      data: xAxisData
    },
    yAxis: [
      {
        type: "value",
        name: yAxisName1,
        min: 0,
        // max: 250,
        // interval: 50,
        axisLabel: {
          formatter: "{value}"
        }
      },
      {
        type: "value",
        name: yAxisName2,
        min: 0,
        // max: 25,
        interval: 0.5,
        axisLabel: {
          formatter: "{value}"
        }
      }
    ],
    series: series
  }
}

function chartTypeTwo(legendDate, indicatorData, seriesData) {
  return {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      x: "center",
      data: legendDate
    },
    radar: [{
      indicator: indicatorData,
      center: ["25%", "40%"],
      radius: 80
    }],
    series: [{
      type: "radar",
      tooltip: {
        trigger: "item"
      },
      itemStyle: {
        normal: {
          areaStyle: {
            type: "default"
          }
        }
      },
      data: seriesData
    }]
  }
}

function chartTypeThree(legendDate, seriesData) {
  return {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c}%"
    },
    legend: {
      data: legendDate
    },
    calculable: true,
    series: [{
      name: "漏斗图",
      type: "funnel",
      left: "10%",
      top: 60,
      bottom: 60,
      width: "80%",
      min: 0,
      max: 100,
      minSize: "0%",
      maxSize: "100%",
      sort: "descending",
      gap: 2,
      label: {
        normal: {
          show: true,
          position: "inside"
        },
        emphasis: {
          textStyle: {
            fontSize: 20
          }
        }
      },
      labelLine: {
        normal: {
          length: 10,
          lineStyle: {
            width: 1,
            type: "solid"
          }
        }
      },
      itemStyle: {
        normal: {
          borderColor: "#fff",
          borderWidth: 1
        }
      },
      data: seriesData
    }]
  }
}

function chartTypeFour(xAxisData, seriesData1, seriesData2) {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为："line" | "shadow"
      },
      formatter: function (params) {
        var tar = params[1];
        return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
      }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: {
      type: "category",
      splitLine: {
        show: false
      },
      data: xAxisData
    },
    yAxis: {
      type: "value"
    },
    series: [{
      name: "辅助",
      type: "bar",
      stack: "总量",
      itemStyle: {
        normal: {
          barBorderColor: "rgba(0,0,0,0)",
          color: "rgba(0,0,0,0)"
        },
        emphasis: {
          barBorderColor: "rgba(0,0,0,0)",
          color: "rgba(0,0,0,0)"
        }
      },
      data: seriesData1
    },
      {
        name: "Traffic",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "inside"
          }
        },
        data: seriesData2
      }
    ]
  }
}

function chartTypeFive(legendDate, yAxisData, seriesData1, seriesData2, seriesData3, seriesData4) {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为："line" | "shadow"
      }
    },
    legend: {
      data: legendDate
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: {
      type: "value"
    },
    yAxis: {
      type: "category",
      data: yAxisData
    },
    series: [{
      name: "站外",
      type: "bar",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "insideRight"
        }
      },
      data: seriesData1
    },
      {
        name: "钻展",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        data: seriesData2
      },
      {
        name: "搜索",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        data: seriesData3
      },
      {
        name: "其它",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true,
            position: "insideRight"
          }
        },
        data: seriesData4
      }
    ]
  }
}

export {
  defaultOption,
  chartTypeOne,
  chartTypeTwo,
  chartTypeThree,
  chartTypeFour,
  chartTypeFive
}