import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Mantenemos el archivo de estilos

function App() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Asegúrate de que tu servidor de Django esté corriendo
    // python manage.py runserver
    axios.get('http://127.0.0.1:8000/api/candidates/')
      .then(response => {
        setCandidates(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
        setLoading(false);
      });
  }, []); // El array vacío asegura que se ejecute solo una vez

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recruitment Dashboard Pro</h1>
      </header>
      <main>
        <h2>Candidates</h2>
        {loading ? (
          <p>Loading candidates...</p>
        ) : (
          <div>
            {candidates.length > 0 ? (
              <ul>
                {candidates.map(candidate => (
                  <li key={candidate.id}>
                    <strong>{candidate.name}</strong> - {candidate.email}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No candidates found. Please add some from the Django admin.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
