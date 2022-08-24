import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
      <Header/>
      <main className='py-3'>
        <Container>
        <h1 className='font-weight-bold text-center'>Bienvenido a Casa Arnold</h1>
          <HomeScreen/>
        </Container>
  
      </main>
      <Footer/>
    </>
  );
}

export default App;
