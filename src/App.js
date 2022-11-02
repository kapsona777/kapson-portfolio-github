import './App.scss';
import {Routes,Route} from 'react-router-dom';
import Layout  from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
     <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element = {<Home />}/>
        </Route>
        <Route path="/about" element={<Layout />}>
            <Route index element = {<About />}/>
         </Route>
         <Route path="/services" element={<Layout />}>
            <Route index element = {<Services />}/>
         </Route>
         <Route path="/team" element={<Layout />}>
            <Route index element = {<Team />}/>
         </Route>
         <Route path="/faq" element={<Layout />}>
            <Route index element = {<FAQ />}/>
         </Route>
         <Route path="/blog" element={<Layout />}>
            <Route index element = {<Blog />}/>
         </Route>
         <Route path="/contact" element={<Layout />}>
            <Route index element = {<Contact />}/>
         </Route>
     </Routes>
  );
}

export default App;
