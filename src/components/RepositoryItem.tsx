interface repositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: repositoryItemProps) {
    return (
        <li>
            <strong>{props.repository.name ?? 'Default'}</strong>
            <p>{props.repository.description ?? 'Default'}</p>
            <a href={props.repository.html_url}>Acessar Repositorio</a>
        </li>
    );
}