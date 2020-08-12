import React from 'react';
import { Link } from 'react-router-dom';
import { mapToObject } from './Appointment';
import NNResult from './NNResult';

/*
function mapToObject(map) {
  const out = Object.create(null);
  map.forEach((value, key) => {
    if (value instanceof Map) {
      out[key] = mapToObject(value)
    }
    else {
      out[key] = value;
    }
  })
  return out;
}
*/

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
    let accuracy = jsonanswer['Accuracy'].substring(0, 5) + "%";

    if (diagnose === 0) {
      document.getElementById("result").value = "С вероятностью " + accuracy + " заболевания отсутствуют.";
    }
    else {
      document.getElementById("result").value = "С вероятностью " + accuracy + " возможны заболевания.";
    }
}

function NNForm() {
  return (
    <div className="page">
    <p>Здесь будет тест</p>
    <br/>
    <form className="testForm">
      <label>age:</label><br />
      <input required type="number" name="age" /><br />
      <label>sex:</label><br />
      <select name="sex">
        <option value="1">Мужчина</option>
        <option value="0">Женщина</option>
      </select><br />
      <label>cp:</label><br />
      <select name="cp">
        <option value="0">Тип боли 0</option>
        <option value="1">Тип боли 1</option>
        <option value="2">Тип боли 2</option>
        <option value="3">Тип боли 3</option>
      </select><br />
      <label>trestbps:</label><br />
      <input required type="number" name="trestbps" /><br />
      <label>chol</label>:<br />
      <input required type="number" name="chol" /><br />
      <label>fbs:</label><br />
      <select name="fbs">
        <option value="1">True</option>
        <option value="0">False</option>
      </select><br />
      <label>restecg:</label><br />
      <select name="restecg">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select><br />
      <label>thalach:</label><br />
      <input required type="number" name="thalach" /><br />
      <label>exang:</label><br />
      <select name="exang">
        <option value="1">yes</option>
        <option value="0">no</option>
      </select><br />
      <label>oldpeak:</label><br />
      <input required type="number" name="oldpeak" /><br />
      <label>slope:</label><br />
      <select name="slope">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select><br />
      <label>ca:</label><br />
      <select name="ca">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select><br />
      <label>thal:</label><br />
      <select name="thal">
        <option value="0">Отсутствует</option>
        <option value="1">Норма</option>
        <option value="2">Исправлено</option>
        <option value="3">Обратимое</option>
      </select><br />
      <input type="button" value="Отправить" onClick={ makeMap }/>
    </form>
  </div>
  )
}

export default NNForm;