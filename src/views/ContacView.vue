<template>
    <!--==============================
    Breadcumb
============================== -->
    <div class="breadcumb-wrapper " data-bg-src="../assets/img/breadcumb/breadcumb-bg.jpg">
        <div class="container z-index-common">
            <div class="breadcumb-content">
                <h1 class="breadcumb-title">Contact Us</h1>
                <p class="breadcumb-subtitle">Provide Solar Panels And Renewable Energy Products.</p>
            </div>
        </div>
    </div>
    <div class="breadcumb-menu-wrap">
        <div class="container">
            <ul class="breadcumb-menu">
                <li><router-link to="/">Home</router-link></li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
    <!--==============================
    Contact Form Area
    ==============================-->
    <section class=" space-top space-extra-bottom">
        <div class="container">
            <div class="row flex-row-reverse">
                <div class="col-lg-6 col-xl-5 pb-20 pb-lg-0 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="info-box">
                        <h3 class="info-box-title">Contact Information</h3>
                        <div>
                            <div class="vs-media">
                                <div class="media-icon"><img src="../assets/img/icon/info-1-1.png" alt="info-icon"></div>
                                <div class="media-body">
                                    <p class="media-info">Phone No: <br> KE <a href="tel:+254114415209"
                                            class="text-inherit">(+254 114 415 209)</a></p>
                                </div>
                            </div>
                            <div class="vs-media">
                                <div class="media-icon"><i class="fas fa-map-marker-alt"></i></div>
                                <div class="media-body">
                                    <p class="media-info">Nairobi, Westlands, Westlands Road, Madonna House Annex</p>
                                </div>
                            </div>
                            <div class="vs-media">
                                <div class="media-icon"><i class="fas fa-envelope"></i></div>
                                <div class="media-body">
                                    <p class="media-info">Email Address: <br> <a class="text-inherit"
                                            href="sales@bescaengineering.co.ke">sales@bescaengineering.co.ke</a></p>
                                </div>
                            </div>
                        </div>
                        <h3 class="info-box-title">Follow Us</h3>
                        <div class="info-social">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-google"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-xl-7 wow fadeInUp" data-wow-delay="0.4s">
                    <form class="form-style2 layout2 ajax-contact" action="mail.php" method="POST">
                        <h3 class="form-title">Have Question Feel Free to Contact Us?</h3>
                        <div class="row">
                            <div class="col-12 form-group">
                                <label for="name">Complete Name</label>
                                <input name="name" id="name" type="text" placeholder="Your Name">
                            </div>
                            <div class="col-md-6 form-group">
                                <label for="email">Email Address</label>
                                <input name="email" id="email" type="email" placeholder="Example@domain.com">
                            </div>
                            <div class="col-md-6 form-group">
                                <label for="number">Contact No</label>
                                <input name="number" id="number" type="number" placeholder="Your number">
                            </div>
                            <div class="col-12 form-group">
                                <label for="message">Message</label>
                                <textarea name="message" id="message" placeholder="Your message"></textarea>
                            </div>
                            <div class="col-12 form-group">
                                <button type="submit" class="vs-btn">Send Message</button>
                            </div>
                        </div>
                        <p class="form-messages mb-0 mt-3"></p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!--==============================
    Map Area
    ==============================-->
    <div class="container space-bottom">
        <div class="ratio ratio-21x9">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8454581117835!2d36.802379173959565!3d-1.26530599872265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173fc261c85d%3A0xc5db81b7b61f20ae!2sMadonna%20Housed%20Annex!5e0!3m2!1sen!2ske!4v1721992453558!5m2!1sen!2ske">
            </iframe>
        </div>
    </div>
    <!--==============================
    FAQ Area  
    ==============================-->
    <section class=" space-bottom">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-xl-6 text-center wow fadeInUp" data-wow-delay="0.3s">
                    <div class="title-area ">
                        <h2 class="sec-title h1 mb-2">Got a question?</h2>
                        <p class="sec-text">If you have a question for us, see if we’ve answered it below. You’ll find
                            answers to the questions people ask us about the most.</p>
                    </div>
                </div>
                <div class="col-lg-10 col-xl-8 wow fadeInUp" data-wow-delay="0.4s">
                    <div class="accordion accordion-style1 layout2" id="faqVersion1">
                        <div class="accordion-item">
                            <div class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What solar panels do Solarsense install?
                                </button>
                            </div>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#faqVersion1">
                                <div class="accordion-body">
                                    <p>Yes, despite the removal of Government Feed-in Tariff, installs have been
                                        forecast to continue at the current rate and even increase in 2023.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    solar panels now that the Feed-in Tariff has closed?
                                </button>
                            </div>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#faqVersion1">
                                <div class="accordion-body">
                                    <p>Yes, despite the removal of Government Feed-in Tariff, installs have been
                                        forecast to continue at the current rate and even increase in 2023.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What solar panels do Solarsense install?
                                </button>
                            </div>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#faqVersion1">
                                <div class="accordion-body">
                                    <p>Yes, despite the removal of Government Feed-in Tariff, installs have been
                                        forecast to continue at the current rate and even increase in 2023.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    How to Add Battery Backup to an Existing?
                                </button>
                            </div>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#faqVersion1">
                                <div class="accordion-body">
                                    <p>Yes, despite the removal of Government Feed-in Tariff, installs have been
                                        forecast to continue at the current rate and even increase in 2023.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>
<style scoped></style>