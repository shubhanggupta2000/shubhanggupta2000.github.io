import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Router>
        <Suspense fallback={<Loading />}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/about"
                element={
                  <PageTransition direction="bottom">
                    <AboutPage />
                  </PageTransition>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageTransition direction="top">
                    <ContactPage />
                  </PageTransition>
                }
              />
              <Route
                path="/blog"
                element={
                  <PageTransition direction="right">
                    <BlogPage />
                  </PageTransition>
                }
              />
              <Route
                path="/blog/:slug"
                element={
                  <PageTransition direction="right">
                    <BlogPost />
                  </PageTransition>
                }
              />{" "}
              <Route
                path="/work"
                element={
                  <PageTransition direction="left">
                    <WorkPage />
                  </PageTransition>
                }
              />
              <Route
                path="/skills"
                element={
                  <PageTransition direction="bottom">
                    <MySkillsPage />
                  </PageTransition>
                }
              />
              <Route path="*" element={<Main />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;