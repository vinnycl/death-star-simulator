import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        planet: {
            name: '',
            rotation_period: '',
            orbital_period: '',
            diameter: '',
            climate: '',
            gravity: '',
            terrain: '',
            surface_water: '',
            population: '',
            films: ''
        }
    },
    mutations: {
        information(state, info) {
            state.planet.name = info.name;
            state.planet.rotation_period = info.rotation_period;
            state.planet.orbital_period = info.orbital_period;
            state.planet.diameter = info.diameter;
            state.planet.climate = info.climate;
            state.planet.gravity = info.gravity;
            state.planet.terrain = info.terrain;
            state.planet.surface_water = info.surface_water;
            state.planet.population = info.population;
            state.planet.films = info.films;
        }
    },
    actions: {
        information(context, info) {
            context.commit('information', info);
        }
    }
})