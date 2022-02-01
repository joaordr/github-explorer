import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

//https://api.github.com/users/joaordr/repos

import '../styles/repositories.scss';

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/joaordr/repos').then(response => response.json()).then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Repositorios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.id} repository={repository} />
                })}
            </ul>
        </section>
    );
}