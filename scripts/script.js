"use strict";

class FriendsList {
  constructor() {
    this.friends = [];
  }
  addFriend() {
    this.friends.push(
      new Friend(
        prompt("What is your name?"),
        parseInt(
          prompt(
            "How would you rate your flying skill? 0 is awful, 10 is great."
          ),
          10
        ),
        parseInt(
          prompt(
            "What is your skill with dejarik skill, 0 is awful, or 10 is best."
          ),
          10
        ),
        parseInt(
          prompt("How afraid are you of the Empire? 0 is not, 10 is deathly."),
          10
        )
      )
    );
  }

  bestAndWorst() {
    this.friends.sort(function(a, b) {
      return b.total - a.total;
    });
    console.log(
      `Since your bestie got toasted by his insecure dirt-bag son on a bridge of doom, we recommend that you consider ${
        this.friends[0].name
      } for your new friend. Alternatively, unless you are feeling the notion to dismember someone, DO NOT try and befriend ${
        this.friends[this.friends.length - 1].name
      }. Good luck!`
    );
  }
}

class Friend {
  constructor(name, flyingSkill, dejarikSKill, fEmpire) {
    this.name = name;
    this.flyingSkill = flyingSkill;
    this.dejarikSKill = dejarikSKill;
    this.fEmpire = fEmpire;
    this.total = this.flyingSkill + this.dejarikSKill - this.fEmpire;
  }
}

const compareList = new FriendsList();
compareList.addFriend();
console.log(compareList);
compareList.addFriend();
compareList.addFriend();
compareList.bestAndWorst();
console.log(compareList);
