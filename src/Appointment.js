import React from 'react';
import { Link } from 'react-router-dom';

export function mapToObject(map) {
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

async function getChecked() {
  let map = new Map();
  map.set("name", document.getElementById("name").value);
  map.set("surname", document.getElementById("surname").value);
  map.set("phone", document.getElementById("phone").value);
  let trow, tcolumn;
  let radios = document.getElementsByName("date");
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      trow = radios[i].closest("tr").rowIndex;
      tcolumn = radios[i].closest("td").cellIndex;
      radios[i].disabled = true;
      break;
    }
  }
  map.set("row", trow);
  map.set("column", tcolumn);
  const outstring = JSON.stringify(mapToObject(map));
  const url = new URL("http://127.0.0.1:8000/set-schedule/");
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: outstring
    });
}

function Appointment() {
  return (
    <div className="page">
      <p>Здесь будет запись</p>
      <form>
        <label>Имя:</label>
        <input required type="text" id="name" ></input><br/>
        <label>Фамилия:</label>
        <input required type="text" id="surname" ></input><br/>
        <label>Номер телефона:</label>
        <input required type="tel" id="phone" ></input><br/>
      </form>
      
      <table id="schedule">
            <thead>
            <tr>
              <td></td>
              <td>пн</td>
              <td>вт</td>
              <td>ср</td>
              <td>чт</td>
              <td>пт</td>
            </tr>
            </thead>
            <tbody>
        <tr>
          <td><label>9:00 - 10:00</label><br/></td>
          <td><input type="radio" name="date"/><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
        </tr>
        <tr>
        <td><label>10:00 - 11:00</label><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
        </tr>
        <tr>
        <td><label>11:00 - 12:00</label><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
        </tr>
        <tr>
        <td><label>12:00 - 13:00</label><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
        </tr>
        <label>перерыв</label>
        <tr>
        <td><label>14:00 - 15:00<br/></label></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
        </tr>
        <tr>
        <td><label>15:00 - 16:00<br/></label></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
        </tr>
        <tr>
        <td><label>16:00 - 17:00</label><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
        </tr>
        <tr>
        <td><label>17:00 - 18:00<br/></label></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
          <td><input type="radio" name="date" /><br/></td>
        </tr>
        </tbody>
        </table>
        <div>
          <textarea id="ans" value="" readOnly={ true }/>
        </div>
      <Link to="/Done"><input type="submit" value="Записаться" onClick={ getChecked }></input><br/></Link>
    </div>
  )
}

export default Appointment;