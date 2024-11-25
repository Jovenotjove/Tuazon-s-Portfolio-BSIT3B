function loadPage(page) {
    const content = document.getElementById('main-content');
    const buttons = document.querySelectorAll('.nav-buttons button');
    content.innerHTML = '';

    if (page === 'about') {
        content.innerHTML = `
            <div class="left">
                <div class="name">Childhood</div>
                <div class="paragraph">
                    My childhood was full of moments spent in internet cafes, which sparked my fascination with the IT world. I enjoyed playing games and surfing the web, and these activities became my primary source of entertainment. Growing up, I wasn’t very social, and I often relied on the internet for movies, games, and anime to alleviate boredom. These experiences were key in shaping my path toward a career in IT.
                </div>
            </div>
            <div class="left">
                <div class="name">Education</div>
                <div class="paragraph">
                    I graduated from Dampalit Elementary School Main and then continued my educational journey as a scholar in the special night high school curriculum at St. James Academy of Malabon. Afterward, I attended Arellano University Jose Rizal Campus for senior high school. Currently, I am in my third year of college at the City of Malabon University, continuing to pursue my passion for technology.
                </div>
            </div>
            <div class="right">
                <div class="name">Aspirations</div>
                <div class="paragraph">
                    My aspirations are a mix of childhood influences and practical goals. Growing up surrounded by technology inspired me to pursue a career in IT. I aspire to become a game developer, not just creating games, but developing immersive and educational experiences. I’m particularly passionate about RPGs, enjoying the adventure and thrill they offer. While I’m currently exploring web design and development, I see myself transitioning into game development in the future, where I can create something meaningful and exciting for others.
                </div>
            </div>
        `;
    } else if (page === 'home') {
        content.innerHTML = `
            <div class="left">
                <div class="name">Tuazon, Jalen Ross V.</div>
                <div class="paragraph">
                    Hello! I’m Jalen Ross V. Tuazon, an aspiring IT professional currently pursuing my undergraduate studies in Malabon City. With a strong passion for content writing and web development, I’m particularly interested in exploring projects within the entertainment industry. I’ve developed a diverse skill set, combining both technical expertise and creative problem-solving, and I’m eager to apply these abilities in innovative and exciting projects.
                </div>
            </div>
            <div class="center-photo">
                <div class="photo">
                    <img src="../img/1.png" alt="profile">
                </div>
            </div>
            <div class="right">
                <div class="paragraph">
                    I’m a quick learner who thrives on challenges, especially those that encourage out-of-the-box thinking. I take pride in my adaptability and work ethic, always striving to stay ahead in a fast-evolving field. I enjoy working in collaborative environments where I can contribute as a reliable team player, supporting others while also continuing to grow professionally and personally. My goal is to seek opportunities that allow me to further develop my skills and make a meaningful impact in both technology and creativity.
                </div>
            </div>

            <!-- Footer -->
                <footer>
                    <div class="text-box">
                        <div>Jalen Tuazon</div>
                        <a href="https://www.facebook.com/stiege.serenus.3" target="_blank">
                            <img src="../img/fb.png" alt="Facebook Logo">
                        </a>
                    </div>
                    <div class="text-box">
                        <div>@jovenotjove</div>
                        <a href="https://www.instagram.com/jovenotjove/" target="_blank">
                            <img src="../img/ig.png" alt="Instagram Logo">
                        </a>
                    </div>
                    <div class="text-box">
                        <div>jalentuazon21@gmail.com</div>
                        <a href="mailto:jalentuazon21@gmail.com?subject=Your%20Subject&body=Your%20message%20here" target="_blank">
                            <img src="../img/gm.png" alt="Gmail Logo">
                        </a>
                    </div>
                    <div class="text-box">
                        <div>BSIT3B_TUAZON</div>
                        <a href="https://github.com/Jovenotjove" target="_blank">
                            <img src="../img/gh.png" alt="GitHub Logo">
                        </a>
                    </div>
                </footer>
        `;
    } else if (page === 'services') {
        content.innerHTML = `
            <div class="left">
                <div class="name"><h2>My Services</h2></div><br>
                <div class="service-item">
                    <h3>Web Development</h3>
                    <p>I offer a wide range of web development services, including building responsive and dynamic websites. Whether you're looking for a simple portfolio site or a complex e-commerce platform, I can help bring your vision to life using the latest web technologies. My approach is to create user-friendly and visually appealing websites that are optimized for performance across different devices.</p>
                </div><br>
                <div class="service-item">
                    <h3>Game Development</h3>
                    <p>I can bring your game ideas to life by designing and developing interactive games. With a focus on creativity and engaging gameplay mechanics, I create games that are not only fun to play but also offer an immersive experience. My goal is to develop games that entertain, educate, and provide a platform for players to explore new worlds.</p>
                </div><br>
                <div class="service-item">
                    <h3>Content Writing</h3>
                    <p>Engage your audience with creative and SEO-optimized content that resonates with your target market. Whether it's blog posts, articles, or marketing copy, I specialize in creating content that informs, entertains, and drives conversions. My writing is tailored to suit your brand voice and audience, ensuring your message is clear and impactful.</p>
                </div><br>
                <div class="service-item">
                    <h3>Consultation</h3>
                    <p>If you're in need of expert advice on web design, development, or game creation, I offer professional consultation services to help guide you in the right direction. Whether you're a startup or a seasoned business, I can provide insights into best practices, current trends, and strategies to enhance your digital presence.</p>
                </div><br>
                <div class="service-item">
                    <h3>Learning & Training</h3>
                    <p>Learn web development or game creation with tailored courses and training sessions. I offer hands-on learning experiences that cater to beginners and intermediate learners. Whether you're interested in mastering coding, web design, or game development, I can guide you through the learning process and help you build the skills you need to succeed in the tech industry.</p>
                </div>
            </div>
        `;
    } else if (page === 'contact') {
        content.innerHTML = `
            <div class="left">
                <div class="name">Contact Me</div>
                <div class="paragraph">Feel free to reach out to me through any of the following platforms:</div>
                <div class="service-item">
                    <h3>Email</h3>
                    <p>You can contact me via email at:
                    <br> <a href="mailto:jalentuazon21@gmail.com">
                        <img src="../img/gm.png" alt="Gmail Logo" style="width: 20px; height: auto; vertical-align: middle; margin-right: 5px;">
                        jalentuazon21@gmail.com
                    </a></p><br>
                </div>
                <div class="service-item">
                    <h3>Social Media</h3>
                    <p>Connect with me on social media:</p>
                    <p><a href="https://www.facebook.com/stiege.serenus.3" target="_blank">
                        <img src="../img/fb.png" alt="Facebook Logo" style="width: 20px; height: 20px; vertical-align: middle;"/> Facebook - Jalen Tuazon
                    </a></p>
                    <p><a href="https://www.instagram.com/jovenotjove/" target="_blank">
                        <img src="../img/ig.png" alt="Instagram Logo" style="width: 20px; height: 20px; vertical-align: middle;"/> Instagram - @jovenotjove
                    </a></p>
                    <p><a href="https://github.com/Jovenotjove" target="_blank">
                        <img src="../img/gh.png" alt="GitHub Logo" style="width: 20px; height: 20px; vertical-align: middle;"/> GitHub - @jovenotjove
                    </a></p><br>
                </div>
                <div class="service-item">
                    <h3>Phone number</h3>
                    <p>+639452311433</p>
                </div>
            </div>
            <div class="center-photo">
                <div class="photo">
                    <img src="../img/1.png" alt="profile">
                </div>
            </div>
        `;
    }

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const activeButton = document.querySelector(`.nav-buttons button.${page}`);
    activeButton.classList.add('active');
}

document.querySelector('.nav-buttons .home').addEventListener('click', () => loadPage('home'));
document.querySelector('.nav-buttons .about').addEventListener('click', () => loadPage('about'));
document.querySelector('.nav-buttons .services').addEventListener('click', () => loadPage('services'));
document.querySelector('.nav-buttons .contact').addEventListener('click', () => loadPage('contact'));

loadPage('home');
