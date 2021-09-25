import React, { useEffect, useState } from "react";
import AppRouter from "components/Router/Router";
import { authService } from "fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      user ? setIsLoggedIn(true) : setIsLoggedIn(false);
      setInit(true);
    });
  }, []);

  return (
    <>{init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}</>
  );
}

export default App;
