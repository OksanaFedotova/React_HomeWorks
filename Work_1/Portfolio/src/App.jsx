import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ThemeProvider from "./components/ThemeProvider/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
