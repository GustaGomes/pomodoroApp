import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { StudiesPage } from "./pages/StudiesReact";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History />} />
        <Route path="/StudiesReact" element={<StudiesPage />} />
      </Route>
    </Routes>
  );
}
