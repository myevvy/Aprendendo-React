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
              {/* Simplificado as classes para evitar bugs */}
              <li><a className='logo' href="../index.html">Doce Aroma</a></li>
              
              <li>
                <a 
                  href="#home" 
                  className={`links-navegacao ${linkAtivo === 'inicio' ? 'active' : ''}`} 
                  onClick={() => setLinkAtivo('inicio')}
                >
                  INÍCIO
                </a>
              </li>

              <li>
                <a 
                  href="#menu" 
                  className={`links-navegacao ${linkAtivo === 'menu' ? 'active' : ''}`} 
                  onClick={() => setLinkAtivo('menu')}
                >
                  MENU
                </a>
              </li>

              <li>
                <a 
                  href="#" 
                  className={`links-navegacao ${linkAtivo === 'lojas' ? 'active' : ''}`} 
                  onClick={() => setLinkAtivo('lojas')}
                >
                  LOJAS
                </a>
              </li>

              <li>
                <a 
                  href="#" 
                  className={`links-navegacao ${linkAtivo === 'sobre' ? 'active' : ''}`} 
                  onClick={() => setLinkAtivo('sobre')}
                >
                  SOBRE NÓS
                </a>
              </li>

              <li>
                <a 
                  href="#" 
                  className={`links-navegacao ${linkAtivo === 'contato' ? 'active' : ''}`} 
                  onClick={() => setLinkAtivo('contato')}
                >
                  CONTATO
                </a>
              </li>
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

          <div>
            <p>Muito mais do que uma xícara quentinha, entregamos uma experiência sensorial completa feita para desacelerar a rotina e aquecer o coração.</p>
            <p>Na Doce Aroma, cada grão é selecionado e torrado artesanalmente para transformar o seu momento do café em um ritual de puro aconchego e sabor.</p>
          </div>
          
        </div>
      </section>

      <section id="menu">
        <div className="conteiner-branco"> 
          <div className="card-menu">
            <div className="cafes">
              <img src="src/assets/cafés/expresso.jpeg" alt="foto-café-expresso" />
              <h2>Café Expresso</h2>
              <p>A base de tudo. Um café curto, forte e encorpado, extraído sob alta pressão. Apresenta uma camada de creme consistente na superfície, que preserva o aroma e o sabor intenso do grão.</p>
              <p>R$ 7,50</p>
            </div>

            <div className="cafes">
              <img src="src/assets/cafés/macchiato.jpeg" alt="foto-café-macchiato" />
              <h2>Macchiato</h2>
              <p>Ideal para quem quer quebrar a intensidade do espresso. É o nosso espresso tradicional "manchado" com uma leve colherada de espuma de leite densa e cremosa no topo.</p>
              <p>R$ 9,00</p>
            </div>

            <div className="cafes">
              <img src="src/assets/cafés/cappuccino.jpeg" alt="foto-café-cappuccino" />
              <h2>Cappuccino Italiano</h2>
              <p>Um dos favoritos do público. Uma combinação perfeitamente equilibrada em três partes iguais: uma dose de espresso, leite vaporizado e uma camada generosa de espuma de leite por cima.</p>
              <p>R$ 12,50</p>
            </div>
          </div>

          
          <div className="card-menu">
            
            <div className="cafes"> 
              <img src="src/assets/cafés/latte.jpeg" alt="foto-café-latte" />
              <h2>Caffè Latte</h2>
              <p>O clássico café com leite do dia a dia, mas preparado de forma elegante. Leva uma dose de espresso misturada a uma quantidade maior de leite vaporizado, finalizado com uma fina camada de espuma. É suave e reconfortante.</p>
              <p>R$ 11,00</p>
            </div>

            <div className="cafes">
              <img src="src/assets/cafés/caramel-macchiato.jpeg" alt="foto-café-macchiato-caramel" />
              <h2>Caramel Macchiato</h2>
              <p>Uma opção doce e super chamativa para o menu. Leva leite vaporizado com xarope de baunilha, espresso jogado suavemente por cima e uma finalização artística com calda de caramelo legítimo.</p>
              <p>R$ 16,00</p>
            </div>

            <div className="cafes">
              <img src="src/assets/cafés/iced-latte.jpeg" alt="foto-café-iced-latte" />
              <h2>Iced Latte</h2>
              <p>Perfeito para dias mais quentes e super moderno para o site. Uma combinação refrescante de espresso, leite integral gelado e cubos de gelo, que pode ser personalizada com essência de baunilha ou avelã.</p>
              <p>R$ 14,50</p>
            </div>
          </div>
        </div>
      </section>

      <section id="lojas">
        <div className='card-lojas'>
          <div className='loja-textos'>
            <h2>Lojas</h2>
            <p></p>
          </div>

          <div className="loja">
            <img src="#" alt="foto-da-loja" />
          </div>
        </div>
      </section>
    </>
  )
}

export default App