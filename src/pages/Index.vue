<template>
  <div class="q-pa-md row justify-between" style="background-color: #fff">
    <q-page style="width: 100%;">
      <!--      <q-chat-message-->
      <!--        name="me"-->
      <!--        avatar="https://cdn.quasar.dev/img/avatar1.jpg"-->
      <!--        :text="['hey, how are you?']"-->
      <!--        stamp="7 minutes ago"-->
      <!--        sent-->
      <!--        bg-color="amber-7"-->
      <!--      />-->
      <!--      <q-chat-message-->
      <!--        name="Jane"-->
      <!--        avatar="https://cdn.quasar.dev/img/avatar5.jpg"-->
      <!--        :text="['doing fine, how r you?']"-->
      <!--        stamp="4 minutes ago"-->
      <!--        text-color="white"-->
      <!--        bg-color="primary"-->
      <!--      />-->
      <q-chat-message v-for="(item,index) in msgList" :key="index"
                      :avatar="item.avatar"
                      :text="item.text"
                      :sent="item.sent"
                      :bg-color="item.sent?'sent':'reply'"
                      :text-color="item.sent?'white':'black'"
      />
    </q-page>
  </div>
</template>

<script>
  import { colors } from 'quasar'
  export default {
    name: 'PageIndex',
    data() {
      return {
        left: false,
      }
    },
    computed: {
      msgList() {
        return this.$store.state.msgList
      }
    },
  }
</script>

<style>
  .text-sent {
    color: #F56A79;
  }
  .bg-sent {
    background: #F56A79;
  }

  .text-reply {
    color: #D9ECF2;
  }
  .bg-reply {
    background: #D9ECF2;
  }
</style>

