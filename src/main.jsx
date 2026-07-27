  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import "./styles/globals.css";
  import App from './App.jsx'
  import "./styles/animations.css";
  import "@fontsource/sora/400.css";
  import "@fontsource/sora/500.css";
  import "@fontsource/sora/600.css";
  import "@fontsource/sora/700.css";

  import "@fontsource/space-grotesk/500.css";
  import "@fontsource/space-grotesk/700.css";

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
