import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { TranslateService } from "@ngx-translate/core";
import { GlobalFile } from "../global-file";
import { Chart, registerables } from 'chart.js';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { DoughnutChart } from './doughnut-chart';
Chart.register(...registerables);

@Component({
  selector: 'app-game-server-ping-page',
  templateUrl: './game-server-ping-page.component.html',
  styleUrls: ['./game-server-ping-page.component.scss']
})
export class GameServerPingPageComponent implements OnInit{
  currentScreenSize!: string;
  lolIconUrl = 'https://cdn3.emoji.gg/emojis/3907_lol.png';
  csIconUrl = 'https://www.freeiconspng.com/thumbs/csgo-icon/csgo-icon-4.png';

  // Definition of ping values for charts
  public pingLolEuWest = 0;
  public pingLolEuEast = 0;
  public pingLolUs = 0;
  public pingCsEuWest = 0;
  public pingCsEuEast = 0;
  public pingCsUsWest = 0;
  public pingCsUsEast = 0;
  
  // Definition of switch statuses
  public lolEuWest = false;
  public lolEuEast = false;
  public lolUs = false;
  public csEuWest = false;
  public csEuEast = false;
  public csUsWest = false;
  public csUsEast = false;

  // Definition of charts
  lolChartEuWest!: DoughnutChart;
  lolChartEuEast!: DoughnutChart;
  lolChartUs!: DoughnutChart;
  csChartEuWest!: DoughnutChart;
  csChartEuEast!: DoughnutChart;
  csChartUsWest!: DoughnutChart;
  csChartUsEast!: DoughnutChart;

  // Lol server url's
  private urlLolEuWest = "https://dynamodb.eu-west-2.amazonaws.com/?random-no-cache=130ee";
  private urlLolEuEast = "https://dynamodb.eu-central-1.amazonaws.com/?random-no-cache=1e155";
  private urlLolUs = "https://dynamodb.us-east-2.amazonaws.com/?random-no-cache=13989";

  // CS server url's
  private urlCsEuWest = "https://dynamodb.eu-west-2.amazonaws.com/?random-no-cache=1ce68";
  private urlCsEuCentral = "https://dynamodb.eu-central-1.amazonaws.com/?random-no-cache=13c96";
  private urlCsUsWest = "https://dynamodb.us-west-1.amazonaws.com/?random-no-cache=1e998";
  private urlCsUsEast = "https://dynamodb.us-east-1.amazonaws.com/?random-no-cache=17b76";

  constructor(private httpClient: HttpClient, private translate: TranslateService, private ref:ChangeDetectorRef) {
    this.currentScreenSize = GlobalFile.screenSize;
    translate.setDefaultLang(GlobalFile.language);

    //-- Window size logger for test purposes --//
    //console.log("[EarthquakesPageComponent]Local var screenSize ", this.currentScreenSize);
  }

  ngOnInit() {
    // charts initial definition
    this.lolChartEuWest = new DoughnutChart('lolChartEuWest');
    this.lolChartEuEast = new DoughnutChart('lolChartEuEast');
    this.lolChartUs = new DoughnutChart('lolChartUs');

    this.csChartEuWest = new DoughnutChart('csChartEuWest');
    this.csChartEuEast = new DoughnutChart('csChartEuEast');
    this.csChartUsWest = new DoughnutChart('csChartUsWest');
    this.csChartUsEast = new DoughnutChart('csChartUsEast');
  }

  slideChange(event: MatSlideToggleChange, chartType: Number):void {
    console.log('Switch button changed {' +  event.checked + "} , switch number {" + chartType + "}");
    
    if(event.checked) {
      switch (chartType) {
        case 1: // LoL EU West
          console.log("[slideChange()] LoL EU West -> on.");
          this.lolEuWest = event.checked;
          this.pingManager(this.urlLolEuWest, 1);
          break;
        case 2: // LoL EU East
          console.log("[slideChange()] LoL EU East -> on.");
          this.lolEuEast = event.checked;
          this.pingManager(this.urlLolEuEast, 2);
          break;
        case 3: // LoL Us
          console.log("[slideChange()] LoL Us -> on.");
          this.lolUs = event.checked;
          this.pingManager(this.urlLolUs, 3);
          break;
        case 4: // Cs EU West
          console.log("[slideChange()] Cs EU West -> on.");
          this.csEuWest = event.checked;
          this.pingManager(this.urlCsEuWest, 4);
          break;
        case 5: // CS EU Central
          console.log("[slideChange()] CS EU Central -> on.");
          this.csEuEast = event.checked;
          this.pingManager(this.urlCsEuCentral, 5);
          break;
        case 6: // CS US West
          console.log("[slideChange()] CS US West -> on.");
          this.csUsWest = event.checked;
          this.pingManager(this.urlCsUsWest, 6);
          break;
        case 7: // CS US East
          console.log("[slideChange()] CS US East -> on.");
          this.csUsEast = event.checked;
          this.pingManager(this.urlCsUsEast, 7);
          break;
        default:
          break;
      }
    }else {
      switch (chartType) {
        case 1: // LoL EU West
          console.log("[slideChange()] LoL EU West -> off.");
          this.lolEuWest = event.checked;

          setTimeout(() => {
            console.log("[slideChange()] LoL Eu West chart resetting.");
            this.pingLolEuWest = 0;
            this.lolChartEuWest.resetChart();

            // Refresh html data
            this.ref.detectChanges();
          }, 1500);
          
          break;
        case 2: // LoL EU East
          console.log("[slideChange()] LoL EU East -> off.");
          this.lolEuEast = event.checked;

          setTimeout(() => {
            console.log("[slideChange()] LoL Eu East chart resetting.");
            this.pingLolEuEast = 0;
            this.lolChartEuEast.resetChart();

            // Refresh html data
            this.ref.detectChanges();
          }, 1500);
          break;
        case 3: // LoL Us
          console.log("[slideChange()] LoL Us -> off.");
          this.lolUs = event.checked;

          setTimeout(() => {
            console.log("[slideChange()] LoL Us chart resetting.");
            this.pingLolUs = 0;
            this.lolChartUs.resetChart();
            
            // Refresh html data
            this.ref.detectChanges();
          }, 1500);
          break;
        case 4: // CS EU West
          console.log("[slideChange()] CS EU West -> off.");
          this.csEuWest = event.checked;

          setTimeout(() => {
            console.log("[slideChange()] CS EU West chart resetting.");
            this.pingCsEuWest = 0;
            this.csChartEuWest.resetChart();
            
            // Refresh html data
            this.ref.detectChanges();
          }, 1500);
          break;
        case 5: // CS EU East
          console.log("[slideChange()] CS EU East -> off.");
          this.csEuEast = event.checked;

          setTimeout(() => {
            console.log("[slideChange()] CS EU East chart resetting.");
            this.pingCsEuEast = 0;
            this.csChartEuEast.resetChart();
            
            // Refresh html data
            this.ref.detectChanges();
          }, 1500);
          break;
        case 6: // CS US West
          console.log("[slideChange()] CS US West -> off.");
          this.csUsWest = event.checked;

          setTimeout(() => {
            console.log("[slideChange()] CS US West chart resetting.");
            this.pingCsUsWest = 0;
            this.csChartUsWest.resetChart();
            
            // Refresh html data
            this.ref.detectChanges();
          }, 1500);
          break;
        case 7: // CS US East
          console.log("[slideChange()] CS US East -> off.");
          this.csUsEast = event.checked;

          setTimeout(() => {
            console.log("[slideChange()] CS US East chart resetting.");
            this.pingCsUsEast = 0;
            this.csChartUsEast.resetChart();
            
            // Refresh html data
            this.ref.detectChanges();
          }, 1500);
          break;
        default:
          break;
      }
    }
  }

  async pingManager(url: string, chartType: Number) {
    await setTimeout(() => {
      this.postPing(url, chartType);
      switch (chartType) {
        case 1:
          if(this.lolEuWest) {
            this.pingManager(url, chartType);
          }
          break;
        case 2:
          if(this.lolEuEast) {
            this.pingManager(url, chartType);
          }
          break;
        case 3:
          if(this.lolUs) {
            this.pingManager(url, chartType);
          }
          break;
        case 4:
            if(this.csEuWest) {
              this.pingManager(url, chartType);
            }
            break;
        case 5:
          if(this.csEuEast) {
            this.pingManager(url, chartType);
          }
          break;
        case 6:
          if(this.csUsWest) {
            this.pingManager(url, chartType);
          }
          break;
        case 7:
          if(this.csUsEast) {
            this.pingManager(url, chartType);
          }
          break;
        default:
          break;
      }
    }, 1000);

  }

  postPing(url: string, chartType: Number) {
    console.log("[postPing()] started.");
    var startTime = performance.now();

    this.httpClient.post(url, "").subscribe({
      next: data => {
        var startTime = performance.now();
      },
      error: error => {
          var endTime = performance.now();
      
          var timeElapsed = endTime - startTime;

          // Select related chart for updating
          switch (chartType) {
            case 1: // LoL EU West
              console.log("[postPing()] LoL Eu West chart updating.");
              this.pingLolEuWest = Math.trunc(timeElapsed)-2;
              this.lolChartEuWest.updateChartData(this.pingLolEuWest);
              break;
            case 2: // LoL EU East
              console.log("[postPing()] LoL Eu East chart updating.");
              this.pingLolEuEast = Math.trunc(timeElapsed)-2;
              this.lolChartEuEast.updateChartData(this.pingLolEuEast);
              break;
            case 3: // LoL Us
              console.log("[postPing()] LoL Us chart updating.");
              this.pingLolUs = Math.trunc(timeElapsed)-2;
              this.lolChartUs.updateChartData(this.pingLolUs);
              break;
            case 4: // CS EU West
              console.log("[postPing()] CS EU West updating.");
              this.pingCsEuWest = Math.trunc(timeElapsed)-2;
              this.csChartEuWest.updateChartData(this.pingCsEuWest);
              break;
            case 5: // CS EU East
              console.log("[postPing()] CS EU Central updating.");
              this.pingCsEuEast = Math.trunc(timeElapsed)-2;
              this.csChartEuEast.updateChartData(this.pingCsEuEast);
              break;
            case 6: // CS Us West
              console.log("[postPing()] CS Us West updating.");
              this.pingCsUsWest = Math.trunc(timeElapsed)-2;
              this.csChartUsWest.updateChartData(this.pingCsUsWest);
              break;
            case 7: // CS Us East
              console.log("[postPing()] CS Us East updating.");
              this.pingCsUsEast = Math.trunc(timeElapsed)-2;
              this.csChartUsEast.updateChartData(this.pingCsUsEast);
              break;
            default:
              break;
          }
          
          // Refresh html data
          this.ref.detectChanges();
      }
    })
  }

  private resetChart(chartType: Number) {
    switch (chartType) {
      case 1:// LoL EU West
        console.log("[resetChart()] LoL Eu West chart resetting.");
        this.lolChartEuWest.resetChart();
        break;
      case 2: // LoL EU East
        console.log("[resetChart()] LoL Eu West chart resetting.");
        this.lolChartEuEast.resetChart();
        break;
      case 3: // LoL Us
        console.log("[resetChart()] LoL Eu West chart resetting.");
        this.lolChartUs.resetChart();
        break;
      case 4: // CS EU West
        console.log("[resetChart()] CS EU West chart resetting.");
        this.csChartEuWest.resetChart();
        break;
      case 5: // CS EU East
        console.log("[resetChart()] CS EU East chart resetting.");
        this.csChartEuEast.resetChart();
        break;
      case 6: // CS US West
        console.log("[resetChart()] CS US West chart resetting.");
        this.csChartUsWest.resetChart();
        break;
      case 7: // CS US East
        console.log("[resetChart()] CS US East chart resetting.");
        this.csChartUsEast.resetChart();
        break;
      default:
        break;
    }

  }
}