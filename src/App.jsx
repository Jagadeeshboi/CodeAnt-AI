import Sidebar from './Components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SigninPage } from './Components/SigninPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/sign-in" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
