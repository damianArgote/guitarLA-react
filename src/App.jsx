import Footer from "./components/Footer";
import Header from "./components/Header";
import Producto from "./components/Producto";

function App() {
  return (
    <>
      
      <Header/>


      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          

        <Producto/>
        </div>
      </main>

      <Footer/>

    </>
  );
}

export default App;
