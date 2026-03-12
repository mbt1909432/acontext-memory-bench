# 🧠 Acontext Memory Benchmark

基于 [LongMemEval](https://arxiv.org/abs/2410.10813) (ICLR 2025) 基准测试，评估 Acontext 在 AI Agent 长期记忆管理方面的能力。

## 📊 项目概述

- **500** 个测试问题
- **5** 种核心记忆能力
- **40+** 历史会话/问题

## 🧠 测试能力

| 能力 | 描述 |
|------|------|
| 信息提取 | 从历史对话中提取特定信息 |
| 多会话推理 | 跨多个对话进行信息整合 |
| 知识更新 | 处理用户偏好的变化 |
| 时间推理 | 基于时间戳进行推理 |
| 弃权判断 | 识别无法回答的问题 |

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 本地运行
npm run dev

# 构建
npm run build
```

## 📁 项目结构

```
├── src/app/
│   ├── page.tsx      # 主页面
│   ├── layout.tsx    # 布局
│   └── globals.css   # 样式
├── package.json
└── README.md
```

## 🔗 相关链接

- [LongMemEval Paper](https://arxiv.org/abs/2410.10813)
- [Acontext Documentation](https://docs.acontext.io)
- [Acontext GitHub](https://github.com/memodb-io/Acontext)

## 📄 License

MIT
