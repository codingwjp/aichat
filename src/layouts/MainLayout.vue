<template>
  <div>
    <div class="bg bg-blur"></div>
    <div class="content">
      <q-layout view="lHr LpR lfr" container
                style="height: 600px"
                class="shadow-2 rounded-borders">
        <q-header elevated class="text-white" style="height: 100px;background-color: #1AA6B7">
          <q-toolbar>
            <!--        <q-btn dense flat round icon="menu" @click="left = !left"/>-->
            <q-toolbar-title style="font-size: 24px;line-height: 100px;">
              <!--          <q-avatar>-->
              <!--            <img src="https://cdn.quasar.dev/img/avatar1.jpg">-->
              <!--          </q-avatar>-->
              小明
            </q-toolbar-title>
            <!--        <q-btn dense flat round icon="menu" @click="right = !right"/>-->
          </q-toolbar>
<!--          <q-linear-progress :value="progress" class="q-mt-md" />-->
<!--          <q-linear-progress :value="progress" color="warning" class="q-mt-sm" />-->
<!--          <q-linear-progress :value="progress" color="secondary" class="q-mt-sm" />-->
<!--          <q-linear-progress :value="progress" rounded color="accent" class="q-mt-sm" />-->
<!--          <q-stepper-->
<!--            v-model="step"-->
<!--            ref="stepper"-->
<!--            contracted-->
<!--            color="#1AA6B7"-->
<!--            animated-->
<!--          >-->
<!--            <q-step-->
<!--              :name="1"-->
<!--              title="Select campaign settings"-->
<!--              icon="settings"-->
<!--              :done="step > 1"-->
<!--            >-->
<!--            </q-step>-->
<!--            <q-step-->
<!--              :name="2"-->
<!--              title="Create an ad group"-->
<!--              caption="Optional"-->
<!--              icon="create_new_folder"-->
<!--              :done="step > 2"-->
<!--            >-->
<!--            </q-step>-->
<!--            <q-step-->
<!--              :name="3"-->
<!--              title="Create an ad"-->
<!--              icon="add_comment"-->
<!--              :done="step > 3"-->
<!--            >-->
<!--            </q-step>-->
<!--            <q-step-->
<!--              :name="4"-->
<!--              title="Create an ad"-->
<!--              icon="add_comment"-->
<!--            >-->
<!--            </q-step>-->
<!--          </q-stepper>-->
        </q-header>

        <q-drawer v-model="left" show-if-above bordered>
          <Friends></Friends>
        </q-drawer>
        <!--    <q-drawer show-if-above v-model="right" side="right" bordered>-->
        <!--      <PersonalInfo></PersonalInfo>-->
        <!--    </q-drawer>-->

        <q-page-container>
          <router-view/>
        </q-page-container>

        <q-footer reveal>
          <InputBox></InputBox>
        </q-footer>

      </q-layout>
    </div>
  </div>
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
        step: 1,
        progress: 0.4,
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
<style>
  .bg {
    background: url("https://cdn.quasar.dev/img/mountains.jpg");
    height: 720px;
    text-align: center;
    line-height: 600px;
  }

  .bg-blur {
    float: left;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    /*-webkit-filter: blur(15px);*/
    /*-moz-filter: blur(15px);*/
    /*-o-filter: blur(15px);*/
    /*-ms-filter: blur(15px);*/
    filter: blur(5px);
  }

  .content {
    padding: 50px 200px;
    position: absolute;
    left: 10px;
    right: 10px;
  }
</style>
