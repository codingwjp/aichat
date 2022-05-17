<template>
  <div>
    <q-toolbar class="bg-positive text-white shadow-2">
      <q-toolbar-title>个人信息</q-toolbar-title>
    </q-toolbar>
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg"/>

      <q-card-section>

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            小明
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place"/>
            北京
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
<!--        <div class="text-subtitle1">-->
<!--          学生-->
<!--        </div>-->
        <div class="text-caption text-grey">
<!--          为祖国健康工作50年-->
          好感度
        </div>
        <q-rating v-model="stars" :max="5" size="32px"/>
      </q-card-section>

      <q-separator/>

      <q-card-actions>
<!--        <q-btn flat round icon="event"/>-->
        <q-btn flat color="primary">
          关注
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
  export default {
    name: "PersonalInfo",
    data() {
      return {
        stars: 4
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
