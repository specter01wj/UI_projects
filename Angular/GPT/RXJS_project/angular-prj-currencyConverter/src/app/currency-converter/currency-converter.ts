import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CurrencyService } from '@app/services/currency.service';
import { Subject, debounceTime, switchMap, tap, catchError, of } from 'rxjs';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './currency-converter.html',
  styleUrl: './currency-converter.scss'
})
export class CurrencyConverter {
  private currencyService = inject(CurrencyService);

  // Signals for inputs
  baseCurrency = signal('USD');
  targetCurrency = signal('EUR');
  amount = signal(100);

  // Signals for state
  result = signal<number | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);
  lastUpdated = signal<Date | null>(null);

  currencyOptions = [
    { label: 'USD', value: 'USD' },
    { label: 'EUR', value: 'EUR' },
    { label: 'GBP', value: 'GBP' },
    { label: 'JPY', value: 'JPY' },
    { label: 'CNY', value: 'CNY' }
  ];

  private trigger$ = new Subject<void>();

  constructor() {
    effect(() => {
      this.trigger$.pipe(
        debounceTime(300),
        switchMap(() => {
          this.loading.set(true);
          this.error.set(null);

          return this.currencyService.convertCurrency(
            this.baseCurrency(),
            this.targetCurrency(),
            this.amount()
          ).pipe(
            tap((res) => {
              this.result.set(res.result);
              this.lastUpdated.set(new Date(res.date));
              this.loading.set(false);
            }),
            catchError((err) => {
              this.error.set('Conversion failed. Please try again.');
              this.loading.set(false);
              return of(null);
            })
          );
        })
      ).subscribe();
    });

    this.trigger$.next(); // initial call
  }

  onInputChange() {
    this.trigger$.next();
  }
}
