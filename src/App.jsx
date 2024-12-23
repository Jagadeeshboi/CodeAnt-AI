import Layout from './Components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './Components/Error';
import { SigninPage } from './Components/SignIn/SigninPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/sign-in" element={<SigninPage/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
