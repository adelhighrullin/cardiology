import React from 'react';
import { Link } from 'react-router-dom';

export async function getSchedule() {
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
    }
}

function Home() {
    return (
        <div>
            <div className="column" id="nnblock">
                <div id="homenn">Нейронная сеть - алгоритм математической модели, 
                    которому на вход подаются данные для обучения. 
                    После обучения модель может принимать новые данные 
                    и с определенной вероятностью выдавать результат. 
                    Вы можете ввести данные и узнать вероятность наличия 
                    заболевания сердечно-сосудистой системы.</div>
                <Link to="/NNPage"><button type="button">Перейти к тесту</button></Link>
            </div>
            <div className="column" id="appblock">
                <div id="homeapp">Квалифицированные специалисты ждут Вас на обследование 
                    сердечно-сосудистой системы (ЭКГ, УЗИ сердца и сосудов) 
                    и консультации (кардиолога, сосудистого хирурга, невропатолога, 
                    аритмолога, детского кардиолога).</div>
                <Link to="/Appointment" onClick={ getSchedule }><button type="button">Перейти к записи</button></Link>
            </div>
        </div>
    )
}

export default Home;