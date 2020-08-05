import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function TestDone() {
    return (
        <div>
            <p>Результат:</p>
            <p>Каким бы не был результат, если Вы испытываете 
                дискомфорт в работе сердечно-сосудистой системы, пожалуйста, 
            <Link to="/Appointment"> запишитесь </Link>
                на консультацию к нашим специалистам, чтобы пройти 
                более тщательное обследование.
            </p>
        </div>
    )
}

export default TestDone;