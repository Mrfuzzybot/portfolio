import { Component, OnDestroy, OnInit } from '@angular/core'
import { TimeService } from '../../../shared/services/time.service'
import * as moment from 'moment'
import { IntToHHMMSS } from '../../../shared/utils/IntToHHMMSS'
import { Subscription } from 'rxjs'
import { FormControl } from '@angular/forms'
import { Debounce } from '../../../shared/utils/debounce'

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
  date: FormControl

  displayedColumns: string[] = ['start', 'end', 'comment', 'time']

  constructor(private timeService: TimeService) { }

  ngOnInit(): void {
    this.date = new FormControl(new Date())
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
    console.log('data fetching')
    this.timeService.get(moment(this.date.value).format('DD.MM.YYYY')).subscribe(data => {
      this.loading = false
      console.log('data.times', data.times)
      this.time = data.times.map(time => ({
        start: moment(time.started).format('HH:mm:ss'),
        end: moment(time.ended).format('HH:mm:ss'),
        comment: time.comment,
        time: moment(time.time).format('HH:mm:ss'),
        id: time._id
      }))
      this.workedThisMonth = IntToHHMMSS(data.totalMonth)
      this.workedThisDay = IntToHHMMSS(data.totalThisDay)
    })
  }

  dateChanged() {
    console.log('this.date', moment(this.date.value).format('DD.MM.YYYY'))
    this.fetchData()
  }

  @Debounce(1000)
  commenting(e, element) {
    this.timeService.comment(e.target.value, element.id).subscribe(data => {
      console.log(data)
    })
  }
}
