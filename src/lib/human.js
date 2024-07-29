import { genRandomInt, genRandomNumber, getNumber } from './util'

class human {

  #age = 18; // 年龄
  #month = 0; //月份
  #height = 150; //身高 150-200 cm
  #weight = 40; // KG 根据 bmi 生成 低于 17死亡 19-25正常数据  
  #BMI = 0; // random(18-35)
  #BMIStatus
  #money = 40; // 钱
  #power = 30; // W 功率
  #speed = 0; // km/h 速度 14.5 * V + 0.16*V^3
  #talent = 1; // 天赋 0.8~1.2 影响训练收益
  #ticket = 0; // 门票
  #safeProbability = 0.5;
  #calcSafe = 0
  #raceTime = 0;
  #buyTime = 0;
  


  constructor() {
    this.init()
  }

  // 装备
  equip = {}



  init() {
    // 影响训练效率的因素 正值
    this.powerTrainFactor = {
      clothes: 0,
      meter: 0,
      watch: 0,
    }

    // 功率转换速度因素 体重 负值，自行车 锁鞋正值
    this.powerTransFactor = {
      weight: 0,
      bike: 0.5,
      shoes: 0,
    }

    // 受伤概率 负值
    this.hurtFactor = {
      helmet: 0,
      light: 0,
      glove: 0,
    }

    this.#age = 18;
    this.#month = 0;
    this.#height = genRandomInt(150, 200)
    this.#BMI = genRandomInt(18, 35)
    this.#BMIStatus = this.calcBMIStaus()
    this.#weight = Number((this.#height * this.#height * this.#BMI / 10000).toFixed(2))
    this.#money = genRandomInt(200, 500)
    // this.#money = 10000
    this.#power = genRandomInt(30, 80)
    this.#speed = this.findSpeed(this.#power * this.calcPowerTransRatio())
    this.#talent = genRandomNumber(0.8, 1.2, 2)
    this.#ticket = 0
    this.#safeProbability = 0.5
    this.initEquip()
    this.vInfo()
  }



  initEquip() {
    this.equip = {
      helmet: {
        type: '安全帽',
        name: '无',
        grade: 0,
      },
      light: {
        type: '车灯',
        name: '无',
        grade: 0,
      },
      glove: {
        type: '手套',
        name: '无',
        grade: 0,
      },
      clothes: {
        type: '骑行服',
        name: '无',
        grade: 0,
      },
      meter: {
        type: '功率计',
        name: '无',
        grade: 0,
      },
      bike: {
        type: '自行车',
        name: '共享单车',
        grade: 0,
      },
      watch: {
        type: '码表',
        name: '无',
        grade: 0,
      },
      shoes: {
        type: '锁鞋',
        name: '无',
        grade: 0,
      }
    }
  }

  getAge() { return this.#age }
  getMonth() { return this.#month }
  getTicket() { return this.#ticket }
  getMoney() { return this.#money }
  getSpeed() { return this.#speed }
  getEquip() { return this.equip }
  getPower() { return this.#power }
  getWeight() { return this.#weight }

  addTicket() {
    this.#ticket += 1
  }
  addRace() {
    this.#raceTime +=1
  }

  updateEquip(type, newEquip) {
    this.equip[type].name = newEquip.name
    this.equip[type].grade = newEquip.grade
    if (['clothes','meter','watch'].includes(type)) {
      this.powerTrainFactor[type] = newEquip.value
    }
    if (['bike','shoes'].includes(type)) {
      this.powerTransFactor[type] = newEquip.value
    }
    if (['helmet','light','glove'].includes(type)) {
      this.hurtFactor[type] = newEquip.value
    }
    this.#buyTime += 1
    let transPower = this.#power * this.calcPowerTransRatio()
    this.#speed = this.findSpeed(transPower)
  }
  addPower(power) {
    this.#power += power
    this.#power = getNumber(this.#power)
    let transPower = this.#power * this.calcPowerTransRatio()
    this.#speed = this.findSpeed(transPower)
  }
  addMoney(money) {
    this.#money += money
    this.#money = getNumber(this.#money)

  }
  addWeight(weight) {
    this.#weight += weight
    this.#weight = getNumber(this.#weight)

    this.#BMI = this.calcBMI()
    this.#BMIStatus = this.calcBMIStaus()
  }
  addTalent(talent) {
    this.#talent += talent
    this.#talent = getNumber(this.#talent)
  }

  addTime(time) {
    if (this.#month + time > 12) {
      this.#age = this.#age + 1
      this.#month = this.#month + time - 12
    } else {
      this.#month = this.#month + time
    }
  }
  addSafeProbability(safe) {
    this.#safeProbability += safe
    this.#safeProbability = getNumber(this.#safeProbability)
  }

  
  // 训练提升效率
  calcPowerTrainRatio() {
    let total = this.#talent
    for (const key in this.powerTrainFactor) {
      total += this.powerTrainFactor[key]
    }
    // 天赋 + 效率提升因素
    return total
  }

  // 功率转换速度
  calcPowerTransRatio() {
    let total = 0
    for (const key in this.powerTransFactor) {
      total += this.powerTransFactor[key]
    }
    return total
  }
  // 不受伤概率
  calcHurtRatio() {
    let total = this.#safeProbability
    for (const key in this.hurtFactor) {
      total += this.hurtFactor[key]
    }
    this.#calcSafe = total
    return total
  }
  findSpeed(power) {
    console.log(power);
    // 设定初始猜测值
    let V = 1.0; // 你可以根据实际情况调整这个初始值
    let tolerance = 0.01; // 控制误差到小数点后两位
    let maxIterations = 100; // 最大迭代次数

    for (let i = 0; i < maxIterations; i++) {
      // 计算函数值和导数值
      let f = 10 * V + 0.16 * V * V * V - power;
      let df = 10 + 0.48 * V * V;

      // 使用牛顿-拉夫森公式更新V值
      let newV = V - f / df;

      // 检查是否达到容忍度
      if (Math.abs(newV - V) < tolerance) {
        return parseFloat((newV * 3.6).toFixed(2)); // 保留两位小数
      }

      // 更新V值
      V = newV;
    }

    // 如果没有找到合适的解，则返回NaN
    return parseFloat((V * 3.6).toFixed(2));
  }



  calcBMI() {
    return Number((this.#weight * 10000 / this.#height / this.#height).toFixed(2))
  }
  // 影响速度
  // 其他范围影响功率输出 25-30 10% 30-35 20% 35> 30%
  calcBMIStaus() {
    if (this.#BMI < 19) {
      this.powerTransFactor.weight = - 0.1
      return '瘦'
    }
    if (this.#BMI < 24) {
      this.powerTransFactor.weight = 0
      return '健康'
    }
    if (this.#BMI < 30) {
      this.powerTransFactor.weight = 0.1
      return '偏胖'
    }
    if (this.#BMI < 35) {
      this.powerTransFactor.weight = 0.15
      return '肥胖'
    }
    if (this.#BMI >= 35) {
      this.powerTransFactor.weight = 0.2
      return '超级肥胖'
    }
  }
  vInfo() {
    let propertyPanel = document.querySelector('.game-bar')
    propertyPanel.innerHTML = '';
    let innerHTML = ''
    innerHTML = `
    <div class="game-bar-item"><span style="font-size= 12px">时间：</span> ${this.#age}年${this.#month}月</div>
    <div class="game-bar-item"><span style="font-size= 12px">身高：</span> ${this.#height} CM </div>
    <div class="game-bar-item"><span style="font-size= 12px">金钱：</span> ${this.#money} </div>
    <div class="game-bar-item"><span style="font-size= 12px">体重：</span> ${this.#weight} KG ${this.#BMIStatus}</div>
    <div class="game-bar-item"><span style="font-size= 12px">功率：</span> ${this.#power} W</div>
    <div class="game-bar-item"><span style="font-size= 12px">速度：</span> ${this.#speed} KM/H</div>
    <div class="game-bar-item">环法资格： ${this.#ticket} </div>`
    for (const key in this.equip) {
      innerHTML += ` <div class="game-bar-item"><span style="font-size= 12px">${this.equip[key].type}：</span> ${this.equip[key].name}</div>`
    }

    propertyPanel.innerHTML = innerHTML
  }



  reset() {

  }

}


export default human;