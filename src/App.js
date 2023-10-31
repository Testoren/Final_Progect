import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store";

import MainPage from "./pages/Main/MainPage";
import AuthPage from "./pages/Auth/AuthPage";
import JoinPage from "./pages/Join/JoinPage";
import SearchPage from "./pages/Search/SearchPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import TariffPage from "./pages/Tariff/TariffPage";
import FaqPage from "./pages/Faq/FaqPage";
import Layout from "./components/Layout/Layout";
import RequireAuth from "./hoc/RequireAuth"
import AuthorizedUser from "./hoc/AuthorizedUser";


function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: false
      }
    }
  });
  
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="auth" element={
                  <AuthorizedUser>
                    <AuthPage />
                  </AuthorizedUser>
                } />
                <Route path="join" element={
                  <AuthorizedUser>
                    <JoinPage />
                  </AuthorizedUser>
                } />
                <Route path="search" element={
                  <RequireAuth>
                    <SearchPage />
                  </RequireAuth>
                } />
                <Route path="tariff" element={<TariffPage />} />
                <Route path="faq" element={<FaqPage />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </Router>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
