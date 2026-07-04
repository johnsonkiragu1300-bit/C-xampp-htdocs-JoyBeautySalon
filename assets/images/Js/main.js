body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    color: #333333;
}

header {
    background-color: #ff69b4;
    padding: 20px;
    text-align: center;
    color: white;
}

nav {
    background-color: #ffc0cb;
    padding: 10px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

nav a {
    margin: 5px 15px;
    text-decoration: none;
    color: #333333;
    font-weight: bold;
}

nav a:hover {
    color: #ff69b4;
}

section {
    padding: 40px;
    text-align: center;
}

footer {
    background-color: #ff69b4;
    color: white;
    text-align: center;
    padding: 15px;
}

/* Responsive Layout */
@media (max-width: 768px) {
    nav {
        flex-direction: column;
    }

    section {
        padding: 20px;
    }

    img {
        width: 100%;
        max-width: 400px;
        margin: 10px auto;
        display: block;
    }

    form input, form textarea {
        width: 90%;
        max-width: 400px;
    }
}

@media (max-width: 480px) {
    header h1 {
        font-size: 1.5em;
    }

    nav a {
        display: block;
        margin: 10px 0;
    }

    section h2 {
        font-size: 1.2em;
    }
}
