new Vue({
  el: "#app",
  data: {
    event: {
      eventDate: "August 14th - 16th",
      eventTitle: "Summer Festival!",
      eventDescription:
        "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!",
    },
    newNameText: "",
    guestName: [],
    eventCapacity: 10,
    eventCapacityPercentage: 0,
  },
  methods: {
    formSubmitted: function () {
      if (this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
        this.guestName.push(this.newNameText);
        this.newNameText = "";
        this.eventCapacityPercentage =
          this.guestName.length / (this.eventCapacity / 100);
      }
    },
    keyPressed: function() {
      console.log('key pressed')
    }
  },
  computed: {
    sortNames: function () {
      return this.guestName.sort();
    },
  },
  watch: {
    guestName: function(data){
      console.log('Watch trigerred')
    }
  }
});
