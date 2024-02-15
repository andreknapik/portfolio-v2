import React, { useState, useEffect } from "react";
import jsonData from "../data.json";

const Portfolio = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Defina o limite de largura para considerar dispositivos móveis
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleTechnologyChange = (technology) => {
    if (selectedTechnologies.includes(technology)) {
      setSelectedTechnologies(selectedTechnologies.filter((tech) => tech !== technology));
    } else {
      setSelectedTechnologies([...selectedTechnologies, technology]);
    }
  };

  const isAllSelected = selectedTechnologies.length === 0;

  let filteredProjects = jsonData.projects;

  if (!isAllSelected) {
    filteredProjects = jsonData.projects.filter((project) =>
      selectedTechnologies.every((tech) => project.technologies.includes(tech))
    );
  }

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

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalOpen(false);
  };

  if (isMobile) {
    return (
      <div className="flex flex-col items-start p-8 overflow-hidden">
        <div className="w-full">
          <label className="block text-lg font-bold mb-2">Filtre por Tecnologias:</label>
          <div>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={() => setSelectedTechnologies([])}
                className="mr-2"
              />
              Todos
            </label>
            <div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Deployed",
                  "Git Público",
                  "Tailwind",
                  "Angular",
                  "React",
                  "JavaScript",
                  "TypeScript",
                  "C#",
                  ".NET",
                  "PostgreSQL"
                  // Adicione mais tecnologias conforme necessário
                ].map((tech, index) => (
                  <label key={index} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      checked={selectedTechnologies.includes(tech)}
                      onChange={() => handleTechnologyChange(tech)}
                      className="mr-2"
                    />
                    {tech}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow max-w-screen-lg w-full">
          <h1 className="text-4xl font-bold mt-10 mb-10">Portfólio</h1>
          <p className="mb-5"><em>São muitos projetos já desenvolvidos. Aqui está uma amostra de alguns dos principais:</em></p>

          {filteredProjects.length === 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 w-full max-w-screen-lg mx-auto">
              <div className="bg-white p-6 rounded-md" style={{ boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)' }}>
                <p className="text-red-500 font-bold mb-4">
                  Não há projetos com a combinação de tecnologias selecionadas no filtro. Tente outra combinação.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 w-full max-w-screen-lg mx-auto">
              {filteredProjects.map((project, index) => (
                <div key={`project-${index}`} className="bg-white p-6 rounded-md" style={{ boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)' }}>
                  <h2 className="text-xl font-bold mb-2 uppercase">{project.title}</h2>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="text-gray-700">
                    {project.images ? project.images.map((image, imageIndex) => (
                      <img
                        key={imageIndex}
                        src={require(`../assets/${image}`)}
                        alt={image}
                        className="h-64 w-full object-cover rounded-lg mb-8 border-radius-25 mx-auto"
                        onClick={() => openModal(image)}
                      />
                    )) : null}
                  </div>
                  <ul className="list-disc pl-6 mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-700">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <p className="text-gray-600">Tecnologias: {project.technologies.join(", ")}</p>
                    <p className="text-gray-600">
                      {project.github === "Privado" ? (
                        "Github: Projeto Privado"
                      ) : (
                        <>
                          Github:{" "}
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="underline">
                            Aberto
                          </a>
                          {project.technologies.includes("Deployed") && (
                            <>
                              <br />
                              Link: <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline">Deployed Project</a>
                            </>
                          )}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {modalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg">
              <img src={require(`../assets/${selectedImage}`)} alt={selectedImage} className="max-w-full max-h-full" />
              <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-gray-700 hover:text-gray-900">
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="flex flex-row items-start p-8 overflow-hidden">
        <div className="flex-grow max-w-screen-lg mr-8 w-5/6">
          <h1 className="text-4xl font-bold mb-4">Portfólio</h1>
          <p className="mb-5"><em>São muitos projetos já desenvolvidos. Aqui está uma amostra de alguns dos principais:</em></p>
          {filteredProjects.length === 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 w-full max-w-screen-lg mx-auto">
              <div className="bg-white p-6 rounded-md" style={{ boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)' }}>
                <p className="text-red-500 font-bold mb-4">
                  Não há projetos com a combinação de tecnologias selecionadas no filtro. Tente outra combinação.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 w-full max-w-screen-lg mx-auto">
              {filteredProjects.map((project, index) => (
                <div key={`project-${index}`} className="bg-white p-6 rounded-md" style={{ boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)' }}>
                  <h2 className="text-xl font-bold mb-2 uppercase">{project.title}</h2>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="text-gray-700">
                    {project.images ? project.images.map((image, imageIndex) => (
                      <img
                        key={imageIndex}
                        src={require(`../assets/${image}`)}
                        alt={image}
                        className="h-64 w-full object-cover rounded-lg mb-8 border-radius-25"
                        onClick={() => openModal(image)}
                      />
                    )) : null}
                  </div>
                  <ul className="list-disc pl-6 mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-700">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <p className="text-gray-600">Tecnologias: {project.technologies.join(", ")}</p>
                    <p className="text-gray-600">
                      {project.github === "Privado" ? (
                        "Github: Projeto Privado"
                      ) : (
                        <>
                          Github:{" "}
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="underline">
                            Aberto
                          </a>
                          {project.technologies.includes("Deployed") && (
                            <>
                              <br />
                              Link: <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline">Deployed Project</a>
                            </>
                          )}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-1/6">
          <label className="block text-lg font-bold mb-2">Filtre por Tecnologias:</label>
          <div>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={() => setSelectedTechnologies([])}
                className="mr-2"
              />
              Todos
            </label>
          </div>
          {[
            "Deployed",
            "Git Público",
            "Tailwind",
            "Angular",
            "React",
            "JavaScript",
            "TypeScript",
            "C#",
            ".NET",
            "PostgreSQL"
            // Adicione mais tecnologias conforme necessário
          ].map((tech, index) => (
            <label key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={selectedTechnologies.includes(tech)}
                onChange={() => handleTechnologyChange(tech)}
                className="mr-2"
              />
              {tech}
            </label>
          ))}
        </div>

        {modalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg">
              <img src={require(`../assets/${selectedImage}`)} alt={selectedImage} className="max-w-full max-h-full" />
              <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-gray-700 hover:text-gray-900">
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Portfolio;
