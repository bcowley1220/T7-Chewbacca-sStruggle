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
            "How would you rate your flying skill? 1 is awful, 10 is great."
          ),
          10
        ),
        parseInt(
          prompt(
            "What is your skill with dejarik skill, 1 is awful, or 10 is best."
          ),
          10
        ),
        parseInt(
          prompt("How afraid are you of the Empire? 1 is not, 10 is deathly."),
          10
        )
      )
    );
  }
  // TODO: I need this function to print out who the best and worst is. I am getting close using the keys, but I think I need to make an new array with map and sort it using the sort fuction
  // bestAndWorst() {
  //   let potNewBFF = function {
  //     for (let i = 0; i < this.friends.length; i++) {
  //       this.friends.map(x[4])
  //     }
  //   }
  //   console.log(`Chewy's new potential best friend is: ${}`;
  // }
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
console.log(compareList);
compareList.addFriend();
console.log(compareList);
compareList.addFriend();
compareList.addFriend();
console.log(Math.max(...compareList));
// TODO Sort method
// this.friends.sort((a, b) => {
//   return b.score - a.score;
// })

// prompt("What is your name?"),
// prompt("How would you rate your flying skill? 1 is awful, 10 is great."),
// prompt("What is your skill with dejarik skill, 1 is awful, or 10 is best."),
// prompt("How afraid are you of the Empire? 1 is not, 10 is deathly."
