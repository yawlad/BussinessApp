import Lesson from "@/types/Lesson";
import Payment from "@/types/Payment";
import Student from "@/types/Student";
import { makeAutoObservable } from "mobx";

class DataStore {
  isLogged: boolean = false;
  students: Student[] = [];
  lessons: Lesson[] = [];
  payments: Payment[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  logIn() {
    this.isLogged = true;
  }
  logOut() {
    this.isLogged = false;
  }
  setStudents(students: Student[]) {
    this.students = students;
  }
  setLessons(lessons: Lesson[]) {
    this.lessons = lessons;
  }
  setPayments(payments: Payment[]) {
    this.payments = payments;
  }
  isLoggedIn() {
    return this.isLogged;
  }
  getStudents() {
    return this.students;
  }
  getLessons() {
    return this.lessons;
  }
  getPayments() {
    return this.payments;
  }
}

const dataStore = new DataStore();

export default dataStore;
