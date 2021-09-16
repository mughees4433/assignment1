<template>
  <div >
    <h1>{{message}}</h1>
    <button @click='sendMessageToParent'> Invoke Parent function</button>
  </div>
</template>

<script>

export default {
  name: 'childComponent',
  props: {
    message: String
  },
  methods:{
      sendMessageToParent(){
          this.$emit('messageFromChild', 1, true);
      }
  }
}
</script>

