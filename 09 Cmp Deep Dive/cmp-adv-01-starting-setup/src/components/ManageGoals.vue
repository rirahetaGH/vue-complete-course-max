<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal"/>
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
        <error-alert v-if="inputsIsInvalid">
            <h2>Input is invalid!</h2>
            <p>Please enter at least a few characters...</p>
            <button @click="confirmError">Okay</button>
        </error-alert>
    </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
export default {
  components: { ErrorAlert },
    data () {
        return {
            inputsIsInvalid: false
        }
    },
    methods: {
        setGoal(){
            const enteredValue = this.$refs.goal.value;
            if (enteredValue===''){
                this.inputsIsInvalid= true;
            }
        },
        confirmError(){
            this.inputsIsInvalid= false;
        }
    }
}
</script>
