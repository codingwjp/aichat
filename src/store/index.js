import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      sentList: [
        {
          sentId: 1,
          replyId: 1,
          name: '小红',
          avatar: 'https://cdn.quasar.dev/img/avatar5.jpg',
          text: ['你好呀, 我是小红'],
          stamp: '1分钟前',
          sent: true
        },
        {
          sentId: 2,
          replyId: 2,
          name: '小红',
          avatar: 'https://cdn.quasar.dev/img/avatar5.jpg',
          text: ['你最近在干嘛呢?'],
          stamp: '1分钟前',
          sent: true
        },
        {
          sentId: 3,
          replyId: 3,
          name: '小红',
          avatar: 'https://cdn.quasar.dev/img/avatar5.jpg',
          text: ['你喜欢吃什么?'],
          stamp: '1分钟前',
          sent: true
        },
        {
          sentId: 4,
          replyId: 4,
          name: '小红',
          avatar: 'https://cdn.quasar.dev/img/avatar5.jpg',
          text: ['我喜欢吃炸酱面~'],
          stamp: '1分钟前',
          sent: true
        },
        {
          sentId: 5,
          replyId: 5,
          name: '小红',
          avatar: 'https://cdn.quasar.dev/img/avatar5.jpg',
          text: ['哈哈, 不错呀! 和你聊天很愉快, 回聊~'],
          stamp: '1分钟前',
          sent: true
        },
      ],
      replyList: [
        {
          replyId: 1,
          name: '小明',
          avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
          text: ['小红你好, 我是小明'],
          stamp: '1分钟前',
          sent: false
        },
        {
          replyId: 2,
          name: '小明',
          avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
          text: ['我最近在上学'],
          stamp: '1分钟前',
          sent: false
        },
        {
          replyId: 3,
          name: '小明',
          avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
          text: ['我喜欢吃汉堡包, 你呢?'],
          stamp: '1分钟前',
          sent: false
        },
        {
          replyId: 4,
          name: '小明',
          avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
          text: ['炸酱面!我也喜欢!今天中午我刚吃了川式炸酱面'],
          stamp: '1分钟前',
          sent: false
        },
        {
          replyId: 5,
          name: '小明',
          avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
          text: ['好的, bye bye'],
          stamp: '1分钟前',
          sent: false
        },
        {
          replyId: -1,
          name: '小明',
          avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
          text: ['默认消息'],
          stamp: '1分钟前',
          sent: false
        }
      ],
      msgList: []
    },
    actions: {
      sentMsg({commit}, curMsg) {
        // 提交一个comutation请求
        commit('sentMsg', {curMsg}) // 传递给mutation的是一个包含数据的对象
      },
      replyMsg({commit}, curMsg) {
          setTimeout(() => {
            commit('replyMsg', {curMsg})
          }, 2000)
      },
    },
    mutations: {
      sentMsg(state, {curMsg}) {
        state.msgList.push(curMsg)
      },
      replyMsg(state,{curMsg}){
        state.replyList.forEach((val) => {
          if (curMsg.replyId === val.replyId) {
            state.msgList.push(val)
          }
        })
      }
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
