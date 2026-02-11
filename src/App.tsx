import { Analytics } from "@vercel/analytics/react";
import Home from "./home";
// import "./App.css"; <-- This line will be removed

function App() {
  return (
    <>
      <Home />
      <Analytics />
    </>
  );
}

export default App;
