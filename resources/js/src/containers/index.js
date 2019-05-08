import Home from './home';
import About from './about';
import Policy from './policy';
import Auth from './auth';
import University from './university';
import Professor from './professor';
// import Blog from './blog'; will implement later
// hoc
import Authenticate from './hoc/Authenticate'; // check if token exists and login
import Logged from './hoc/Logged'; // check if logged in then redirect to '/'
import Routing from './hoc/Routing'; // set current route in redux state
import Theme from './hoc/Theme'; // self explanatory??? jeez
// import Welcome from './hoc/Welcome'; // if first time visit show welcome component
import Tracker from './hoc/Tracker'; // google analytics tracker

const containers = [
  {
    id: 'homeContainerID',
    exact: true,
    path: '/',
    component: Tracker((Theme(Authenticate(Routing(Home)))))
  },
  {
    id: 'aboutContainerID',
    exact: true,
    path: '/about',
    component: Tracker((Theme(Authenticate(Routing(About)))))
  },
  {
    id: 'policyContainerID',
    exact: true,
    path: '/policy',
    component: Tracker((Theme(Authenticate(Routing(Policy)))))
  },
  {
    id: 'authContainerID',
    exact: true,
    path: '/auth',
    component: Tracker((Theme(Logged(Authenticate(Routing(Auth))))))
  },
  {
    id: 'universityContainerID',
    exact: true,
    path: '/university/:id',
    component: Tracker((Theme(Authenticate(Routing(University)))))
  },
  {
    id: 'professorContainerID',
    exact: true,
    path: '/professor/:id',
    component: Tracker((Theme(Authenticate(Routing(Professor)))))
  },
  // {
  //   id: 'blogsContainerID',
  //   exact: true,
  //   path: '/blog',
  //   component: Welcome(Theme(Authenticate(Routing(Blog))))
  // }
];

export default containers;
