import { Component, OnDestroy, OnInit, Output } from '@angular/core'
import { TimeService } from '../../../shared/services/time.service'
import * as moment from 'moment'
import { IntToHHMMSS } from '../../../shared/utils/IntToHHMMSS'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-time-table-component',
  templateUrl: './time-table-component.component.html',
  styleUrls: ['./time-table-component.component.scss']
})
export class TimeTableComponentComponent implements OnInit, OnDestroy {

  time = []
  workedThisMonth = '00:00:00'
  workedThisDay = '00:00:00'
  loading = true
  tSub: Subscription

  displayedColumns: string[] = ['start', 'end', 'comment', 'time']

  constructor(private timeService: TimeService) { }

  ngOnInit(): void {
    this.fetchData()
    this.tSub = this.timeService.shouldRefresh.subscribe(() => {
      this.fetchData()
    })
  }

  ngOnDestroy() {
    if (this.tSub) {
      this.tSub.unsubscribe()
    }
  }

  fetchData() {
    this.timeService.get({start: '01.01.2020', end: '31.01.2021', date: '01.01.2021'}).subscribe(data => {
      this.loading = false
      this.time = data.times.map(time => ({
        start: moment(time.started).format('HH:mm:ss'),
        end: moment(time.ended).format('HH:mm:ss'),
        comment: time.comment,
        time: moment(time.time).format('HH:mm:ss')
      }))
      this.workedThisMonth = IntToHHMMSS(data.totalMonth)
      this.workedThisDay = IntToHHMMSS(data.totalMonth)
    })
  }
}
