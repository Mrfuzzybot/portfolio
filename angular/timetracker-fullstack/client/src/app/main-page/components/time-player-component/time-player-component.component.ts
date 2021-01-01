import { Component, OnInit } from '@angular/core'
import * as moment from 'moment'
import { Moment } from 'moment'

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

  constructor() { }

  ngOnInit(): void {
    this.loading = true
    this.playing = false
    setTimeout(() => {
      this.loading = false
    }, 1000)
  }

  buttonCLick() {
    console.log('clicked', this.playing)
    if (this.playing) {
      // Stop
      this.loading = true
      setTimeout(() => {
        this.playing = false
        this.loading = false
        clearInterval(this.timeInt)
      }, 1000)
    } else {
      this.time = '00:00:00'

      // Timer
      this.timeInt = setInterval(() => {
        this.time = moment(this.time, 'HH:mm:ss').add(1, 'second').format('HH:mm:ss')
      }, 1000)
      this.loading = true
      setTimeout(() => {
        this.playing = true
        this.loading = false
      }, 1000)
      // Start
    }
  }


}
