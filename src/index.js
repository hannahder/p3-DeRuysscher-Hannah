new Vue({
  el: "#app",
  data: {
    list: ['Hamburger With No Pickles','Hamburger With Pickles','Hamburger With Tomato','Hamburger With Ketchup','Hamburger With Extra Pickles','Hamburger With Grilled Onions','Hamburger with Cheese'],
    renderTemplate: ''
  },
  methods: {
    picker: function(){
      const randomLunches = Math.floor(Math.random() * this.list.length);
      this.renderTemplate = this.list[randomLunches];
    }
}
});
