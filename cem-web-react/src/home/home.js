import React from 'react';
import Card from '../components/card/card.js';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="card-hero">
                <Card
                    title="Cem Ugras"
                    info1="Software Engineer | Gamer | Full Time Learner"
                    image="https://mygo.ge/uploads/blog/1584023795.jpg"
                />
            </div>
            <div className="card-projects">
                <Card
                    title="Earthquakes"
                    info1="»Latest earthquakes in Turkey."
                    info2="»This page is still in progress."
                    image="https://connecteddeviceslab.org/wp-content/uploads/2016/08/signal-gif-1.gif"
                    showButton={true}
                    buttonText="Earthquakes"
                />
                <Card
                    title="My IP"
                    info1="»What is my IP address and some details with map display."
                    image="https://i.imgur.com/kfdziZK.gif"
                    showButton={true}
                    buttonText="My IP"
                />
                <Card
                    title="Game Servers Ping"
                    info1="»Check your ping for some games."
                    info2="»Supported games for usage of this feature:"
                    info3="    - League of Legends"
                    info4="    - CS:GO"
                    image="https://gifdb.com/images/high/speed-test-internet-speed-meter-download-ping-g9bm97rgryv2u8sh.gif"
                    showButton={true}
                    buttonText="Game Servers Ping"
                />
            </div>
            <div className="card-projects">
                <Card
                    title="Responsive Development"
                    info1="    »Is one of the key feature for web development."
                    info2="    »Responsive websites work seamlessly across a variety of devices and screen sizes."
                    info3="    »Plays a significant role in enhancing a site's search engine optimization (SEO)."
                    image="https://web-infox.eu/media/images/responsive-istoselides-webinfox.gif"
                    showButton={false}
                />
                <Card
                    title="Security"
                    info1="    »Is a critical aspect of development focused on protecting websites and applications from various cyber threats."
                    info2="    »Web security knowledge is essential for creating robust and resilient web applications in an environment where cyber threats are constantly evolving."
                    image="https://media1.giphy.com/media/RDZo7znAdn2u7sAcWH/giphy.gif?cid=6c09b952dbc3qg6jr1547hcajr56vcsc2gx2sxaj08xzgo9u&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
                    showButton={false}
                />
                <Card
                    title="Progressive Web App"
                    info1="    »Is a type of web application that utilizes modern web technologies to provide a more app-like experience for users."
                    info2="    »Aims to work offline, load quickly, and offer features like push notifications."
                    image="https://www.innovination.com/wp-content/uploads/2021/06/develpoment.gif"
                    showButton={false}
                />
            </div>
        </div>
    );
};

export default Home;
