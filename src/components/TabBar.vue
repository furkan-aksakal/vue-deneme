<template>
  <v-row class="bg-red ma-1 pa-2" align="start" no-gutters >
    <v-col class="pa-2 ma-2">
      <v-btn block>
        Home
      </v-btn>
    </v-col>
    <v-col class="pa-2 ma-2">
      <v-btn block @click="name">
        i18n
      </v-btn>
    </v-col>
    <v-col class="pa-2 ma-2">
      <v-btn block>
        Users
      </v-btn>
    </v-col>
    <v-col class="pa-2 ma-2">
      <v-btn block>
        Labels
      </v-btn>
    </v-col>
    <v-col class="pa-2 ma-2">
      <v-btn block>
        Button
      </v-btn>
    </v-col>
    <v-col class="pa-2 ma-2">
      <v-btn block>
        Button
      </v-btn>
    </v-col>    <v-col class="pa-2 ma-2">
      <v-btn block>
        Button
      </v-btn>
    </v-col>    <v-col class="pa-2 ma-2">
      <v-btn block>
        Button
      </v-btn>
    </v-col>
    <v-col class="pa-2 ma-2">
      <v-btn block>
        Button
      </v-btn>
    </v-col>
  </v-row>
  <router-view></router-view>
</template>

<script>

export default{
  data() {
    return {
      
    }
  },
  methods:{
    name(){
      console.log("Hello World");
      this.$router.push("/i18n");
    }
  }
}

</script>