import React, { Component } from 'react';

function makeMap() {
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
    document.getElementById("result").value = map.get("age");
}

function NNForm() {
  return (
    <div className="page">
    <p>Здесь будет тест</p>
    <br/>
    <form className="testForm">
      <label>
        age:<br />
        <input type="number" name="age" /><br />
        sex:<br />
        <select name="sex">
          <option value="1">Мужчина</option>
          <option value="0">Женщина</option>
        </select><br />
        cp:<br />
        <select name="cp">
          <option value="0">Тип боли 0</option>
          <option value="1">Тип боли 1</option>
          <option value="2">Тип боли 2</option>
          <option value="3">Тип боли 3</option>
        </select><br />
        trestbps:<br />
        <input type="number" name="trestbps" /><br />
        chol:<br />
        <input type="number" name="chol" /><br />
        fbs:<br />
        <select name="fbs">
          <option value="1">True</option>
          <option value="0">False</option>
        </select><br />
        restecg:<br />
        <select name="restecg">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select><br />
        thalach:<br />
        <input type="number" name="thalach" /><br />
        exang:<br />
        <select name="exang">
          <option value="1">yes</option>
          <option value="0">no</option>
        </select><br />
        oldpeak:<br />
        <input type="number" name="oldpeak" /><br />
        slope:<br />
        <select name="slope">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select><br />
        ca:<br />
        <select name="ca">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select><br />
        thal:<br />
        <select name="thal">
          <option value="0">Отсутствует</option>
          <option value="1">Норма</option>
          <option value="2">Исправлено</option>
          <option value="3">Обратимое</option>
        </select><br />
      </label>
      <input type="button" value="Отправить" onClick={makeMap}/>
    </form>
  </div>
  )
}

export default NNForm;