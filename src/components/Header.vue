<template lang="">
    <header id="header" class="defualt">
        <div class="topbar">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="topbar-left text-lg-start text-center">
                  <ul class="list-inline">
                    <li><i class="fa fa-envelope-o"> </i>HyundaiFalah@gmail.com</li>
                    <li>
                      <i class="fa fa-clock-o"></i> Senin - Sabtu 8.00 - 18.00. Minggu
                      Tutup
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="topbar-right text-lg-end text-center">
                  <ul class="list-inline">
                    <li><i class="fa fa-phone"></i> 0851 7307 0605</li>
                    <li>
                      <a href="#"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-youtube-play"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

  
        <div class="menu">
          <!-- menu start -->
          <nav id="menu" class="mega-menu">
            <!-- menu list items container -->
            <section class="menu-list-items">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 position-relative">
                    <!-- menu logo -->
                    <ul class="menu-logo">
                      <li>
                        <a href="/index"
                          ><img
                            id="logo_img"
                            src="https://www.pusatpromohyundai.com/wp-content/uploads/2021/03/Logo-Hyunda-Mobil.png"
                            alt="logo"
                          />
                        </a>
                      </li>
                    </ul>
                    <!-- menu links -->
                    <ul class="menu-links">
                      <!-- active class -->
                      <li v-if="$route.path == '/'" class="active"><a href="/"> Home <i class="fa-indicator"></i></a>
                      <li v-else><a href="/"> Home <i class="fa-indicator"></i></a>
                     </li>
                      <li v-if="$route.path == '/mobil/' || $route.path == '/mobil/stargazer' || $route.path == '/mobil/creta' || $route.path == '/mobil/ioniq' || $route.path == '/mobil/palisade' || $route.path == '/mobil/santa' || $route.path == '/mobil/staria'" class="active">
                        <a href="/mobil/">
                          Mobil <i class="fa-indicator"></i
                        ></a>
                      </li>
                      <li v-else>
                        <a href="/mobil/">
                          Mobil <i class="fa-indicator"></i
                        ></a>
                      </li>
                      <li v-if="$route.path == '/contact/'" class="active">
                        <a href="/contact/">
                          Contact <i class="fa-indicator"></i
                        ></a>
                      </li>
                      <li v-else>
                        <a href="/contact/">
                          Contact <i class="fa-indicator"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </nav>
          <!-- menu end -->
        </div>
      </header>
</template>
<script>
export default {
    name: "Header",
}
</script>
<style lang="">
    
</style>