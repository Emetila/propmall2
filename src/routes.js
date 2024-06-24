import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login } from './app/pages/Signup';
import { HomePage } from './app/pages/LandingPage';

export const RoutesPage = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element= {<Login />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}