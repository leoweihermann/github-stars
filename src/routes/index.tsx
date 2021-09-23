import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Repositories from '../pages/Repositories';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/user/:userName" exact component={Repositories} />
    </Switch>
  );
};

export default Routes;
