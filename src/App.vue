<template>
  <div id="app">
      <div class="wrapper">
        <b-row>
          <b-col xs="12" sm="12" md="3" class="imageWrap column"></b-col>
          <b-col xs="12" sm="12" md="9" class="column">
            
            <b-carousel v-show="showCarousel"
              id="carousel-1"
              v-model="slide"
              controls
              no-animation
              :interval='0'
              @sliding-end="onSlideEnd"
            >
              <!-- Text slides with image -->
              <b-carousel-slide img-blank img-blank-color="white">
                <h5>We'll help you find the perfect gift</h5>
                <h6>I'm looking for a gift...</h6>
                <div class="buttons step1">
                  <b-button-group class="button-group">
                    <b-button>FOR HER</b-button>
                    <b-button>FOR HIM</b-button>
                    <b-button>FOR KIDS &amp; TEENS</b-button>
                  </b-button-group>
                </div>
              </b-carousel-slide>
              <b-carousel-slide img-blank img-blank-color="white">
                <h5>What relation are they to you?</h5>
                <h6>They're my...</h6>
                <div class="buttons step2">
                  <b-button-group class="button-group">
                    <b-button>DAD</b-button>
                    <b-button>GRANDAD</b-button>
                    <b-button>BROTHER</b-button>
                    <b-button>BOYFRIEND</b-button>
                    <b-button>HUSBAND</b-button>
                    <b-button>FRIEND</b-button>
                  </b-button-group>
                </div>
              </b-carousel-slide>
              <b-carousel-slide img-blank img-blank-color="white">
                <h6>Select <b>one or more</b> interests below and let our wizard work its magic!</h6>
                <div class="buttons step3">
                  <b-button-group v-on:click="clickedButton" class="button-group">
                    <b-button>EXPERIENCES</b-button>
                    <b-button>FOOD</b-button>
                    <b-button>GROOMING</b-button>
                    <b-button>GAMING</b-button>
                    <b-button>PERSONALISED</b-button>
                    <b-button>PHOTOGRAPHY</b-button>
                    <b-button>SPORTS</b-button>
                    <b-button>STAR WARS</b-button>
                  </b-button-group>
                </div>
              </b-carousel-slide>
              
            </b-carousel>
            <div id="magicView" v-show="showMagic">
              <b-row>
                <b-col>
                  <div class="col-wrapper">
                    <div class="magicPhoto">
                    </div>
                    <p>One night clamping b...</p>
                    <b>£55.00</b>
                    <div>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                    </div>
                  </div>
                </b-col>
                <b-col>
                  <div class="col-wrapper">
                    <div class="magicPhoto">
                    </div>
                    <p>Personalised Face Cus...</p>
                    <b>£14.99</b>
                    <div>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                    </div>
                  </div>
                </b-col>
                <b-col>
                  <div class="col-wrapper">
                    <div class="magicPhoto">
                    </div>
                    <p>Storm glass</p>
                    <b>£19.99</b>
                    <div>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half checked"></span>
                    </div>
                  </div>
                </b-col>
                <b-col>
                  <div class="col-wrapper">
                    <div class="magicPhoto">
                    </div>
                    <p>Grow it - Bonsai tree</p>
                    <b>£12.99</b>
                    <div>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half checked"></span>
                    </div>
                  </div>
                </b-col>
                <b-col>
                  <div class="col-wrapper">
                    <div class="magicPhoto">
                    </div>
                    <p>Grow it - Bonsai tree</p>
                    <b>£12.99</b>
                    <div>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half checked"></span>
                    </div> 
                  </div> 
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <div class="col-wrapper">
                    <div class="magicPhoto">
                    </div>
                    <p>One night clamping b...</p>
                    <b>£55.00</b>
                    <div>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                    </div>
                  </div>
                </b-col>
                <b-col>
                  <div class="col-wrapper">
                    <div class="magicPhoto">
                    </div>
                    <p>Personalised Face Cus...</p>
                    <b>£14.99</b>
                    <div>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                    </div>
                  </div>
                </b-col>
                <b-col>
                  <div class="col-wrapper">
                    <div class="magicPhoto">
                    </div>
                    <p>Storm glass</p>
                    <b>£19.99</b>
                    <div>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half checked"></span>
                    </div>
                  </div>
                </b-col>
                <b-col>
                  <div class="col-wrapper">
                    <div class="magicPhoto">
                    </div>
                    <p>Grow it - Bonsai tree</p>
                    <b>£12.99</b>
                    <div>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half checked"></span>
                    </div>
                  </div>
                </b-col>
                <b-col>
                  <div class="col-wrapper">
                    <div class="magicPhoto">
                    </div>
                    <p>Grow it - Bonsai tree</p>
                    <b>£12.99</b>
                    <div>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half checked"></span>
                    </div> 
                  </div> 
                </b-col>
              </b-row>
            </div>
            <b-row class="footer">
              <b-col xs="12" sm="12" md="6">
                <div class="progress-wrapper">
                  <b-progress :value="progressValue" max="100"></b-progress>
                </div>
                <p class="progress-text">Step {{step}}/3</p>
              </b-col>
              <b-col v-show="showButton" xs="12" sm="12" md="6">
                <b-button id="workMagic" v-show="showMagicButton" v-on:click="workYourMagic">WORK YOUR MAGIC</b-button>
                <b-button id="goBack" v-show="showGoBack" v-on:click="goBack">GO BACK</b-button>
                <b-button id="showResults" v-show="showViewResults">VIEW ALL RESULTS</b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
    </div>
  </div>
</template>

<script>
import './css/main.css'

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      slide: 0,
      step: 1,
      progressValue: 33.333333333,
      showButton: false,
      showMagic: false,
      showCarousel: true,
      showGoBack: false,
      showViewResults: false,
      showMagicButton: true
    }
  },
  mounted(){
    document.querySelector('.carousel-control-prev').style.visibility='hidden';
  },
  methods: {
    onSlideEnd() {
      if (this.slide == 2) {
        document.querySelector('.carousel-control-next').style.visibility='hidden';
        document.querySelector('.carousel-control-prev').style.visibility='visible';
        this.progressValue = 100;
        this.step = 3;
        this.showButton = true;
      }
      else if (this.slide == 0){
        document.querySelector('.carousel-control-next').style.visibility='visible';
        document.querySelector('.carousel-control-prev').style.visibility='hidden';
        this.progressValue = 33.333333333;
        this.step = 1;
        this.showButton = false;
      }
      else {
        document.querySelector('.carousel-control-next').style.visibility='visible';
        document.querySelector('.carousel-control-prev').style.visibility='visible';
        this.progressValue = 66.666666666;
        this.step = 2;
        this.showButton = false;
      }
    },
    clickedButton(button) {
      if (button.srcElement.classList.contains("active")) {
        button.srcElement.classList.remove("active");
      }
      else {
        button.srcElement.classList.add("active");
      }
    },
    workYourMagic() {
      this.showMagic = true;
      this.showCarousel = false;
      this.showGoBack = true;
      this.showViewResults = true;
      this.showMagicButton = false;
    },
    goBack() {
      this.showMagic = false;
      this.showCarousel = true;
      this.showGoBack = false;
      this.showViewResults = false;
      this.showMagicButton = true;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
