<template>
  <div>
    <q-list>
      <q-toolbar class="text-white shadow-2" style="background-color: #002D40">
        <q-toolbar-title>好友列表</q-toolbar-title>
      </q-toolbar>
      <!--        <EssentialLink-->
      <!--          v-for="link in essentialLinks"-->
      <!--          :key="link.title"-->
      <!--          v-bind="link"-->
      <!--        />-->
      <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <!--              {{ contact.letter }}-->
            <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label style="font-size: 18px;">{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.lastMsg }}</q-item-label>
        </q-item-section>
<!--        <q-item-section side>-->
<!--          <q-icon name="chat_bubble" color="green"/>-->
<!--        </q-item-section>-->
      </q-item>

<!--      <q-separator/>-->
<!--      <q-item-label header>下线</q-item-label>-->

<!--      <q-item v-for="contact in offline" :key="contact.id" class="q-mb-sm" clickable v-ripple>-->
<!--        <q-item-section avatar>-->
<!--          <q-avatar>-->
<!--            <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`">-->
<!--          </q-avatar>-->
<!--        </q-item-section>-->

<!--        <q-item-section>-->
<!--          <q-item-label>{{ contact.name }}</q-item-label>-->
<!--          <q-item-label caption lines="1">{{ contact.lastMsg }}</q-item-label>-->
<!--        </q-item-section>-->

<!--        <q-item-section side>-->
<!--          <q-icon name="chat_bubble" color="grey"/>-->
<!--        </q-item-section>-->
<!--      </q-item>-->
    </q-list>
  </div>
</template>

<script>
  const contacts = [
    {
      id: 1,
      name: '小明',
      lastMsg: '好的, bye bye',
      letter: 'R',
      avatar: 'avatar1.jpg'
    }, {
      id: 2,
      name: '小王',
      lastMsg: '在干嘛？',
      letter: 'M',
      avatar: 'avatar3.jpg'
    }, {
      id: 3,
      name: '小帅',
      lastMsg: '去打球吗？',
      letter: 'E',
      avatar: 'avatar4.jpg'
    }, {
      id: 4,
      name: '小林',
      lastMsg: '周末一起逛街',
      letter: 'S',
      avatar: 'avatar.png'
    }]
  const offline = [
    {
      id: 5,
      name: '小赵',
      lastMsg: '下周四上午9点开会',
      avatar: 'avatar2.jpg'
    }, {
      id: 6,
      name: '小李',
      lastMsg: '明天交汇报',
      avatar: 'avatar6.jpg'
    }]
  export default {
    name: "Friends",
    data() {
      return {
        contacts,
        offline
      }
    }
  }
</script>

<style scoped>

</style>
