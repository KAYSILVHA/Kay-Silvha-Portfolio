import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./assets/style/projects-sass.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Card, CardBody, CardHeader, InputGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import Logo from "../Header/assets/images/Logo.png";
import Back from "./assets/images/back.png";
import { useNavigate } from "react-router-dom";
import { Input } from "reactstrap";
import Footer from "../Footer/Footer"
import InputGroupText from "react-bootstrap/esm/InputGroupText";

function Projects() {
    const navigate = useNavigate();
    const [repositories, setRepositories] = useState([]);
    const [frontEndRepos, setFrontEndRepos] = useState([]);
    const [backEndRepos, setBackEndRepos] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // Estado para armazenar o termo de pesquisa

    useEffect(() => {
        async function fetchRepositories() {
            const allRepositories = [];
            let page = 1;
            let hasMore = true;

            try {
                while (hasMore) {
                    const response = await fetch(
                        `https://api.github.com/users/KAYSILVHA/repos?per_page=100&page=${page}`
                    );
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    allRepositories.push(...data);

                    if (data.length < 100) {
                        // Se o número de repositórios retornados for menor que 100, significa que não há mais páginas.
                        hasMore = false;
                    } else {
                        page++;
                    }
                }

                // Classificar repositórios entre Front-End e Back-End
                const frontEnd = allRepositories.filter(repo =>
                    ["HTML", "CSS", "JavaScript", "TypeScript", "React"].includes(repo.language)
                );
                const backEnd = allRepositories.filter(repo =>
                    ["Node.js", "Python", "Ruby", "Java", "Go"].includes(repo.language)
                );

                setRepositories(allRepositories);
                setFrontEndRepos(frontEnd);
                setBackEndRepos(backEnd);
            } catch (error) {
                console.error("Failed to fetch repositories:", error);
            }
        }

        fetchRepositories();
    }, []);

    // Função de filtragem
    const filteredFrontEndRepos = frontEndRepos.filter((repo) =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.language && repo.language.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const filteredBackEndRepos = backEndRepos.filter((repo) =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.language && repo.language.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="projects-container d-flex flex-column align-items-center">
                <header className="header container-fluid d-flex align-items-center">
                    <section className="container d-flex justify-content-between align-items-center nav-bar text-light p-1">
                        <div className="container d-flex justify-content-between ">
                            <img src={Logo} alt="Logo" />
                        </div>

                        <InputGroup>
                            <Input
                                type="text"
                                placeholder="Pesquisar por nome ou linguagem"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                            <InputGroupText>
                            <Button></Button>
                            </InputGroupText>
                        </InputGroup>

                        <Button className="back-button ms-3" onClick={() => navigate('/')}>
                            <img src={Back} alt="Go Back" />
                            <span className="d-lg-flex d-none">Voltar</span>
                        </Button>

                    </section>
                </header>

                <div className="content-main container d-flex justify-content-center">
                    <div className="front-container">
                        <h2>
                            Front-End
                        </h2>
                        <Slider {...sliderSettings} className="slider-container">
                            {filteredFrontEndRepos.map((repo) => (
                                <Card className="project-card" key={repo.id}>
                                    <CardHeader className="title">
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip id={`tooltip-${repo.id}`}>{repo.name}</Tooltip>}
                                        >
                                            <h4 className="text-truncate">{repo.name}</h4>
                                        </OverlayTrigger>
                                    </CardHeader>
                                    <CardBody className="d-flex flex-column h-100">
                                        <span className="date-create">
                                            {Intl.DateTimeFormat("pt-BR").format(new Date(repo.created_at))}
                                        </span>
                                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                            Acessar Projeto
                                        </a>
                                        {repo.topics && repo.topics.length > 0 && (
                                            <div className="topics mt-3">
                                                <ul className="list-inline">
                                                    {repo.topics.map((topic, index) => (
                                                        <li key={index} className="list-inline-item badge bg-secondary me-1">
                                                            {topic}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </CardBody>
                                </Card>
                            ))}
                        </Slider>
                    </div>

                    <div className="back-container">
                        <h2>
                            Back-End
                        </h2>
                        <Slider {...sliderSettings} className="slider-container">
                            {filteredBackEndRepos.map((repo) => (
                                <Card className="project-card" key={repo.id}>
                                    <CardHeader className="title">
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip id={`tooltip-${repo.id}`}>{repo.name}</Tooltip>}
                                        >
                                            <h4 className="text-truncate">{repo.name}</h4>
                                        </OverlayTrigger>
                                    </CardHeader>
                                    <CardBody className="d-flex flex-column h-100">
                                        <span className="date-create">
                                            {Intl.DateTimeFormat("pt-BR").format(new Date(repo.created_at))}
                                        </span>
                                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                            Acessar Projeto
                                        </a>
                                        {repo.topics && repo.topics.length > 0 && (
                                            <div className="topics mt-3">
                                                <ul className="list-inline">
                                                    {repo.topics.map((topic, index) => (
                                                        <li key={index} className="list-inline-item badge bg-secondary me-1">
                                                            {topic}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </CardBody>
                                </Card>
                            ))}
                        </Slider>
                    </div>

                    <h3 className="total-count">
                        Total de Projetos Exibidos: {filteredFrontEndRepos.length + filteredBackEndRepos.length}
                    </h3>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Projects;
