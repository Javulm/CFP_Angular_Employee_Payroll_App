export class Employeedata {
    name: String = "";
    salary: Number = 121;
    gender: String = "";
    startDate: Date;
    note: String = "";
    profilePic: String = "";
    departments: String = "";

    constructor(name: String, salary: Number, gender: String, startDate: Date, note: String, profilePic: String, departments: String) {
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
        this.note = note;
        this.profilePic = profilePic;
        this.departments = departments;
    }
}