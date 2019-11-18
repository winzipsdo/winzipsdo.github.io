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
    const editor = new E(this.$refs.editor, null, {
      onClickVideo(ctx) {
        console.log(ctx._insert);
        ctx._insert('hello world');
      },
    });
    editor.customConfig.onchange = (html) => {
      this.editorContent = html;
    };
    editor.create();
  },
  render() {
    return (
      <div>
        <div ref='editor' style='text-align:left'></div>
        <button on-click={this.getContent}>查看内容</button>
      </div>
    );
  },
};
