import Vue from 'vue';
import { expect } from 'chai';
import Monitor from '@/components/Monitor.vue';
import '@/filters/planetImage.js';

function getMountedComponent(Component, propsData) {
    const Constructor = Vue.extend(Component);
    const vm = new Constructor({ propsData: propsData }).$mount();
    return vm.$props.planet;
}

describe('Monitor.vue', () => {
    it('On status 200 props.planet', () => {
        expect(getMountedComponent(Monitor, {
            planet: {
                name: 'Tatooine',
                rotation_period: "23",
                orbital_period: "304",
                diameter: '10465',
                climate: 'arid',
                gravity: '1 standard',
                terrain: 'desert',
                surface_water: '1',
                films: [
                    "https://swapi.co/api/films/5/",
                    "https://swapi.co/api/films/4/",
                    "https://swapi.co/api/films/6/",
                    "https://swapi.co/api/films/3/",
                    "https://swapi.co/api/films/1/"
                ],
                population: '200000'
            }
        })).to.deep.equal({
            name: 'Tatooine',
            rotation_period: "23",
            orbital_period: "304",
            diameter: '10465',
            climate: 'arid',
            gravity: '1 standard',
            terrain: 'desert',
            surface_water: '1',
            films: [
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/",
                "https://swapi.co/api/films/1/"
            ],
            population: '200000'
        });
    })
});