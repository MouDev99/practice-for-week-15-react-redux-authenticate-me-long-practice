import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { restoreUser } from './store/session';
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from './components/SignupFormPage';

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
        <Route exact path='/signup'>
          <SignupFormPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
