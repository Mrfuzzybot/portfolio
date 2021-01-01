import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({providedIn: 'root'})
export class TimeService {
  constructor(private http: HttpClient) {
  }

  start(): Observable<any> {
    return this.http.get('/api/time/start')
  }

  end(): Observable<any>  {
    return this.http.get('/api/time/end')
  }

  getStatus(): Observable<any> {
    return this.http.get('/api/time/getStatus')
  }
}
