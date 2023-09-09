import { Chart} from 'chart.js';

export class DoughnutChart {
    // Explicitly specify the chart type and configuration type to constructor error
    private chart!: Chart<"doughnut", number[], never>;
    donutColors = ['rgba(0, 0, 0, 0.6)'];

  constructor(private chartId: string) {
    this.initializeChart();
  }

  private initializeChart() {
    this.chart = new Chart(this.chartId, {
        type: 'doughnut',
        data: {
            labels: [],
            datasets: [{
                data: [1],
                backgroundColor:
                    this.donutColors,
                borderColor: ['rgba(0, 0, 0, 0.6)','rgba(0, 0, 0, 0.6)'
                ],
                circumference: 180,
                rotation: 270,
                borderWidth: 4
            }]
        },
        options: {
          layout: {
          },
          scales: {
          },
          plugins: {
            tooltip: {
              enabled: false // <-- this option disables tooltips
            },
          }
        }
    });
    }

  // Public method to update chart data and colors
  updateChartData(ping: number) {
    console.log("[updateChartData()] ping is :: ", ping);
    
    if(ping < 75) { //When ping between 0-100
        this.chart.data.datasets[0].data = [ping, Math.floor(Math.random() * 99) + 150];
        this.chart.data.datasets[0].backgroundColor = ['rgb(58, 255, 0)', 'rgba(0, 0, 0, 0.6)',];
        this.chart.update(); // Update the chart to reflect the changes
        
        this.chart.update();
      }else if(ping < 200) { //When ping between 100-200
        this.chart.data.datasets[0].data = [ping, Math.floor(Math.random() * 51) + 100];
        this.chart.data.datasets[0].backgroundColor = ['rgb(255, 213, 0)', 'rgba(0, 0, 0, 0.6)',];
        this.chart.update(); // Update the chart to reflect the changes
        
        this.chart.update();
      }else if(ping < 500) { //When ping between 200-500
        this.chart.data.datasets[0].data = [ping, Math.floor(Math.random() * 25) + 75];
        this.chart.data.datasets[0].backgroundColor = ['rgb(255, 128, 0)', 'rgba(0, 0, 0, 0.6)',];
        this.chart.update(); // Update the chart to reflect the changes
        
        this.chart.update();
      }else { //When ping more than 500
        this.chart.data.datasets[0].data = [ping, Math.floor(Math.random() * 1) + 25];
        this.chart.data.datasets[0].backgroundColor = ['rgb(255, 128, 0)', 'rgba(0, 0, 0, 0.6)',];
        this.chart.update(); // Update the chart to reflect the changes
        
        this.chart.update();
      }
  }

  resetChart() {
    console.log("[resetChart()]");
    this.chart.data.datasets[0].data = [1];
        this.chart.data.datasets[0].backgroundColor = ['rgba(0, 0, 0, 0.6)'];
        this.chart.update(); // Update the chart to reflect the changes
        
        this.chart.update();
  }
}