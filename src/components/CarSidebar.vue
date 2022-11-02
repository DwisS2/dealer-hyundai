<template lang="">
  <div class="col-md-4">
    <div class="car-details-sidebar">
       <div class="details-social details-weight">
         <h5>Bagikan Sekarang</h5>
         <ul>
           <li><a href="#"> <i class="fa fa-facebook"></i> facebook</a></li>
           <li><a href="#"> <i class="fa fa-twitter"></i> twitter</a></li>
           <li><a href="#"> <i class="fa fa-pinterest-p"></i> pinterest</a></li>
           <li><a href="#"> <i class="fa fa-dribbble"></i> dribbble</a></li>
           <li><a href="#"><i class="fa fa-linkedin"></i> google plus </a></li>
           <li><a href="#"> <i class="fa fa-behance"></i> behance</a></li>
         </ul>
         </div>
         
         <div class="details-phone details-weight">
           <div class="feature-box-3 grey-border">
           <div class="icon">
              <a href="https://wa.me/6285173070605">
                <i class="fa fa-phone"></i>
              </a>
            </div>
            <div class="content">
              <h4>0851 7307 0605 </h4>
             <p>Hubungi kami untuk dapat harga terbaik</p>
             </div>
         </div>
         </div>
         <div class="details-form contact-2">
            <form id="financing-calculator-01" class="gray-form">
             <h5>kalkulator pembiayaan</h5>
             <div class="mb-3">
                <label class="form-label">Harga Mobil(Rp)*</label>
                <input type="number" class="form-control" placeholder="Harga mobil" id="loan-amount" name="loan-amount">
             </div>
                     <div class="mb-3">
                 <label class="form-label">Down Payment *</label>
                 <input type="number" class="form-control" placeholder="DP Awal" id="down-payment" name="down-payment">
             </div>
              <div class="mb-3">
                 <label class="form-label">Suku Bunga (%)*</label>
                 <input type="number" class="form-control" placeholder="Suku bunga" id="interest-rate" name="interest-rate">
             </div>
             <div class="mb-3">
                 <label class="form-label">Period (Bulan)*</label>
                 <input type="number" class="form-control" placeholder="Bulan" id="period" name="period">
             </div>
                 <div class="mb-3">
                     <label class="form-label">Pembayaran</label>
                     <div class="cal_text payment-box">
                         <div id="txtPayment"></div>
                     </div>
                 </div>
             <div>
                       <a class="button red calculate_finance" href="javascript:void(0)" data-form-id="financing-calculator-01">Estimate Payment</a>
             </div>
           </form>
         </div>
       </div>
     </div>
</template>
<script>
export default {
    name: 'CarSidebar'
}
</script>
<style lang="">
    
</style>