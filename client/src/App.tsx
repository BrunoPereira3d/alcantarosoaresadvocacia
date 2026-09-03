/**
 * Design note — Pórtico de Confiança: composição institucional escura, ritmo editorial
 * e navegação discreta para orientar uma página de advocacia sem excessos promocionais.
 *
 * O site é uma página única. URLs inexistentes são tratadas pela Netlify com
 * `client/public/404.html`, que devolve HTTP 404 real — por isso não há roteador
 * de cliente nem página NotFound em React.
 */
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <Home />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
