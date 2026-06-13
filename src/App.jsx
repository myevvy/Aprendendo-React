import { useState } from 'react'

import './App.css'

function App() {
  const [linkAtivo, setLinkAtivo] = useState('inicio');

  return (
    <>
      <header>
        <div>
          <p>Endereço: rua sla oq da cidade n sei da onde</p>
          <p>Número: 55+ 11 98765-4321</p>
        </div>

        <div>
          <nav>
            <ul>
              <li><a className='logo links-navegacao' href="../index.html">Doce Aroma</a></li>
              <li><a href="#home" className='links-navegação' href="#" 
                  className={linkAtivo === 'inicio' ? 'active' : ''} 
                  onClick={() => setLinkAtivo('inicio')}>INÍCIO</a></li>

              <li><a href="#menu" className='links-navegação' href="#" 
                  className={linkAtivo === 'menu' ? 'active' : ''} 
                  onClick={() => setLinkAtivo('menu')}>MENU</a></li>

              <li><a href="#" className='links-navegação' href="#" 
                  className={linkAtivo === 'lojas' ? 'active' : ''} 
                  onClick={() => setLinkAtivo('lojas')}>LOJAS</a></li>

              <li><a href="#" className='links-navegação' href="#" 
                  className={linkAtivo === 'sobre' ? 'active' : ''} 
                  onClick={() => setLinkAtivo('sobre')}>SOBRE NÓS</a></li>

              <li><a href="#" className='links-navegação' href="#" 
                  className={linkAtivo === 'contato' ? 'active' : ''} 
                  onClick={() => setLinkAtivo('contato')}>CONTATO</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home">
        <div className='intro-home'>
          <div>
            <h1>Doce</h1>
            <h1>Aroma</h1>
          </div>
          <p>Muito mais do que uma xícara quentinha, entregamos uma experiência sensorial completa feita para desacelerar a rotina e aquecer o coração.</p>
        </div>
      </section>

      <section id="menu">
        <div>
          <div className="card-menu">
            <div className="cafes">
              <h2>Café Expresso</h2>
              <p>A base de tudo. Um café curto, forte e encorpado, extraído sob alta pressão. Apresenta uma camada de creme consistente na superfície, que preserva o aroma e o sabor intenso do grão.</p>
              <p>R$ 7,50</p>
            </div>

            <div className="cafes">
              <h2>Macchiato</h2>
              <p>Ideal para quem quer quebrar a intensidade do espresso. É o nosso espresso tradicional "manchado" com uma leve colherada de espuma de leite densa e cremosa no topo.</p>
              <p>R$ 9,00</p>
            </div>

            <div className="cafes">
              <h2>Cappuccino Italiano</h2>
              <p>Um dos favoritos do público. Uma combinação perfeitamente equilibrada em três partes iguais: uma dose de espresso, leite vaporizado e uma camada generosa de espuma de leite por cima.</p>
              <p>R$ 12,50</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
