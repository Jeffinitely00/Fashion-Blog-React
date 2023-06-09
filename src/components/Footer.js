import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <nav aria-label="Main Navigation" role="navigation">
                <ul class="bottom-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Women's</Link></li>
                    <li><Link to="/">Men's</Link></li>
                    <li><Link to="/">On the Street</Link></li>
                    <li><Link to="/">The Catwalk</Link></li>
                    <li><Link to="/">AdWatch</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Tips</Link></li>
                </ul>
                <span class="copyright">&#169; 2013 Valet Industries, Inc.</span>
            </nav>
        </footer>
    )
}