<script>
import { createComponent } from '@vue/composition-api';

import Lyrics from '../components/Lyrics.vue';

import store, { provideStore, useStore, mutations } from '../store';

const ChildOne = createComponent({
  name: 'child-one',
  setup() {
    const store = useStore(); // eslint-disable-line
    return { store };
  },
  render() {
    return (
      <div>
        <div>child one {this.store.changedTimes}</div>
        <button onClick={() => mutations.setChangedTimes(this.store.changedTimes + 1)}>+</button>
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
        <div>child two {this.store.changedTimes}</div>
        <button onClick={() => mutations.setChangedTimes(this.store.changedTimes - 1)}>-</button>
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
        {false && <Lyrics />}
        <ChildOne />
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
