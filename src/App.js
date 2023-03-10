import { DefaultLayout } from "./Components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import publicRoutes from "./routes";
import { Fragment } from "react";

// import bootstrap from "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout === null ? Fragment : DefaultLayout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
