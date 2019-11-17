import E from '../wangEditor';

export default {
  name: 'editor',
  data() {
    return {
      editorContent: '',
    };
  },
  methods: {
    getContent() {
      console.log(this.editorContent);
    },
  },
  mounted() {
    const editor = new E(this.$refs.editor);
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.create();
  },
  render() {
    return (
      <div>
        <div ref="editor" style="text-align:left"></div>
        <button on-click="getContent">查看内容</button>
      </div>
    );
  },
};
