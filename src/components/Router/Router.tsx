import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../../routes/Auth/Auth";
import Home from "../../routes/Home/Home";

type LoginProps = {
  isLoggedIn: boolean;
};

function AppRouter(props: LoginProps) {
  const { isLoggedIn } = props;
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path='/'>
              <Home />
            </Route>
          </>
        ) : (
          <>
            <Route exact path='/'>
              <Auth />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default AppRouter;
