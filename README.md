<p align="center">
  <a href="https://github.com/dashenbibi/novel-master">
    <img src="https://img.shields.io/badge/📖-novel--master-blue?style=for-the-badge" alt="novel-master">
  </a>
</p>

<h1 align="center">novel-master</h1>

<p align="center">
  <strong>面向中文长篇连载的结构化 AI writing skill</strong>
</p>

<p align="center">
  <a href="https://github.com/dashenbibi/novel-master">
    <img src="https://img.shields.io/github/stars/dashenbibi/novel-master?style=flat-square&logo=github" alt="GitHub stars">
  </a>
  <a href="https://github.com/dashenbibi/novel-master/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/dashenbibi/novel-master?style=flat-square" alt="GitHub license">
  </a>
  <a href="https://github.com/dashenbibi/novel-master/releases">
    <img src="https://img.shields.io/github/v/release/dashenbibi/novel-master?style=flat-square" alt="GitHub release">
  </a>
  <a href="https://github.com/dashenbibi/novel-master/issues">
    <img src="https://img.shields.io/github/issues/dashenbibi/novel-master?style=flat-square" alt="GitHub issues">
  </a>
</p>

---

它不是一个"随便写点文案"的通用提示词集合，而是一套**可执行的长篇创作协议**：项目总览、角色档案、世界观、卷纲、章节、伏笔追踪、风格约束、一致性检查，都纳入同一工作流。

如果这个项目对你有帮助，欢迎点一个 **Star** ⭐，这会显著帮助项目被更多创作者看到。

---

## 🎯 功能亮点

| 特性 | 说明 |
|------|------|
| 📁 **项目结构设计** | 总览、角色、世界观、卷纲、章节、追踪文件一体化 |
| 👤 **角色档案维护** | 声线、行为模式、关系网络、弧线、当前状态 |
| 🌍 **世界观维护** | 规则、限制、代价、历史、社会、空间关系 |
| 📖 **卷纲与章节生产** | 先骨架 → 再正文 → 再润色 → 再质检 → 再同步 |
| 🔍 **一致性检查** | 角色、世界、术语、因果、时间线、伏笔状态 |
| 🎣 **伏笔追踪** | 埋设、回收、跨卷呼应、状态同步 |

---

## 🆚 与其他方案的区别

| 特性 | novel-master | 普通提示词 | 通用写作工具 |
|------|:------------:|:----------:|:------------:|
| 长篇一致性检查 | ✅ | ❌ | 部分 |
| 角色状态追踪 | ✅ | ❌ | ❌ |
| 伏笔管理 | ✅ | ❌ | ❌ |
| 工作区优先 | ✅ | ❌ | 部分 |
| 可执行规则 | ✅ | 部分 | 部分 |
| 跨卷同步 | ✅ | ❌ | ❌ |

---

## 📸 效果展示

### 角色档案生成

<details>
<summary>点击展开完整示例</summary>

```markdown
# 林栖月

## 1. 基本信息

- **姓名**: 林栖月
- **别名**: 阿栖（祖母称）、林三（旧时编号）
- **性别**: 女
- **年龄**: 23岁
- **外貌特征**: 左眉骨有一道浅疤 / 常穿灰青色对襟短袄 / 指节有长期握刀的茧
- **身份 / 职业**: 镖局验货师 / 前药堂学徒
- **阵营**: 中立偏守序
- **社会位置**: 边陲镖局中层，有验货签字权但无决策权

## 2. 性格与行为

- **核心性格**: 沉静、算账、护短
- **行为模式**: 
  - 压力下先沉默观察，再出手截断最危险的选项
  - 被背叛时不会当场翻脸，但会记住并在清算日连本带利讨回
  - 被示好时会先怀疑动机，确认无陷阱后才慢慢接受
- **动机**: 查清三年前药堂大火的真相，找到失踪的师父
- **价值观底线**: 不出卖同伴，不在验货单上作假
- **盲区 / 认知偏差**: 对"制度公正"仍有残留信任，容易被利用这一点
- **情感弱点**: 祖母的安危，师父的下落

## 3. 声线与说话风格

- **语气基调**: 短句为主，不废话，习惯用反问结尾
- **口头禅 / 高频词**: "先算账""验过再说""你确定？"
- **句长倾向**: 中短句为主，关键时刻会突然拉长句子施压
- **称谓习惯**: 直呼其名，不叫敬称，对长辈也只是"您"
- **不会说的话**: "相信我""我会保护你""没关系"

## 4. 能力与装备

- **当前境界**: 三品验药师 / 二品刀客
- **核心能力**: 药材辨识（可辨真假、产地、炮制手法）、短刀近战
- **武器 / 关键道具**: 祖传短刀（刀身有暗纹）、验药银针
- **弱点 / 限制**: 
  - 左眼旧伤，强光下视力下降
  - 使用全力后需静养半日，否则手抖影响验药精度
- **战斗风格**: 近身快刀，不求好看只求最快解决
- **成长潜力**: 师父失踪前传授的"听药"心法尚未练成

## 5. 关系网络

- **与主角关系**: 临时搭档，因同一批货物结盟，信任度中等
- **与其他角色关系**:
  - 祖母：唯一亲人，每周探望一次
  - 镖局老板：利益绑定，老板需要她的验货能力
  - 药堂旧同事：疏远，怀疑有人放火
- **情感锚点**: 祖母的药罐、师父留下的验药笔记
- **欠债关系**: 欠镖局老板三年工钱（换取祖母的医药费）
- **秘密**: 当年药堂大火她本可以救出师父，但选择了先救人质

## 6. 角色弧线与剧情定位

- **叙事功能**: 主角的镜像对照——同样背负旧账，但选择不同
- **出场状态**: 已在镖局工作三年，表面平静实则等待时机
- **核心矛盾**: 查真相 vs 还清债务 vs 保护祖母
- **转折条件**: 发现镖局老板与药堂大火有关
- **预期终局方向**: 与主角并肩作战后，选择留下而非离开
- **关键事件经历**: 药堂大火（三年前）、入镖局（三年前）、遇主角（当前）
- **伏笔 / 悬念**: 验药笔记的最后一页被撕掉了

## 7. 当前状态

- **出场章节**: 第 1 章
- **当前状态**: 活跃 / 正在调查线索
- **已完成的变化**: 与主角建立初步信任
- **待解决的问题**: 找到验药笔记缺失的一页
```

</details>

### 章节骨架生成

<details>
<summary>点击展开完整示例</summary>

```markdown
# 第 7 章：暗账

**开场锚点**: 三月初三/镖局后院/林栖月视角/查验一批来路不明的药材

**核心冲突**: 林栖月发现药材中夹带了禁品，必须在签字和举报之间做出选择

**剧情节点**:

1. **开场**（推进点）: 林栖月按例验货，发现这批"川贝"的断面色泽不对
2. **发展**（认知变化点）: 用银针试探，针尖发黑——药材被炮制过，表面是贝母，内里是禁用的"醉心散"
3. **转折**（关系变化点）: 送货人暗示这是老板亲自接的单，问她"想不想清债"
4. **高潮**（冲突升级）: 
   - 林栖月沉默三息后说"验不过"，送货人拔刀
   - 她用验药银针刺中对方手腕，夺门而出
5. **收束**（代价）: 她没回住处，而是直接去了祖母那里——她知道镖局的人会先找她的软肋

**章末钩子**: 祖母的院子里站着一个陌生男人，手里拿着她师父的验药笔记。

---

## 正文

（此处为 2200-3000 字正文）

---

## 记忆更新清单

- **角色状态**: 林栖月与镖局决裂，进入逃亡状态
- **关系变化**: 林栖月与主角尚未碰面，但主角将在下一章收到镖局的追杀令
- **伏笔新增**: 师父的验药笔记出现在陌生人手中，暗示师父可能还活着
- **阶段目标推进**: 从"查清药堂大火真相"转向"找到师父"

## 本章备注

- 禁品"醉心散"将在第 15 章再次出现，与主线阴谋有关
- 陌生男人身份待定，可能是反派势力，也可能是中立势力
- 林栖月的祖母暂不介入主线，但作为情感锚点需要保护
```

</details>

### 世界观规则示例

<details>
<summary>点击展开完整示例</summary>

```markdown
# 药行规则

## 核心规则

### 1. 验药师签字权

- **规则**: 验药师对货物真伪有最终签字权，签字后货物可通行
- **限制**: 验药师必须持有"验药牌"，无牌签字视为伪造文书
- **代价**: 签字后发现货物有问题的，验药师需承担连带责任，最高可判流放
- **破坏后果**: 若有人强逼验药师签字，验药师可向药行总会申诉，查实后逼签者永久逐出药行

### 2. 禁品清单

- **规则**: 醉心散、蚀骨散、迷魂香等列为禁品，禁止买卖
- **限制**: 禁品仅限官府药库存放，民间持有即犯罪
- **代价**: 持有禁品者，轻则罚没家产，重则处死
- **破坏后果**: 药行内部若有人包庇禁品交易，一经查实，整个分舵被取缔

### 3. 药堂准入

- **规则**: 进入药堂学习需有保人，学徒期间不得私自外出
- **限制**: 学徒期限最短三年，期间不可转投他堂
- **代价**: 违约学徒需赔偿药堂双倍培养费用
- **破坏后果**: 保人需承担连带责任，可能被列入药行黑名单

## 稀缺资源

| 资源 | 获取方式 | 使用代价 | 限制 |
|------|----------|----------|------|
| 验药牌 | 药行总会考核 | 每年需完成 10 次公益验货 | 不得转借、不得伪造 |
| 真药配方 | 师徒传承或药行拍卖 | 配方持有人需向药行登记 | 登记后其他药堂可购买使用权 |
| 稀有药材 | 产地直采或黑市 | 价格极高，且有假货风险 | 部分需官府批文 |

## 可验证场景

1. **验药场景**: 任何验药场景都应体现签字权的规则和代价
2. **禁品场景**: 发现禁品后，角色应面临持有风险和选择
3. **药堂场景**: 学徒违反规则后，应受到明确惩罚
```

</details>

---

## 👥 适合谁

| 适合 | 不适合 |
|------|--------|
| ✅ 正在写长篇网文（50万字+）的作者 | ❌ 只想写短篇/文案的人 |
| ✅ 需要维护复杂人物关系和剧情线的创作者 | ❌ 不想维护项目结构的人 |
| ✅ 使用 AI 辅助创作但苦于输出不一致的人 | ❌ 期望一键生成完整小说的人 |
| ✅ 有一定写作基础，追求结构化创作的人 | ❌ 完全不想学习新工具的人 |

---

## 🚀 快速开始

### 在支持 skills 的工具中使用（推荐）

如果你使用的是支持 skills 的工具（如 OpenClaw、VS Code Agent 等），安装后直接在对话中调用即可：

**第一步：创建新项目**

```text
请用 novel-master 帮我创建一部长篇小说项目：
- 书名：我的小说
- 类型：东方玄幻
- 核心创意：少年为救母亲卷入神秘规则世界
- 预计规模：600章，20卷
```

AI 会自动：
- 创建项目目录结构
- 生成 `00-overview.md` 项目总览
- 生成 `rules.md` 项目规则
- 创建角色、世界观、卷纲等目录

**第二步：逐步完善**

```text
# 生成项目规则
请根据上述方向，生成 rules.md，包含文风、称谓、术语、禁忌

# 生成主角档案
请生成主角的完整角色档案

# 生成世界观
请生成世界观设定，每条规则写清限制、代价、破坏后果

# 生成第一卷大纲
请生成第1卷大纲，包含卷主题、阶段目标、章节表

# 写第一章
请为第1章生成骨架，然后扩写正文
```

**完整工作流程：**

| 步骤 | 命令示例 |
|:----:|----------|
| 1️⃣ 创建项目 | `请用 novel-master 帮我创建一部长篇小说项目...` |
| 2️⃣ 生成规则 | `请生成 rules.md，包含文风、称谓、术语` |
| 3️⃣ 建立角色 | `请生成主角/配角的角色档案` |
| 4️⃣ 构建世界观 | `请生成世界观，规则需包含限制/代价/破坏后果` |
| 5️⃣ 规划卷纲 | `请生成第X卷大纲` |
| 6️⃣ 写章节 | `请为第X章生成骨架，然后扩写` |
| 7️⃣ 检查一致性 | `请检查第X-Y章的一致性` |

---

## 📦 安装

### OpenClaw（推荐）

**macOS / Linux:**

```bash
mkdir -p ~/.agents/skills
git clone https://github.com/dashenbibi/novel-master.git ~/.agents/skills/novel-master
```

**Windows (PowerShell):**

```powershell
mkdir -Force "$HOME\.agents\skills"
git clone https://github.com/dashenbibi/novel-master.git "$HOME\.agents\skills\novel-master"
```

**Windows (CMD):**

```cmd
mkdir "%USERPROFILE%\.agents\skills"
git clone https://github.com/dashenbibi/novel-master.git "%USERPROFILE%\.agents\skills\novel-master"
```

安装完成后，重启 OpenClaw 或刷新技能列表。

### 支持 Skills 的 VS Code Agent 环境

**macOS / Linux:**

```bash
mkdir -p ~/.agents/skills
git clone https://github.com/dashenbibi/novel-master.git ~/.agents/skills/novel-master
```

**Windows (PowerShell):**

```powershell
mkdir -Force "$HOME\.agents\skills"
git clone https://github.com/dashenbibi/novel-master.git "$HOME\.agents\skills\novel-master"
```

**Windows (CMD):**

```cmd
mkdir "%USERPROFILE%\.agents\skills"
git clone https://github.com/dashenbibi/novel-master.git "%USERPROFILE%\.agents\skills\novel-master"
```

然后重启 VS Code 窗口，或执行 "Reload Window"。

### 手动安装（不会用 Git）

1. 在 GitHub 页面点击 "Code" → "Download ZIP"
2. 解压后重命名为 `novel-master`
3. 把目录放到：
   - **macOS / Linux**: `~/.agents/skills/`
   - **Windows**: `%USERPROFILE%\.agents\skills\`（如 `C:\Users\你的用户名\.agents\skills\`）
4. 重启工具并测试调用

---

## 💡 示例用法

### 搭项目

```text
请用 novel-master 帮我规划一部长篇东方玄幻，先输出项目方向、核心卖点、主线目标，再给出建议的目录结构。
```

### 补角色档案

```text
请根据现有主线，把女二号角色档案补全到可执行状态，重点补声线、行为模式、关系网络和转折条件。
```

### 写章节骨架

```text
请为第 18 章生成骨架，必须包含开场锚点、核心冲突、关系变化点、认知变化点和章末钩子。
```

### 做一致性检查

```text
请检查第 21 章到第 28 章在角色状态、世界规则和伏笔状态上的冲突，只列问题，不直接改文。
```

---

## 📚 文档导航

| 文档 | 说明 |
|------|------|
| [SKILL.md](SKILL.md) | 核心规则与执行协议 |
| [examples/minimal-workspace/](examples/minimal-workspace/) | 最小工作区示例 |
| [references/](references/) | 模板与规范参考 |
| [assets/templates/](assets/templates/) | 文件模板 |
| [CHANGELOG.md](CHANGELOG.md) | 版本变更记录 |
| [CONTRIBUTING.md](CONTRIBUTING.md) | 贡献指南 |

---

## 🗺️ Roadmap

### Phase 1: 功能增强

- [ ] 一致性检查增强（不只是文件存在性）
- [ ] 输出验证（验证是否符合 SKILL.md 标准）
- [ ] 交互模式（引导式创建项目）

### Phase 2: 模板资源升级

- [ ] 角色模板变体（主角/配角/反派/群像）
- [ ] 世界观模板变体（东方玄幻/都市/科幻/悬疑）
- [ ] 章节骨架模板（对话章/动作章/转折章/过场章）
- [ ] 卷纲模板（单卷/系列/连载规划）

### Phase 3: 更多示例

- [ ] 东方玄幻完整示例项目（3卷）
- [ ] 都市悬疑完整示例项目（1卷）
- [ ] 回归测试样例（故意错误示例用于检验一致性检查）

### Phase 4: 生态扩展

- [ ] VS Code 插件（语法高亮、模板补全、一致性提示）
- [ ] Obsidian 插件（与笔记软件集成）
- [ ] 导出功能（Word/EPUB 格式）
- [ ] Web UI（可视化管理项目结构）

> 💡 这些只是头脑风暴，欢迎在 [Issues](https://github.com/dashenbibi/novel-master/issues) 讨论你想要的功能！

---

## 🤝 贡献

提交改动前，请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。

优先欢迎：

- 提高结构清晰度和可执行性
- 补充长篇创作中的一致性检查规则
- 改进模板但不引入具体作品私货
- 增加脱敏示例与回归样例

---

## 📄 许可证

本仓库采用 [MIT License](LICENSE)。

**注意**：使用本 skill 生成的小说正文、人物设定、世界观文本，其版权归作者所有，不自动继承本仓库许可证。

---

## ⭐ Star History

如果这个项目对你有帮助，欢迎 Star 支持！

<p align="center">
  <a href="https://www.star-history.com/#dashenbibi/novel-master&Date">
    <img src="https://api.star-history.com/svg?repos=dashenbibi/novel-master&type=Date" alt="Star History Chart">
  </a>
</p>

---

<p align="center">
  Made with ❤️ for Chinese long-form fiction writers
</p>