import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login } from './app/pages/Signin';
import { HomePage } from './app/pages/LandingPage';
import { ForgotPasswordPage } from './app/pages/Forgot password';
import { ForgotPasswordContinue } from './app/pages/ForgotPasswordContinue';
import { AboutPage } from './app/pages/About';
import { FaqPage } from './app/pages/FAQ';
import { PropertyPage } from './app/pages/PropertyPage';

export const RoutesPage = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element= {<Login />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
                    <Route path="/forgotpasswordcontinue" element={<ForgotPasswordContinue />} />
                    <Route path="/property" element={<PropertyPage />} />
                    <Route path="/ourstory" element={<AboutPage />} />
                    <Route path="/faq" element={<FaqPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}