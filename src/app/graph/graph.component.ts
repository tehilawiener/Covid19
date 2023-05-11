
// import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';
// @Component({
//   selector: 'app-graph',
//   templateUrl: './graph.component.html',
//   styleUrls: ['./graph.component.css']
// })
// export class GraphComponent implements OnInit {
//   chart: any;

//   ngOnInit() {
//     this.createGraph();
//   }
  
//   createGraph() {
//     debugger;
//     this.chart = new Chart('canvas', {
//       type: 'bar',
//       data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//           label: 'Sample Data',
//           data: [12, 19, 3, 5, 2, 3, 10],
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   }

// }
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  chart: any;

  ngOnInit() {
    this.createGraph();
  }

  createGraph() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Sample Data',
          data: [12, 19, 3, 5, 2, 3, 10],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
