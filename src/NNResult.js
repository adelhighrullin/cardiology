import React from 'react';
import { Link } from 'react-router-dom';
import { getSchedule } from './Home'

function NNResult() {
  return (
    <div id="showResult">
      <textarea id="result" value="" readOnly={ true }/>
      <p>текст о записи на прием</p>
      <Link to="/Appointment" onClick={ getSchedule }>Перейти к записи</Link>
    </div>
  )
}

export default NNResult;