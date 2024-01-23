import React, { useEffect, useState } from 'react'

export default function ScoreCard({userScores,computerScores,winners,rounds,itr}) {

  const [arr, setArr] = useState([{}])
  const [tableBody,setTableBody] = useState([]);

  console.log(userScores);

  useEffect(()=> {
    //console.log("YYY")
    setTableBody([])
    for(let i=0;i<userScores.length;i++) {
    //console.log(ele, computerScores[i], winners[i] );
      let tableJsx = <tr><td class="rounds">{i+1}</td> <td class="scoreTable">{userScores[i]}</td> <td class="scoreTable">{computerScores[i]}</td> <td class="Winners">{winners[i]}</td>  </tr>;
     setTableBody((arr)=>[...arr,tableJsx]);
    
   }

  },[userScores,computerScores])
  return (
    <div>
      <main>
      <section id="result">
        <div id="scoreCard">
      <h1>Score Card</h1>
      </div>
      <div id="centeredTable">
      <table>
        <tr>
          <th class="rounds">
            Round
          </th>
          <th class="scoreTable">
            User's Score
          </th>
          <th class="scoreTable">
            Computer's Score
          </th>
          <th class="Winners">
            Victor
          </th>
        </tr>
        <tbody>
        {tableBody}
        </tbody>
      </table>
      </div>
      </section>
      </main>
    </div>
  )
}


// round usescore comscore whowon
// 1      12       13      tie