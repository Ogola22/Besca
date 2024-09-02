<template>
     <footer class="footer-wrapper footer-layout2" data-bg-src="../../assets/img/widget/Becl2.jpg" data-overlay="custom1" data-opacity="10">
        <div class="widget-area">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-md-6 col-lg-4 col-xl-4">
                        <div class="widget footer-widget">
                            <h3 class="widget_title">Quick Contact</h3>
                            <div class="vs-widget-about">
                                <p class="footer-address">Madonna House Annex, Westlands Road, Nairobi Kenya</p>
                                <p class="footer-info"><i class="fal fa-phone-alt"></i><a class="text-inherit" href="">( +254 114415209 )</a></p>
                                <p class="footer-info"><i class="fal fa-envelope"></i><a class="text-inherit" href="">info@bescaengineering.co.ke</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-4">
                        <div class="widget widget_nav_menu  footer-widget">
                            <h3 class="widget_title">Useful Links</h3>
                            <div class="menu-all-pages-container footer-menu">
                                <ul class="menu">
                                    <li><a href="#">Solar PV</a></li>
                                    <li><a href="#">Battery Storage</a></li>
                                    <li><a href="#">Solar Panels</a></li>
                                    <li><a href="#">Charge Controllers</a></li>
                                    <li><a href="#">Hydropower Plants</a></li>
                                    <li><a href="#">Fossil Resources</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-4 col-xl-4">
                        <div class="widget footer-widget">
                            <div class="sidebar-gallery">
                                <div class="gallery-thumb">
                                    <img src="../../assets/img/service/Service-water-Pump.svg" alt="Gallery Image" class="w-100">
                                    <a href="../../assets/img/service/Service-water-Pump.svg" class="popup-image gal-btn"><i class="far fa-search-plus"></i></a>
                                </div>
                                <div class="gallery-thumb">
                                    <img src="../../assets/img/service/Service-Backup.svg" alt="Gallery Image" class="w-100">
                                    <a href="../../assets/img/service/Service-Backup.svg" class="popup-image gal-btn"><i class="far fa-search-plus"></i></a>
                                </div>
                                <div class="gallery-thumb">
                                    <img src="../../assets/img/hero/slide3.svg" alt="Gallery Image" class="w-100">
                                    <a href="../../assets/img/hero/slide3.svg" class="popup-image gal-btn"><i class="far fa-search-plus"></i></a>
                                </div> 
                                <div class="gallery-thumb">
                                    <img src="../../assets/img/hero/Slide-1.svg" alt="Gallery Image" class="w-100">
                                    <a href="../../assets/img/hero/Slide-1.svg" class="popup-image gal-btn"><i class="far fa-search-plus"></i></a>
                                </div>
                                <div class="gallery-thumb">
                                    <img src="../../assets/img/hero/slide1.svg" alt="Gallery Image" class="w-100">
                                    <a href="../../assets/img/hero/slide1.svg" class="popup-image gal-btn"><i class="far fa-search-plus"></i></a>
                                </div>
                                <div class="gallery-thumb">
                                    <img src="../../assets/img/service/Service-Streetlight.svg" alt="Gallery Image" class="w-100">
                                    <a href="../../assets/img/service/Service-Streetlight.svg" class="popup-image gal-btn"><i class="far fa-search-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div class="copyright-wrap">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="text-center col-lg-auto">
                        <p>&copy; {{ currentYear }} <a class="text-green" href="index.html">Besca Engineering</a>. All rights reserved<a class="text-white" href=""></a>.</p>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <div class="copyright-menu">
                            <ul class="list-unstyled">
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

     <!-- Scroll To Top -->
     <a href="#" class="scrollToTop scroll-btn"><i class="far fa-arrow-up"></i></a>

</template>
<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear()
        };
    }
}
</script>
<style></style>