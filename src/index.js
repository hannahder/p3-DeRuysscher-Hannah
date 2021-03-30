new Vue({
  el: "#app",
  data: {
    list: ['Hamburger With No Pickles','Hamburger With Pickles','Hamburger With Tomato','Hamburger With Ketchup','Hamburger With Extra Pickles','Hamburger With Grilled Onions','Hamburger with Cheese'],
    chosenName: ''
  },
  methods: {
    picker: function(){
      var chosenNumber = Math.floor(Math.random() * this.list.length);
      this.chosenName = this.list[chosenNumber];
    }
}
});
