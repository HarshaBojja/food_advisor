import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/auth' exact element={<Auth />} />
      </Routes>
    </Container>
    
  </BrowserRouter>
);

export default App;

//lg means large
//material ui typography related to any texual tags.
//below AppBar use Grow it provide basic animations 
//under the Grid type container it can be add two diff grid items
//xs={12} means full width in xtra small devices and sm={7} 7 out of 12 in small medium devices
//<Route path="/" exact component={Home} />
//<Route path="/auth" exact component={Auth} />
 