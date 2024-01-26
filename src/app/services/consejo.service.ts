import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data, Slip } from '../interfaces/consejo';

@Injectable({
  providedIn: 'root',
})
export class ConsejoService {
  constructor(private http: HttpClient) {}

  serviceUrl = 'https://api.adviceslip.com/advice';
  public respuesta: Data["slip"] = {id: 0, advice: ''};

  getAdvice() {
    this.http.get<Data>(this.serviceUrl).subscribe((Response) => {
      this.respuesta = Response.slip;
      console.log('respuesta:', this.respuesta);
      return this.respuesta;
    });
  }
}
