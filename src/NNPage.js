import React from 'react';
import NNForm from './NNForm';
import NNResult from './NNResult';
import { Link } from 'react-router-dom';
import { getSchedule } from './Home';

/*
async function getSchedule() {
  const url = new URL("http://127.0.0.1:8000/get-schedule/");
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
  let answer = await response.json();

  let jsonanswer = JSON.parse(JSON.stringify(answer));
  let mytable = document.getElementById("schedule");
  for (let i = 0; i < jsonanswer.rows.length; i++) {
      mytable.rows[jsonanswer.rows[i]].cells[jsonanswer.columns[i]].querySelector("input").disabled = true;
      document.getElementById("ans").value += jsonanswer.rows[i] + " " + jsonanswer.columns[i] + "\n";
  }
}
*/

function NNPage() {
  return (
    <div>
      <NNForm />
      <NNResult />
      <div className="appblock">
        <p>текст о записи на прием</p>
        <Link to="/Appointment" onClick={ getSchedule }>Перейти к записи</Link>
      </div>
    </div>
  )
}

export default NNPage;