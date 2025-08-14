import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function App() {
    return <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
    </div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

function Header() {
    return <header className="header">
        <h1> Fast React Pizza Co.</h1>
    </header>
}

function Menu() {
    return <main className="menu">
        <h2>Our menu</h2>
        <Pizza/>
    </main>
}

function Footer() {
    return <footer className="footer">We're currently open!</footer>
}

function Pizza() {
    return <h3>Pizza</h3>;
}


root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
