import React from 'react';
import { Link } from 'react-router-dom';

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
    document.getElementById("ans").value = jsonanswer.rows.length;
}

function Home() {
    return (
        <div>
            <div className="nnblock">
                <p>текст о нейросети</p>
                <Link to="/NNPage">Перейти к тесту</Link>
            </div>
            <div className="appblock">
                <p>текст о записи на прием</p>
                <Link to="/Appointment" onClick={ getSchedule }>Перейти к записи</Link>
            </div>
        </div>
    )
}

export default Home;