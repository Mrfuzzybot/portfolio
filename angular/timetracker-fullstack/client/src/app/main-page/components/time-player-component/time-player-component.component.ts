import { Component, OnInit } from '@angular/core'
import * as moment from 'moment'
import { Moment } from 'moment'
import { TimeService } from '../../../shared/services/time.service'

@Component({
  selector: 'app-time-player-component',
  templateUrl: './time-player-component.component.html',
  styleUrls: ['./time-player-component.component.scss']
})
export class TimePlayerComponentComponent implements OnInit {

  playing: Boolean
  loading: Boolean
  timeInt: number
  time = '00:00:00'

  constructor(private timeService: TimeService) { }

  ngOnInit(): void {
    this.loading = true
    this.timeService.getStatus().subscribe(data => {
      this.loading = false
      if (data.startedTime) {
        this.playing = true
        const time = new Date(Date.now() - Date.parse(data.startedTime.started) + Date.parse(new Date().getTimezoneOffset().toString()))
        this.time = moment(time).format('HH:mm:ss')
        this.startTime(true)
      } else {
        this.playing = false
      }
    })
  }

  buttonCLick() {
    if (this.playing) {
      // Stop
      this.loading = true
      this.timeService.end().subscribe(() => {
        this.playing = false
        this.loading = false
        clearInterval(this.timeInt)
      })
    } else {
      // Start
      this.loading = true
      this.timeService.start().subscribe(() => {
        this.playing = true
        this.startTime()
        this.loading = false
      })
    }
  }

  startTime(resume = false) {
    if (!resume) {
      this.time = '00:00:00'
    }

    // Timer
    this.timeInt = setInterval(() => {
      this.time = moment(this.time, 'HH:mm:ss').add(1, 'second').format('HH:mm:ss')
    }, 1000)
  }
}
