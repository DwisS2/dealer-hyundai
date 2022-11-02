<template lang="">
    <body>

         <div id="loading">
          <div id="loading-center">
              <img src="/frontend/images/loader.gif" alt="">
         </div>
        </div>
        
        <Header></Header>
        
         <section class="inner-intro bg-1 bg-overlay-black-70">
          <div class="container">
             <div class="row text-center intro-title">
               <div class="col-md-6 text-md-start d-inline-block">
                 <h1 class="text-white">Hyundai staria</h1>
               </div>
               <div class="col-md-6 text-md-end float-end">
                 <ul class="page-breadcrumb">
                    <li><a href="/index"><i class="fa fa-home"></i> Home</a> <i class="fa fa-angle-double-right"></i></li>
                    <li><a href="/mobil">Mobil</a> <i class="fa fa-angle-double-right"></i></li>
                    <li><span>Hyundai staria</span> </li>
                 </ul>
               </div>
             </div>
          </div>
        </section>
        
        <section class="car-details page-section-ptb">
          <div class="container">
            <div class="row">
             <div class="col-md-9">
               <h3>Hyundai staria</h3>
               <p>Hyundai Motors Indonesia Luncurkan Hyundai STARIA, MPV Futuristik yang Tawarkan Pengalaman Larger Than Life</p>
              </div>
            </div>
           
            <div class="row">
             <div class="col-md-8">
                <div class="slider-slick">
                  <div class="slider slider-for detail-big-car-gallery">
                        <img class="img-fluid" src="/frontend/images/staria.jpg" alt="">
                        <img class="img-fluid" src="/frontend/images/staria2.jpg" alt="">
                        <img class="img-fluid" src="/frontend/images/staria3.jpg" alt="">
                        <img class="img-fluid" src="/frontend/images/staria4.jpg" alt="">
                        <img class="img-fluid" src="/frontend/images/staria5.jpg" alt="">
                        <img class="img-fluid" src="/frontend/images/staria6.jpg" alt="">
                        <img class="img-fluid" src="/frontend/images/staria7.jpg" alt="">
                        <img class="img-fluid" src="/frontend/images/staria8.jpg" alt="">
                        <img class="img-fluid" src="/frontend/images/staria9.jpg" alt="">
                    </div>
                    <div class="slider slider-nav">
                        <img class="img-fluid" src="/frontend/images/staria.jpg" alt="">
                        <img class="img-fluid" src="/frontend/images/staria2.jpg" alt="">
                        <img class="img-fluid" src="/frontend/images/staria3.jpg" alt="">
                        <img class="img-fluid" src="/frontend/images/staria4.jpg" alt="">
                        <img class="img-fluid" src="/frontend/images/staria5.jpg" alt="">
                        <img class="img-fluid" src="/frontend/images/staria6.jpg" alt="">
                        <img class="img-fluid" src="/frontend/images/staria7.jpg" alt="">
                        <img class="img-fluid" src="/frontend/images/staria8.jpg" alt="">
                        <img class="img-fluid" src="/frontend/images/staria9.jpg" alt="">
                    </div>
                 </div>
        
                <div id="tabs">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item icon-diamond" role="presentation">
                      <button class="nav-link active" id="general-information-tab" data-bs-toggle="tab" data-bs-target="#general-information" type="button" role="tab" aria-controls="general-information" aria-selected="true">Informasi</button>
                    </li>
                    <li class="nav-item icon-list" role="presentation">
                      <button class="nav-link" id="features-options-tab" data-bs-toggle="tab" data-bs-target="#features-options" type="button" role="tab" aria-controls="features-options" aria-selected="false">Harga</button>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="general-information" role="tabpanel" aria-labelledby="general-information-tab">
                      <h6>Hyundai staria</h6>
                        <ul>
                          <li>
                            Hyundai STARIA adalah MPV Premium yang mengutamakan kemewahan desain eksterior dan memberikan kenyamanan perjalanan jarak jauh dari sisi interiornya.
                          </li>
                          <li>
                            MPV ini menghadirkan kualitas kursi penumpang premium setara first class yang memberikan kesan mewah bagi para pelanggan.</li>
                          <li>
                            Hyundai STARIA menawarkan pengalaman terlengkap untuk kemudahan dan bantuan pengemudi dengan sistem tercanggih untuk keamanan berkendara.</li>
                        </ul>
                      
                    </div>
                    <div class="tab-pane fade" id="features-options" role="tabpanel" aria-labelledby="features-options-tab">
                      <h6>HYUNDAI STARIA 2.2 DIESEL CRD-i</h6>
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <th scope="row">TIPE 9 SEATER</th>
                            <td>Rp.896.000.000</td>
                          </tr>
                          <tr>
                            <th scope="row">TIPE 7 SEATER</th>
                            <td>Rp.1.028.000.000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
          <div class="feature-car">
           <h6>Mobil Lainnya</h6>
            <Feature></Feature>
            </div>
           </div>
          <CarSidebar></CarSidebar>
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
import Feature from "../components/Feature.vue";
import Call from "../components/Call.vue";
import CarSidebar from "../components/CarSidebar.vue";
export default {
    components: { Header, Footer, Feature, Call, CarSidebar },
    name: "Staria"
}
</script>
<style lang="">
    
</style>