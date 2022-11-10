import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employeedata } from 'src/app/model/employeemodel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  employee: Employeedata = new Employeedata("", 0, "", new Date, "", "", "")
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.employee)
  }
  onCancel() {
    this.router.navigate(["/"]);
  }
}
