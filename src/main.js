// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import '../semantic/dist/semantic.css';

import store from './store';
import Router from './router';
import numeral from 'numeral';

Vue.config.productionTip = false;

// Register filters
Vue.filter('thousands', (n) => numeral(n).format('0,0'));
Vue.filter('kmb', (n) => numeral(n).format('0.0a'));
Vue.filter('elipsis', (n, l) => n.substring(0, l) + (l <= n.length ? '...' : ''));

// eslint-disable no-new
new Vue({
    el: '#wikistats-app',
    store,
    template: '<App/>',
    components: { App },
    mounted () {
        new Router(store);
    },
});
