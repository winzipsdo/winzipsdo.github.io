<script>
import { createComponent } from '@vue/composition-api';

import Lyrics from '../components/Lyrics.vue';
// eslint-disable-next-line
import store, { provideStore, useStore, mutations, getters } from '../store';

const ChildOne = createComponent({
  name: 'child-one',
  props: ['propName'],
  setup(props, ctx) {
    console.log(props);
    console.log(ctx);
    const store = useStore(); // eslint-disable-line
    return { store };
  },
  render() {
    return (
      <div>
        <div
          ref="titleRef"
          onClick={() => {
            this.$emit('hello');
          }}>
          child one
        </div>
        <button onClick={() => mutations.setChangedTimes(this.store.changedTimes + 1)}>+</button>
        <div>changedTimes: {this.store.changedTimes}</div>
      </div>
    );
  },
});

const ChildTwo = createComponent({
  name: 'child-two',
  setup() {
    const store = useStore(); // eslint-disable-line
    return { store };
  },
  render() {
    return (
      <div>
        <div>child two</div>
        <button onClick={() => mutations.setChangedTimes(this.store.changedTimes - 1)}>-</button>
        <div>changedTimes: {this.store.changedTimes}</div>
      </div>
    );
  },
});

export default createComponent({
  name: 'home',
  setup() {
    provideStore(store);
  },
  render() {
    return (
      <div class="container">
        <div>changedTimes + stayedTimes: {getters.testGetter()}</div>
        <div>---------------------------------</div>
        {false && <Lyrics />}
        <ChildOne
          hello="1"
          propName="1"
          vOn:hello={() => {
            console.log('hello');
          }}
        />
        <div>---------------------------------</div>
        <ChildTwo />
      </div>
    );
  },
});
</script>

<style lang="stylus">
body {
  font-family: Serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.img-wrapper {
  img {
    display: inline-block;
    width: 500px;
  }
}

.content-wrapper {
  p {
    font-family: Serif;
  }

  .message {
    padding-top: 1em;
    border-top: solid rgba(100, 100, 100, 0.2) 1px;
  }
}
</style>
