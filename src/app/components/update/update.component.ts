import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employeedata } from 'src/app/model/employeemodel';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: any;
  employee: Employeedata = new Employeedata("", 1234, "", new Date, "", "", []);
  constructor(private service: EmployeeserviceService, private route: ActivatedRoute, private router: Router) { }

  deptName: any;
  // args: any;
  emps: any = "";
  allEmp: Array<any> = [];
  tempArr: Array<any> = [];
  departments: any = ["HR", "Sales", "Engineer", "Finance", "Other"];

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.service.getEmployeeDataById(this.id).subscribe((data: any) => {
      this.employee = data.data;
    })
  }
  onCancel() {
    this.router.navigate(["/"]);
  }
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

  onSubmit() {
    console.log(this.employee)
    this.employee.departments = this.tempArr;
    this.service.updateById(this.employee, this.id).subscribe(data => {
      this.router.navigate(['/']);
    });
  }
}
