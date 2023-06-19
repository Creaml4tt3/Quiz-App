import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import QuestionList from './components/QuestionList'; 
import AddQuestion from './components/AddQuestion';
import AddAns from './components/AddAns';
import AnsList from './components/AnsList';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar bg="primary">
        <Container>
          <Link to={"/question"} className='navbar-brand text-white'>
            React & Laravel
          </Link>
        </Container>
      </Navbar>
      <Container className='mt-5'>
        <Row>
          <Col md={12}>
            <Routes>
                <Route exact path="/question" element={<QuestionList />} />
                <Route path="/question/create" element={<AddQuestion />} />
                <Route path="/question/addans" element={<AddAns />} />
                <Route path="/question/ans" element={<AnsList />} />
            </Routes>
          </Col>
        </Row>
              
        </Container>
    </Router>
  )
}

export default App;
