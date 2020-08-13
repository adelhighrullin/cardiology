import React from 'react';
import { Link } from 'react-router-dom';
import { getSchedule } from './Home'

function NNResult() {
  return (
    <div className="column">
      <textarea id="result" value="" readOnly={ true }/><br/><br/>
      <div id="nnres">Мы не несём ответственность за достоверность результатов теста. 
      Это лишь прогноз обученной нейронной сети. Если у Вас остаются сомнения по поводу 
      заболеваний сердечно-сосудистой системы, пожалуйста, обратитесь к специалисту. Вы 
      также можете записаться на консультацию в нашу клинику.</div><br/>
      <Link to="/Appointment" onClick={ getSchedule }><button type="button">Перейти к записи</button></Link>
    </div>
  )
}

export default NNResult;