import '@capterra/arubaito/dist/utility.min.css';
import '@capterra/arubaito/dist/arubaito_component.min.css';
import './shared/styles/globals.scss';

import React, { useContext } from 'react';

import style from './App.scss';
import Footer from './components/footer';
import Nav from './components/nav/nav';
import Routes from './components/routes';
import { Redirect } from 'react-router-dom';
// import { AppState } from './app.state.js';

function App() {
  // const { globalStore } = useContext(AppState);
  return (
    <div>
      <Nav/>
      <main className={style['main']}>
        <Routes/>
        <Redirect to='/leads' />
      </main>
      <Footer/>
    </div>
  );
}

export default App;

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       hello world
//     </div>
//   );
// }

// export default App;
