<template lang="">
    <body>
         <div id="loading">
          <div id="loading-center">
              <img src="images/loader.gif" alt="">
         </div>
        </div>
        
         <Header></Header>
      
         <section class="inner-intro bg-1 bg-overlay-black-70">
          <div class="container">
             <div class="row text-center intro-title">
                   <div class="col-md-6 text-md-start d-inline-block">
                     <h1 class="text-white">Contact us </h1>
                   </div>
                   <div class="col-md-6 text-md-end float-end">
                     <ul class="page-breadcrumb">
                        <li><a href="#"><i class="fa fa-home"></i> Home</a> <i class="fa fa-angle-double-right"></i></li>
                        <li><span>Contact us</span> </li>
                     </ul>
                   </div>
             </div>
          </div>
        </section>
        
        <
        
        <section class="contact page-section-ptb white-bg">
          <div class="container">
            <div class="row">
              <div class="col-lg-2 col-md-5 col-sm-5">
               <div class="contact-box text-center grey-border">
                  <i class="fa fa-phone"></i>
                  <h5>WA</h5>
                  <p>0851 7307 0605</p>
                </div>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8">
               <div class="contact-box text-center grey-border">
                  <i class="fa fa-map-marker"></i>
                  <h5>Alamat</h5>
                  <p>Hyundai City Store Supermall Karawaci Lt. Dasar, Jl. Boulvard Diponegoro No. 105, Karawaci - Tangerang</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-5 col-sm-5">
               <div class="contact-box text-center grey-border mb-4 mb-sm-0">
                  <i class="fa fa-envelope-o"></i>
                  <h5>Email</h5>
                  <p> support@website.com</p>
                </div>
              </div>
            </div>
            <div class="page-section-ptb">
             
              <div class="col-lg-4 col-sm-12 mt-lg-0 mt-4 mx-auto">
                <div class="opening-hours gray-bg mt-sm-0">
                  <h6>opening hours</h6>
                  <ul class="list-style-none">
                    <li><strong>Sunday</strong> <span class="text-red"> closed</span></li>
                    <li><strong>Monday</strong> <span> 9:00 AM to 9:00 PM</span></li>
                    <li><strong>Tuesday </strong> <span> 9:00 AM to 9:00 PM</span></li>
                    <li><strong>Wednesday </strong> <span> 9:00 AM to 9:00 PM</span></li>
                    <li><strong>Thursday </strong> <span> 9:00 AM to 9:00 PM</span></li>
                    <li><strong>Friday </strong> <span> 9:00 AM to 9:00 PM</span></li>
                    <li><strong>Saturday </strong> <span> 9:00 AM to 9:00 PM</span></li>
                  </ul>
                </div>
              </div>
             </div>
         </div>
           
          </div>
        </section>
        
         <section class="contact-map">
          <div class="container-fluid">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2785192980095!2d106.60294542695313!3d-6.22696209999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd3033b5eba1%3A0xbccf8ef0ca8e3dc9!2sHyundai%20City%20Store%20Supermal%20Karawaci%20Official!5e0!3m2!1sen!2sid!4v1665731717342!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
         </section>
       <Footer></Footer>
       <Call></Call>
    </body>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Call from "../components/Call.vue";
export default {
    name: "Contact",
    components: { Header, Footer, Call },
}
</script>
<style lang="">
    
</style>