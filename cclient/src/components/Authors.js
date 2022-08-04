import AuthorRow from "./AuthorRow";
import { GET_AUTHORS } from "../queries/authorQueries";
import { useQuery } from '@apollo/client';



export default function Authors() {
    const { loading, error, data } = useQuery(GET_AUTHORS)

    if (error) return <p>Something went wrong</p>

    return (
        <>
            {!loading && !error && (
                <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.authors.map(author => (
                        <AuthorRow key={author.id} author={author} />
                    ))}
                </tbody>
            </table>
            )}
        </>
    );
}