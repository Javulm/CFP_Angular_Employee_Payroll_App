export class Employeedata {
    name: String = "";
    salary: Number = 121;
    gender: String = "";
    startDate: Date;
    note: String = "";
    profilePic: String = "";
    departments: Array<any> = [];


    constructor(name: String, salary: Number, gender: String, startDate: Date, note: String, profilePic: String, departments: Array<any>) {
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
        this.note = note;
        this.profilePic = profilePic;
        this.departments = departments;
    }
}