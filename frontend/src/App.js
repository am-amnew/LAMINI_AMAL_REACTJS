import './App.css';
import Axios from "axios";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Productlist from './components/productlist'

import { Description } from './components/Description';
import List from './components/list'
import L from './components/l'
import SignuP from './components/signuP'
import Signin from './components/signin'
import SigninAdmin from './components/signinAdmin'
import SignuPadmin from './components/signuPadmin'
import One from './components/one'
import Tablebus from './components/tablebus'
import Tabletaxi from './components/tabletaxi'
import Tablemotor from './components/tablemotor'
import Tablecovoi from './components/tablecovoi'
import Test from './components/test'
import Productlist2 from './components/productlist2'
import Reservermotor from './components/reservermotor'
import Reservercovoi from './components/reservercovoi'
import Reservertaxi from './components/reservertaxi'
import Reserverbus from './components/reserverbus'
import Showtableusers from './components/showtableusers'
import Edit from './components/edit2'
import Editbus from './components/editbus'
import Edittaxi from './components/edittaxi'
import Editcovoi from './components/editcovoi'
import Editmotor from './components/editmotor'

import Showtablebus from './components/showtablebus'
import Showtabletaxi from './components/showtabletaxi'
import Showtablecovoi from './components/showtablecovoi'
import Showtablemotor from './components/showtablemotor'
import Showtablecomment from './components/showtablecomment'
import Comment from './components/comment'


function App() {


  return (

    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/s" element={<Productlist />}></Route>

          <Route exact path="/list" element={<List />}></Route>
          <Route path='/l' element={<L />}></Route>
          <Route path='/signup' element={<SignuP />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/signinAdmin' element={<SigninAdmin />}></Route>
          <Route path='/signuPadmin' element={<SignuPadmin />}></Route>

          <Route path='/product/:id' element={<Description />}></Route>
          <Route path='/one' element={<One />}></Route>
          <Route path='/tablebus' element={<Tablebus />}></Route>
          <Route path='/tabletaxi' element={<Tabletaxi />}></Route>
          <Route path='/tablemotor' element={<Tablemotor />}></Route>
          <Route path='/tablecovoi' element={<Tablecovoi />}></Route>
          <Route path='/test' element={<Test />}></Route>
          <Route path='/s2' element={<Productlist2 />}></Route>
          <Route path='/reservermotor' element={<Reservermotor />}></Route>
          <Route path='/reserverbus' element={<Reserverbus />}></Route>
          <Route path='/reservertaxi' element={<Reservertaxi />}></Route>
          <Route path='/reservercovoi' element={<Reservercovoi />}></Route>
          <Route path='/users' element={<Showtableusers />}></Route>
          <Route path='/showtablebus' element={<Showtablebus />}></Route>
          <Route path='/showtaxi' element={<Showtabletaxi />}></Route>
          <Route path='/showcovoi' element={<Showtablecovoi />}></Route>
          <Route path='/showmotor' element={<Showtablemotor />}></Route>
          <Route path='/showcomment' element={<Showtablecomment />}></Route>
          <Route path='/comment' element={<Comment />}></Route>

          <Route path="edit/:id" element={<Edit />} />
          <Route path="edit/bus/:id" element={<Editbus />} />
          <Route path="edit/taxi/:id" element={<Edittaxi />} />
          <Route path="edit/covoi/:id" element={<Editcovoi />} />
          <Route path="edit/motor/:id" element={<Editmotor />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
