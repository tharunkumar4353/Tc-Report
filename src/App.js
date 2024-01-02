import React, { useState } from 'react';
import './App.css';

function App() {
  const [shiftno, setShiftno] = useState('');
  const [furno, setFurno] = useState('');
  const [grade, setGrade] = useState('');
  const [heatno, setHeatno] = useState('');
  const [heatfr, setHeatfr] = useState('');
  const [heatto, setHeatto] = useState('');
  const [datefr, setDatefr] = useState('');
  const [dateto, setDateto] = useState('');





  const handleInputChange = (e) => {
    const { id, value } = e.target;

    switch (id) {
      case 'shiftno':
        setShiftno(value);
        break;
      case 'furno':
        setFurno(value);
        break;
      case 'grade':
        setGrade(value);
        break;
      case 'heatno':
        setHeatno(value);
        break;
      case 'heatfr':
        setHeatfr(value);
        break;
      case 'heatto':
        setHeatto(value);
        break;
      case 'datefr':
        setDatefr(value);
        break;
      case 'dateto':
        setDateto(value);
        break;
          
      default:
        break;
    }
  };

  return (
    <div className="page">
      <div className="content">
        <div className="f1">
          <p className="input">
            <select
              
              className="inp1"
              id="shiftno"
              name="shiftno"
              value={shiftno}
              onChange={handleInputChange}
            >
      <option value="" disabled selected hidden>Shift No</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      </select>
      <select
              
              className="inp2"
              id="furno"
              name="furno"
              value={furno}
              onChange={handleInputChange}
            >
      <option value="" disabled selected hidden>Furnace No</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      </select>

      <select
              
              className="inp3"
              id="grade"
              name="grade"
              value={grade}
              onChange={handleInputChange}
            >
      <option value="" disabled selected hidden>Grade</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      </select>

      <input
              type="text"
              className="inp4"
              id="heatno"
              name="heatname"
              placeholder="Heat Number"
              value={heatno}
              onChange={handleInputChange}

            />

<input
              type="text"
              className="inp5"
              id="heatfr"
              name="heatfr"
              placeholder="Heat From"
              value={heatfr}
              onChange={handleInputChange}

            />

<input
              type="text"
              className="inp6"
              id="heatto"
              name="heatto"
              placeholder="Heat To"
              value={heatto}
              onChange={handleInputChange}

            />

<input
              type="text"
              className="inp7"
              id="datefr"
              name="datefr"
              placeholder="Date From"
              value={datefr}
              onChange={handleInputChange}

            />
<input
              type="text"
              className="inp8"
              id="dateto"
              name="dateto"
              placeholder="Date To"
              value={dateto}
              onChange={handleInputChange}

            />
            <button className="sub"><strong>Submit</strong></button>
          </p>
          

          
        </div>
      </div>
    </div>
  );
}

export default App;
