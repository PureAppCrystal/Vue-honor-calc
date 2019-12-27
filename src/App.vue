<template>
  <v-app>
    <div id="content">

      <v-container>
      
        <v-row>
          <v-col cols="12" md="12"  id='content-top'>
            <img alt="Vue logo" src="./assets/logo.png">
          </v-col>
          <v-col cols="12" md="5"  id='content-left'>
            <v-row style="display: flex; justify-content: center;">
              <v-col cols="12" sm="7" md="12" class="content-box">
                <div class="box-title"> aa</div>
                <v-row>
                  <v-col cols="2">label</v-col>
                  <v-col cols="4">
                    <input type="number" class="value-input"/>
                    
                  </v-col>
                  <v-col cols="1">label</v-col>
                  <v-col cols="5">
                    <v-select
                        v-model="selectCamp" 
                        :items="campList" 
                        item-text="CODE_NAME"
                        return-object
                        class="value-select"
                    ></v-select>

                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" sm="7" md="12" class="content-box">
                <div class="box-title"> aa</div>
                <v-row>
                  <v-col cols="4">label</v-col>
                  <v-col cols="8">value</v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">label</v-col>
                  <v-col cols="4">value</v-col>
                  <v-col cols="4">value</v-col>
                </v-row>
              </v-col>
              <v-col cols="12" sm="7" md="12" class="content-box">
                <div class="box-title"> aa</div>
                <v-row>
                  <v-col cols="4">label</v-col>
                  <v-col cols="4">value</v-col>
                  <v-col cols="4">value</v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">label</v-col>
                  <v-col cols="4">value</v-col>
                  <v-col cols="4">value</v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">label</v-col>
                  <v-col cols="8">value</v-col>
                </v-row>
              </v-col>
              <v-col cols="12" sm="7" md="12" class="content-box">
                <div class="box-title"> aa</div>
                <v-row>
                  <v-col cols="4">label</v-col>
                  <v-col cols="4">value</v-col>
                  <v-col cols="4">value</v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">label</v-col>
                  <v-col cols="8">value</v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">label</v-col>
                  <v-col cols="4">value</v-col>
                  <v-col cols="4">value</v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="7"  id='content-right'>
            <v-row>
              <v-col cols="12"  class="content-box">
                <div class="box-title"> aa</div>
                <img alt="Vue logo" src="./assets/logo.png">
              </v-col>
              <v-col cols="12"  class="content-box">
                <div class="box-title"> aa</div>
                <img alt="Vue logo" src="./assets/logo.png">
              </v-col>
            </v-row>
          </v-col>  
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data() {
    return {
      totalPeople: 0,
      selectCamp: {CODE_CD:0, CODE_NAME:"얼라"},
      campList:[{CODE_CD:0, CODE_NAME:"얼라"},{CODE_CD:1, CODE_NAME:"호드"}],

      expectRank: 1,

      needNow: 0,
      needTarget: 0,
      // needExp: 0,
      nextNow: 0,
      nextGet: 0,
      // netxep: 0,
    }
  },
  computed: {
    needExp: function(){
      const { needNow, needTarget } = this;
      return  parseInt(needTarget) - (needNow * 0.8);
    },
    nextExp: function() {
      const { nextNow, nextGet } = this;
      return  (nextNow * 0.8 ) + parseInt(nextGet);
    } 
  },
  methods: {
    test() {
    }
  }
};
</script>

