import React, { useEffect, useState } from 'react';

function IPLTable() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
  const fakeData = [
    { team: 'GT', matches: 14, won: 10, lost: 4, points: 20, nrr: 0.316 },
    { team: 'RR', matches: 14, won: 9, lost: 5, points: 18, nrr: 0.298 },
    { team: 'LSG', matches: 14, won: 9, lost: 5, points: 18, nrr: 0.251 },
    // Add more teams if you want
  ];
  const sortedData = fakeData.sort((a, b) => a.nrr - b.nrr);
  setTeams(sortedData);
}, []);


  

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Team</th>
          <th>Matches</th>
          <th>Won</th>
          <th>Lost</th>
          <th>Points</th>
          <th>NRR</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, index) => (
          <tr key={index}>
            <td>{team.team}</td>
            <td>{team.matches}</td>
            <td>{team.won}</td>
            <td>{team.lost}</td>
            <td>{team.points}</td>
            <td>{team.nrr}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default IPLTable;
