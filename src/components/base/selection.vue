<template>
  <a href="javascript:;" class="dropdown-wrap" @blur="toggleUp">
    <div class="dropdown-show" @click="toggleDrop">
      <input type="text" :data-id='selectedId[nowIndex]' v-model="selections[nowIndex]" disabled ref="input"/>
      <svg-icon sign="icon-arrow-down" class="arrow-down"></svg-icon>
    </div>
    <ul class="dropdown-menu" v-show="isShow">
      <li v-for="(items,index) in selections" @click="chooseSelection(index)">{{items}}</li>
    </ul>
  </a>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "selection",
    data() {
      return {
        isShow: false,
        nowIndex: 0
      }
    },
    props: {
      selections: {
        type: Array,
        default: () => ['test']
      },
      selectedId:{
        type: Array,
        default: () => ['0']
      },
      perm:{
        type:Boolean,
        default: ()=> false
      }
    },
    methods: {
      toggleDrop() {
        if(this.perm) return
        this.isShow = !this.isShow
      },
      toggleUp(e) {
        this.isShow = false
      },
      chooseSelection(index) {
        this.nowIndex = index
        this.isShow = false
      }
    },
    watch: {
      nowIndex: function () {

        this.$emit('selectShowOne', this.selections[this.nowIndex])

        this.$emit('selectShowTwo', this.selections[this.nowIndex])

        this.$emit('selectShowThree', this.selections[this.nowIndex])

        this.$emit('selectShowFour', this.selections[this.nowIndex])

        this.$emit('selectStatus', this.selections[this.nowIndex])

        this.$emit('selectUser', {val:this.selections[this.nowIndex],id:this.selectedId[this.nowIndex]})

        this.$emit('selectRole', {val:this.selections[this.nowIndex],id:this.selectedId[this.nowIndex]})

        //this.$store.commit('yearVoluation',this.selections[this.nowIndex])
        //this.$Hub.$emit('monthChange',this.selections[this.nowIndex])
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/style/mixin'
  .dropdown-wrap
    position relative
    display block
    width 210px
    height 40px
    outline none
    .dropdown-show
      position relative
      width 100%
      height 40px
      cursor pointer
      .arrow-down
        e-pos(top:50%, y:-50%)
        right 10px
        font-size 20px
        color #A0A0A1
      input
        width 100%
        height 100%
        padding-left 10px
        padding-right 35px
        appearance none
        border 1px solid #E2DFDE
        border-radius 5px
        color #A0A0A1
        font-size 21px
        &:disabled
          background-color #fff
</style>
<style lang="stylus" rel="stylesheet/stylus">
  .dropdown-menu
    position absolute
    top 37px
    width 100%
    font-size: 21px
    color #A0A0A1
    line-height 35px
    background-color #fff
    border 1px solid #E2DFDE
    border-radius 5px
    z-index 10
    li
      padding-left 10px
      border-bottom 1px solid #eaeaea
      cursor: pointer
      &:last-of-type
        border-bottom medium
      &:hover
        background-color #F5F6F8
</style>
