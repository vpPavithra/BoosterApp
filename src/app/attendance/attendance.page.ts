import { Component, OnInit } from '@angular/core';

interface Student {
  regNo: number,
  studentName: string,
  attendance: boolean
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  studentDetails: Array<Student>
  constructor() { 
    this.studentDetails = [
      {
        regNo: 1,
        studentName: 'Abhishek P N',
        attendance: true
      },
      {
        regNo: 2,
        studentName: 'Prince Gupta',
        attendance: true
      },
      {
        regNo: 3,
        studentName: 'Sujith S',
        attendance: true
      }
    ]
  }

  ngOnInit() {
  }

  saveAttendance() {
    console.log(this.studentDetails);
  }

}
