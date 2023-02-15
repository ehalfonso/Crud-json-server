import logo from './logo.svg';
import Testimonio from './componentes/Testimonio';
import Navbar from './componentes/Navbar';
import Banner from './componentes/Banner';
import Layout from './componentes/Layout';

import './App.css';

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Banner/>
      <Layout/>
      <h1 className='text-center mt-5 mb-5'>Estos son los comentarios de nuestros servicios</h1>
      <Testimonio
        nombre='Eric'
        pais='Cuba'
        empresa='Copextel'
      />
      <Testimonio
        nombre='Roberto'
        pais='Mexico'
        empresa='UTS'
      />
    </div>
  );
}

export default App;
