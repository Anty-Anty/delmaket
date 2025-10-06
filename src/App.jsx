import { useState } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import MainPageEN from "./pages/MainPageEN";

import './App.css';

function App() {

  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/en" element={<MainPageEN />} />
      </Routes>
    </HashRouter>
  )
}

export default App




// OLD APP.JSX

// import MainPage from "./pages/MainPage";

// import './App.css';

// function App() {

//   return (
//     <>
//       <MainPage/>
//     </>
//   )
// }

// export default App
