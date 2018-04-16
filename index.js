let app = new Vue({
  el: '#home',
  methods: {
    getID: function () {
      let userID = new URL(window.location.href).searchParams.get('userID');
      return userID;
    },
    buildHomePage: function () {
      id = this.getID();
      $.get(`http://localhost:8085/test/user/${id}`)
      .done((data) => {
        console.log(data);
        this.userID = data.userID;
      })
    }
  },
  data: {
    // userID: userID ? `Your user ID is: ${userID}` : 'Unable to get user ID'
    userID: null
  },
  beforeMount() {
    this.buildHomePage()
  }
})
