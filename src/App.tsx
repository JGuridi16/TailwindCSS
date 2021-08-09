import { useState } from 'react';
import { Login } from './components/Login'
import Home from './components/Home'

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return loggedIn ? <Home /> : <Login setUserLoggedIn={setLoggedIn} />
}

export default App;