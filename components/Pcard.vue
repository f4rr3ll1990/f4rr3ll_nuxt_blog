<template>
    <div id="pcard" class="flip col-md-8 col-lg-4">
        <div class="front" v-bind:style="{ backgroundImage: 'url(' + data.image + ')' }"></div>
        <div class="back">
            <h2>{{ data.title }}</h2>
            <p>{{ data.description }}</p>
            <div class="pcard_bottom" v-if="data.outdated==false">
                <a :href="data.link" target="_blank" class="btn btn-outline pcard_link">Перейти на сайт</a>
            </div>
            <div class="pcard_bottom" v-if="data.outdated==true">
                Устарел
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pcard',
    props: ['data']
}
</script>

<style lang="sass" scoped>


.flip 
    background-size: cover   
    margin-top: 30px
    >.front,
    >.back 
        display: block;
        transition-timing-function: cubic-bezier(.175, .885, .32, 1.275);
        transition-duration: .5s;
        transition-property: transform, opacity;
    
    >.front 
        transform: rotateY(0deg);
    
    >.back 
        position: absolute;
        opacity: 0;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transform: rotateY(-180deg);
        >h2
            text-transform: uppercase
        >.pcard_bottom
            position: absolute
            bottom: 15px;
            right: 15px;
            >.pcard_link
                text-decoration: none
                color: #666
                background-color: #fafafa
                border: 1px solid #666
                &:hover
                  background: #666
                  color: #fff  

    &:hover 
        >.front 
            transform: rotateY(180deg);
        >.back 
            opacity: 1;
            transform: rotateY(0deg);


.flip 
    >.front,
    >.back 
      display: block;
      color: white;
      width: inherit;
      background-size: cover!important;
      background-position: center!important;
      height: 220px;
      padding: 1em 2em;
      background: linear-gradient(to left, #43436d, #4b548f8e), #5d5d5f;
      border-radius: 10px;
      p 
        font-size: 0.9125rem;
        line-height: 160%;
        color: #f2f2f2;
      
    


.text-shadow 
    text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04), 3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04), 0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04), 7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04), 9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04), 11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04), 13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04), 0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04), 17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04), 19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04);

</style>


