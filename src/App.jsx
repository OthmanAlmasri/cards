import Layout from "./components/Layout";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:slug" element={<Details />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
