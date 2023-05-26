import React from 'react'
import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'

const Overview = () => {
  let currentDisplay = useSelector(selectDisplay);
    // console.log("DISPLAY" , currentDisplay);
    return (
        <div className="stack">
            <h1>{currentDisplay.name.official}</h1>
            <h2>{currentDisplay.name.common}</h2>

    <table className="overview-table">
        <tr>
            <td>Borders:</td>
            <td>
                {currentDisplay.borders ? currentDisplay.borders.map((e, i, arr) => {
                    if (i + 1 === arr.length) {
                        return `${e}`
                    } else {
                        return `${e}, `
                    }
                })
                    : "N/A"}
            </td>
        </tr>
        <tr>
            <td>Capitol: </td>
            {currentDisplay.capital.map((e) => {
                <td>{e}</td>
            })}
        </tr>
        <tr>
            <td>Poplulation: </td>
            <td>{currentDisplay.population}</td>
        </tr>
        <tr>
            <td>Continents: </td>
            {currentDisplay.continents.map((e) => {
                <td>{e}</td>
            })}
        </tr>
        <tr>
            <td>Independent: </td>
            <td>{currentDisplay.independent ? "Yes" : "No"}</td>
        </tr>
        <tr>
            <td>Landlocked: </td>
            <td>{currentDisplay.landlocked ? "Yes" : "No"}</td>
        </tr>
        <tr>
            <td>Member of UN: </td>
            <td>{currentDisplay.unMember ? "Yes" : "No"}</td>
        </tr>
      </table>
    </div>
   );
};

export default Overview