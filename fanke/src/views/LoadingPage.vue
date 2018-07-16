<template>
  <div id="loadingPage">

    <img src="../assets/loading.gif" alt="loading">
    <div id="process">{{ per }}</div>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        count: 0,
        per: '',
//        imgArr2: ['../assets/222222.png', '../assets/bg1.png', '../assets/bg2.png', '../assets/bg3.png',
//          '../assets/bird.png', '../assets/btnDefault.png', '../assets/btnRight.png',
//          '../assets/btnWrong.png', '../assets/close.png', '../assets/djq.png', '../assets/error.png',
//          '../assets/faiImg2-2.png', '../assets/fail.png', '../assets/gift.png', '../assets/hpoc.png',
//          '../assets/kqbd.png', '../assets/kqjt.png', '../assets/light.png', '../assets/loading.gif',
//          '../assets/logo.jpg', '../assets/lots1.png', '../assets/manImg.jpg', '../assets/musicOff.png',
//          '../assets/musicOn.png', '../assets/ruleImg.png', '../assets/startBtn.png',
//          '../assets/success.png', '../assets/title.png', '../assets/title_pc.png', '../assets/yao.png'],
//        test: function () {
//          return require(this.imgArr2[0])
//        }
//        imgArr: ['/static/img/bg1.png', '/static/img/bg2.png', '/static/img/faiImg2-2.png',
//          '/static/img/gift.png', '/static/img/light.png', '/static/img/title.png', '/static/img/yao.png'],
        imgArr: ['/dist/static/img/bg1.png', '/dist/static/img/bg2.png', '/dist/static/img/faiImg2-2.png',
          '/dist/static/img/gift.png', '/dist/static/img/light.png', '/dist/static/img/title.png', '/dist/static/img/yao.png'],
      }
    },


    mounted: function () {
      const len = this.imgArr.length;

      console.log('图片加载中');
      Array.from(this.imgArr).forEach((item) => {
        console.log('图片加载中2');

        let img = new Image();
//        let temp = require(item);
//        console.log(temp)
        img.src = item;

        img.onerror = () => {
          console.log('图片chucuo');
          console.log(img.src);

        };

        img.onload = () => {
          console.log('图片加载中3');

          this.count++;

          this.per = Math.floor((this.count/len)*100) + "%";
//
//          console.log(this.count);
//          console.log(len);
//          console.log(this.per);

          if(this.count>=len){
            console.log(22222222222)
            setTimeout(()=> {
              this.$router.replace('/home')
            },500)
          }
        };
      });


    }
  }
</script>

<style>
  #loadingPage {
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    /*text-align: center;*/
    /*display: none;*/
  }
  #loadingPage img {
    position: absolute;
    top: -10rem;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  #process {
    color: white;
    width: 10rem;
    height: 5rem;
    font-size: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    text-align: center;

  }
</style>
