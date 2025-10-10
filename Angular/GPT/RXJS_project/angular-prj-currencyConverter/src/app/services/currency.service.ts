import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private readonly BASE_URL = 'https://api.exchangerate.host';
  private readonly API_KEY = 'f6ecdac650b9c0ebe3bc3adbc3433421';

  constructor(private http: HttpClient) {}

  convertCurrency(from: string, to: string, amount: number): Observable<any> {
    const url = `${this.BASE_URL}/convert?access_key=${this.API_KEY}&from=${from}&to=${to}&amount=${amount}`;
    return this.http.get<any>(url);
  }
}
