/* var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  });

  var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
  });

  var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});


var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Click to button!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse("").join('');
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Input something'
    },

});
 */

var todoList = new Vue({
    el: '#todo-list',
    data() {
       return {
            header: 'To do List',
            newItem: '',
            items: [
                {
                    label: 'Breakfast',
                    purchased: false, 
                },
                {
                    label: 'Go to work',
                    purchased: true, 
                },
                {
                    label: 'Go home',
                    purchased: false, 
                },
            ]
       }
    },
    methods: {
        saveItem: function () {
            this.items.push({
                label: this.newItem,
                purchased: false, 
            });
            this.newItem = '';
        },
        deleteItem: function (label) {
            this.items = this.items.filter((item) => item.label !== label);
        },
        togglePurchased: function(item) {
            item.purchased = !item.purchased;
        }
    }
});