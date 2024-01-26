import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data, Slip } from '../interfaces/consejo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ConsejoService {
  constructor(private http: HttpClient) {}

  serviceUrl = 'https://api.adviceslip.com/advice';
  respuesta: Data[] = [];

  getAdvice(): void {
    this.http.get<Data[]>(this.serviceUrl).subscribe(
      (data: Data[]) => {
        this.respuesta = data;
        console.log(this.respuesta);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
