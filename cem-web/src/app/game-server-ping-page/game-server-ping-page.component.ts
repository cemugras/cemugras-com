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
  public pingLolEuWest = 0;
  public pingLolEuEast = 0;
  public pingLolUs = 0;
  
  // Definition of switch statuses
  public lolEuWest = false;
  public lolEuEast = false;
  public lolUs = false;

  // Definition of charts
  lolChartEuWest!: DoughnutChart;
  lolChartEuEast!: DoughnutChart;
  lolChartUs!: DoughnutChart;

  // Lol server url's
  private urlLolEuWest = "https://dynamodb.eu-west-2.amazonaws.com/?random-no-cache=130ee";
  private urlLolEuEast = "https://dynamodb.eu-central-1.amazonaws.com/?random-no-cache=1e155";
  private urlLolUs = "https://dynamodb.us-east-2.amazonaws.com/?random-no-cache=13989";

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
      default:
        break;
    }

  }
}