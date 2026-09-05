import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";
import { Suspense, lazy, useEffect } from "react";
import Loading from "./subComponents/Loading";
import BlogPost from "./components/BlogPost";
import PageTransition from "./subComponents/pageTransition";

const pageImports = {
  main: () => import("./components/Main"),
  about: () => import("./components/AboutPage"),
  contact: () => import("./components/ContactPage"),
  blog: () => import("./components/BlogPage"),
  work: () => import("./components/WorkPage"),
  skills: () => import("./components/MySkillsPage"),
};

const Main = lazy(pageImports.main);
const AboutPage = lazy(pageImports.about);
const ContactPage = lazy(pageImports.contact);
const BlogPage = lazy(pageImports.blog);
const WorkPage = lazy(pageImports.work);
const MySkillsPage = lazy(pageImports.skills);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />} />

        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />

        <Route
          path="/blog"
          element={
            <PageTransition>
              <BlogPage />
            </PageTransition>
          }
        />

        <Route
          path="/blog/:slug"
          element={
            <PageTransition>
              <BlogPost />
            </PageTransition>
          }
        />

        <Route
          path="/work"
          element={
            <PageTransition>
              <WorkPage />
            </PageTransition>
          }
        />

        <Route
          path="/skills"
          element={
            <PageTransition>
              <MySkillsPage />
            </PageTransition>
          }
        />

        <Route path="*" element={<Main />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      Object.values(pageImports).forEach((load) => {
        load().catch(() => {});
      });
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />

      <Router basename={import.meta.env.BASE_URL}>
        <Suspense fallback={<Loading />}>
          <AnimatedRoutes />
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
