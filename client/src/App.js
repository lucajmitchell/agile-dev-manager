import React, { useEffect, useState } from 'react';

function App() {

  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setBackendData(data));
  }, []);

  return (
    <div>
      {backendData.message}
    </div>
  );
}

export default App;