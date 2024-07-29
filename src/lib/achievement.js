import { eventDb } from "./eventDb";

class achievement{
  achievements = []
  human;
  history;
  constructor (human, history) {
    this.human = human
    this.history = history
    this.achievements = eventDb.achievements
  }
  getMedals() {
    let medals = []
    achievements.forEach(a=>{
      let judge = false
      if (a.condition.includes('prop')) {
        judge = getProp(a.condition)
      }
      if (a.condition.includes('evt')) {
        judge = getEvent(a.condition)
      }
      if (judge) {
        medals.push(a) 
      }
    })
  }


  getHuman() {
    
  }
  getEvent() {

  }
}

export default achievement