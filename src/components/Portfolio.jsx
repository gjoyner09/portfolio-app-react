import React from 'react'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <header id="portfolio-title">Portfolio</header>

            <div id="portfolio-main">
                <div id="portfolio-text">
                    <div class="portfolio-div"><img src="../img/website.jpg" alt="Website image" id="website" /></div>
                    <div class="portfolio-div"><img src="../img/app.jpg" alt="App image" id="app" /></div>
                    <div class="portfolio-div">
                        <p>Built a website using HTML and CSS</p>
                    </div>
                    <div class="portfolio-div">
                        <p>Built an app using Ruby and Rails</p>
                    </div>
                    <div class="portfolio-div"><img src="../img/boardgame.jpg" alt="Board game image" id="boardgame" /></div>
                    <div class="portfolio-div"><img src="../img/marketplace.jpg" alt="Marketplace image" id="marketplace" /></div>
                    <div class="portfolio-div">
                        <p>Built a board game with JavaScript and React</p>
                    </div>
                    <div class="portfolio-div">
                        <p>Built a marketplace with node.JS and MongoDB</p>
                    </div>
                </div>
                <div id="portfolio-text-background"></div>
            </div>

            <div id="tech-div">
                <div id="tech-title">Technologies</div>
                <div class="tech-img"><img src="../img/javascript.svg" alt="Javascript logo" id="javascript" /></div>
                <div class="tech-img"><img src="../img/react.svg" alt="React logo" id="react" /></div>
                <div class="tech-img"><img src="../img/java.svg" alt="Java logo" id="java" /></div>
                <div class="tech-img"><img src="../img/ruby.svg" alt="Ruby logo" id="ruby" /></div>
                <div class="tech-img"><img src="../img/rubyonrails.svg" alt="Rails logo" id="rails" /></div>
                <div class="tech-img"><img src="../img/redux.svg" alt="Redux logo" id="redux" /></div>
                <div class="tech-img"><img src="../img/node-dot-js.svg" alt="Node.js logo" id="node" /></div>
                <div class="tech-img"><img src="../img/mongodb.svg" alt="MongoDB logo" id="mongodb" /></div>
                <div class="tech-img"><img src="../img/git.svg" alt="Git logo" id="git" /></div>
                <div class="tech-img"><img src="../img/html5.svg" alt="HTML5 logo" id="html" /></div>
                <div class="tech-img"><img src="../img/css3.svg" alt="CSS3 logo" id="css" /></div>
                <div class="tech-img"><img src="../img/sass.svg" alt="SASS logo" id="sass" /></div>
            </div>
        </section>
    )
}

export default Portfolio