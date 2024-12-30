<section class="footer-form-sec">
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <div class="text-box">
          <h2><span>Get Your Project </span> Started Today</h2>
          <p>
            At our company, we value communication and understand the importance of open dialogue between our team and
            our clients. That's why we encourage you to talk to us – whether it's to discuss a new project, ask a
            question, or provide feedback on our services.
          </p>
        </div>
        <div class="btn-box wow fadeInUp" data-wow-duration="2s">
          <a href="javascript:;" class="get-btn popup-btn">Get Started Now</a>
          <a href="javascript:;" class="chat-btn chats">Live Chat</a>
          <!-- <a href="tel:866-645-2006" class="nu-btn ">866-645-2006</a> -->
        </div>
      </div>
      <div class="col-sm-4">
        <div class="cntct-div ">
          <form method="POST" action="" id="quoteForm ">
            <div class="row">
              <div class="col-md-12 col-xs-12 margin-bottom-20 field-mergedright">
                <input type="name" class="form-control san-bor" name="Name" placeholder="Your Name">
              </div>

              <div class="col-md-12 col-xs-12 margin-bottom-20 field-mergedleft">
                <input type="email" autocomplete="off" class="form-control san-bor" placeholder="Your Email"
                  name="Email" required="required">
              </div>
              <div class="col-md-12 col-xs-12 margin-bottom-20 field-mergedright">
                <input onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" name="Phone"
                  minlength="10" maxlength="11" required="" type="text" class="form-control san-bor"
                  placeholder="Phone Number " name="Phone" required="required">
              </div>
              <div class="col-md-12 col-xs-12 margin-bottom-20">
                <textarea class="form-control san-bor" name="Message" placeholder="Talk Us About Your Project"
                  required=""></textarea>
              </div>
              <div class="col-sm-12 col-xs-12 form-btn-div-st">
                <div class="button">
                  <input class="ftr-btn-st" type="submit" id="quoteSubmit" name="quote" value="Submit Now!">
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="footersection">
  <div class="container">
    <img class="foter-logo" src="images/logo21.png">
    <div class="row ourspcbt-footer">
      <div class="col-sm-4">
        <div class="footerbox-details footer-box-1">
          <h3>About</h3>
          <div class="footer-text">
            <p> <?= $domain_name ?> is a US-based integrated digital branding and digital marketing agency. We are a
              full-service branding agency from creating new brands to shouting it to the world and generating new
              clients.</p>
            <div class="pay-img-ftr">
              <img src="images/payment.jpg">
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-2 footer-box-3">
        <div class="footerbox-details linksheading">
          <h3>Explore</h3>
        </div>
        <div class="footerlinks">
          <ul>
            <!-- <li><a href="#">Services</a></li> -->
            <li>
              <a href="logo-design/index">Logo Design</a>
            </li>
            <li>
              <a href="web-design-and-development">Web Design</a>
            </li>
            <li>
              <a href="video-animation">Video Animation</a>
            </li>
            <li>
              <a href="print-design">Print Design</a>
            </li>
            <li>
              <a href="mobile-app">Mobile Apps</a>
            </li>
            <!-- <li>
              <a href="mascot-logo-design.php">mascot Logo</a>
            </li> -->

          </ul>
        </div>
      </div>
      <div class="col-sm-2 footer-box-4">
        <div class="footerbox-details linksheading">
          <h3>Company</h3>
        </div>
        <div class="footerlinks">
          <ul>
            <!-- <li><a href="#">Platform</a></li> -->
            <li>
              <a href="contact-us">Contact Us</a>
            </li>
            <li>
              <a href="packages">Packages</a>
            </li>
            <li>
              <a href="portfolio">Portfolio</a>
            </li>
            <li>
              <a href="client-testimonials">Testimonials</a>
            </li>
            <!-- <li>
              <a href="blog">Blog</a>
            </li> -->
          </ul>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="footerbox-details footer-box-1">
          <div class="footerbox-details linksheading">
            <h3>Address</h3>
          </div>
          <div class="contact-footer">
            <a href="tel:<?= $phone ?>">
              <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
              <span><?= $phone ?></span>
            </a>
            <a href="mailto:<?= $email ?>">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span><span class="__cf_email__"
                  data-cfemail="c0b3a1aca5b380a3a1aca9a6afb2aea9a1acafa7afa4a5b3a9a7aeb3eea3afad"><?= $email ?></span></span>
            </a>
            <p>
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span><?= $address ?> <span class="blockdiv"></span>
              </span>
            </p>
            <div class="links-ftr">
              <a href="#" target="_blank"> <i class="fa fa-facebook"
                  aria-hidden="true"></i></a>&nbsp;&nbsp;
              <a href="#" target="_blank"><i class="fa fa-linkedin"
                  aria-hidden="true"></i> </a>&nbsp;&nbsp;
              <a class="trustpilot-image" href="#" target="_blank"><i
                  class="fab fa-instagram"></i> </a>&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 ">
        <div class="InnerMenu industires-list-st">
        </div>
      </div>
    </div>
    <div class="row copyright-box">
      <div class="col-lg-12 col-sm-12">
        <div class="powerdby">
          <p>© All Rights Reserved 2023 - <?= $domain_name ?></p>
        </div>
        <ul>
          <li>
            <a href="terms">Terms & Conditions</a>
          </li>
          <li>
            <a href="privacy">Privacy Policy </a>
          </li>
          <li>
            <a href="refund-policy">Refund Policy</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-sm-12">
        <div class="disk">
          <p><?= $domain_name ?> is doing business as of Digital Dive Technologies LLC.</p>
        </div>
      </div>
</section>

<style>
.disk {
  color: #a846db;
  text-align: center;
  align-items: center;
  margin-top: 20px;
}
</style>
<script src="./assets/code.jquery.com/jquery-1.10.2.min.js"></script>
<script>
$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $('body').addClass('navfixed');
  } else {
    $('body').removeClass('navfixed');
  }
});
</script>
<script src="js/bootstrap.min.js"></script>
<script src="js/wow.min.js"></script>
<script src="js/fancybox.js"></script>
<script src="js/slick.js"></script>
<script src="js/accordian-jquery-ui.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/clock.js"></script>
<script src="js/parallax-scroll.js"></script>
<script src="./assets/cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/gsap.min.js"></script>
<script src="./assets/cdnjs.cloudflare.com/ajax/libs/gsap/3.3.3/ScrollTrigger.min.js"></script>
<script src="./assets/cdnjs.cloudflare.com/ajax/libs/jquery-circle-progress/1.2.2/circle-progress.min.js"></script>
<script src="js/custom.js"></script>
<div class="overlay-bg-new-popup"></div>
<div class="popupform-main-new-popup" style="display: none;">
  <div class="popup-main-box">
    <div class="pop-box-2-new-pop">
      <img src="auto-pop-bg-2.png">
    </div>
    <div class="pop-form-new-popp ta-center-new-pop">

      <h3>Get Exclusive <span>Discounts</span></h3>
      <p>Offering a range of competitive packages design for your business needs.</p>
      <div id="pop-form-new-popp" class="col-sm-12">
        <form method="POST" action="">
          <input
            onkeypress="return ((event.charCode >= 65 &amp;&amp; event.charCode <= 90) || (event.charCode >= 97 &amp;&amp; event.charCode <= 122) || (event.charCode == 32))"
            required="" type="text" name="Name" placeholder="Enter Name" required="">
          <input type="email" name="Email" placeholder="Enter Email" required="">
          <input onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" name="Phone" minlength="10"
            maxlength="11" required="" type="text" name="Phone" placeholder="Enter Phone" required="">
          <textarea name="Message" placeholder="Tell us about your project" required=""></textarea>
          <button type="submit">Submit
          </button>
          <a href="javascript:;" class="close-btn ta-center">No thanks, I dont like saving.</a>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
</body>
</html>