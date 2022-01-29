
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import StudentDashboard from './Components/StudentDashboard'
import Quiz from './Components/Questionhtml';
import Quiz1 from './Components/Questioncss';
import Quiz2 from './Components/Questionjs';
import Answer from './Components/Answer';
import Question from './Components/Question';
function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
         <Route path ="/" exact Component={Home}>
           <Home/>
         </Route>
         <Route path="/Login"exact Component={Login}>
           <Login/>
         </Route>
         <Route path="/Components/Signup.js" exact Component={Signup}>
           <Signup/>
         </Route>
         <Route path="/StudentDashboard" exact  Component={StudentDashboard}>
           <StudentDashboard/>
         </Route>
         <Route path="/html" exact  Component={Quiz}>
           <Quiz/>
         </Route>
         <Route path="/css" exact  Component={Quiz1}>
           <Quiz1/>
         </Route>
         <Route path="/js" exact  Component={Quiz1}>
           <Quiz2/>
         </Route>
         <Route path="/Components/Answer.js" exact  Component={Answer}>
           <Answer/>
         </Route>
         <Route path="/Components/Question.js" exact  Component={Question}>
           <Question/>
         </Route>
      </Switch>
    </div>
    </Router>
   
  );
}

export default App;
