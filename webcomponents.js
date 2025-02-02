// header-component.js
class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="header-section">
            <div class="header-div">
                <div class="logo-nav-wrapper">
                    <a href="index.html">
                        <img class="header-logo" src="images/logo.png" alt="logo" />
                    </a>
                    <nav class="header-nav">
                        <ul class="header-ul">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="toprated.html">Top Rated</a></li>
                            <li><a href="signin.html">Sign In</a></li>
                        </ul>
                    </nav>

                    <div class="off-screen-menu">
                        <ul class="off-screen-ul">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="toprated.html">Top Rated</a></li>
                            <li><a href="signin.html">Sign In</a></li>
                            <li>
                                <input
                                    class="os-search-input"
                                    placeholder="Search for any movie"
                                    type="text"
                                />
                                <button class="os-search-button">
                                    <i
                                        class="fa-solid fa-magnifying-glass fa-xl"
                                    ></i>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div class="burger-div">
                        <i class="fa-solid fa-bars fa-xl menu-icon"></i>
                    </div>
                </div>
                <div class="search-wrapper">
                    <input
                        class="search-input"
                        placeholder="Search for any movie"
                        type="text"
                    />
                    <button class="search-button">
                        <i class="fa-solid fa-magnifying-glass fa-xl"></i>
                    </button>
                </div>
            </div>
        </section>
        `;
    }
}

class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="footer-section">
            <div class="footer-content">
                <div class="footer-main">
                    <div class="footer-main1">
                        <img class="footer-logo" src="images/logo.png" alt="Logo">
                        <p>328 Queensberry Street, North Melbourne VIC3051, <br>
                            Australia.</p>
                    </div>
                    <div class="footer-main2">
                        <a href="index.html"><p>Home</p></a>
                        <a href="toprated.html"><p>Top Rated</p></a>
                        <a href="signin.html"><p>Sign in</p></a>
                    </div>
                    <div class="footer-main3">
                        <p>Services</p>
                        <p>Contact</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div class="footer-main4">
                        <p>Connect With Us</p>
                        <div class="footer-icon-div">
                            <i class="fa-brands fa-twitter fa-xl"></i>
                            <i class="fa-brands fa-instagram fa-xl"></i>
                            <i class="fa-brands fa-facebook-f fa-xl"></i>
                            <i class="fa-brands fa-linkedin fa-xl"></i>
                        </div>
                    </div>
                </div>
                <div class="footer-p-div">
                    <p>© www.themoviedb.org. All right reserved.</p>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define("header-component", HeaderComponent);
customElements.define("footer-component", FooterComponent);
