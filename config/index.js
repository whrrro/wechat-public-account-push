export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID 
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  // APP_ID: "wxe182e4bf4460b68c",

  // 公众号APP_SECRET 
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  // APP_SECRET: "654072543ca8270ebeccf83f3e88a394",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "小玲",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "ohxOO6VskYv0Kuf-ywIZVRMpuXhk",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "zjVglIuCXo4CsraXWEio1iP7sZJ7IQEES9lDsgc4yOU",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://wangxinleo.cn"
   *   }, 
   * ]
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "小玲",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ohxOO6VskY2v40Kuf5ywIZVRM3puXhk",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "Wue80GrtY1nAi5a4tam4FDxZF59WNx9pwcBc06LMpANnu8",
      // 所在省份
      province: "湖北",
      // 所在城市
      city: "武汉",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://wangxinleo.cn"
    }, 
    {
      name: "小玲", 
      id: "ohxOO6VskY2v40Kuf5ywIZVRM3puXhk",
      useTemplateId: "",
      province: "湖北",
      city: "武汉",
      openUrl: "https://wangxinleo.cn"
    }, 
    {
      name: "小玲",
      id: "ohxOO6VskY2v40Kuf5ywIZVRM3puXhk",
      useTemplateId: "Wue80GrtY1nAi5a4tam4FDxZF59WNx9pwcBc06LMpANnu8",
      province: "湖北",
      city: "武汉",
      openUrl: "https://wangxinleo.cn"
    }, 
    {
      name: "小玲", 
      id: "ohxOO6VskY2v40Kuf5ywIZVRM3puXhk",
      useTemplateId: "",
      province: "湖北",
      city: "武汉",
      openUrl: "https://wangxinleo.cn"
    }, 
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "zjV1glIuCXo4Csr23aXWEio1iP74sZJ7IQEES95lDsg6c4yOU",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oq0OC6usBjm9fBMJxL_5B_dfe6nQ",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "湖北",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "武汉",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "小玲", "year": "2004", "date": "02-28"},
    {"type": "节日", "name": "相识", "year": "2022", "date": "08-03"},
    {"type": "生日", "name": "小玲", "year": "2022", "date": "08-28"},
    {"type": "节日", "name": "被搭讪纪念日", "year": "2022", "date": "09-03"},
  ],


