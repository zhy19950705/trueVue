<template>
  <div>
    <div id="container-main">
      <Websocket />
      <el-button @click="sendMessage">发送websokect消息</el-button>
      <div
        v-for="bubble in bubbles"
        :key="bubble.id"
        style="border:1px solid"
        v-menu="items"
      >{{bubble.text}}</div>
    </div>
    <div>{{test}}</div>
  </div>
</template>


<script>
import E from "wangeditor";
import Websocket from '../components/websocket'
export default {
  name: "ContextMenu",
  components: {
    Websocket
  },
  data() {
    let self = this;
    return {
      items: [
        {
          type: "a", // type为a时可以点击跳转
          title: "百度一下",
          href: "http://www.baidu.com"
        },
        {
          type: "li", // type为li是普通按钮
          title: "复制(C)", // 按钮的名称
          func: () => alert("点击了复制") // 回调函数
        },
        {
          type: "li",
          title: "粘贴(V)",
          disabled: true, // 不可点击状态, 回调函数自然无法触发
          func: () => alert("点击了粘贴")
        },
        {
          type: "hr" // 分割线, 无需其他参数
        },
        {
          type: "li",
          title: "test",
          func: (e, dom) => {
            console.log(dom);
          }
        }
      ],
      bubbles: [
        { text: 1, id: 1 },
        { text: 2, id: 2 },
        { text: 3, id: 3 },
        { text: 4, id: 4 }
      ],
      test: "aaaaaaaaaaaa"
    };
  },
  mounted() {
    let self = this;
    const editor = new E("#container-main");
    editor.create();
    document.addEventListener("mouseup", () => {
      let txt = window.getSelection
        ? window.getSelection().toString()
        : document.selection.createRange().text;
      if (txt) {
        self.items = [
          {
            type: "li",
            title: "不一样",
            func: (e, dom) => {
              console.log(dom);
            }
          }
        ];
      } else {
        self.items = [
          {
            type: "a", // type为a时可以点击跳转
            title: "百度一下",
            href: "http://www.baidu.com"
          },
          {
            type: "li", // type为li是普通按钮
            title: "复制(C)", // 按钮的名称
            func: () => alert("点击了复制") // 回调函数
          },
          {
            type: "li",
            title: "粘贴(V)",
            disabled: true, // 不可点击状态, 回调函数自然无法触发
            func: () => alert("点击了粘贴")
          },
          {
            type: "hr" // 分割线, 无需其他参数
          },
          {
            type: "li",
            title: "test",
            func: (e, dom) => {
              self.test = "i love why";
            }
          }
        ];
      }
    });
  },
  methods: {
    sendMessage(){
      this.$socket.send('3333')
    }
  }
};
</script>

<style lang="scss" scoped>
</style>