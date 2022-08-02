(function () {
  $(document).ready(function () {
    $(".moniter .content").eq(0).hide();
    $(".tabs li").click(function () {
      $(this).addClass("active").siblings("li").removeClass("active");
      const _index = $(this).index();
      $(".moniter .content").eq(_index).show().siblings(".content").hide();
    });

    $(".marquee-view .marquee").each(function () {
      const newMarquee = $(this).children().clone();
      $(this).append(newMarquee);
    });
  });
})();

//全国用户统计柱状图
(function () {
  $(document).ready(function () {
    console.log(document.querySelector(".pie"));
    const myChart = echarts.init(document.querySelector(".pie"));

    const option = {
      color: [
        "#006cff",
        "#60cda0",
        "#ed8884",
        "#ff9f7f",
        "#0096ff",
        "#9fe6b8",
        "#32c5e9",
        "#1d9dff",
      ],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/> {b}: {c} ({d}%)",
        backgroundColor: "rgba(0,0,0,0.4)",
        textStyle: {
          color: "#fff",
        },
        borderWidth: 0,
      },
      legend: {
        show: false,
      },
      series: [
        {
          name: "销售统计",
          type: "pie",
          radius: ["10%", "70%"],
          center: ["50%", "50%"],
          roseType: "radius",
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            fontSize: 10,
          },
          labelLine: {
            length: 6,
            length2: 8,
          },
          data: [
            { value: 22, name: "云南", label: { color: "#006cff" } },
            { value: 28, name: "北京", label: { color: "#60cda0" } },
            { value: 25, name: "山东", label: { color: "#ed8884" } },
            { value: 25, name: "河北", label: { color: "#ff9f7f" } },
            { value: 32, name: "江苏", label: { color: "#ff9f7f" } },
            { value: 22, name: "浙江", label: { color: "#9fe6b8" } },
            { value: 31, name: "四川", label: { color: "#32c5e9" } },
            { value: 42, name: "上海", label: { color: "#1d8dff" } },
          ],
        },
      ],
    };

    myChart.setOption(option);

    window.addEventListener("resize", function () {
      myChart.resize();
    });
  });
})();

(function () {
  $(document).ready(function () {
    let item={
      value:1200,
      itemStyle:{
        color:'#254065'
      },
      tooltip:{
        extraCssText:'opacity:0'
      },
      emphasis:{
        itemStyle:{
          color:'#254065'
        }
      }
    }
    const myChart = echarts.init(document.querySelector(".bar"));

    const option = {
      color:{
        type:'linear',
        x:0,
        y:0,
        x2:0,
        y2:1,
        colorSpace:[{
          offset:0,color:'#00fffb'
        },{
          offset: 1,color:'#0061ce'
        }],
        global:false
      },
      tooltip: {
        trigget:'item',
        boderWidth:0,
        backgroundColor: "rgba(0,0,0,3)",
        textStyle: {
          color:'#fff'
        },
        formatter: "{a}<br/>{b}:{c}"
      },
      grid: {
        left:'0%',
        top:'3%',
        right:'3%',
        bottom:'3%',
        containLabel:true,
        show:true,
        border:"rgba(0,240,255,0.3)"
      },
      xAxis: [
        {
          type: "category",
          data:[
            "上海",
            "广州",
            "北京",
            "深圳",
            "合肥",
            "",
            "......",
            "",
            "杭州",
            "厦门",
            "济南",
            "成都",
            "重庆"
          ],
          axisTick: {
            alignWithLabel: false,
            show:false,
          },
          axisLabel:{
            color:'#4c9bfd'
          },
          axisLine:{
            lineStyle:{
              color:'rgba(0,240,255,0.3)'
            }
          }
        },
      ],
      yAxis: [
        {
          type: "value",
          axisTick: {
            alignWithLabel: false,
            show:false,
          },
          axisLabel: {
            color:'#4c9bfd'
          },
          splitLine:{
            lineStyle: {
              color:"rgba(0,240,255,0.3)"
            }
          }
        },
      ],
      series: [
        {
          name: "用户总量",
          type: "bar",
          barWidth: "60%",
          data: [
            2100,
            1900,
            1700,
            1560,
            1400,
            item,
            item,
            item,
            900,
            750,
            600,
            480,
            240
          ],
        },
      ],
    };

    myChart.setOption(option);

    window.addEventListener("resize", function () {
      myChart.resize();
    });
  });
})();
