<template>
    <!--==============================
    Mobile Menu
  ============================== -->
    <div class="vs-menu-wrapper">
        <div class="vs-menu-area text-center">
            <button class="vs-menu-toggle"><i class="fal fa-times"></i></button>
            <div class="mobile-logo">
                <router-link to="/"><img src="../../assets/img/logo.svg" alt="Besca"></router-link>
            </div>
            <div class="vs-mobile-menu">
                <ul>
                    <li class="">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li><router-link to="/about">About Us</router-link></li>
                    <li class="menu-item-has-children">
                        <a href="blog.html">Blog</a>
                        <ul class="sub-menu">
                            <li><a href="blog.html">Blog List</a></li>
                            <li><a href="blog-grid.html">Blog Grid</a></li>
                            <li><a href="blog-details.html">Blog Details<span class="new-label">New</span></a></li>
                            <li><a href="blog-details-sidebar.html">Blog Details Sidebar</a></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul class="sub-menu">
                            <li><a href="award.html">Awards</a></li>
                            <li><a href="price-plan.html">Pricing Plans</a></li>
                            <li><a href="team.html">Team<span class="new-label">New</span></a></li>
                            <li><a href="team-details.html">Team Details</a></li>
                            <li><a href="project.html">Projects One</a></li>
                            <li><a href="project-2.html">Projects Two<span class="new-label">New</span></a></li>
                            <li><a href="project-details.html">Project Details</a></li>
                            <li><a href="service.html">Service One</a></li>
                            <li><a href="service-2.html">Service Two<span class="new-label">New</span></a></li>
                            <li><a href="service-details.html">Service Details</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="error.html">Error Page</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!--==============================
    Sidemenu
============================== -->
    <div class="sidemenu-wrapper d-none d-lg-block">
        <div class="sidemenu-content">
            <button class="closeButton sideMenuCls"><i class="far fa-times"></i></button>
            <div class="widget  ">
                <div class="vs-widget-about">
                    <div class="footer-logo">
                        <router-link to="/"><img height="70" width="50" src="../../assets/img/logo.svg" alt="Besca"></router-link>
                    </div>
                    <p class="footer-text">Your Trusted Reliable Energy Provider</p>
                    <div class="info-social style2">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-google"></i></a>
                    </div>
                </div>
            </div>
            <div class="widget  ">
                <h3 class="widget_title">Recent Articles</h3>
                <div class="recent-post-wrap">
                    <div class="recent-post">
                        <div class="media-img">
                            <a href="blog-details.html"><img src="../../assets/img/blog/recent-post-1-1.jpg"
                                    alt="Blog Image"></a>
                        </div>
                        <div class="media-body">
                            <div class="recent-post-meta">
                                <a href="blog.html"><i class="fal fa-calendar-alt"></i>Jan 15, 2022</a>
                            </div>
                            <h4 class="post-title"><a class="text-inherit" href="blog-details.html">Installing Solar PV in Public Primary Schools in Kenya</a></h4>
                        </div>
                    </div>
                    <div class="recent-post">
                        <div class="media-img">
                            <a href="blog-details.html"><img src="../../assets/img/blog/recent-post-1-2.jpg"
                                    alt="Blog Image"></a>
                        </div>
                        <div class="media-body">
                            <div class="recent-post-meta">
                                <a href="blog.html"><i class="fal fa-calendar-alt"></i>March 13, 2024</a>
                            </div>
                            <h4 class="post-title"><a class="text-inherit" href="blog-details.html">Solering Education inKenya</a></h4>
                        </div>
                    </div>
                    <div class="recent-post">
                        <div class="media-img">
                            <a href="blog-details.html"><img src="../../assets/img/blog/recent-post-1-3.jpg"
                                    alt="Blog Image"></a>
                        </div>
                        <div class="media-body">
                            <div class="recent-post-meta">
                                <a href="blog.html"><i class="fal fa-calendar-alt"></i>May 23, 2024</a>
                            </div>
                            <h4 class="post-title"><a class="text-inherit" href="blog-details.html">Future Solar Energy
                                    Innovation Challenges</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--==============================
    Header Area
    ==============================-->
    <header class="vs-header header-layout1">
        <div class="container">
            <div class="header-top">
                <div class="row justify-content-between align-items-center">
                    <div class="col d-none d-lg-block">
                        <p class="header-top-text"><span class="shape"></span>Energy Solutions can help you reduce your
                            electricity bills</p>
                    </div>
                    <div class="col-auto col-lg-2">
                        <div class="header-social">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-auto">
                        <a href="contact.html" class="header-top-text"><i class="fas fa-map-marker-alt"></i>Find A
                            Location</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="sticky-wrapper">
            <div class="sticky-active">
                <div class="container position-relative z-index-common">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-auto">
                            <div class="vs-logo">
                              <router-link to="/"><img src="../../assets/img/logo.svg" alt="logo"></router-link>
                            </div>
                        </div>
                        <div class="col text-end text-xl-center">
                            <nav class="main-menu menu-hover1 menu-style1 d-none d-lg-block">
                                <ul>
                                    <li>
                                        <router-link to="/">Home</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/about">About Us</router-link>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="blog.html">Service</a>
                                        <ul class="sub-menu">
                                            <router-link to="/SolarPV">Solar PV Systems</router-link>
                                            <router-link to="/">Solar Water Heating Systems</router-link>
                                            <router-link to="/">Solar Water Pumping Systems</router-link>
                                            <router-link to="/">Solar Street Lighting</router-link>
                                            <router-link to="/">Electrical Works</router-link>
                                            <router-link to="/">Generator Installation</router-link>
                                        </ul>
                                    </li>
                                    <li>
                                        <router-link to="/projects">Projects</router-link>
                                    </li>
                                    <li class="mega-menu-wrap">
                                        <a href="#">Gallery</a>
                                        <!-- <ul class="mega-menu">
                                            <li><a href="shop.html">Pagelist 1</a>
                                                <ul>
                                                    <li><a href="index.html">Home One</a></li>
                                                    <li><a href="index-2.html">Home Two</a></li>
                                                    <li><a href="index-3.html">Home Three</a></li>
                                                    <li><a href="about.html">About Us</a></li>
                                                    <li><a href="award.html">Awards</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Pagelist 2</a>
                                                <ul>
                                                    <li><a href="team.html">Team<span class="new-label">New</span></a>
                                                    </li>
                                                    <li><a href="team-details.html">Team Details</a></li>
                                                    <li><a href="project.html">Projects One</a></li>
                                                    <li><a href="project-2.html">Projects Two<span
                                                                class="new-label">New</span></a></li>
                                                    <li><a href="project-details.html">Project Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Pagelist 3</a>
                                                <ul>
                                                    <li><a href="service.html">Service One</a></li>
                                                    <li><a href="service-2.html">Service Two<span
                                                                class="new-label">New</span></a></li>
                                                    <li><a href="service-details.html">Service Details</a></li>
                                                    <li><a href="price-plan.html">Pricing Plans</a></li>
                                                    <li><a href="contact.html">Contact Us</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Pagelist 4</a>
                                                <ul>
                                                    <li><a href="blog.html">Blog List</a></li>
                                                    <li><a href="blog-grid.html">Blog Grid</a></li>
                                                    <li><a href="blog-details.html">Blog Details<span
                                                                class="new-label">New</span></a></li>
                                                    <li><a href="blog-details-sidebar.html">Blog Details Sidebar</a>
                                                    </li>
                                                    <li><a href="error.html">Error Page</a></li>
                                                </ul>
                                            </li>
                                        </ul> -->
                                    </li>
                                    <li>
                                        <router-link to="/contact">Contact</router-link>
                                    </li>
                                </ul>
                            </nav>
                            <button class="vs-menu-toggle d-inline-block d-lg-none"><i class="fal fa-bars"></i></button>
                        </div>
                        <div class="col-auto d-none d-xl-block">
                            <div class="header-btns sideMenuToggler">
                                <button class="bar-btn">
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                </button>
                                <!-- <router-link to="/contact" class="vs-btn">Get a Quote</router-link>  -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {

}
</script>

<style></style>