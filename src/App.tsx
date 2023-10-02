import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '@/const/routes'
import Home from '@/routes/Home/Home'

function App() {
    return (
        <>
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
            </Routes>
        </>
    )
}

export default App
