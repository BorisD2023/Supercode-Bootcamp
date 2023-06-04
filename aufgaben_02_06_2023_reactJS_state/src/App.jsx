import './App.css'
import ChangeBg from './components/ChangeBg'
import Counter from './components/Counter'
import Inputs from './components/Inputs'


function App() {
  
    return(
        <>
        <section>
        {<Counter />}
        </section>
        <section>
            <ChangeBg/>
        </section>
        <section>
            <Inputs/>
        </section>
        </>
    )
}


export default App
