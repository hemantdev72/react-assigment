import { Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import Details from "./components/Details";
import Create from "./components/Create";
import Loading from "./components/Loading";
const Home = lazy(() => import("./components/Home"));

function App() {
  return (
    <div className="h-screen w-screen flex">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Link
        to="/"
        className="text-red-300 absolute top-[4%] right-[4%] text-xl border rounded p-1 hover:shadow-md"
      >
        Home
      </Link>
    </div>
  );
}

export default App;
