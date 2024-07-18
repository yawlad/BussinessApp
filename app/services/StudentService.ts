import { AxiosError } from "axios";
import { instance } from "./service.api.config";
import Student from "@/types/Student";


const StudentService = {
  async getStudents() {
    return instance
      .get("/student/")
      .then((response) => {
        return response.data.students.rows as Student[];
      })
      .catch((error: AxiosError) => {
        throw error;
      });
  },
  async addStudent(student: Student) {
    return instance
      .post("/student/", student)
      .then((response) => {
        return response.data.students.rows as Student[];
      })
      .catch((error: AxiosError) => {
        throw error;
      });
  },
};

export default StudentService;
