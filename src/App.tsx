import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import { Routes } from "./constant/navigation";

function App() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        {Routes.map(({ path, page: PageComponent, layout: LayoutComponent }) => (
          <Route
            key={path}
            path={path}
            element={
              <LayoutComponent>
                <PageComponent />
              </LayoutComponent>
            }
          />
        ))}
      </RouterRoutes>
    </BrowserRouter>
  );
}

export default App;
