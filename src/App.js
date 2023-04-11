import logo from './logo.svg';
import './App.css';
import HomePage from './screen/HomePage';
import ProductPage from './screen/ProductPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from './screen/BlogPage';
import SingleBlogPage from './screen/SingleBlogPage';
import ContactUsPage from './screen/ContactUsPage';
import AboutUsPage from './screen/AboutUsPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/product' element={<ProductPage/>}/>
            <Route path='/blog' element={<BlogPage/>}/>
            <Route path='/singleBlog/:id' element={<SingleBlogPage/>}/>
            <Route path='/contactUs' element={<ContactUsPage/>}/>
            <Route path='/aboutUs' element={<AboutUsPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
