import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TransactionAddComponent } from './pages/transaction-add/transaction-add.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'transactions',
    loadChildren: () =>
      import('./transaction-list/transaction-list.module').then(
        (m) => m.TransactionListModule
      ),
  },
  {
    path: 'income/add',
    component: TransactionAddComponent,
  },
  {
    path: 'expense/add',
    component: TransactionAddComponent,
  },
  {
    path: 'transactions/:transactionId',
    loadChildren: () =>
      import('./transaction-detail/transaction-detail.module').then(
        (m) => m.TransactionDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionsRoutingModule {}
