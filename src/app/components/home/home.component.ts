import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employeedata } from 'src/app/model/employeemodel';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private service: EmployeeserviceService) { }

  employeelist: any;
  ngOnInit(): void {
    this.service.getEmployeeData().subscribe((data: any) => {
      this.employeelist = data.data;
      console.log(this.employeelist);
    });
  }
  editById(id: number) {
    this.router.navigate(['update', id])
  }
  deleteById(id: number) {
    this.service.deleteById(id).subscribe((data) => {
      console.log("data deleted!!!!!");
      this.ngOnInit();
      this.router.navigate(["/"]);
    });
  }
}
