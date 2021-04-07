const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    submitForm() {
      alert("Submitted");
    },
    confirmInput() {
      this.confirmedName = this.name
    },
  },
});

app.mount("#events");
