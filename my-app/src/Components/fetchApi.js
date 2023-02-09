import { useState } from "react";
import "./fetchApi.css";
export function Fetch() {
  const [state, setState] = useState([]);
  async function getData() {
    let url = "(https://randomuser.me/)";
    const res = await fetch(url);
    const data = await res.json();
    setState(data);
    console.log(data);
  }
  return (
    <div id="tdiv">
      <h1>Fetch Data</h1>
      <button onClick={getData}>Get Data</button>
      <table className="fetchtable" cellPadding="10px">
        <thead>
          <tr>
            <th>USER ID</th>
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
          </tr>
        </thead>

        <tbody>
          {state.map(function (elem) {
            return (
              <tr key={elem.id}>
                <td>{elem.gender}</td>
                <td>{elem.name}</td>
                <td>{elem.location}</td>
                <td>{elem.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
