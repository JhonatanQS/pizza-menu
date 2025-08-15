import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {pizzaData} from "./data";


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


        {pizzaData.length > 0 ? (
            <>
                <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic,
                    all delicious.</p>
                <ul className="pizzas">
                    {pizzaData.map((pizza) =>
                        (<Pizza pizzaObj={pizza} key={pizza.name}/>))}
                </ul>
            </>

        ) : (<p>W're still working on our menu. Please come back later :) </p>)}
    </main>
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return <footer className="footer">
        {isOpen ? (
            <Order closeHour={closeHour} openHour={openHour}/>
        ) : (<p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>)}
    </footer>
}

function Order({closeHour, openHour}) {
    return <div className="order">
        <p>
            We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
        </p>
        <button className="btn">Order</button>
    </div>
}

function Pizza({pizzaObj}) {
    return <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
        <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            {pizzaObj.soldOut ? 'SOLD OUT': (<span>{pizzaObj.price}</span>)}
        </div>
    </li>;
}


root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
