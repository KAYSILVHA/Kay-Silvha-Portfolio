import React, { useEffect, useState } from "react";
import "./assets/style/projects-sass.scss";

function Projects() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        async function fetchRepositories() {
            try {
                const response = await fetch("https://api.github.com/users/KAYSILVHA/repos?per_page=300");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setRepositories(data);
            } catch (error) {
                console.error("Failed to fetch repositories:", error);
            }
        }

        fetchRepositories();
    }, []);

    return (
        <div className="content-main">
            {repositories.map((repo) => (
                <div className="project" key={repo.id}>
                    <div>
                        <h4 className="title">{repo.name}</h4>
                        <span className="date-create">
                            {Intl.DateTimeFormat("pt-BR").format(new Date(repo.created_at))}
                        </span>
                    </div>
                    <div>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.html_url}
                        </a>
                        <span className="language">
                            <span className="circle"></span>
                            {repo.language || "Desconhecida"}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
