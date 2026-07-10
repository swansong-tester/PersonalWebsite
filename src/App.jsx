import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';

// Scrolls to the #hash target after navigation, or to the top on page change.
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

// BASE_URL is '/PersonalWebsite/' in production (GitHub Pages subpath);
// the router wants it without the trailing slash.
const basename = import.meta.env.BASE_URL.replace(/\/+$/, '') || '/';

function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollManager />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
