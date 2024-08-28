import {useState} from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Producto from "./components/Producto";
import {db} from './data/db'

function App() {

  /* const [variable,funcion] = useState(valorInicial) */
  const [productos,setProductos] = useState(db)

  function getProducto(producto){
    console.log(producto);
  }

  return (
    <>
      
      <Header/>
  
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
        {productos.map(producto => (
            <Producto 
            key={producto.id}
            producto={producto}
            getProducto={getProducto}
            />
        )
        )}
        </div>
      </main>

      <Footer/>

    </>
  );
}

export default App;
