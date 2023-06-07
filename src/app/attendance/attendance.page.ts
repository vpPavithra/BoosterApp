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
        studentName: 'ABC',
        attendance: true
      },
      {
        regNo: 2,
        studentName: 'ABC',
        attendance: true
      },
      {
        regNo: 3,
        studentName: 'ABC',
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
