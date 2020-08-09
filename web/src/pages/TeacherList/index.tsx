/* eslint-disable */
import React, { useState, FormEvent } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItems";
import Input from "../../components/Input";
import Select from "../../components/Select";

import "./styles.css";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  const [week_day, setWeek_day] = useState("");
  const [time, setTime] = useState("");

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    if (!subject || !week_day || !time) {
      toast.error("Utilize os filtros para continuar");
    } else {
      const response = await api.get("/classes", {
        params: { week_day, subject, time },
      });

      setTeachers(response.data);
    }
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria:"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Matemática", label: "Matemática" },
              { value: "Programação", label: "Programação" },
              { value: "Inglês", label: "Inglês" },
              { value: "Ed Física", label: "Ed Física" },
              { value: "Física", label: "Física" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Português", label: "Português" },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana:"
            value={week_day}
            onChange={(e) => setWeek_day(e.target.value)}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-Feira" },
              { value: "2", label: "Terça-Feira" },
              { value: "3", label: "Quarta-Feira" },
              { value: "4", label: "Quinta-Feira" },
              { value: "5", label: "Sexta-Feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((item: Teacher) => {
          return <TeacherItem key={item.id} teacher={item} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
