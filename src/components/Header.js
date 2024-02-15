import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaBars, FaTimes, FaUsers, FaGraduationCap, FaHandPeace } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Defina o limite de largura para considerar dispositivos móveis

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile && window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, [isMobile]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleExternalLinkClick = (url, event) => {
    const isExternal = url.indexOf('http') === 0;
    if (isExternal) {
      const confirmLeave = window.confirm('Você está prestes a sair deste site. Deseja continuar?');
      if (!confirmLeave) {
        event.preventDefault(); // Impede a ação padrão do clique
        return;
      }
    }
    window.open(url, '_blank');
  };
  return (
    <div className="bg-white p-4 text-black flex flex-col md:flex-row items-center justify-between border-b border-black relative"> 
      <div className="flex flex-row items-center justify-between w-full md:w-[90%] md:mx-auto">
        <div>
          <Link to="/portfolio">
            <h1 className="text-2xl font-bold">ANDRE KNAPIK</h1>
            <h2>Desenvolvedor Full-Stack</h2>
          </Link>
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </div>
      {isMenuOpen && isMobile && (
        <div className="absolute top-25 right-10 w-[40%] bg-white md:hidden border border-gray-300 border-solid rounded-lg shadow-lg">
          <div className="flex flex-col items-start space-y-4 p-4">
            <div className="flex items-center">
              <Link to="/portfolio" className="text-black hover:text-gray-300 flex items-center" >
                <FaHandPeace size={20} />
                <span className="ml-2">Portfolio</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link to="/colaboracoes" className="text-black hover:text-gray-300 flex items-center" >
                <FaUsers size={20}/>
                <span className="ml-2">Colaborações</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link to="/sobre" className="text-black hover:text-gray-300 flex items-center">
                <FaGraduationCap size={20} />
                <span className="ml-2">Sobre</span>
              </Link>
            </div>
            <div className="flex items-center">
              <span className="text-black hover:text-gray-300 flex items-center" onClick={(event) => handleExternalLinkClick("https://www.linkedin.com/in/andreknapik", event)}>
                <FaLinkedin size={20} />
                <span className="ml-2">Linkedin</span>
            </span>
            </div>
            <div href="#" className="flex items-center">
              <span className="text-black hover:text-gray-300 flex items-center" onClick={(event) => handleExternalLinkClick("https://github.com/andreknapik", event)}>
                <FaGithub size={20} />
                <span className="ml-2">GitHub</span>
              </span>
            </div>
            <div className="flex items-center">
              <span href="#" className="text-black hover:text-gray-300 flex items-center" onClick={(event) => handleExternalLinkClick("mailto:andreprogramador5@gmail.com", event)}>
                <FaEnvelope size={20} />
                <span className="ml-2">E-mail</span>
              </span>
            </div>
            <div className="flex items-center">
              <span href="#" className="text-black hover:text-gray-300 flex items-center" onClick={(event) => handleExternalLinkClick("https://wa.me/5541997099212", event)}>
                <FaWhatsapp size={20} />
                <span className="ml-2">Whatsapp</span>
              </span>
            </div>
          </div>
        </div>
      )}
      {!isMenuOpen && !isMobile && (
        <div className="bg-white p-4 text-black flex flex-column items-center justify-between border-black">
          <div className="flex flex-column items-center space-x-4">
            <Link to="/portfolio" className="text-black hover:text-gray-300">Portfolio</Link>
            <Link to="/colaboracoes" className="text-black hover:text-gray-300">Colaborações</Link>
            <Link to="/sobre" className="text-black hover:text-gray-300">Sobre</Link>
            <a href="https://www.linkedin.com/in/andreknapik" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-300">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/andreknapik" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-300">
              <FaGithub size={20} />
            </a>
            <a href="mailto:andreprogramador5@gmail.com" className="text-black hover:text-gray-300">
              <FaEnvelope size={20} />
            </a>
            <a href="https://wa.me/5541997099212" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-300">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
