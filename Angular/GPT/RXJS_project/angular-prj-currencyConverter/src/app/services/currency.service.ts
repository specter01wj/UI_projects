import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private readonly BASE_URL = 'https://api.exchangerate.host';

  constructor(private http: HttpClient) {}

  convertCurrency(from: string, to: string, amount: number): Observable<any> {
    const url = `${this.BASE_URL}/convert?from=${from}&to=${to}&amount=${amount}`;
    return this.http.get<any>(url);
  }
}
