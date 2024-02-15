import { FaWhatsapp } from 'react-icons/fa';

const Sobre = () => {
    return (
        <div className="flex flex-row items-start p-8 overflow-hidden">
        <div className="flex-grow max-w-screen-lg mr-8 w-5/6">
          <h1 className="text-4xl font-bold mb-4">Sobre Mim</h1>
  
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 w-full max-w-screen-lg mx-auto">
            <div className="bg-white p-6 rounded-md shadow-md max-w-full">
              <div className="text-gray-700 conteudo">
                <p>
                  Meu nome é André, sou um <b>Desenvolvedor Full Stack</b> e resido em São José-SC, da Grande Florianópolis.
                  <br/>
                  <br/>Tenho experiência de mais de 10 anos como Gerente de E-commerce onde consegui ter excelentes resultados como aumentar em pelomenos 12x o faturamento, além de gerenciar um time de 8 pessoas e realizar cadastro de 20 mil anúncios em dois meses antes de existir APIs públicas de Marketplaces. 
                  <br/>
                  <br/>Em 2022 resolvi pivotar minha carreira para Desenvolvimento, o que já era um sonho desde muito jovem e venho estudando intensamente para poder  entregar valor aos parceiros.             
                  <br/>
                  <br/>Já participei de muitos projetos Web e Mobile, profissionais, próprios e acadêmicos em diversas linguagens, bibliotecas e frameworks como: JavaScript, TypeScript, Python, Ruby on Rails, Angular, ReactJs, Redux, ReactNative, Java, Spring, C#, .NET e PostgreSQL. 
                  <br/>
                  <br/>Hoje, a maior parte dos meus desenvolvimentos são com foco em TypeScript, ReactJS e .NET, pois são algumas das linguagens mais utilizadas no mercado hoje e também são as que mais me aprimorei, mas tenho facilidade em desenvolver com outras linguagens sem problemas.
                </p><br/>
                <p>
                  Sou apaixonado por páginas web bem projetadas, perfeitas e bonitas, com um UX bem implementado, com alta performance e segurança. Acredito que um bom negócio precisa ter uma ótima apresentação, sendo muito necessário passar ao consumidor que você e seu time são caprichosos e se preocupam com qualidade dos processos, produtos e serviços que oferecem.
                  <br/>
                </p>
                <br/>
                <a href="https://wa.me/5541997099212">
                <h3>Para trabalhos <b>freelance</b> entre em contato clicando <b>aqui</b>.</h3>
              </a>
              </div>
              <h2 id="title-h1" class="mb-8 mt-8" style={{ fontSize: '2em' }}>Formação</h2>
              <img
                src="https://portal.uniasselvi.com.br/storage/app/noticia/1252/capa/1280x962-20200922184919-2.jpg"
                className="h-64 object-cover rounded-lg mb-8 border-radius-25 mx-auto"
                alt="Uniaselvi"
              />
                <ul class="mb-5">
                <li><b>UNIASSELVI</b> - Análise e Desenvolvimento de Sistemas(em andamento)</li>
                <li><b>SENAI</b> - Técnico em Analise de Desenvolvimento Web</li>
                </ul>
                <h2 id="title-h1" class="mb-8 mt-8" style={{ fontSize: '2em' }}>Certificações</h2>
                <ul class="mb-5">
                <li><b>Bootcamp GIO Santander</b> - Bolsista Fullstack Java+Angular(120 horas)</li>
                <li><b>SENAI</b> - Análise e Desenvolvimento Web
                Analista de Desenvolvimento Web(6 meses):
                Front End(React)
                Back End(Java + SQL)
                Testes Unitários
                </li>
                <li><b>Febraban</b> - Projeto Cyber Academy(40 horas)</li>
                <li><b>FGV</b> - Introdução à Ciência de Dados(60 horas)</li>
                <li><b>Workover</b> - Métodos Ágeis(10 horas)</li>
                <li><b>Trybe</b> - JavaScript do Zero(10 horas)</li>
                <li><b>Workover</b> - Aprendendo POO com C# (Net6.0)(11 horas)</li>
                <li><b>ITA</b> -  Princípios de Desenvolvimento Ágil de Software(16 horas)</li>
                <li><b>ITA</b> -  Desenvolvimento Ágil com Java Avançado(17 horas)</li>
                <li><b>Gustavo Guanabara</b> -  Curso HTML5 e CSS3: módulo 1 de 5 (40 horas)</li>
                <li><b>UNIASSELVI</b> - Inteligência Emocional: Relacionamento Interpessoal. (10 horas)</li>
                </ul>
                <h2 id="title-h1" class="mb-8 mt-8" style={{ fontSize: '2em' }}>Cursos Gerais</h2>
                <ul>
                <li><b>SENAI</b> - Devinhouse Full Stack( 9 meses) Front End(Angular)
                  Back End(.Net 6 + SQL)
                  </li>
                  <li><b>React do Zero a Maestria</b> - Matheus Battisti(31 horas)
                  </li>
                  <li><b>Curso de Angular 2 +  Typescript do Básico ao Avançado</b> - Dener Troquatte(xx horas)</li>
                  <li><b>Ruby on Rails 5.x - Do início ao fim!</b> - ackson Pires(48 horas)
                  </li>
                  <li><b>Iniciando com Ruby e Orientação a Objetos</b> - Jackson Pires(7 horas)
                  </li>
                  <li><b>Curso de JavaScript e TypeScript do básico ao avançado(7 horas)</b> Luiz Otávio Miranda(30 horas)
                  </li>
                </ul>


        </div>
        </div>
        </div>
        </div>

    );

}

export default Sobre;