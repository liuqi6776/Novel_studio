const fs = require('fs');
const path = require('path');

const filePath = '/novel_repo/04-chapters/chapter-04.md';
let content = fs.readFileSync(filePath, 'utf-8');

// The replacements for the valid text chunk (lines 64 to 142)
const replacements = [
    [
        "通体赤红的异灵——赤焰蛇。", 
        "本该是暗青色、此刻却被火毒烧得通体赤红的异灵——阴潭红斑蛇。"
    ],
    [
        "那条平时作为他装逼利器的赤焰蛇", 
        "那条被强行命名为“赤焰”的变异斑蛇"
    ],
    [
        "【赤焰蛇】\n【品阶：一阶异灵】\n【状态异常：火毒过载（濒临自爆）。此灵本主阴寒剧毒，宿主却为了追求火焰杀伤力，长期强行喂食高阶火灵丹，导致属性倒冲，散热回路彻底崩坏。】\n【致命预警：此时该灵的核心温度已达极限，下颚第三片逆鳞处的‘气门’已被火毒撑成紫黑色。若在一炷香内再次强行调用灵力发动火系攻击，气门必将爆裂，火毒将顺着契约链接瞬间反噬宿主，轻则经脉尽毁，重则当场焚亡。】", 
        "【阴潭红斑蛇（火毒畸变）】\n【品阶：一阶异灵】\n【状态异常：火毒过载（濒临自爆）。此灵本生于深山阴潭，主阴寒剧毒，宿主却嫌弃水系杀伤力不足，长期强行喂食高阶火灵丹，导致属性倒冲，自身经脉与阴寒毒囊彻底崩坏。】\n【致命预警：此时该灵的核心温度已达极限，下颚第三片逆鳞处的‘排气阀’已被火毒撑成紫黑色。若在一炷香内再次强行调用灵力发动火系攻击，逆鳞必将爆裂，火毒将顺着契约链接瞬间反噬宿主，轻则经脉尽毁，重则当场焚亡。】"
    ],
    [
        "本是沼泽里主修阴毒的红斑蛇，非要喂火灵丹催生赤焰。属性相冲，经脉逆行", 
        "本是沼泽里主修寒毒的红斑阴蛇，你非要喂火灵丹催生烈焰。属性相冲，经脉逆行"
    ],
    [
        "这几天赤焰蛇确实一到晚上就发狂自残", 
        "这几天他的灵宠确实一到晚上就发狂自残"
    ],
    [
        "“赤焰，给我咬瞎他的狗眼！”", 
        "“去，给我咬瞎他的狗眼！”"
    ],
    [
        "得到指令的赤焰蛇被迫强行调动体内的灵力", 
        "得到指令的阴潭红斑蛇被迫强行调动体内的灵力"
    ],
    [
        "张开滴漏着滚烫毒液的獠牙", 
        "张开滴漏着滚烫沸腾毒液的獠牙"
    ],
    [
        "“火囊倒灌，经脉自焚。”", 
        "“阴毒遇火，经脉自焚。”"
    ],
    [
        "就在赤焰蛇距离林渊的鼻尖", 
        "就在阴潭红斑蛇距离林渊的鼻尖"
    ],
    [
        "狂暴冲突的灵力，发出“咔哒”", 
        "狂暴冲突的灵力和毒火，发出“咔哒”"
    ],
    [
        "赤焰蛇的口中并没有喷出火焰，反而是一股浓郁到极致的黑色火毒", 
        "红斑蛇的口中并没有喷出火焰，反而是一股相互冲刷到极致的墨红色沸腾毒液"
    ],
    [
        "“嘶叽——！！！”赤焰蛇发出了凄厉到极点的惨叫", 
        "“嘶叽——！！！”阴潭红斑蛇发出了凄厉到极点的惨叫"
    ],
    [
        "为什么赤焰蛇在马上就要咬到林渊的瞬间突然爆体？", 
        "为什么原本气势汹汹的变异灵蛇在马上就要咬到林渊的瞬间突然爆体？"
    ],
    [
        "强行斩断了与赤焰蛇的灵魂契约。顿时，地上的赤焰蛇停止了抽搐", 
        "强行斩断了灵魂契约。顿时，地上的阴潭红斑蛇停止了抽搐"
    ],
    [
        "化为一滩散发着恶臭的死肉", 
        "化为一滩散发着刺鼻酸腐恶臭的死肉"
    ],
    [
        "现在火毒已经侵入你的少阳经脉", 
        "现在火毒和阴寒反噬已经侵入你的少阳经脉"
    ]
];

// First, perform text replacements on the whole file
for (let [oldStr, newStr] of replacements) {
    content = content.replace(oldStr, newStr);
}

// Second, remove the duplicated and corrupted section
let lines = content.split('\n');
let startIdx = -1;
let endIdx = -1;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('林渊没理会这些目光') && lines[i].includes('极度的恐慌和求生本能')) {
        startIdx = i;
        break;
    }
}

for (let i = startIdx + 1; i < lines.length; i++) {
    if (lines[i].includes('林渊没理会这些目光') && lines[i].includes('异样的冰冷波动')) {
        endIdx = i;
        break;
    }
}

if (startIdx !== -1 && endIdx !== -1) {
    lines.splice(startIdx, endIdx - startIdx);
}

fs.writeFileSync(filePath, lines.join('\n'));
console.log("Cleanup and refactoring complete!");
