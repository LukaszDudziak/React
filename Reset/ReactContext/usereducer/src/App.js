import React, { useEffect, useReducer, useState } from "react";

import CourseInfo from "./CoureseInfo";
import Form from "./Form";

import "./App.css";

const samurajProgramowaniaCourses = [
  {
    id: "aa2561a3-861a-4d3b-bf32-deeca65c1dab",
    title: "Web developer od podstaw w 15 dni",
  },
  {
    id: "d257b2cf-5200-46d4-8889-d7d9cd0cfa86",
    title: "Zaawansowany front-end w 15 dni",
  },
  {
    id: "7bd99654-d51d-4d62-ad66-353866d4bd01",
    title: "Programowanie w JavaScript",
  },
  {
    id: "3cae4405-bc0d-459e-abd7-3fcef7fcc3a5",
    title: "React od podstaw - teoria i praktyka",
  },
  {
    id: "f8c28740-0184-423c-ad03-018496946179",
    title: "Backend - Node.js, Express i MongoDB",
  },
  {
    id: "20557edc-c01e-48a4-814f-61c9c7f0850a",
    title: "(Zaawansowane) Projekty w CSS i JavaScript",
  },
];

// //obiekt akcji
// {
//   type:'ADD' //obowiązakowy
// }

const couresesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      //dodanie elementu
      return [...state, action.course];
    case "REMOVE":
      return state.filter((course) => course.id !== action.id);
    //obsługa pobranych danych
    case "FETCH":
      return action.data;
    default:
      throw new Error("Smth went wrong!");
  }
};

//metoda symulująca asynchroniczne pobranie danych
const fetchAsyncData = async () =>
  await new Promise((resolve) => setTimeout(resolve, 3000));

const App = () => {
  const [state, dispatch] = useReducer(couresesReducer, []);

  // użycie metody pobierania danych i obsługi dispatcha
  const asyncFetch = async () => {
    await fetchAsyncData();
    dispatch({ type: "FETCH", data: samurajProgramowaniaCourses });
  };

  // wywołanie 'pobrania' danych
  useEffect(() => {
    asyncFetch();
  }, []);

  const coursesElements = state.map((course) => (
    <CourseInfo key={course.id} onClickHandler={dispatch} {...course} />
  ));

  const addCourseForm = <Form addHandler={dispatch} />;

  return (
    <div className='App'>
      {addCourseForm}
      {coursesElements}
    </div>
  );
};

export default App;
