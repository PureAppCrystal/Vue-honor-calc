<template>
  <v-app>
    <div id="content">

      <v-container>
      
        <v-row>
          <v-col cols="12" md="12"  id='content-top'>
            <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
            <div class="main-title">WOW Classic Honor RP Calculator</div>
          </v-col>
          <v-col cols="12" md="6"  id='content-left'>
            <v-row style="display: flex; justify-content: center;">
              <v-col cols="12" sm="7" md="12" class="content-box">
                <div class="box-title"> 기본정보</div>
                <v-row>
                  <v-col cols="4" class="label">서버인구</v-col>
                  <v-col cols="8">
                    <input type="number" class="value-input" v-model="totalPeople"  @keyup="checkNumber($event)"/>
                  </v-col>
                  <v-col cols="4" class="label">진영</v-col>
                  <v-col cols="8">
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
                <div class="box-title">예상결과</div>
                <v-row>
                  <v-col cols="4" class="label">순위</v-col>
                  <v-col cols="4"><input type="number" class="value-input" v-model="expectRank" @keyup="checkNumber($event)"/></v-col>
                  <v-col cols="4">
                    <v-switch v-model="nextGetAuto" :label="'AutoSet'" class="value-switch tooltip">
                    </v-switch>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4" class="label">점수</v-col>
                  <v-col cols="4" class="result">{{expectResult.exp}}</v-col>
                  <v-col cols="4" class="braket">{{expectResult.braket}}</v-col>
                </v-row>
              </v-col>
              <v-col cols="12" sm="7" md="12" class="content-box">
                <div class="box-title">결과 확인</div>
                <v-row>
                  <v-col cols="4" class="label">현재 경험치</v-col>
                  <v-col cols="4"><input type="number" class="value-input" v-model="nextNow" @keyup="checkNumber($event)"/></v-col>
                  <v-col cols="4" class="grade">{{nextNowGrade}}</v-col>
                </v-row>
                <v-row>
                  <v-col cols="4" class="label">획득 경험치</v-col>
                  <v-col cols="8"><input type="number" class="value-input" v-model="nextGet" @keyup="checkNumber($event)"/></v-col>
                </v-row>
                <v-row>
                  <v-col cols="4" class="label">결과 경험치</v-col>
                  <v-col cols="2" class="result">{{nextExp}}</v-col>
                  <v-col cols="2"><v-button @click="setToNow()">갱신</v-button></v-col>
                  <v-col cols="4" class="grade">{{nextExpGrade}}</v-col>
                </v-row>
              </v-col>
              <v-col cols="12" sm="7" md="12" class="content-box">
                <div class="box-title"> 필요 경험치 계산</div>
                <v-row>
                  <v-col cols="4" class="label">현재 경험치</v-col>
                  <v-col cols="4"><input type="number" class="value-input" v-model="needNow" @keyup="checkNumber($event)"/></v-col>
                  <v-col cols="4" class="grade">{{needNowGrade}}</v-col>
                </v-row>
                <v-row>
                  <v-col cols="4" class="label">목표 경험치</v-col>
                  <v-col cols="4"><input type="number" class="value-input" v-model="needTarget" @keyup="checkNumber($event)"/></v-col>
                  <v-col cols="4" class="grade">{{needTargetGrade}}</v-col>
                </v-row>
                <v-row>
                  <v-col cols="4" class="label">필요 경험치</v-col>
                  <v-col cols="8" class="result">{{needExp}}</v-col>
                </v-row>
              </v-col>
              
            </v-row>
          </v-col>
          <v-col cols="12" md="6"  id='content-right'>
            <v-row>
              <v-col cols="12"  class="content-box">
                <div class="box-title"> 계급도</div>
                <img alt="Vue logo" src="./assets/img/grade.png" class="value-img">
              </v-col>
              <v-col cols="12"  class="content-box">
                <div class="box-title"> Braket</div>
                <img alt="Vue logo" src="./assets/img/braket.png" class="value-img">
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
      totalPeople: 4000,
      selectCamp: {CODE_CD:2, CODE_NAME:"호드"},
      campList:[{CODE_CD:1, CODE_NAME:"얼라이언스"},{CODE_CD:2, CODE_NAME:"호드"}],

      expectRank: 1,
      //expectExp: 0,
      expectBraket: 0,
      // expextResult: {exp: 0, braket: "braket1" },

      needNow: 0,
      needTarget: 0,
      // needExp: 0,
      nextNow: 0,
      nextGet: 0,
      nextGetAuto: true,
      // netxep: 0,
    }
  },
  computed: {
    //braket
    expectResult: function() {
      const {totalPeople, expectRank } = this;
      // data check
      if ( totalPeople < 1 || expectRank < 1 ) {
        return 0;
      }

      let percent = expectRank / totalPeople * 100;
      percent = (Math.ceil(percent * 100 ))/100; // 3자리에서 올림
      return this.getBraket(percent);
    },

    // need
    needNowGrade: function() {
      return this.getGrade(this.needNow);
    },
    needTargetGrade: function() {
      return this.getGrade(this.needTarget);
    },
    needExp: function(){
      const { needNow, needTarget } = this;
      const result = parseInt(needTarget) - (needNow * 0.8);
      return isNaN(result) ? 0 : Math.ceil(result);
    },


    // next
    nextNowGrade: function() {
      return this.getGrade(this.nextNow);
    },
    nextExp: function() {
      const { nextNow, nextGet } = this;
      const result =  (nextNow * 0.8 ) + parseInt(nextGet);
      return isNaN(result) ? 0 : Math.ceil(result);
    },
    nextExpGrade: function() {
      return this.getGrade(this.nextExp);
    } 
  },
  methods: {
    test() {
    },
    checkNumber(event) {
      const value = parseInt(event.target.value)
      event.target.value = isNaN(value) ? 0 : value;
    },
    getGrade(exp) {
      // const {selectCamp} = this;
      const selectCamp = this.selectCamp.CODE_CD;
      let grade 
      if ( exp >= 60000) {
        grade = selectCamp === 1 ? "최고사령관" : "대장군"
      } else if ( exp >= 55000 ) {
        grade = selectCamp === 1 ? "야전사령관" : "장군"
      } else if ( exp >= 50000 ) {
        grade = selectCamp === 1 ? "작전사령관" : "전투사령관"
      } else if ( exp >= 45000 ) {
        grade = selectCamp === 1 ? "사령관" : "사령관"
      } else if ( exp >= 40000 ) {
        grade = selectCamp === 1 ? "부사령관" : "부사령관"
      } else if ( exp >= 35000 ) {
        grade = selectCamp === 1 ? "기사단장" : "백인대장"
      } else if ( exp >= 30000 ) {
        grade = selectCamp === 1 ? "기사대장" : "용사"
      } else if ( exp >= 25000 ) {
        grade = selectCamp === 1 ? "상급기사" : "혈투사"
      } else if ( exp >= 20000 ) {
        grade = selectCamp === 1 ? "기사" : "투사"
      } else if ( exp >= 15000 ) {
        grade = selectCamp === 1 ? "하급기사" : "하급투사"
      } else if ( exp >= 10000 ) {
        grade = selectCamp === 1 ? "정예근위병" : "정예수호병"
      } else if ( exp >= 5000 ) {
        grade = selectCamp === 1 ? "근위병" : "수호병"
      } else if ( exp >= 2000 ) {
        grade = selectCamp === 1 ? "파수병" : "그런트"
      } else {
        grade = selectCamp === 1 ? "정찰병" : "척후병"
      }

      return grade;
    },
    getBraket: function(percent) {
      const {totalPeople, expectRank } = this;
      let result = {exp: 0, braket: "-" };

      if( percent<=0.3) {
        result.braket = "braket14"
        result.exp = 13000 - Math.floor(1000/(totalPeople * 0.003)) * expectRank
      } else if ( percent <= 0.8 ) {
        result.braket = "braket13"
        const beforePeople = totalPeople * 0.003;
        result.exp = 12000 - Math.floor(1000/(totalPeople * 0.008 - beforePeople)) * (expectRank - beforePeople)
      } else if ( percent <= 2.0 ) {
        result.braket = "braket12"
        const beforePeople = totalPeople * 0.008;
        result.exp = 11000 - Math.floor(1000/(totalPeople * 0.02 - beforePeople)) * (expectRank - beforePeople)
      } else if ( percent <= 3.5 ) {
        result.braket = "braket11"
        const beforePeople = totalPeople * 0.02;
        result.exp = 10000 - Math.floor(1000/(totalPeople * 0.035 - beforePeople)) * (expectRank - beforePeople)
      } else if ( percent <= 6.0 ) {
        result.braket = "braket10"
        const beforePeople = totalPeople * 0.035;
        result.exp = 9000 - Math.floor(1000/(totalPeople * 0.06 - beforePeople)) * (expectRank - beforePeople)
      } else if ( percent <= 10.0 ) {
        result.braket = "braket9"
        const beforePeople = totalPeople * 0.06;
        result.exp = 8000 - Math.floor(1000/(totalPeople * 0.10 - beforePeople)) * (expectRank - beforePeople)
      } else if ( percent <= 15.9 ) {
        result.braket = "braket8"
        const beforePeople = totalPeople * 0.10;
        result.exp = 7000 - Math.floor(1000/(totalPeople * 0.159 - beforePeople)) * (expectRank - beforePeople)
      } else if ( percent <= 22.8 ) {
        result.braket = "braket7"
        const beforePeople = totalPeople * 0.159;
        result.exp = 6000 - Math.floor(1000/(totalPeople * 0.228 - beforePeople)) * (expectRank - beforePeople)
      } else if ( percent <= 32.7 ) {
        result.braket = "braket6"
        const beforePeople = totalPeople * 0.228;
        result.exp = 5000 - Math.floor(1000/(totalPeople * 0.327 - beforePeople)) * (expectRank - beforePeople)
      } else if ( percent <= 43.6 ) {
        result.braket = "braket5"
        const beforePeople = totalPeople * 0.327;
        result.exp = 4000 - Math.floor(1000/(totalPeople * 0.436 - beforePeople)) * (expectRank - beforePeople)
      } else if ( percent <= 56.6 ) {
        result.braket = "braket4"
        const beforePeople = totalPeople * 0.436;
        result.exp = 3000 - Math.floor(1000/(totalPeople * 0.566 - beforePeople)) * (expectRank - beforePeople)
      } else if ( percent <= 69.7 ) {
        result.braket = "braket3"
        const beforePeople = totalPeople * 0.566;
        result.exp = 2000 - Math.floor(1000/(totalPeople * 0.697 - beforePeople)) * (expectRank - beforePeople)
      } else if ( percent <= 84.5 ) {
        result.braket = "braket2"
        const beforePeople = totalPeople * 0.697;
        result.exp = 1000 - Math.floor(600/(totalPeople * 0.845 - beforePeople)) * (expectRank - beforePeople)
      } else {
        result.braket = "braket1"
        result.exp = 0
      }

      if ( expectRank == 1 ) {
        result.exp = 13000
      }
      result.exp = Math.floor(result.exp);
      if(this.nextGetAuto) {
        this.nextGet = result.exp
      }

      return result
    },
    setToNow: function() {
      this.nextNow = this.nextExp;
    }

  }
};
</script>

