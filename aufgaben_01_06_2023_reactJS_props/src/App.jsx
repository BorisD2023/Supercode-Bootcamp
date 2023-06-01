
import './App.css'
import ProductList from './components/products/ProductList'
import ItemList from './components/items/ItemList'


function App(){
    return(
    
    <>
    <section className='firstTask'>
      <ItemList />
    </section>
    <section className='secondTask'>
      <h1>SUPERSHOP</h1>
      <article className='gallery'>
      <ProductList />
      </article>
    </section>
    </>
  )
}

export default App




// !Alternative
// export default function App(){

//   return(
//     <>
//       <MainSection />
//     </>
//   )
// }

