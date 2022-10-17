<template>
    <body>

        <!--=================================
          loading -->
        
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
                     <h1 class="text-white">List Mobil</h1>
                   </div>
                   <div class="col-md-6 text-md-end float-end">
                     <ul class="page-breadcrumb">
                        <li><a href="index"><i class="fa fa-home"></i> Home</a> <i class="fa fa-angle-double-right"></i></li>
                        <li><span>Mobil</span> </li>
                     </ul>
                   </div>
             </div>
          </div>
        </section>

        <section class="product-listing page-section-ptb">
         <div class="container">
          <div class="row">
             <div class="col-lg-12 col-md-8">
                <div class="row">
                  <div class="col-lg-4 col-sm-6">
                    <div class="car-item gray-bg text-center">
                     <div class="car-image">
                       <img class="img-fluid" src="frontend/images/stargazer3.jpg"/>
                       <div class="car-overlay-banner">
                        <ul>
                          <li><a href="/mobil/stargazer"><i class="fa fa-shopping-cart"></i></a></li>
                         </ul>
                       </div>
                     </div>
                  
                     <div class="car-content">
                       <a href="/mobil/stargazer">Hyundai Stargazer</a>
                       <div class="separator"></div>
                       <div class="price">
                         <span class="new-price">Rp.243.300.000</span>
                       </div>
                     </div>
                   </div>
                   </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="car-item gray-bg text-center">
                     <div class="car-image">
                       <img class="img-fluid" src="frontend/images/creta2.jpg"/>
                       <div class="car-overlay-banner">
                        <ul>
                          <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                         </ul>
                       </div>
                     </div>
                  
                     <div class="car-content">
                       <a href="#">Hyundai Creta</a>
                       <div class="separator"></div>
                       <div class="price">
                         <span class="new-price">Rp.279.000.000</span>
                       </div>
                     </div>
                   </div>
                   </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="car-item gray-bg text-center">
                     <div class="car-image">
                       <img class="img-fluid" src="frontend/images/ionic.jpg"/>
                       <div class="car-overlay-banner">
                        <ul>
                          <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                         </ul>
                       </div>
                     </div>
                  
                     <div class="car-content">
                       <a href="#">Hyundai Ionic 5</a>
                       <div class="separator"></div>
                       <div class="price">
                         <span class="new-price">Rp.748.000.000</span>
                       </div>
                     </div>
                   </div>
                   </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="car-item gray-bg text-center">
                     <div class="car-image">
                       <img class="img-fluid" src="frontend/images/kona.jpg"/>
                       <div class="car-overlay-banner">
                        <ul>
                          <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                         </ul>
                       </div>
                     </div>
                  
                     <div class="car-content">
                       <a href="#">Hyundai Kona</a>
                       <div class="separator"></div>
                       <div class="price">
                         <span class="new-price">Rp.742.000.000</span>
                       </div>
                     </div>
                   </div>
                   </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="car-item gray-bg text-center">
                     <div class="car-image">
                       <img class="img-fluid" src="frontend/images/palisade.jpg"/>
                       <div class="car-overlay-banner">
                        <ul>
                          <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                         </ul>
                       </div>
                     </div>
                  
                     <div class="car-content">
                       <a href="#">Hyundai Palisade</a>
                       <div class="separator"></div>
                       <div class="price">
                         <span class="new-price">Rp.842.000.000</span>
                       </div>
                     </div>
                   </div>
                   </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="car-item gray-bg text-center">
                     <div class="car-image">
                       <img class="img-fluid" src="frontend/images/santa.jpg"/>
                       <div class="car-overlay-banner">
                        <ul>
                          <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                         </ul>
                       </div>
                     </div>
                  
                     <div class="car-content">
                       <a href="#">Hyundai SANTA FE</a>
                       <div class="separator"></div>
                       <div class="price">
                         <span class="new-price">Rp.569.000.000</span>
                       </div>
                     </div>
                   </div>
                   </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="car-item gray-bg text-center">
                     <div class="car-image">
                       <img class="img-fluid" src="frontend/images/staria.jpg"/>
                       <div class="car-overlay-banner">
                        <ul>
                          <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                         </ul>
                       </div>
                     </div>
                  
                     <div class="car-content">
                       <a href="#">Hyundai Staria</a>
                       <div class="separator"></div>
                       <div class="price">
                         <span class="new-price">Rp.896.000.000</span>
                       </div>
                     </div>
                   </div>
                   </div>
                  </div>
               </div>
             </div>
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
    name: "Mobil",
    components: { Header, Footer, Call },
}
</script>
<style lang="css">
  
</style>