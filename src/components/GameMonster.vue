<template>
  <div class="game">
    <h2>{{ msg }} {{gameReady}}</h2>
    <div id="characters">
      <div class="player">
        <h4>Player</h4>
        <div class="healthbar" :style="playerBarStyle">
          {{ playerHealth }}
        </div>
      </div>

      <div class="enemy">
        <h4>Monster</h4>
        <div class="healthbar" :style="monsterBarStyle">
          {{ monsterHealth }}
        </div>
      </div>
    </div>

    <br>
    <br>
    <div id="controls">
      <button @click="attackMonster" :disabled="gameover">Attack</button> &nbsp;
      <button @click="specialAttack" :disabled="specialAttackAvailibility">Special Attack</button> &nbsp;
      <button @click="healPlayer" :disabled="gameover">Heal</button>
      <br> <br>
      <button @click="startNewGame" :disabled="!gameover">Start new</button>
    </div>

    <h2>{{ result }}</h2>
  </div>
</template>

<script>
export default {
  name: 'GameMonster',
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      result: '',
      currentRound: 0,
      gameover: false,
    }
  },

  // props: [
  //   'msg'
  // ],

  props: {
    parentData: {
      type: Object, 
      required: true 
    },
    msg: {
      type: String,
      required: false,
      validator(value){
        return value !== "" ? true : false;
      }
    },
    gameReady: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  computed: {
    monsterBarStyle() {
      if (this.monsterHealth <= 0) return { width: '0%' }
      else return { width: this.monsterHealth + '%' };
    },

    playerBarStyle() {
      if (this.playerHealth <= 0) return { width: '0%' }
      else return { width: this.playerHealth + '%' };
    },

    specialAttackAvailibility() {
      return this.currentRound % 3 !== 0
    }
  },

  methods: {
    attackMonster() {
      this.currentRound++;
      const damage = getRandomVal(12, 5);
      if (this.monsterHealth - damage > 0) this.monsterHealth -= damage;
      else this.monsterHealth = 0;
      this.attackPlayer();
    },

    specialAttack() {
      this.currentRound++;
      const damage = getRandomVal(10, 25);
      if (this.monsterHealth - damage > 0) this.monsterHealth -= damage;
      else this.monsterHealth = 0;
      this.attackPlayer();
    },

    attackPlayer() {
      const damage = getRandomVal(15, 8);
      if (this.playerHealth - damage > 0) this.playerHealth -= damage;
      else this.playerHealth = 0;
    },

    healPlayer() {
      const healValue = getRandomVal(20, 8);
      if (this.playerHealth + healValue < 100) this.playerHealth += healValue;
      else this.playerHealth = 100
    },

    startNewGame() {
      this.result = "";
      this.playerHealth = this.monsterHealth = 100;
      this.gameover = false;
    },
  },

  watch: {
    playerHealth(value) {
      if (this.result !== '') return;

      if (value > 0 && this.monsterHealth <= 0) {
        this.result = "You win"
        this.gameover = true;
      }
      else if (value <= 0 && this.monsterHealth <= 0) {
        this.result = "Draw"
        this.gameover = true;
      }
    },

    monsterHealth(value) {
      if (this.result !== '') return;

      if (this.playerHealth <= 0 && value > 0) {
        this.result = "You Loose"
        this.gameover = true;
      }
      else if (this.playerHealth <= 0 && value <= 0) {
        this.result = "Draw"
        this.gameover = true;
      }
    },
  }
}

function getRandomVal(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#characters {
  display: flex;
  flex-direction: column;
  align-items: center;

   .player {
    width: 50%;
    display: flex;
    flex-direction: column;

    .healthbar {
      background-color: rgb(165, 41, 41);
      height: 23px;
      border-radius: 7px;
    }
  }

  .enemy {
    width: 50%;
    display: flex;
    flex-direction: column;

    .healthbar {
      background-color: green;
      height: 23px;
      border-radius: 7px;
    }
  }
}
</style>
