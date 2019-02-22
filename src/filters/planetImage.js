import Vue from 'vue';

Vue.filter('planetImage', planetName => {
    return planetName ? `https://vinnycl.github.io/statics/images/planets/${planetName}.png` : '';
});