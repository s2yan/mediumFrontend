import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from './Layout.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Singup from './pages/Singup.jsx';
import Singin from './pages/Singin.jsx';
import { UserContextProvider } from './Contexts/UserContextProvider.jsx';
import { PostContextProvider } from './Contexts/PostContextProvider.jsx';


const routes =  createBrowserRouter(
    createRoutesFromElements(
	<Route path ="/" element ={ <Layout/> }>
	    <Route path ="" element ={ <App />}/>
	    <Route path ="about" element ={ <About /> }/>
	    <Route path ="contact" element ={ <Contact /> }/>
	    <Route path ="signup" element= { <Singup /> }/>
	    <Route path ="signin" element ={ <Singin /> }/>
	</Route>
    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
	<UserContextProvider>
	    <PostContextProvider>
		<RouterProvider  router ={ routes } />
	    </PostContextProvider>
	</UserContextProvider>
  </StrictMode>,
)
