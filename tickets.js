// let app = new Vue({
//   el: '#tickets',
//   methods: {
//     getTickets: function () {
//       $.get("http://localhost:8085/tickets")
//         .done((data) => {
//           this.tickets = data;
//           console.log(data[0]);
//         })
//         .fail( () => {
//           console.log('there was an issue getting the data');
//         })
//     }
//   },
//   data: {
//     tickets: null
//   },
//   beforeMount() {
//     this.getTickets()
//   }
// })


let app = new Vue({
  el: '#tickets',
  methods: {
    getTickets: function () {
      $.get(`http://localhost:8085/tickets`)
      .done((data) => {
        this.tickets = data;
      })
    }
  },
  data: {
    tickets: null
  },
  beforeMount() {
    this.getTickets()
  }
})
