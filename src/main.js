import Human from "./lib/human";
import Event from './lib/event';
import Achievement from "./lib/achievement";

let human = new Human()
let event = new Event(human)


// 阶段
let btnShowFlag = 0 // 0- 训练 送外卖， 1-消费 吃食物

let history = []

let btnList = {
  begin: null,
  back: null,
  bike: null,
  deliver: null,
  race: null,
  buy: null,
  eat: null,
  jump: null,
  hidden: null
}



// 操作渲染
function showBtn() {
  let btnPanel = document.querySelector('.game-control')
  if (!btnList.back) {
    let backEl = document.createElement('div')
    backEl.setAttribute("class", 'game-btn');
    backEl.innerText = '[ 返回 ]'
    backEl.addEventListener('click', () => handleOper('back'))
    btnList.back = backEl
  }
  if (!btnList.begin) {
    let beginEl = document.createElement('div')
    beginEl.setAttribute("class", 'game-btn');
    beginEl.innerText = '[ 故事就这么开始了 ]'
    beginEl.addEventListener('click', () => handleOper('begin'))
    btnList.begin = beginEl
  }
  if (!btnList.bike) {
    let bikeEl = document.createElement('div')
    bikeEl.setAttribute("class", 'game-btn');
    bikeEl.innerText = '[ 训练 ]'
    bikeEl.addEventListener('click', () => handleOper('bike'))
    btnList.bike = bikeEl
  }
  if (!btnList.deliver) {
    let deliverEl = document.createElement('div')
    deliverEl.setAttribute("class", 'game-btn');
    deliverEl.innerText = '[ 送外卖 ]'
    deliverEl.addEventListener('click', () => handleOper('deliver'))
    btnList.deliver = deliverEl
  }
  if (!btnList.race) {
    let raceEl = document.createElement('div')
    raceEl.setAttribute("class", 'game-btn');
    raceEl.innerText = '[ 参加环法 ]'
    raceEl.addEventListener('click', () => handleOper('race'))
    btnList.race = raceEl
  }
  if (!btnList.buy) {
    let buyEl = document.createElement('div')
    buyEl.setAttribute("class", 'game-btn');
    buyEl.innerText = '[ 买买买 ]'
    buyEl.addEventListener('click', () => handleOper('buy'))
    btnList.buy = buyEl
  }
  if (!btnList.eat) {
    let eatEl = document.createElement('div')
    eatEl.setAttribute("class", 'game-btn');
    eatEl.innerText = '[ 搓一顿 ]'
    eatEl.addEventListener('click', () => handleOper('eat'))
    btnList.eat = eatEl
  }
  if (!btnList.jump) {
    let jumpEl = document.createElement('div')
    jumpEl.setAttribute("class", 'game-btn');
    jumpEl.innerText = '[ 跳过 ]'
    jumpEl.addEventListener('click', () => handleOper('jump'))
    btnList.jump = jumpEl
  }
  if (!btnList.hidden) {
    let hiddenEl = document.createElement('div')
    hiddenEl.setAttribute("class", 'game-btn');
    hiddenEl.innerText = '[ 隐藏项 ]'
    btnList.hidden = hiddenEl
  }

  // 根据阶段进行按钮现实
  if (btnShowFlag === 0) {
    btnPanel.replaceChildren(btnList.bike, btnList.deliver, btnList.hidden)
    if (human.getAge() === 18 && human.getMonth() === 0) {
      btnPanel.replaceChildren(btnList.begin)
    }
    // 七月 参加环法比赛
    if (human.getMonth() === 7 && human.getTicket()) {
      btnPanel.replaceChildren(btnList.bike, btnList.deliver, btnList.race)
    }
  }
  if (btnShowFlag === 1) {
    btnPanel.replaceChildren(btnList.buy, btnList.eat, btnList.jump)
  }

}

function insertNewMsg(msg) {
  let logPanel = document.querySelector('.game-log')
  let logEl = document.createElement('div')
  logEl.setAttribute("class", 'game-log-item');
  logEl.innerText = `[${human.getAge()}年${human.getMonth()}月]：${msg}`
  logPanel.appendChild(logEl)
  logEl.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function showMedals() {
  let gamePage = document.querySelector('.game')
  gamePage.style.display = 'none';
  let medalsPanel = document.querySelector('.medals')
  // todo 成就系统完成以后 删除
  let medalEl = document.createElement('div')
  medalEl.setAttribute("class", 'game-log-item');
  medalEl.innerText = `恭喜你获得了环法冠军`
  medalsPanel.appendChild(medalEl)
  return
  // todo 获取
  let medalResult = new Achievement(this.human, history).getMedals()
  medalResult.forEach(m => {
    let medalEl = document.createElement('div')
    medalEl.setAttribute("class", 'game-log-item');
    medalEl.innerText = `${m.name}`
    medalsPanel.appendChild(medalEl)
  })
}

// 触发事件 数据的修改在这边操作
function handleOper(type) {
  switch (type) {
    case 'back':

      break;
    case 'jump':
      btnShowFlag = (btnShowFlag + 1) % 2
      showBtn()
      break
    default:
      let story = event.do(type)
      if (story) {
        console.log(story);
        if (story.desc === '恭喜你获得了环法冠军') {
          showMedals()
          break
        }
        history.push(story)
        insertNewMsg(story.desc)
        btnShowFlag = (btnShowFlag + 1) % 2
        showBtn()
      }
      break;
  }
}



showBtn()