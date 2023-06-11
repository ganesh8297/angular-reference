import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  subject = new BehaviorSubject<any>(Array);
  subject1: any = new BehaviorSubject<any>(Array);

  constructor() { }

  sendMessage(data: any) {
    this.subject.next({ data: data })
  }

  clearMessage() {
    this.subject.next('')
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  addStudent(data: any) {
    this.subject1.next({ data: data })
  }

  getStudentList(): Observable<any> {
    return this.subject1.asObservable();
  }

}
