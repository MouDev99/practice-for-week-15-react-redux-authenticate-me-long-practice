import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { restoreUser } from './store/session';
import LoginFormPage from "./components/LoginFormPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser());
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route exact path='/login'>
          <LoginFormPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
