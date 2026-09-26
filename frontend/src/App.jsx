import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/candidates/')
      .then((response) => {
        setCandidates(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-shell">
      <header className="hero">
        <p className="eyebrow">Recruitment Management</p>
        <h1>Recruitment Dashboard Pro</h1>
        <p className="hero-copy">
          A full-stack recruitment dashboard built with React and Django REST Framework.
        </p>
      </header>

      <main className="dashboard">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Candidate Pipeline</p>
            <h2>Candidates</h2>
          </div>

          <div className="candidate-count">
            {candidates.length} candidate{candidates.length === 1 ? '' : 's'}
          </div>
        </div>

        {loading ? (
          <div className="status-card">Loading candidates...</div>
        ) : candidates.length > 0 ? (
          <div className="candidate-grid">
            {candidates.map((candidate) => (
              <article className="candidate-card" key={candidate.id}>
                <div className="candidate-card-top">
                  <div>
                    <h3>{candidate.name}</h3>
                    <p className="candidate-email">{candidate.email}</p>
                  </div>

                  <span className="status-badge">
                    {candidate.current_status || 'New'}
                  </span>
                </div>

                <div className="candidate-meta">
                  {candidate.phone_number && (
                    <div>
                      <span className="meta-label">Phone</span>
                      <p>{candidate.phone_number}</p>
                    </div>
                  )}

                  <div>
                    <span className="meta-label">Skills</span>
                    <p>{candidate.skills || 'Not provided'}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="status-card">
            No candidates found. Add one through the Django REST API.
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
