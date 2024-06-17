import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// import NotFound from "./pages/NotFound";
import NotFound from "./pages/NotFound";
// import Members from "./pages/Members";
// const Members = React.lazy(() => import("./pages/Members"));
// import Main from "./pages/Main";
// const Main = React.lazy(() => import("./pages/Main"));
import NavBar from "./components/NavBar";
import Intro from "./pages/Intro";
import TopMemes from "./pages/TopMemes";
import Favorite from "./pages/Favorite";
// import List from "./pages/List";
// const List = React.lazy(() => import("./pages/List"));

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/intro" />}></Route>
          <Route path="intro" element={<Intro />}></Route>
          <Route path="topmemes" element={<TopMemes />}></Route>
          <Route path="favorite" element={<Favorite />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
