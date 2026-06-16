import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [linkAtivo, setLinkAtivo] = useState('inicio');

  const imagensLoja = [
    "src/assets/loja/loja1.jpg",
    "src/assets/loja/loja2.jpg",
    "src/assets/loja/loja4.jpg"
  ];

  const [fotoAtual, setFotoAtual] = useState(0);

  useEffect(() => {
    // 2. Cria um temporizador que muda a foto a cada 4000 milissegundos (4 segundos)
    const temporizador = setInterval(() => {
      setFotoAtual((indexAnterior) =>
        indexAnterior === imagensLoja.length - 1 ? 0 : indexAnterior + 1
      );
    }, 3000);

    // Limpa o temporizador se o usuário mudar de página/componente sumir
    return () => clearInterval(temporizador);
  }, []);

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
                  href="#lojas"
                  className={`links-navegacao ${linkAtivo === 'lojas' ? 'active' : ''}`}
                  onClick={() => setLinkAtivo('lojas')}
                >
                  LOJAS
                </a>
              </li>

              <li>
                <a
                  href="#sobre"
                  className={`links-navegacao ${linkAtivo === 'sobre' ? 'active' : ''}`}
                  onClick={() => setLinkAtivo('sobre')}
                >
                  SOBRE NÓS
                </a>
              </li>

              <li>
                <a
                  href="#contato"
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
            <h2>Conheça as Nossas Lojas</h2>
            <p>Portas abertas, sorrisos calorosos e o perfume inconfundível de grãos fresquinhos sendo moídos na hora. Nossos espaços físicos foram desenhados para abraçar os seus sentidos. Venha viver a experiência completa da Doce Aroma, sinta-se em casa e descubra por que cada canto das nossas lojas foi feito para aquecer o coração.</p>
          </div>

          <div className="fotos-lojas">
            {imagensLoja.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`foto-da-loja-${index}`}
                className={index === fotoAtual ? 'foto-slide ativa' : 'foto-slide'}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="sobre">
        <div className="sobre-container">
          <div className="sobre-manifesto">
            <span>Nossa História</span>
            <h2>Feito por pessoas apaixonadas, para pessoas apaixonadas.</h2>
          </div>

          <div className="sobre-grid">
            <div className="pilar-item">
              <h3>A Origem</h3>
              <p>Viajamos pelas montanhas atrás de pequenos produtores que cultivam cada grão com respeito à terra e paixão pelo processo.</p>
            </div>

            <div className="pilar-item">
              <h3>A Torra</h3>
              <p>Nosso processo de torrefação é quase uma ciência: controlamos o tempo e a temperatura para despertar as notas mais doces e aromáticas de cada variedade.</p>
            </div>

            <div className="pilar-item">
              <h3>O Propósito</h3>
              <p>Não vendemos apenas cafeína. Entregamos uma desculpa para você desacelerar a rotina, respirar fundo e saborear o momento atual.</p>
            </div>
          </div>

        </div>
      </section>

      <section id="contato">
        <div className="contato-container">

          <div className="contato-canais">
            <h2>Vamos Conversar?</h2>
            <p>Dúvidas, sugestões ou apenas quer bater um papo sobre café? Escolha o melhor canal para você:</p>

            <div className="links-contato">
              <a href="https://wa.me/5511987654321" target="_blank" rel="noreferrer" className="item-contato">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (11) 98765-4321
              </a>

              <a href="mailto:contato@docearoma.com" className="item-contato">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                contato@docearoma.com
              </a>
            </div>
          </div>

          <div className="contato-horarios">
            <h3>Horários da Casa</h3>

            <div className="linha-horario">
              <span>Segunda a Sexta</span>
              <span className="linhas-pontilhadas"></span>
              <span>08h às 20h</span>
            </div>

            <div className="linha-horario">
              <span>Sábados</span>
              <span className="linhas-pontilhadas"></span>
              <span>09h às 18h</span>
            </div>

            <div className="linha-horario">
              <span>Domingos e Feriados</span>
              <span className="linhas-pontilhadas"></span>
              <span>Fechado</span>
            </div>
          </div>

        </div>
      </section>

      <footer className="footer-site">
        <div className="footer-conteudo">
          <span className="footer-logo">Doce Aroma</span>
          <p>&copy; 2026 Doce Aroma Cafeteria. Todos os direitos reservados.</p>
          <p>Desenvolvido com carinho para amantes de café.</p>
        </div>
      </footer>
    </>
  )
}

export default App