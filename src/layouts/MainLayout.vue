<template>
  <q-layout view="lHr LpR lfr">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <!--        <q-btn dense flat round icon="menu" @click="left = !left"/>-->
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar1.jpg">
          </q-avatar>
          小明
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="right = !right"/>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" show-if-above bordered>
      <Friends></Friends>
    </q-drawer>
    <q-drawer show-if-above v-model="right" side="right" bordered>
      <PersonalInfo></PersonalInfo>
    </q-drawer>

    <q-page-container>
        <router-view/>
    </q-page-container>

    <q-footer reveal elevated>
      <InputBox></InputBox>
    </q-footer>

  </q-layout>
</template>

<script>
  import EssentialLink from 'components/EssentialLink.vue'
  import InputBox from "components/InputBox";
  import Friends from "components/Friends";
  import PersonalInfo from "components/PersonalInfo";

  export default {
    name: 'MainLayout',
    components: {
      EssentialLink,
      InputBox,
      Friends,
      PersonalInfo
    },
    data() {
      return {
        left: false,
        right: false,
        contentStyle: {
          backgroundColor: 'rgba(0,0,0,0.02)',
          color: '#555'
        },

        contentActiveStyle: {
          backgroundColor: '#eee',
          color: 'black'
        },

        thumbStyle: {
          right: '2px',
          borderRadius: '5px',
          backgroundColor: '#027be3',
          width: '5px',
          opacity: 0.75
        }
      }
    }
  }
</script>
