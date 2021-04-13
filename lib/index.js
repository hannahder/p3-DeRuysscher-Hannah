'use strict';

new Vue({
  el: "#app",
  data: {
    list: ['Veggie Burger With Spicy Mayo', 'Veggie Burger With Fried Onions', 'Veggie Burger With Roasted Tomato', 'Veggie Burger With Sauteed Mushrooms', 'Veggie Burger With Extra Pickles', 'Veggie Burger With Garlic Aioli', 'Veggie Burger With Brie', 'Veggie Burger With No Cheese', 'Veggie Burger', 'Veggie Burger With Guacamole'],
    renderTemplate: ''
  },
  methods: {
    picker: function picker() {
      var randomLunches = Math.floor(Math.random() * this.list.length);
      this.renderTemplate = this.list[randomLunches];
    }
  }
});