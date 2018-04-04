import { Injectable } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Instance } from 'JsStore';
import { IPromise } from 'q';
import { IStudent } from 'app/model/student';

@Injectable()
export class StudentService {
  _connection: Instance;
  constructor(service: CommonService) {
    this._connection = service._connection;
  }

  getStudents() {
    // jsstore returns promise, when you dont specify OnSuccess
    return this._connection.select({
      From: 'Student'
    });
  }

  addStudent(student) {
    return this._connection.insert({
      Into: 'Student',
      Values: [student]
    });
  }

  deleteStudent(studentId) {
    return this._connection.remove({
      From: 'Student',
      Where: {
        Id: studentId
      }
    });
  }

  updateStudent(studentId, updateValue) {
    return this._connection.update({
      In: 'Student',
      Where: {
        Id: studentId
      },
      Set: updateValue
    });
  }

  /**
   *  Get student by studentId
   *
   * @param {any} studentId
   * @returns {Promise<IStudent>}
   * @memberof StudentService
   */
  getStudent(studentId): Promise<IStudent> {
    return this._connection.select({
      From: 'Student',
      Where: {
        Id: studentId
      }
    });
  }

  /**
   * clear students table
   *
   * @returns {Promise<null>}
   * @memberof StudentService
   */
  clearStudents(): Promise<null> {
    return this._connection.clear('Student');
  }
}
