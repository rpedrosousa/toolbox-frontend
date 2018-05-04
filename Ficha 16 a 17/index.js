new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        spattack: true,
        healplayer: true,
        spmonster: true,
        healmonster: true,
        turns: []
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.spattack = true;
            this.turns = []
        },
        attack: function () {
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage,
            });
            this.monsterandom();
            if (this.monsterHealth <= 0) {
                alert('You won!');
                this.gameIsRunning = false;
                return;
            }


        },
        specialAttack: function () {
            if (this.spattack == true) {
                var max = 30;
                var min = 15;
                var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
                this.monsterHealth -= damage;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player hits Monster for ' + damage
                });
                this.spattack = false;
                this.monsterandom();
                if (this.monsterHealth <= 0) {
                    alert('You won!');
                    this.gameIsRunning = false;
                    return;
                }
            }
        },
        heal: function () {
            var max = 10;
            var min = 6;
            var heal = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.playerHealth += heal;
            if (this.playerHealth == 100) {
                this.healplayer = false;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for ' + heal
            });
            this.monsterandom();
            if (this.monsterHealth <= 0) {
                alert('You won!');
                this.gameIsRunning = false;
                return;
            }
            if (this.playerHealth >= 100){
                this.playerHealth = 100;
            }
        },
        giveUp: function () {
            alert('Ficou sem COLHERES!!!')

            this.startGame();
            this.gameIsRunning = false;
        },
        monsterandom: function () {
            var escolhamax = 3;
            var escolhamin = 1;
            var escolha = Math.max(Math.floor(Math.random() * escolhamax) + 1, escolhamin);
            if (escolha == 1) {
                var dammax = 11;
                var dammin = 7;
                var dadamage = Math.max(Math.floor(Math.random() * dammax) + 1, dammin);
                this.playerHealth -= dadamage;
                this.turns.unshift({
                    isPlayer: false,
                    text: 'Monster hits player for ' + dadamage,
                });
                if (this.playerHealth <= 0) {
                    alert('You Loose!');
                    this.gameIsRunning = false;
                    return;
                }

            }
            else if (escolha == 2) {
                if (this.spmonster == true) {
                    var spmax = 25;
                    var spmin = 15;
                    var dadamage = Math.max(Math.floor(Math.random() * spmax) + 1, spmin);
                    this.playerHealth -= dadamage;
                    this.turns.unshift({
                        isPlayer: false,
                        text: 'Monster hits player for ' + dadamage
                    });
                    if (this.playerHealth <= 0) {
                        alert('You Loose!');
                        this.gameIsRunning = false;
                        return;
                    }
                    this.spmonster = false;
                } else {
                    var escolha2 = 2;
                    var escolha1 = 1;
                    var escolhaadicional = Math.max(Math.floor(Math.random() * escolha2) + 1, escolha1);
                    if (escolhaadicional == 1) {
                        var dammax = 11;
                        var dammin = 7;
                        var dadamage = Math.max(Math.floor(Math.random() * dammax) + 1, dammin);
                        this.playerHealth -= dadamage;
                        this.turns.unshift({
                            isPlayer: false,
                            text: 'Monster hits player for ' + dadamage,
                        });
                        if (this.playerHealth <= 0) {
                            alert('You Loose!');
                            this.gameIsRunning = false;
                            return;
                        }
                    }
                    else {
                        var healmax = 20;
                        var healmin = 10;
                        var mheal = Math.max(Math.floor(Math.random() * healmax) + 1, healmin);
                        this.monsterHealth += mheal;
                        if (this.monsterHealth == 100) {
                            this.healmonster = false;
                        }
                        this.turns.unshift({
                            isPlayer: false,
                            text: 'Monster heals for ' + mheal
                        });
                        if (this.playerHealth <= 0) {
                            alert('You Loose!');
                            this.gameIsRunning = false;
                            return;
                        }
                        if (this.monsterHealth >= 100){
                            this.monsterHealth = 100;
                        }
                    }
                }
            }
            else {
                var healmax = 7;
                var healmin = 4;
                var mheal = Math.max(Math.floor(Math.random() * healmax) + 1, healmin);
                this.monsterHealth += mheal;
                if (this.monsterHealth == 100) {
                    this.healmonster = false;
                }
                this.turns.unshift({
                    isPlayer: false,
                    text: 'Monster heals for ' + mheal
                });
                if (this.playerHealth <= 0) {
                    alert('You Loose!');
                    this.gameIsRunning = false;
                    return;
                }
                if (this.monsterHealth >= 100){
                    this.monsterHealth = 100;
                }
            }
        }
    }
});