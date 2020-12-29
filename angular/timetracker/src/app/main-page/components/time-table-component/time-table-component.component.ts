import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-time-table-component',
  templateUrl: './time-table-component.component.html',
  styleUrls: ['./time-table-component.component.scss']
})
export class TimeTableComponentComponent implements OnInit {

  time = [
    {start: '00:00', end: '01:00', comment: 'GG', time: '60'},
    {start: '01:00', end: '02:00', comment: 'GG', time: '60'},
    {start: '03:00', end: '04:00', comment: 'GG', time: '60'},
    {start: '05:00', end: '10:00', comment: 'GG', time: '300'},
  ]

  displayedColumns: string[] = ['start', 'end', 'comment', 'time']
  constructor() { }

  ngOnInit(): void {
  }

}
