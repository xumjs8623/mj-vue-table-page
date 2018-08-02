<template>
  <mj-tags :menusData=menusData @jump="jump" @close="close"></mj-tags>
</template>
<script>
export default {
  data () {
    return {
      menusData: [
        {
          index: '1',
          name: '飞行监视',
          icon: '',
          children: [
            {
              index: '1-1',
              url: '/realTimeFlight',
              name: '飞行实时监控'
            }, {
              index: '1-2',
              url: '/historyFlight',
              name: '飞行历史'
            }, {
              index: '1-3',
              url: '/realTimeFlight1',
              name: '轨迹巡航'
            }
          ]
        },
        {
          index: '2',
          name: '通航要素管理',
          icon: '',
          children: [
            {
              index: '2-1',
              url: '/aviator',
              name: '飞行员管理'
            }
          ]
        },
        {
          index: '3',
          name: '通航信息',
          icon: '',
          children: [
            {
              index: '3-1',
              url: '/weather',
              name: '气象信息'
            }
          ]
        }
      ]
    }
  },
  methods: {
    jump (url) {
      console.log(url)
    },
    close (url) {
      console.log(url)
    }
  }
}
</script>
