import { BrowserRouter, Routes, Route } from "react-router-dom";

import Quiz from "./pages/Quiz";


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
