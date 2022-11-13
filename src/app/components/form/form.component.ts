import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employeedata } from 'src/app/model/employeemodel';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  employee: Employeedata = new Employeedata("", 0, "", new Date, "", "", [])
  constructor(private router: Router, private service: EmployeeserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.employee)
    this.employee.departments = this.tempArr;
    this.service.insertEmployee(this.employee).subscribe((data: any) => {
      this.router.navigate(["/"]);
    });
  }
  onCancel() {
    this.router.navigate(["/"]);
  }

  deptName: any;
  // args: any;
  emps: any = "";
  allEmp: Array<any> = [];
  tempArr: Array<any> = [];

  departments: any = ["HR", "Sales", "Engineer", "Finance", "Other"];

  checkBoxChange(dptname: any) {
    if (!this.tempArr.includes(dptname)) {
      this.tempArr.push(dptname);
    }
    else {
      const index = this.tempArr.indexOf(dptname);
      if (index > -1) { // only splice array when item is found
        this.tempArr.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
  }
}
