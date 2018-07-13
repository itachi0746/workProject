<template>
  <div id="loadingPage">

    <img src="../assets/loading.gif" alt="loading">
    <div id="process">{{ per }}</div>
    <!--<img :src="_src" v-show="false">-->
  </div>
</template>

<script>

  export default {
    data: function () {
      return {
//        _src: '',
        count: 0,
        per: '',
        imgArr: ['/static/img/bg1.png', '/static/img/bg2.png', '/static/img/faiImg2-2.png',
          '/static/img/gift.png', '/static/img/light.png', '/static/img/title.png', '/static/img/yao.png'],
//        imgArr: ['/content/fanke/static/img/bg1.png', '/content/fanke/static/img/bg2.png', '/content/fanke/static/img/faiImg2-2.png',
//          '/content/fanke/static/img/gift.png', '/content/fanke/static/img/light.png', '/content/fanke/static/img/title.png', '/content/fanke/static/img/yao.png'],
      }
    },


    mounted: function () {
      const len = this.imgArr.length;

      console.log('图片加载中');
      Array.from(this.imgArr).forEach((item) => {
        console.log('图片加载中2');

        let img = new Image();
        img.src = item;
//        this._src = item;

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
