import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../public/logo-no-background.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{ height: "100px", background: 'rgb(4,13,18)',
        background: 'linear-gradient(90deg, rgba(4,13,18,1) 0%, rgba(24,61,61,1) 39%, rgba(147,177,166,1) 100%) '}}>
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} style={{ maxHeight: '50px' }} alt="company logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-light" href="ipl" style={{ fontSize: '1.4rem', transition: 'font-size 0.3s, border 0.3s, cursor 0.3s', border: '1px solid transparent' }} onMouseEnter={(e) => { e.target.style.fontSize = '1.8rem'; e.target.style.border = '1px solid white'; e.target.style.cursor = 'pointer'; }} onMouseLeave={(e) => { e.target.style.fontSize = '1.4rem'; e.target.style.border = '1px solid transparent'; }}>
                                IPL
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="wwe" style={{ fontSize: '1.4rem', transition: 'font-size 0.3s, border 0.3s, cursor 0.3s', border: '1px solid transparent' }} onMouseEnter={(e) => { e.target.style.fontSize = '1.8rem'; e.target.style.border = '1px solid white'; e.target.style.cursor = 'pointer'; }} onMouseLeave={(e) => { e.target.style.fontSize = '1.4rem'; e.target.style.border = '1px solid transparent'; }}>
                                WWE
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="finance" style={{ fontSize: '1.4rem', transition: 'font-size 0.3s, border 0.3s, cursor 0.3s', border: '1px solid transparent' }} onMouseEnter={(e) => { e.target.style.fontSize = '1.8rem'; e.target.style.border = '1px solid white'; e.target.style.cursor = 'pointer'; }} onMouseLeave={(e) => { e.target.style.fontSize = '1.4rem'; e.target.style.border = '1px solid transparent'; }}>
                                Finance
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="politics" style={{ fontSize: '1.4rem', transition: 'font-size 0.3s, border 0.3s, cursor 0.3s', border: '1px solid transparent', cursor:"pointer"}} onMouseEnter={(e) => { e.target.style.fontSize = '1.8rem'; e.target.style.border = '1px solid white'; e.target.style.cursor = 'pointer'; }} onMouseLeave={(e) => { e.target.style.fontSize = '1.4rem'; e.target.style.border = '1px solid transparent'; }}>
                                Politics
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
