import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TransactionAddComponent } from './pages/transaction-add/transaction-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomePageComponent, TransactionAddComponent],
  imports: [CommonModule, TransactionsRoutingModule, ReactiveFormsModule],
})
export class TransactionsModule {}
