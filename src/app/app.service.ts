import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Car } from './car';


@Injectable({
  providedIn: 'root'
})

export class AppService {
 
  apiurl = 'api/cars';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };
  appservice: any;
  car: any;
  


  constructor(private http: HttpClient) {
    
   }
   private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  getCar(id: number): Observable<Car> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<Car>(url).pipe(
      catchError(this.handleError)
    );
  }
  addCar (car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiurl, car, this.httpOptions).pipe(
    tap(data => console.log(data)),
    catchError(this.handleError)
  );
}
deleteCar (id: number): Observable<Car> {
  const url = `${this.apiurl}/${id}`;
  return this.http.delete<Car>(url, this.httpOptions).pipe(
    catchError(this.handleError)
  );
  

}
 
updateCar (car: Car): Observable<null | Car> {
  return this.http.put<Car>(this.apiurl, car, this.httpOptions).pipe(
    tap(data => console.log(data)),
    catchError(this.handleError)
  );
}










}
