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
                    <input type="number" class="value-input" v-model="totalPeople"  @keyup="checkNumber($event)"/>
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
                  <v-col cols="8"><input type="number" class="value-input" v-model="expectRank" @keyup="checkNumber($event)"/></v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">label</v-col>
                  <v-col cols="4">{{expectResult.exp}}</v-col>
                  <v-col cols="4">{{expectResult.braket}}</v-col>
                </v-row>
              </v-col>
              <v-col cols="12" sm="7" md="12" class="content-box">
                <div class="box-title"> aa</div>
                <v-row>
                  <v-col cols="4">label</v-col>
                  <v-col cols="4"><input type="number" class="value-input" /></v-col>
                  <v-col cols="4">value</v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">label</v-col>
                  <v-col cols="4"><input type="number" class="value-input"/></v-col>
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
                  <v-col cols="4"><input type="number" class="value-input"/></v-col>
                  <v-col cols="4">value</v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">label</v-col>
                  <v-col cols="8"><input type="number" class="value-input"/></v-col>
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
      totalPeople: 6000,
      selectCamp: {CODE_CD:0, CODE_NAME:"data1"},
      campList:[{CODE_CD:0, CODE_NAME:"data1"},{CODE_CD:1, CODE_NAME:"data2"}],

      expectRank: 1,
      //expectExp: 0,
      expectBraket: 0,
      // expextResult: {exp: 0, braket: "braket1" },

      needNow: 0,
      needTarget: 0,
      // needExp: 0,
      nextNow: 0,
      nextGet: 0,
      // netxep: 0,
    }
  },
  computed: {
    expectResult: function() {
      const {totalPeople, expectRank } = this;
      // data check
      if ( totalPeople < 1 || expectRank < 1 ) {
        return 0;
      }

      let percent = expectRank / totalPeople * 100;
      percent = (Math.ceil(percent * 100 ))/100; // 3자리에서 올림
      console.log("percent : ", percent);
      let result = {exp: 0, braket: "-" };

      if( percent<=0.3) {
        result.braket = "braket14"
        result.exp = 12000
      } else if ( percent <= 0.8 ) {
        result.braket = "braket13"
        result.exp = 11000
      } else if ( percent <= 2.0 ) {
        result.braket = "braket12"
        result.exp = 10000
      } else if ( percent <= 3.5 ) {
        result.braket = "braket11"
        result.exp = 9000
      } else if ( percent <= 6.0 ) {
        result.braket = "braket10"
        result.exp = 8000
      } else if ( percent <= 10.0 ) {
        result.braket = "braket9"
        result.exp = 7000
      } else if ( percent <= 15.9 ) {
        result.braket = "braket8"
        result.exp = 6000
      } else if ( percent <= 22.8 ) {
        result.braket = "braket7"
        result.exp = 5000
      } else if ( percent <= 32.7 ) {
        result.braket = "braket6"
        result.exp = 4000
      } else if ( percent <= 43.6 ) {
        result.braket = "braket5"
        result.exp = 3000
      } else if ( percent <= 56.6 ) {
        result.braket = "braket4"
        result.exp = 2000
      } else if ( percent <= 69.7 ) {
        result.braket = "braket3"
        result.exp = 1000
      } else if ( percent <= 84.5 ) {
        result.braket = "braket2"
        result.exp = 400
      } else {
        result.braket = "braket1"
        result.exp = 0
      }

      if ( expectRank == 1 ) {
        result.exp = 13000
      }

      return result
    },
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
    },
    checkNumber(event) {
      const value = parseInt(event.target.value)
      event.target.value = isNaN(value) ? 0 : value;
    },

  }
};
</script>

