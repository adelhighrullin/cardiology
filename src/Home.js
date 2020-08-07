import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className="nnblock">
                <p>текст о нейросети</p>
                <Link to="/NNPage">Перейти к тесту</Link>
            </div>
            <div className="appblock">
                <p>текст о записи на прием</p>
                <Link to="/Appointment">Перейти к записи</Link>
            </div>
        </div>
    )
}

export default Home;