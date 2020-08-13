import React from 'react';
import { mapToObject } from './Appointment';

async function makeMap() {
    let map = new Map();
    map.set("age", document.getElementsByName("age")[0].value);
    map.set("sex", document.getElementsByName("sex")[0].value);
    map.set("cp", document.getElementsByName("cp")[0].value);
    map.set("trestbps", document.getElementsByName("trestbps")[0].value);
    map.set("chol", document.getElementsByName("chol")[0].value);
    map.set("fbs", document.getElementsByName("fbs")[0].value);
    map.set("restecg", document.getElementsByName("restecg")[0].value);
    map.set("thalach", document.getElementsByName("thalach")[0].value);
    map.set("exang", document.getElementsByName("exang")[0].value);
    map.set("oldpeak", document.getElementsByName("oldpeak")[0].value);
    map.set("slope", document.getElementsByName("slope")[0].value);
    map.set("ca", document.getElementsByName("ca")[0].value);
    map.set("thal", document.getElementsByName("thal")[0].value);
    const outstring = JSON.stringify(mapToObject(map));
    const url = new URL("http://127.0.0.1:8000/start/");
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: outstring
    });
    const url2 = new URL("http://127.0.0.1:8000/get/");
    let response2 = await fetch(url2, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
    let answer = await response2.json();
    let jsonanswer = JSON.parse(JSON.stringify(answer));
    let diagnose = jsonanswer['Result'];
    let accuracy = jsonanswer['Accuracy'];
    if (diagnose < 0.5) {
      document.getElementById("result").value += "С вероятностью " + (100 - accuracy) + "% заболевания отсутствуют.";
    }
    else {
      document.getElementById("result").value += "С вероятностью " + accuracy + " возможны заболевания.";
    }
}

function NNForm() {
  return (
    <div className="column">
    <p id="nntext">Модель нейронной сети, обученная на данных более 1000 пациентов,
      предсказывает вероятность возникновения болезней с точностью выше 80%.
      Введите информацию ниже, и методы искусственного интеллекта определят 
      необходимость посещения кабинета квалифицированного врача.
    </p>
    <br/>
    <form className="testForm">
      <label>Возраст:</label>
      <input required type="number" name="age" /><br />
      <label>Пол:</label>
      <select name="sex">
        <option value="1">Мужчина</option>
        <option value="0">Женщина</option>
      </select><br />
      <label>Боль в груди:</label>
      <select name="cp">
        <option value="0">Тип боли 0</option>
        <option value="1">Тип боли 1</option>
        <option value="2">Тип боли 2</option>
        <option value="3">Тип боли 3</option>
      </select><br />
      <label>Артериальное давление:</label>
      <input required type="number" name="trestbps" /><br />
      <label>Уровень холестерина:</label>
      <input required type="number" name="chol" /><br />
      <label>Уровень сахара в крови больше 120 мг?:</label>
      <select name="fbs">
        <option value="1">Да</option>
        <option value="0">Нет</option>
      </select><br />
      <label>Результат электрокардиографии:</label>
      <select name="restecg">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select><br />
      <label>Максимально достигнутый пульс:</label>
      <input required type="number" name="thalach" /><br />
      <label>Стенокардия:</label>
      <select name="exang">
        <option value="1">Есть</option>
        <option value="0">Нет</option>
      </select><br />
      <label>Косовосходящая:</label>
      <input required type="number" name="oldpeak" /><br />
      <label>Наклон косовосходящей:</label>
      <select name="slope">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select><br />
      <label>Количество органов при рентгеноскопии:</label>
      <select name="ca">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select><br />
      <label>Талассемия:</label>
      <select name="thal">
        <option value="0">Отсутствует</option>
        <option value="1">Норма</option>
        <option value="2">Исправлено</option>
        <option value="3">Обратимое</option>
      </select><br />
      <button type="button" onClick={ makeMap }>Отправить</button>
    </form>
  </div>
  )
}

export default NNForm;