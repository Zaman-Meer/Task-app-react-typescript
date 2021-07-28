
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Task from './pages/Task';
import TasksList from './pages/TasksList';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" >
              <TasksList /> 
            </Route>

            <Route exact path="/task/:id" >
              <Task /> 
            </Route>
        </Switch>
    </Router>
  
  );
}

export default App;
