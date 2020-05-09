document.writeln(`<script src="js/bootstrap.js"></script>`);

const vl = httpVueLoader;

const app = new Vue({
    el: '#app',
    components: {
        'v-nav': vl('components/nav.vue'),
        'v-article': vl('components/article.vue'),
        'v-dining': vl('components/dining.vue')
    }
});