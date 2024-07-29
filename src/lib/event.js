import { eventDb } from './eventDb.js'
import { genRandomInt, genRandomNumber } from "./util.js";

class event {
  constructor(human) {
    this.eventDb = eventDb
    this.probData = JSON.parse(JSON.stringify(this.probabilities))
    this.human = human
  }

  // 事件概率计算 good normal bad
  probabilities = {
    begin: [1, 0, 0],
    bike: [0.3, 0.5, 0.2],
    deliver: [0.3, 0.5, 0.2],
    race: [0.5, 0, 0.5],
    eat: [1, 0, 0],
    buy: [1, 0, 0]
  }

  probData = {}

  do(type) {
    if (type === 'race') {
      this.human.addRace()
    }
    if (type === 'race' && this.human.getPower() / this.human.getWeight() > 7) {
      return {desc: '恭喜你获得了环法冠军'}
    }


    if (type === 'buy') {
      if (this.human.getMoney() < 300) {
        alert('钱不够')
        return false
      }
      this.human.addMoney(-300)
      let nowEquip = this.human.getEquip()
      let equipTypes = [
        'helmet', 'light', 'glove', 'clothes', 'meter', 'bike', 'watch', 'shoes'
      ]
      function getRandomEquipType() {
        let rand = genRandomInt(0, 7)
        let randomResult = equipTypes[rand]
        // 杂牌 入门 进阶 毕业
        if (randomResult !== 'bike' && nowEquip[randomResult].grade === 4) {
          randomResult = getRandomEquipType()
        }
        return randomResult
      }
      let equipType = getRandomEquipType()
      let grade = nowEquip[equipType].grade
      grade = grade === 4 ? 4 : grade + 1
      let goods = this.eventDb[type][equipType].filter(item => {
        return item.grade === grade
      })
      let good = goods[genRandomInt(0, goods.length - 1)]
      good = { ...good }
      good.desc = '你购买了' + good.name + '(money-300)'
      this.human.updateEquip(equipType, good)
      this.human.vInfo()
      return good
    }

    // 其他事件通用处理 bike deliver race eat
    if (type === 'eat') {
      if (this.human.getMoney() < 50) {
        alert('钱不够')
        return false
      }
      this.human.addMoney(-50)
      // 吃东西不用跳过时间，下面会 +1
      this.human.addTime(-1)
    }
    // 如果不是吃饭 都会掉体重
    if (type !== 'eat') {
      let weight = -Number(genRandomNumber(0.8, 1.2, 3).toFixed(2))
      console.log(weight);
      this.human.addWeight(weight)
    }
    let _prefer = this.getPrefer(type)
    let result = this.eventDb[type][_prefer]
    let rand = genRandomInt(0, result.length - 1)
    // 获取随机事件
    let _event = result[rand]
    // 根据 事件的通用类型进行 常规处理
    if (_event.target === 'power') {
      let power = Number((_event.value * this.human.calcPowerTrainRatio()).toFixed(2))
      this.human.addPower(power)
      _event = { ..._event }
      _event.desc += `(功率+${power})`
    }
    if (_event.target === 'deliver') {
      let money = Number((_event.value * this.human.getSpeed() / 25).toFixed(2))
      this.human.addMoney(money)
      _event = { ..._event }
      _event.desc += `(钱+${money})`
    }
    if (_event.target === 'weight') {
      let weight = (Number((_event.value * genRandomNumber(0.8, 1.2, 3)).toFixed(2)))
      this.human.addWeight(weight)
      _event = { ..._event }
      _event.desc += `(体重+${weight})`
    }
    if (_event.target === 'money') {
      this.human.addMoney(_event.value)
      _event = { ..._event }
      _event.desc += `(钱+${_event.value})`
    }
    if (_event.target === 'hurt') {
      let rand = genRandomNumber(0, 1, 3)
      if ( rand < this.human.calcHurtRatio()) {
        _event = { ..._event }
        _event.notHurt = true
        _event.desc += '还好没有受伤'
      } else {
        _event = { ..._event }
        _event.desc += `，住院 ${_event.value} 个月`
        this.human.addTime(_event.value)
      }
    }
    if (_event.target === 'bike') {
      let rand = genRandomNumber(0, 1, 3)
      if (rand < 0.5) {
        _event = { ..._event }
        _event.desc += `车子需要维修，这个月不能骑了`
        this.human.addTime(1)
      } else {
        _event = { ..._event }
        _event.notHurt = true
        _event.desc += '，不过车子没事'
      }
    }
    if (_event.target === 'talent') {
      this.human.addTalent(_event.value)
      _event = { ..._event }
      _event.desc += `(天赋+${_event.value})`
    }
    if (_event.target === 'safeProbability') {
      this.human.addSafeProbability(_event.value)
      _event = { ..._event }
      _event.desc += `(受伤概率+${_event.value})`
    }
    if (_event.target === 'ticket') {
      this.human.addTicket()
    }
    if (this.human.getPower > 400 && this.human.getTicket() === 0) {
      if (genRandomInt(0,100)>80) {
        this.human.addTicket()
      }
    }
    this.human.addTime(1)
    this.human.vInfo()
    return _event
  }

  getPrefer(type) {
    let probability = this.probData[type]
    let sum = probability.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let rand = Math.random() * sum;
    let cumulativeProbability = 0
    for (let i = 0; i < probability.length; i++) {
      cumulativeProbability += probability[i];
      if (rand < cumulativeProbability) {
        return i ? i === 1 ? 'normal' : 'bad' : 'good'
      }
    }
  }
}

export default event;
