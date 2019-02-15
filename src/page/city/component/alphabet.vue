<template>
<div class="province_list_bar">
    <ul>
        <li data-index="#">#</li>
        <li
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
        >
        {{item}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    sortgroupcity: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.sortgroupcity) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 117.53
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="scss" scoped>
 .province_list_bar {
    position: fixed;
    top: 0;
    right: 0;
    width: .90666667rem;
    height: 100%;
    z-index: 900;
}
.province_list_bar ul, .province_tips {
    top: 50%;
    color: #fff;
    text-align: center;
    background: rgba(0,0,0,.4);
}
.province_list_bar ul {
    position: absolute;
    right: .26666667rem;
    width: .64rem;
    padding: .26666667rem 0;
    margin: 0;
    font-size: .37333333rem;
    line-height: .64rem;
    border-radius: .32rem;
    transform: translate3d(0,-50%,0);
}
.province_list_bar li {
    text-align: center;
}
</style>
