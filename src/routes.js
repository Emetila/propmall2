import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login } from './app/pages/Signin';
import { HomePage } from './app/pages/LandingPage';
import { ForgotPasswordPage } from './app/pages/Forgot password';
import { ForgotPasswordContinue } from './app/pages/ForgotPasswordContinue';
import { AssetPage } from './app/pages/AssetPage';

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
                    <Route path="/asset" element={<AssetPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}