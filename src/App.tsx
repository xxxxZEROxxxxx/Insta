import AuthLayout from './_auth/AuthLayout';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import Home from './_root/pages/Home';
import RootLayout from './_root/RootLayout';
import './globels.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <main className="flex max-h-screen">
        <Routes>
          <Route element={<AuthLayout/>}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
          </Route>
      <Route element={<RootLayout/>}>
      <Route index element={<Home />} />

      </Route>
      
        
        </Routes>
      </main>
    </Router>
  );
};

export default App;
