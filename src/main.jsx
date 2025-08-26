import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserContextProvider } from './Contexts/UserContextProvider.jsx';
import { PostContextProvider } from './Contexts/PostContextProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
	<UserContextProvider>
	    <PostContextProvider>
			<App />
	    </PostContextProvider>
	</UserContextProvider>
  </StrictMode>,
)
