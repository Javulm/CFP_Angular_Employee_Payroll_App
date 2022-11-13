import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employeedata } from '../model/employeemodel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http: HttpClient) { }

  insertEmployee(employee: any) {
    return this.http.post("http://localhost:8081/home/create", employee);
  }

  getEmployeeData() {
    return this.http.get("http://localhost:8081/home/getall");
  }

  getEmployeeDataById(id: number): Observable<Employeedata> {
    return this.http.get<Employeedata>("http://localhost:8081/home/get/" + id);
  }

  updateById(employee: any, id: number) {
    return this.http.put("http://localhost:8081/home/update/" + id, employee);
  }
  deleteById(id: number) {
    return this.http.delete("http://localhost:8081/home/delete/" + id);
  }
}
