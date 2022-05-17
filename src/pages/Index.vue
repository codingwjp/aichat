<template>
  <div class="q-pa-md row justify-center">
    <q-page style="width: 100%; max-width: 400px">
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
                      :name="item.name"
                      :avatar="item.avatar"
                      :text="item.text"
                      :stamp="item.stamp"
                      :sent="item.sent"
                      :bg-color="item.sent?'amber-7':'primary'"
                      :text-color="item.sent?'':'white'"/>
    </q-page>
  </div>
</template>

<script>
  export default {
    name: 'PageIndex',
    data() {
      return {}
    },
    computed: {
      msgList() {
        return this.$store.state.msgList
      }
    },
  }
</script>
