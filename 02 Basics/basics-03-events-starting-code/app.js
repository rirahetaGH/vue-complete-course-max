const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
      // fullname:""
      lastName:""
    };
  },
  watch:{
    counter(value){
      if (value>50){
        this.counter=0;
      }
    }

    /* name(value){
      if (value===''){
        this.fullname='';
      }else{
        this.fullname = value + ' Iraheta'
      }
    } */
  },
  computed: {
    fullname() {
      console.log('Here we go...');
      if (this.name === "" && this.lastName==="") {
        return "";
      }
      return this.name + " " + this.lastName;
    }
  },
  methods: {
    outputFullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Iraheta";
    },
    setName(event) {
      this.name = event.target.value;
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
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
      this.lastName="";
    }
  }
});

app.mount("#events");
