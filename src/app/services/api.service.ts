import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Tabledata } from './../models/tabledata';

import { catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly apiUrl = '../../assets/data/task.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<Tabledata> {
    return this.http.get<Tabledata>(this.apiUrl)
          .pipe(
            catchError((error: any) => Observable.throw(error.json()))
            );
  }
}
