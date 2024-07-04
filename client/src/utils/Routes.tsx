import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout";

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route key="/" path="/" element={<Layout />}>
      <Route path="/signup" element={null} />
      <Route path="/login" element={null} />
      <Route path="/logout" element={null} />
      <Route path="/job-form" element={null} />
    </Route>,
  ])
);

export default router;
