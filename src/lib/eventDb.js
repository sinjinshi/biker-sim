
export const eventDb = {
  // 故事开始
  begin: {
    good: [
      {
        id: 11001,
        desc: '你在1岁的时候进行抓周,抓了黄色衣服和自行车,大家都认为你可能成为黄袍领骑。命运的齿轮开始转动',
        target: 'talent',
        value: 0.05
      },
      {
        id: 11002,
        desc: '3岁的时候奶奶给你买了一辆滑步车,你的平衡感变得很好',
        target: 'hurtProbability',
        value: 0.1
      },
      {
        id: 11003,
        desc: '你在6岁的时候偷骑爷爷的二八,你领悟了掏档子骑法',
        target: 'talent',
        value: 0.05
      },
      {
        id: 11004,
        desc: '上初中的时候，你骑着妈妈的公主车上下学，由于学校很远，你每天都是速度与激情',
        target: 'power',
        value: 30
      },
      {
        id: 11005,
        desc: '在你14岁的生日上，你的 daddy 给你买了进口山地车，富哥的生活就是这么朴实无华',
        target: 'money',
        value: 3000
      }
    ]
  },
  bike: {
    good: [
      {
        id: 21001,
        desc: '路过烧烤摊，你...',
        target: 'weight',
        value: 20
      },
      {
        id: 21002,
        desc: '你训练的时候被人拍下来，发到了网上，环法官方向你发来邀请',
        target: 'ticket',
        value: 1
      },
      {
        id: 21003,
        desc: '你突然觉得自己这么优秀，怎么能不参加环法呢，于是你向官方提交了申请。申请通过了',
        target: 'ticket',
        value: 1
      },
      {
        id: 21004,
        desc: '你突然觉得自己这么优秀，怎么能不参加环法呢，于是你向官方提交了申请。后来收到了一个电信诈骗电话',
        target: 'money',
        value: -50
      },
      {
        id: 21004,
        desc: '你知道了如何安排合理的踏频',
        target: 'talent',
        value: 0.1
      },
      {
        id: 21004,
        desc: '今天遇到了一个美女/帅哥车手，你决定蹭风',
        target: 'power',
        value: 15
      },
      {
        id: 21004,
        desc: '你给别人发了辣堡',
        target: 'power',
        value: 20
      },
      {
        id: 21004,
        desc: '你知道了正确的骑行姿势',
        target: 'talent',
        value: 0.1
      },
      {
        id: 21004,
        desc: '你知道了如何刹车',
        target: 'safeProbability',
        value: 0.1
      },
      {
        id: 21004,
        desc: '你知道了骑车需要用前脚掌踩踏',
        target: 'talent',
        value: 0.1
      },
      {
        id: 21004,
        desc: '你学会了如何变速',
        target: 'power',
        value: 30
      },
      {
        id: 21004,
        desc: '你学会了热身',
        target: 'power',
        value: 30
      },
      {
        id: 21004,
        desc: '你学会了冷身',
        target: 'power',
        value: 30
      },
      {
        id: 21004,
        desc: '紧身衣变态',
        target: 'power',
        value: 20
      },
      {
        id: 21004,
        desc: '即时补充水分，身体觉得很舒服',
        target: 'power',
        value: 30
      },
      {
        id: 21004,
        desc: '你学会了根据心率进行训练',
        target: 'talent',
        value: 0.1
      },
      {
        id: 21004,
        desc: '你学会了给自己制定计划通过间歇方式提高训练效率',
        target: 'talent',
        value: 0.1
      },
      {
        id: 21004,
        desc: '休闲骑',
        target: 'power',
        value: 20
      }
    ],
    normal: [
      {
        id: 22001,
        desc: '平平无奇的训练',
        target: 'power',
        value: 10
      },
      {
        id: 22001,
        desc: '今天的风儿有点喧嚣',
        target: 'power',
        value: 10
      },
      {
        id: 22001,
        desc: '听歌听歌',
        target: 'power',
        value: 10
      }
    ],
    bad: [{
      id: 23001,
      desc: '今天没有什么状态',
      target: 'power',
      value: 1
    },
    {
      id: 23001,
      desc: '车子爆胎了，你叫了一辆货拉拉',
      target: 'money',
      value: -100
    },
    {
      id: 23001,
      desc: '出门没有看天气预报,你摔车了',
      target: 'hurt',
      value: 3
    },
    {
      id: 23001,
      desc: '出门没有看天气预报,你摔车了',
      target: 'bike',
      value: 1
    },
    {
      id: 23001,
      desc: '车子发出了异响',
      target: 'bike',
      value: 1
    },
    {
      id: 23001,
      desc: '今天没有进行充分的热身，训练完你就觉得身体有点不舒服',
      target: 'hurt',
      value: 1
    },
    {
      id: 23001,
      desc: '你和逆行的车子发生了车祸',
      target: 'hurt',
      value: 3
    },
    {
      id: 23001,
      desc: '遇到了野狗追你，你没办法按计划进行训练',
      target: 'power',
      value: 2
    },
    {
      id: 23001,
      desc: '你被共享单车拉爆了',
      target: 'talent',
      value: -0.03
    }
  
  ],
  },
  deliver: {
    good: [{
      id: 21001,
      desc: '获得客户的打赏',
      target: 'deliver',
      value: 500
    },
    {
      id: 21001,
      desc: '你超过了裁判的汽车，裁判觉得你很有天赋，送了你一张入场卷',
      target: 'ticket',
      value: 1
    },
    {
      id: 21001,
      desc: '长期的送外卖,你的控车能力得到了提升',
      target: 'safeProbability',
      value: 0.1
    },
    {
      id: 21001,
      desc: '你成为了你们区的外卖王，获得了奖金',
      target: 'deliver',
      value: 1000
    },
    {
      id: 21001,
      desc: '今天的路线特别好',
      target: 'deliver',
      value: 400
    },
    {
      id: 21001,
      desc: '老板出货速度特别快',
      target: 'deliver',
      value: 450
    },
    {
      id: 21001,
      desc: '你知道一条小路...',
      target: 'deliver',
      value: 500
    }],
    normal: [{
      id: 21001,
      desc: '平平无奇的一天',
      target: 'deliver',
      value: 250
    },
    {
      id: 21001,
      desc: '平平无奇的一天',
      target: 'deliver',
      value: 300
    },
    {
      id: 21001,
      desc: '今天的天气还不错',
      target: 'deliver',
      value: 300
    },
    {
      id: 21001,
      desc: '你发现了一个城市的角落',
      target: 'deliver',
      value: 250
    },
    {
      id: 21001,
      desc: '你从未想过城市里还有这样的地方',
      target: 'deliver',
      value: 250
    },
    {
      id: 21001,
      desc: '城市探索度+1',
      target: 'deliver',
      value: 250
    }],
    bad: [{
      id: 21001,
      desc: '你觉得这家外卖还挺好吃的,你准备也点一份',
      target: 'deliver',
      value: -40
    },
    {
      id: 21001,
      desc: '被客户点了差评',
      target: 'deliver',
      value: 100
    },
    {
      id: 21001,
      desc: '遇到红灯，超时了',
      target: 'deliver',
      value: 100
    },
    {
      id: 21001,
      desc: '下雨天，路有点滑，你摔倒了。还好没受伤，不过今天白干了',
      target: 'deliver',
      value: 0.5
    },
    {
      id: 21001,
      desc: '路上发生了交通事故，堵车了',
      target: 'deliver',
      value: 100
    },
    {
      id: 21001,
      desc: '路上发生了交通事故，你摔倒了',
      target: 'hurt',
      value: 3
    },
    {
      id: 21001,
      desc: '路上发生了交通事故，你摔倒了',
      target: 'bike',
      value: 1
    },
   
  ],
  },
  // 一半好事一半坏事
  race: {
    good: [{
      id: 21001,
      desc: '见识了世界上的顶尖的车手，你顿悟了',
      target: 'power',
      value: 50
    },
    {
      id: 21001,
      desc: '获得了赞助',
      target: 'money',
      value: 3000
    },
    {
      id: 21001,
      desc: '你有了自己的联名',
      target: 'money',
      value: 3000
    },
    {
      id: 21001,
      desc: '你开通了个人直播，获得了打赏',
      target: 'money',
      value: 1000
    }],
    normal: [],
    bad: [{
      id: 21001,
      desc: '在比赛中你不幸撞到水马',
      target: 'hurt',
      value: 10
    },
    {
      id: 21001,
      desc: '在激烈的拉扯中，第一梯队出现了翻车。',
      target: 'hurt',
      value: 6
    },
    {
      id: 21001,
      desc: '突然闯入了几个观众，你摔车了',
      target: 'hurt',
      value: 4
    },
    {
      id: 21001,
      desc: '在比赛中你没有好好检修你的车，车子有点异响',
      target: 'bike',
      value: 1
    }],
  },
  // 装备分类
  buy: {

    helmet: [
      {
        id: 51001,
        name: '杂牌头盔',
        value: 0.05,
        grade: 1
      },
      {
        id: 51001,
        name: '入门头盔',
        value: 0.1,
        grade: 2
      },
      {
        id: 51001,
        name: '进阶头盔',
        value: 0.15,
        grade: 3
      },
      {
        id: 51001,
        name: '毕业头盔',
        value: 0.2,
        grade: 4
      },
      {
        id: 51001,
        name: '场地头盔',
        value: 0.2,
        grade: 4
      },
      {
        id: 51001,
        name: '红牛赞助',
        value: 0.2,
        grade: 4
      },
    ],
    light: [{
      id: 51001,
      name: '杂牌车灯',
      value: 0.05,
      grade: 1
    },
    {
      id: 51001,
      name: '入门车灯',
      value: 0.1,
      grade: 2
    },
    {
      id: 51001,
      name: '进阶车灯',
      value: 0.15,
      grade: 3
    },
    {
      id: 51001,
      name: '毕业车灯',
      value: 0.2,
      grade: 4
    },],
    glove: [{
      id: 51001,
      name: '杂牌手套',
      value: 0.05,
      grade: 1
    },
    {
      id: 51001,
      name: '入门手套',
      value: 0.06,
      grade: 2
    },
    {
      id: 51001,
      name: '进阶手套',
      value: 0.08,
      grade: 3
    },
    {
      id: 51001,
      name: '毕业手套',
      value: 0.1,
      grade: 4
    },],
    clothes: [{
      id: 51001,
      name: '杂牌骑行服',
      value: 0.05,
      grade: 1
    },
    {
      id: 51001,
      name: '入门骑行服',
      value: 0.1,
      grade: 2
    },
    {
      id: 51001,
      name: '进阶骑行服',
      value: 0.15,
      grade: 3
    },
    {
      id: 51001,
      name: '毕业骑行服',
      value: 0.2,
      grade: 4
    },],
    meter: [{
      id: 51001,
      name: '杂牌功率计',
      value: 0.05,
      grade: 1
    },
    {
      id: 51001,
      name: '入门功率计',
      value: 0.1,
      grade: 2
    },
    {
      id: 51001,
      name: '进阶功率计',
      value: 0.15,
      grade: 3
    },
    {
      id: 51001,
      name: '毕业功率计',
      value: 0.2,
      grade: 4
    },],
    bike: [{
      id: 51001,
      name: '杂牌车',
      value: 0.6,
      grade: 1
    },
    {
      id: 51001,
      name: '销量第一',
      value: 0.6,
      grade: 1
    },
    {
      id: 51001,
      name: '奸商尺码',
      value: 0.6,
      grade: 1
    },
    {
      id: 51001,
      name: '百年老店',
      value: 0.6,
      grade: 1
    },
    {
      id: 51001,
      name: '战损成色',
      value: 0.6,
      grade: 1
    },
    {
      id: 51001,
      name: '自用二手车',
      value: 0.6,
      grade: 1
    },
    {
      id: 51001,
      name: '轻微擦伤无事故',
      value: 0.6,
      grade: 1
    },
    {
      id: 51001,
      name: '入门车',
      value: 0.7,
      grade: 2
    },
    {
      id: 51001,
      name: '进阶车',
      value: 0.8,
      grade: 3
    },
    {
      id: 51001,
      name: '毕业车',
      value: 0.9,
      grade: 4
    },
    {
      id: 51001,
      name: 'sky同款',
      value: 0.95,
      grade: 4
    },
    {
      id: 51001,
      name: 'uae同款',
      value: 0.94,
      grade: 4
    },
    {
      id: 51001,
      name: 'bora同款',
      value: 0.93,
      grade: 4
    },
    {
      id: 51001,
      name: 'step同款',
      value: 0.95,
      grade: 4
    },
    {
      id: 51001,
      name: 'Astana同款',
      value: 0.95,
      grade: 4
    },
    {
      id: 51001,
      name: 'DSM同款',
      value: 0.3,
      grade: 4
    }],
    watch: [{
      id: 51001,
      name: '杂牌码表',
      value: 0.05,
      grade: 1
    },
    {
      id: 51001,
      name: '入门码表',
      value: 0.1,
      grade: 2
    },
    {
      id: 51001,
      name: '手机',
      value: 0.1,
      grade: 2
    },
    {
      id: 51001,
      name: '进阶码表',
      value: 0.15,
      grade: 3
    },
    {
      id: 51001,
      name: '毕业码表',
      value: 0.2,
      grade: 4
    },
    {
      id: 51001,
      name: 'gamin',
      value: 0.2,
      grade: 4
    },],
    shoes: [{
      id: 51001,
      name: '杂牌锁鞋',
      value: 0.05,
      grade: 1
    },
    {
      id: 51001,
      name: '入门锁鞋',
      value: 0.1,
      grade: 2
    },
    {
      id: 51001,
      name: '进阶锁鞋',
      value: 0.15,
      grade: 3
    },
    {
      id: 51001,
      name: '毕业锁鞋',
      value: 0.2,
      grade: 4
    },]

  },
  // 只有good
  eat: {
    good: [{
      id: 61001,
      desc: '按时吃饭',
      target: 'weight',
      value: 2
    }, {
      id: 61001,
      desc: '喝杯奶茶怎么了',
      target: 'weight',
      value: 3
    }, {
      id: 61001,
      desc: '我就闻闻味道',
      target: 'weight',
      value: 3
    }, {
      id: 61001,
      desc: 'Bro v50 我要去kfc做康复',
      target: 'weight',
      value: 5
    }, {
      id: 61001,
      desc: '麦当劳汉堡~ 嚎~嚎~嚎~',
      target: 'weight',
      value: 4
    }, {
      id: 61001,
      desc: 'BURGER! KING! ',
      target: 'weight',
      value: 5
    }, {
      id: 61001,
      desc: '妈妈今天过来给你做饭',
      target: 'weight',
      value: 3
    }, {
      id: 61001,
      desc: '你为了省点钱，决定吃华莱士',
      target: 'weight',
      value: 2
    }, {
      id: 61001,
      desc: '你为了省点钱，决定吃华莱士，但是不知道为什么体重减少了',
      target: 'weight',
      value: -0.5
    }, {
      id: 61001,
      desc: '你吃饭吃出了蟑螂，老板给了你 300块钱',
      target: 'money',
      value: 300
    }, {
      id: 61001,
      desc: '奢侈一把，沙县大酒店',
      target: 'weight',
      value: 3
    },
    {
      id: 61001,
      desc: '奢侈一把，兰州国际连锁',
      target: 'weight',
      value: 3
    },
    {
      id: 61001,
      desc: '奢侈一把，黄焖鸡',
      target: 'weight',
      value: 3
    },
    {
      id: 61001,
      desc: '齐齐哈尔大烧烤，爽',
      target: 'weight',
      value: 5
    },
    {
      id: 61001,
      desc: '奢侈一把，重庆小面',
      target: 'weight',
      value: 3
    },
    {
      id: 61001,
      desc: '新疆羊肉串，浇给',
      target: 'weight',
      value: 5
    },
    {
      id: 61001,
      desc: '南昌拌粉 + 瓦罐汤，绝杀。斯哈不辣',
      target: 'weight',
      value: 3
    },
    {
      id: 61001,
      desc: '你决定自己做健身餐，干净又卫生',
      target: 'power',
      value: 5
    },
    {
      id: 61001,
      desc: '你泡了包泡面，看着手机里面自己最喜欢的美食主播说粉丝先吃，你开心的笑了',
      target: 'weight',
      value: 1
    },
    {
      id: 61001,
      desc: '是洋葱，我加了洋葱',
      target: 'weight',
      value: 3
    },
    {
      id: 61001,
      desc: '没有什么事是一顿烧烤解决不了的，如果有，那就两顿。',
      target: 'weight',
      value: 10
    },
    {
      id: 61001,
      desc: '料理，不只是为了填饱肚子，更是为了带给人们幸福。',
      target: 'weight',
      value: 3
    },
    {
      id: 61001,
      desc: '食物是人类最好的朋友。',
      target: 'weight',
      value: 3
    },
    {
      id: 61001,
      desc: '美食，是人类表达爱意的最佳方式。',
      target: 'weight',
      value: 3
    },
    {
      id: 61001,
      desc: '肚子饿的时候，能吃到温暖的食物，是人生最大的幸福。',
      target: 'weight',
      value: 3
    },
    {
      id: 61001,
      desc: '每道菜都有它的故事，每个人也都有自己的故事。',
      target: 'weight',
      value: 3
    },
    {
      id: 61001,
      desc: '一个人吃饭，一个人的世界，一个人的安宁。',
      target: 'weight',
      value: 4
    }],
    normal: [],
    bad: [],
  },
  achievements: [
    {
      name: '氪金达人',
      condition: 'prop[buyTime]>31'
    },
    {
      name: '屡败屡战',
      condition: 'prop[buyTime]>31'
    }
  ]
}