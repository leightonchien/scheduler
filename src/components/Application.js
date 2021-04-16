import React, { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from "./DayList";
import InterviewerList from "./InterviewerList";
import Appointment from "components/Appointment";
import axios from 'axios';

const appointments = [
  {
    id: 1,
    time: "12pm"
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png"
      }
    }
  },
  {
    id: 3,
    time: "2pm",
    interview: {
      student: "Richard Dank",
      interviewer: {
        id: 3,
        name: "Whada Funk",
        avatar: "https://i.redd.it/x8hhr1z8han41.jpg"
      }
    }
  },
  {
    id: 4,
    time: "8pm",
    interview: {
      student: "Danklord Supreme",
      interviewer: {
        id: 3,
        name: "Da Undankest",
        avatar: "https://i.redd.it/t8wx28oto8n41.jpg"
      }
    }
  }
];




const appointment = appointments.map((appt) => {

  return (
    <Appointment key={appt.id} {...appt} />
    )
});



export default function Application(props) {

  const [day, setDay] = useState([]);
  const [dayData, setDayData] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8001/api/days')

      .then(res => {
        setDayData(res.data)
      })

      .catch(err => console.log(err))

  }, [])


  return (
    <main className="layout">
      <section className="sidebar">

      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu"></nav>
      <nav className="sidebar__menu">
        <DayList
          days={dayData}
          day={day}
          setDay={setDay}
        />
        </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">



        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
