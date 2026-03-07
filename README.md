# novel-master

> 仓库地址：`https://github.com/dashenbibi/novel-master.git`

[![GitHub stars](https://img.shields.io/github/stars/dashenbibi/novel-master?style=flat-square)](https://github.com/dashenbibi/novel-master/stargazers)
[![GitHub license](https://img.shields.io/github/license/dashenbibi/novel-master?style=flat-square)](https://github.com/dashenbibi/novel-master/blob/main/LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/dashenbibi/novel-master?style=flat-square)](https://github.com/dashenbibi/novel-master/releases)

面向中文长篇连载的结构化 AI writing skill（novel writing workflow）。

它不是一个“随便写点文案”的通用提示词集合，而是一套可执行的长篇创作协议：项目总览、角色档案、世界观、卷纲、章节、伏笔追踪、风格约束、一致性检查，都纳入同一工作流。

如果这个项目对你有帮助，欢迎点一个 Star，这会显著帮助项目被更多创作者看到。

## 10 秒看懂它做什么

输入：

```text
请用 novel-master 帮我规划一部长篇都市悬疑，先输出核心卖点、主线目标、前三卷推进表。
```

输出（结构化）：

- 项目方向与核心卖点
- 角色关系与冲突轴
- 世界规则与限制代价
- 分卷目标与章节推进
- 伏笔埋设与回收计划

## 为什么它更适合长篇

- 从“项目管理”而不是“单次出文”角度设计
- 强制跟踪角色状态、世界规则、术语一致性
- 支持跨章节伏笔追踪与回收检查
- 兼容工作区文件优先模式，便于长期连载维护

## 快速入口

- 新手安装：见 `README.md` 下方“常用工具安装与使用（小白版）”
- 先看示例：`examples/minimal-workspace/`
- 核心规则：`SKILL.md`
- 模板与规范：`references/` 与 `assets/templates/`

## 核心能力

- 长篇项目结构设计：总览、角色、世界观、卷纲、章节、追踪文件
- 项目专属规则生成：文风、称谓、术语、节奏、禁忌
- 角色档案维护：声线、行为模式、关系网络、弧线、当前状态
- 世界观维护：规则、限制、代价、历史、社会、空间关系
- 卷纲与章节生产：先骨架，再正文，再润色，再质检，再同步
- 一致性检查：角色、世界、术语、因果、时间线、伏笔状态

## 快速开始

### 方式一：在已有小说工作区中使用

当工作区内已经存在下列文件时，novel-master 会优先读取项目上下文，而不是凭空补设定：

- rules.md
- 00-overview.md
- 01-characters/
- 02-world/
- 03-volumes/
- 05-tracker/

推荐调用顺序：

1. 先定义项目方向、核心卖点、主线目标
2. 再建立角色、世界观、卷纲
3. 再生成章节骨架与正文
4. 再做润色、质检和同步

### 方式二：只把它当成结构化创作 skill 使用

如果你还没有完整工作区，也可以直接使用它完成：

- 角色档案设计
- 世界观补完
- 分卷大纲设计
- 章节骨架生成
- 跨章节一致性检查

但没有项目文件时，输出会更多依赖当前会话上下文，稳定性不如工作区模式。

## 示例用法

### 示例 1：搭项目

```text
请用 novel-master 帮我规划一部长篇东方悬疑玄幻，先输出项目方向、核心卖点、主线目标，再给出建议的目录结构。
```

### 示例 2：补角色档案

```text
请根据现有主线，把女二号角色档案补全到可执行状态，重点补声线、行为模式、关系网络和转折条件。
```

### 示例 3：写章节骨架

```text
请为第 18 章生成骨架，必须包含开场锚点、核心冲突、关系变化点、认知变化点和章末钩子。
```

### 示例 4：做一致性检查

```text
请检查第 21 章到第 28 章在角色状态、世界规则和伏笔状态上的冲突，只列问题，不直接改文。
```

## 最小示例

仓库提供了一套脱敏的最小工作区示例，用来展示 novel-master 推荐维护的基础文件形态：

- 项目总览
- 项目规则
- 角色档案
- 世界观
- 卷纲
- 章节
- 伏笔追踪

如果你第一次接触这个项目，建议先用最小示例理解它的工作方式，再决定是否接入自己的长篇项目。

## CLI

仓库包含一个轻量 CLI 入口：scripts/novel-cli.js。

当前 CLI 更接近“脚手架和占位输出”，适合快速创建项目目录、章节模板、卷纲模板，不等同于完整创作引擎。

主规范与 CLI/模板资源的当前差异，见 COMPATIBILITY.md。

已提供的命令包括：

- novel create
- novel outline
- novel chapter
- novel polish
- novel check

如果你要本地试用，可将 scripts/novel-cli.js 设为可执行文件，并放入 PATH。

依赖：

- Node.js

## 常用工具安装与使用（小白版）

下面给出最常见的使用方式。你不需要一次全懂，按步骤做即可。

### OpenClaw（推荐）

1. 安装基础环境

- 安装 Node.js（建议 18+）
- 安装 Git

2. 把 skill 放到技能目录

下面命令已使用真实仓库地址，可直接复制执行。

```bash
mkdir -p ~/.agents/skills
git clone https://github.com/dashenbibi/novel-master.git ~/.agents/skills/novel-master
```

如果你已经在本地有这个仓库，也可以直接复制整个目录到 `~/.agents/skills/novel-master`。

3. 重启 OpenClaw 或刷新技能列表

- 关闭并重新打开工具
- 或使用工具内的“重载/刷新 skills”功能（不同版本名称可能不同）

4. 验证是否生效

直接输入：

```text
请用 novel-master 帮我规划一部长篇都市悬疑，先输出项目方向和前三卷主线。
```

如果模型开始按“角色/世界观/卷纲/章节/伏笔”结构输出，说明安装成功。

### 支持 Skills 的 VS Code Agent 环境

如果你使用的是支持 skills 的 VS Code Agent 环境，通常也可以使用同一目录约定：

```bash
mkdir -p ~/.agents/skills
git clone https://github.com/dashenbibi/novel-master.git ~/.agents/skills/novel-master
```

然后重启 VS Code 窗口，或执行“Reload Window”后再测试调用。

### 不会用 Git 的手动安装方式

1. 在网页下载仓库 ZIP
2. 解压后重命名为 `novel-master`
3. 把目录放到 `~/.agents/skills/`
4. 重启工具并测试调用

### 30 秒自检清单

如果你是第一次安装，按这 5 条快速确认：

1. 存在文件 `~/.agents/skills/novel-master/SKILL.md`
2. `SKILL.md` 顶部字段合法（如 `name`、`description`、`metadata`）
3. 已重启工具或刷新 skills 列表
4. 测试提示词可触发结构化输出（角色/世界观/卷纲/章节/伏笔）
5. `scripts/novel-cli.js` 需要时可执行，且本机有 Node.js

### 常见问题

- 提示找不到 skill：检查目录是否为 `~/.agents/skills/novel-master/SKILL.md`
- 提示字段不支持：检查 `SKILL.md` 头部字段，只使用规范支持字段
- 输出不稳定：先在项目目录提供 `rules.md`、`00-overview.md`、`01-characters/` 等上下文文件
- CLI 命令不可用：确认 Node.js 可用，并且 `scripts/novel-cli.js` 有执行权限

## 设计原则

- 工作区优先：已有项目文件优先于 skill 默认值
- 可执行优先：规则必须能落实到正文，而不是空泛建议
- 同步优先：角色、世界、卷纲、伏笔要能彼此回写
- 结构优先：先控制项目结构，再追求文本细节
- 审查优先：做质检时先报问题，再决定是否修复

## 开源说明

本仓库建议将“skill 定义、模板、脚本”与“由 skill 生成的小说正文内容”分开看待。

- 仓库中的代码、模板、说明文档应采用明确开源许可证
- 使用本 skill 生成的小说正文、人物设定、世界观文本，不应默认自动继承仓库许可证

本仓库当前采用 MIT 许可证，正式文本见 LICENSE。

## 贡献

提交改动前，建议先阅读 CONTRIBUTING.md。

优先欢迎以下类型的贡献：

- 提高结构清晰度和可执行性
- 补充长篇创作中的一致性检查规则
- 改进模板但不引入具体作品私货
- 增加脱敏示例与回归样例

## 版本记录

版本变更见 CHANGELOG.md。
