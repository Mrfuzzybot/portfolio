import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs'

@Injectable({providedIn: 'root'})
export class TimeService {
  constructor(private http: HttpClient) {
  }

  shouldRefresh = new Subject<void>()

  start(): Observable<any> {
    return this.http.get('/api/time/start')
  }

  end(): Observable<any>  {
    return this.http.get('/api/time/end')
  }

  get(month): Observable<any>  {
    let monthFull = ''
    if (month.start && month.end) {
      monthFull = `?getMonth=true&start=${month.start}&end=${month.end}&date=${month.date}`
    }

    return this.http.get(`/api/time/get${monthFull}`)
  }

  getStatus(): Observable<any> {
    return this.http.get('/api/time/getStatus')
  }

  setShouldRefresh() {
    this.shouldRefresh.next()
  }
}
