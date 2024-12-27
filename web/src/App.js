import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    // Fetch hello message
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message));

    // Fetch time
    fetch('/api/time')
      .then(res => res.json())
      .then(data => setTime(data.time));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Docker Compose Demo</h1>
      <p>Message from backend: {message}</p>
      <p>Server time: {time}</p>
    </div>
  );
}

export default App; 