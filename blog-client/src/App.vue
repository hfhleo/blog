<style lang="sass">
    @import './assets/styles/mixin.sass'
    
    .app{width: 100%;}
</style>

<template>
    <div class="app" id="app">
        <transition :name="transitionName">
            <router-view />
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return {
            transitionName: "left",
            content: "内容"
        }
    }
}
</script>


