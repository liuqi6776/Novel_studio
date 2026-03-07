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

## 📸 效果展示

### 角色档案生成

<details>
<summary>点击展开示例</summary>

```markdown
## 1. 基本信息
- 姓名: 沈言
- 身份: 灯阶守夜人 / 前审议庭记录官
- 阵营: 中立偏秩序
- 社会位置: 边缘执行层，有信息渠道但无实权

## 2. 性格与行为
- 核心性格: 冷硬、算账、保底线
- 行为模式: 压力下先保命再保人；被背叛时记账不翻脸
- 动机: 查清旧协议与母亲记忆的关系
- 价值观底线: 不出卖同伴
- 盲区: 对制度仍有幻想

## 3. 声线与说话风格
- 语气基调: 短句先手，偏命令式
- 口头禅: "算账""先说代价"
- 不会说的话: "相信我""我会保护你"
```

</details>

### 章节骨架生成

<details>
<summary>点击展开示例</summary>

```markdown
# 第 18 章：灰巷低照

**开场锚点**: 时间/灰巷/陆澄视角/通过挂名契约进入清账体系

**核心冲突**: 陆澄被标记为转壳预审，必须在三日内完成抵押补齐

**剧情节点**:
1. 灰巷契约签署，记忆抵押生效
2. 低照审讯启动，陈禾签名出现在预审簿
3. 陆澄发现挂名壳可转的漏洞线索
4. 宁栖以额外代价换取同行权限
5. 誓约卷送名单墙备案，时间窗口收紧

**章末钩子**: 名单墙复核令启动，判红加码
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

### 方式一：在已有小说工作区中使用

当工作区内已经存在下列文件时，novel-master 会优先读取项目上下文：

```
your-novel/
├── rules.md           # 项目专属规则
├── 00-overview.md     # 项目总览
├── 01-characters/     # 角色档案
├── 02-world/          # 世界观设定
├── 03-volumes/        # 分卷大纲
├── 04-chapters/       # 章节内容
└── 05-tracker/        # 追踪表
```

推荐调用顺序：

1. 先定义项目方向、核心卖点、主线目标
2. 再建立角色、世界观、卷纲
3. 再生成章节骨架与正文
4. 再做润色、质检和同步

### 方式二：只当成结构化创作 skill 使用

如果你还没有完整工作区，也可以直接使用它完成：

- 角色档案设计
- 世界观补完
- 分卷大纲设计
- 章节骨架生成
- 跨章节一致性检查

> ⚠️ 没有项目文件时，输出会更多依赖当前会话上下文，稳定性不如工作区模式。

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

## 🖥️ CLI

仓库包含一个轻量 CLI 入口：

```bash
# 创建新项目
novel create <书名> <类型> <核心创意>

# 生成卷大纲
novel outline <项目> <卷号>

# 生成章节模板
novel chapter <项目> <章号> <标题>

# 润色章节
novel polish <项目> <章号>

# 一致性检查
novel check <项目> <起始章>-<结束章>
```

> ⚠️ 当前 CLI 定位为**轻量脚手架**，而非完整创作引擎。详见 [COMPATIBILITY.md](COMPATIBILITY.md)。

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
| [COMPATIBILITY.md](COMPATIBILITY.md) | 主规范与 CLI 差异说明 |

---

## 🗺️ Roadmap

- [ ] CLI 追平主规范（完整同步流程）
- [ ] 模板资源升级
- [ ] 更多示例项目
- [ ] VS Code 插件支持
- [ ] Web UI（可选）

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