<template>
  <div>
    <q-editor
      v-model="editor"
      ref="editor"
      toolbar-text-color="white"
      toolbar-toggle-color="yellow-8"
      :toolbar="[
        ['send'],
        // ['bold'],
        // [{
        //   label: $q.lang.editor.formatting,
        //   icon: $q.iconSet.editor.formatting,
        //   list: 'no-icons',
        //   options: ['p', 'h3', 'h4', 'h5', 'h6', 'code']
        // }]
      ]"
      :content-style="{ color:'#000' }"
    >
      <template v-slot:send>
          <q-btn dense
                 no-caps
                 ref="send"
                 color="grey"
                 label="发送"
                 style="font-size: 20px;width: 100px;"
                 @click="sendMsg()"/>
      </template>
    </q-editor>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">警告</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          不能发送空白信息
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="确认" color="primary" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>

  export default {
    name: "InputBox",
    data() {
      return {
        editor: '',
        alert: false,
      }
    },
    methods: {
      sendMsg() {
        // console.log(this.$store.state.sentList)
        if (this.editor === '') {
          this.alert = true
        } else {
          // console.log(this.editor)
          var curMsg = {}
          for (var i = 0; i < this.$store.state.sentList.length; i++) {
            if (this.editor === this.$store.state.sentList[i].text[0]) {
              curMsg = this.$store.state.sentList[i]
              break
            } else {
              curMsg = {
                sentId: this.$store.state.sentList.length + 1,
                replyId: -1,
                name: '小红',
                avatar: 'https://cdn.quasar.dev/img/avatar5.jpg',
                text: [this.editor],
                stamp: '1分钟前',
                sent: true
              }
            }
          }
          this.$store.dispatch('sentMsg', curMsg)
          this.$store.dispatch('replyMsg', curMsg)
          this.editor = ''
          // let chartlist = document.getElementById('chart_list')
          // // 让chartlist的滚动条持续保持在最底部
          // console.log(`sTop:${chartlist.scrollTop} sHeight:${chartlist.scrollHeight}`)
          // chartlist.scrollTop = chartlist.scrollHeight
        }
      }
    }
  }
</script>

<style lang="sass">
  .editor_token
    background: rgba(0, 0, 0, .6)
    color: white
    padding: 3px

    &, .q-icon
      border-radius: 3px

    .q-icon
      background: rgba(0, 0, 0, .2)
</style>
