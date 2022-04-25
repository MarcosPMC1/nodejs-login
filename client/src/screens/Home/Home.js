import { Link } from 'react-router-dom';

export function Home() {
    return(
        <section id='home'>
            <h1>Home</h1>
            <Link to='/Login'>Login</Link>
        </section>
 
    );
}