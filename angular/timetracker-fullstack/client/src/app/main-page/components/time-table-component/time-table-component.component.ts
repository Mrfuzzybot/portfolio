import { Component, OnInit } from '@angular/core'
import { TimeService } from '../../../shared/services/time.service'
import * as moment from 'moment'
import { IntToHHMMSS } from '../../../shared/utils/IntToHHMMSS'

@Component({
  selector: 'app-time-table-component',
  templateUrl: './time-table-component.component.html',
  styleUrls: ['./time-table-component.component.scss']
})
export class TimeTableComponentComponent implements OnInit {

  time = []
  workedThisMonth = '00:00:00'
  loading = true

  displayedColumns: string[] = ['start', 'end', 'comment', 'time']

  constructor(private timeService: TimeService) { }

  ngOnInit(): void {
    this.timeService.get({start: '01.01.2020', end: '31.01.2021'}).subscribe(data => {
      this.loading = false
      this.time = data.times.map(time => ({
        start: moment(time.started).format('HH:mm:ss'),
        end: moment(time.ended).format('HH:mm:ss'),
        comment: time.comment,
        time: moment(time.time).format('HH:mm:ss')
      }))
      this.workedThisMonth = IntToHHMMSS(data.totalMonth)
    })
  }
}
