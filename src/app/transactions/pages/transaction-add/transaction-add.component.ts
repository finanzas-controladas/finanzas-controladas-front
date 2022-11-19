import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.scss']
})
export class TransactionAddComponent implements OnInit {

  transactionForm: FormGroup | undefined;
  incomeButton: Boolean = false;
  expenseButton: Boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {this.transactionForm = this.formBuilder.group({
    description:new FormControl('',Validators.required),
    amount:new FormControl('',Validators.required),
    date:new FormControl('',Validators.required),
    })
  console.log(this.router.url)
  if(this.router.url === '/income/add'){
    this.incomeButton = true
  } else this.expenseButton = true
  }

  sendForm():void{
    console.log(this.transactionForm?.value)
  }

}
