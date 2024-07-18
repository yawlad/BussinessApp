"use client";
import { useEffect, useState } from "react";
import StudentService from "./services/StudentService";
import Student from "@/types/Student";
export default function Home() {
  const [name, setName] = useState("");
  const [lessonCost, setLessonCost] = useState(0);
  const [startBalance, setStartBalance] = useState(0);
  const [students, setStudents] = useState<Student[]>([]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      id: 0,
      name,
      lessonCost,
      startBalance,
    };

    try {
      const students = await StudentService.addStudent(data);
      setStudents(students);
    } catch (error) {
      console.error("Client Error:", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const students = await StudentService.getStudents();
        setStudents(students);
      } catch (error) {
        console.error("Client Error:", error);
      }
    };
    getData();
    return () => {};
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Стоимость занятия"
          value={lessonCost}
          onChange={(e) => setLessonCost(+e.target.value)}
        />
        <input
          type="number"
          placeholder="Баланс"
          value={startBalance}
          onChange={(e) => setStartBalance(+e.target.value)}
        />
        <button type="submit">Отправить</button>
        <div>
          {students.map((student) => (
            <div>{student.name}</div>
          ))}
        </div>
      </form>
    </main>
  );
}
