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
  printList() {
    // for (let i = 0; i < compareList.length; i++) {
    //   console.log(compareList[i]);
    // }
  }
  // TODO:
  // I can reduce the scores into a total and compare them to each other. I will console.log the highest score.
  //   bestFriend(){
  //     for ()
  //   }
}

class Friend {
  constructor(name, flyingSkill, dejarikSKill, fEmpire) {
    this.name = name;
    this.flyingSkill = flyingSkill;
    this.dejarikSKill = dejarikSKill;
    this.fEmpire = fEmpire;
  }
}

const compareList = new FriendsList();
console.log(compareList);
compareList.addFriend();
console.log(compareList);
compareList.addFriend("Luke", 10, 4, 8);
compareList.addFriend("Random Pilot 1", 6, 2, 6);
compareList.printList();

// TODO Sort method
// this.friends.sort((a, b) => {
//   return b.score - a.score;
// })

// prompt("What is your name?"),
// prompt("How would you rate your flying skill? 1 is awful, 10 is great."),
// prompt("What is your skill with dejarik skill, 1 is awful, or 10 is best."),
// prompt("How afraid are you of the Empire? 1 is not, 10 is deathly."
