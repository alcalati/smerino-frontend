// src/pages/Home.js

import React from 'react';
import '../styles.css'; // Asegúrate de que los estilos estén importados

const Home = () => {
    return (
        <div className="container">
            <header>
                <h1>SMERINO</h1>
                <nav>
                    {/* Aquí puedes agregar enlaces a login/registro */}
                </nav>
            </header>
            <main>
                <section>
                    <h2>Sobre mi</h2>
                    <p>Descubre lo que tenemos para ofrecerte.</p>
                    <a href="https://www.instagram.com/s.merinog" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://imgur.com/a/piFed4Y"
                            alt="Instagram"
                            className="home-image"
                        />
                    </a>
                </section>
            </main>
        </div>
    );
};

export default Home;
