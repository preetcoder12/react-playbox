import React, { useState } from 'react';

const Random_moti_gen = () => {
    const [quote_para, setQuotePara] = useState("");
    const [auth, setAuth] = useState("");
    const quotes = [
        { q: "The best way to get started is to quit talking and begin doing.", a: "Walt Disney" },
        { q: "Don't let yesterday take up too much of today.", a: "Will Rogers" },
        { q: "It's not whether you get knocked down, it's whether you get up.", a: "Vince Lombardi" },
        { q: "Success is not in what you have, but who you are.", a: "Bo Bennett" },
        { q: "Don’t watch the clock; do what it does. Keep going.", a: "Sam Levenson" },
        { q: "Don’t stop when you’re tired. Stop when you’re done.", a: "Marilyn Monroe" },
        { q: "Wake up with determination. Go to bed with satisfaction.", a: "George Lorimer" },
        { q: "Great things never come from comfort zones.", a: "Roy T. Bennett" },
        { q: "The harder you work for something, the greater you’ll feel when you achieve it.", a: "Les Brown" },
        { q: "Dream bigger. Do bigger.", a: "Les Brown" },
        { q: "Push yourself, because no one else is going to do it for you.", a: "Ray Goforth" },
        { q: "Success doesn’t just find you. You have to go out and get it.", a: "Unknown" },
        { q: "The key to success is to focus on goals, not obstacles.", a: "Unknown" },
        { q: "Dream it. Wish it. Do it.", a: "Unknown" },
        { q: "Stay positive, work hard, make it happen.", a: "Unknown" },
        { q: "Little things make big days.", a: "Unknown" },
        { q: "It’s going to be hard, but hard does not mean impossible.", a: "Unknown" },
        { q: "Don’t wait for opportunity. Create it.", a: "George Bernard Shaw" },
        { q: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", a: "Unknown" },
        { q: "If you can dream it, you can do it.", a: "Walt Disney" }
    ];


    const generate = () => {
        const random  =Math.floor(Math.random()*quotes.length)
        setQuotePara(quotes[random].q)
        setAuth(quotes[random].a)
    };

    return (
        <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'Arial' }}>
            <h2 style={{ marginBottom: '1rem' }}>
                {quote_para ? `"${quote_para}"` : "Click below to generate a quote!"}
            </h2>
            <h4 style={{ fontStyle: 'italic', color: '#555' }}>
                {auth && `— ${auth}`}
            </h4>
            <button
                onClick={generate}
                style={{
                    marginTop: '1.5rem',
                    padding: '0.6rem 1.2rem',
                    fontSize: '1rem',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Generate Random Quote
            </button>
        </div>
    );
};

export default Random_moti_gen;
