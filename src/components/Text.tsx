import "./Text.css";
//import trator from "../assets/casa/trator.jpg"; // Boas máquinas trabalhando
import pintura from "../assets/casa/pintura.jpg"; // Arquitetura moderna
import balcao from "../assets/casa/balcao.jpg"; // Boa qualidade da pintura
import area from "../assets/casa/area.jpg"; // Uso de materiais de alta qualidade
import interior from "../assets/casa/interior.jpg"; // Atendimento personalizado

const Main = () => {
  return (
    <div>
      <section className="about-jg">
        <h2>Sobre a JG Construções</h2>
        <p>
          A <strong>JG Construções</strong> é referência no mercado de construção civil, reforma e pintura, destacando-se pelo compromisso com a qualidade, inovação e satisfação de seus clientes. Atuamos com dedicação em cada projeto, oferecendo soluções personalizadas para transformar sonhos em realidade, seja na construção de novos espaços, reformas residenciais ou comerciais, ou serviços de pintura que valorizam cada detalhe.
        </p>
      </section>

      <section className="qualities">
        <h3>Nossas Qualidades</h3>
        <ul>
          <li>
            <div className="quality-item">
              <p>
                <strong>Acabamento de Alta Qualidade:</strong> Garantimos acabamentos impecáveis que transformam ambientes, como demonstrado neste balcão, onde destacamos detalhes refinados e durabilidade.
              </p>
              <div
                className="backimg"
                style={{
                  backgroundImage: `url(${balcao})`,
                }}
              ></div>
            </div>
          </li>
          <li>
            <div className="quality-item">
              <p>
                <strong>Infraestrutura e Funcionalidade:</strong> Criamos áreas de serviço práticas e eficientes, projetadas para atender às necessidades do dia a dia com organização e estilo, como nesta área moderna.
              </p>
              <div
                className="backimg"
                style={{
                  backgroundImage: `url(${area})`,
                }}
              ></div>
            </div>
          </li>
          <li>
            <div className="quality-item">
              <p>
                <strong>Estilo e Sofisticação:</strong> Desenvolvemos projetos de pintura que realçam a estética dos ambientes, combinando sofisticação e criatividade, como nesta parede de destaque que enriquece o espaço.
              </p>
              <div
                className="backimg"
                style={{
                  backgroundImage: `url(${pintura})`,
                }}
              ></div>
            </div>
          </li>
          <li>
            <div className="quality-item">
              <p>
                <strong>Ambientes Planejados:</strong> Projetamos interiores que traduzem a personalidade de nossos clientes, garantindo conforto e funcionalidade em cada detalhe, como este espaço acolhedor.
              </p>
              <div
                className="backimg"
                style={{
                  backgroundImage: `url(${interior})`,
                }}
              ></div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Main;
