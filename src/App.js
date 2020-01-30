import React, { useState, useEffect } from 'react';
import Pages from './pages';

function App() {
  const [user, setUser] = useState(null);
  
  const BASE_URL = "https://gitconnected.com/v1/portfolio/sotomaque";

  useEffect(() => {
    fetch(BASE_URL, { crossdomain: true })
      .then(res => res.json())
      .then(user => {
        setUser(user);
        console.log(user)
      });
  }, []);

  if (!user) {
    return <div />
  }

  return <Pages user={user} />;
}

export default App;
