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

  get(date): Observable<any>  {
    return this.http.get(`/api/time/get?date=${date}`)
  }

  getStatus(): Observable<any> {
    return this.http.get('/api/time/getStatus')
  }

  setShouldRefresh() {
    this.shouldRefresh.next()
  }
}
