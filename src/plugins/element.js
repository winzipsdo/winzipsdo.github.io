import Vue from 'vue';
import { Button, Input, Dialog } from 'element-ui';
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

Vue.component(CollapseTransition.name, CollapseTransition);
Vue.use(Button);
Vue.use(Input);
Vue.use(Dialog);
