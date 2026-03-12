import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">🧠 Acontext Memory Bench</Link>
          <div className="nav-links">
            <a href="#overview" className="nav-link">概述</a>
            <a href="#capabilities" className="nav-link">测试能力</a>
            <a href="#architecture" className="nav-link">架构</a>
            <a href="#plan" className="nav-link">执行计划</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Acontext 长期记忆能力测试</h1>
        <p>基于 LongMemEval (ICLR 2025) 基准测试，客观评估 Acontext 在 AI Agent 记忆管理方面的能力</p>
        <p className="hero-meta">文档日期：2026年3月12日 · 状态：准备就绪</p>
      </section>

      <div className="container">
        {/* Overview Section */}
        <section id="overview">
          <h2>📋 项目背景</h2>

          <div className="card card-gradient">
            <h3>🎯 项目目标</h3>
            <p>使用学术界公认的长期记忆基准测试 LongMemEval，客观评估 Acontext 在 AI Agent 记忆管理方面的能力，为产品优化和市场推广提供数据支撑。</p>
          </div>

          <h3>什么是 LongMemEval？</h3>
          <p>LongMemEval 是 ICLR 2025 发表的基准测试，专门用于评估聊天助手的<strong>长期记忆能力</strong>。它模拟真实场景中用户与 AI 的多轮对话历史，测试 AI 能否准确回忆并利用历史信息回答问题。</p>

          {/* Metrics */}
          <div className="grid grid-3">
            <div className="card metric">
              <div className="metric-value">500</div>
              <div className="metric-label">测试问题</div>
            </div>
            <div className="card metric">
              <div className="metric-value">5</div>
              <div className="metric-label">核心能力维度</div>
            </div>
            <div className="card metric">
              <div className="metric-value">40+</div>
              <div className="metric-label">历史会话/问题</div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities">
          <h2>🧠 测试的核心能力</h2>

          <div className="card">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>能力维度</th>
                    <th>描述</th>
                    <th>示例场景</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="tag tag-blue">信息提取</span></td>
                    <td>从历史对话中提取特定信息</td>
                    <td>"我之前说的毕业院校是哪所？"</td>
                  </tr>
                  <tr>
                    <td><span className="tag tag-green">多会话推理</span></td>
                    <td>跨多个对话进行信息整合</td>
                    <td>"对比我第一次和第三次提到的偏好"</td>
                  </tr>
                  <tr>
                    <td><span className="tag tag-orange">知识更新</span></td>
                    <td>处理用户偏好的变化</td>
                    <td>"我现在喜欢什么？"（之前改过）</td>
                  </tr>
                  <tr>
                    <td><span className="tag tag-purple">时间推理</span></td>
                    <td>基于时间戳进行推理</td>
                    <td>"上次修改密码是几天前？"</td>
                  </tr>
                  <tr>
                    <td><span className="tag tag-blue">弃权判断</span></td>
                    <td>识别无法回答的问题</td>
                    <td>"我的猫叫什么？"（从未提过）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Test Flow Section */}
        <section>
          <h2>🔬 测试方案</h2>

          <h3>测试流程</h3>
          <div className="flow">
            <div className="flow-item">📥 加载测试数据</div>
            <span className="flow-arrow">→</span>
            <div className="flow-item">💾 存入 Acontext</div>
            <span className="flow-arrow">→</span>
            <div className="flow-item">🧠 学习/检索</div>
            <span className="flow-arrow">→</span>
            <div className="flow-item">❓ 回答问题</div>
            <span className="flow-arrow">→</span>
            <div className="flow-item">📊 评估结果</div>
          </div>

          <h3>对比实验设计</h3>
          <div className="card">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>实验组</th>
                    <th>记忆方案</th>
                    <th>目的</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="tag tag-gray">基线组</span></td>
                    <td>直接将全部历史传给 LLM</td>
                    <td>建立性能上限参考</td>
                  </tr>
                  <tr>
                    <td><span className="tag tag-blue">实验组</span></td>
                    <td>使用 Acontext Session Storage</td>
                    <td>测试基础存储能力</td>
                  </tr>
                  <tr>
                    <td><span className="tag tag-green">实验组+</span></td>
                    <td>使用 Acontext Learning Space</td>
                    <td>测试记忆提取与技能生成</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3>评估指标</h3>
          <ul>
            <li><strong>准确率 (Accuracy)</strong>：正确回答的问题比例</li>
            <li><strong>分维度得分</strong>：5 种能力各自的准确率</li>
            <li><strong>Token 消耗</strong>：不同方案的 API 成本对比</li>
          </ul>
        </section>

        {/* Architecture Section */}
        <section id="architecture">
          <h2>🏗️ 技术架构</h2>

          <div className="arch">
            <div className="arch-box">
              <div className="arch-title">LongMemEval 数据集</div>
              <div className="arch-content">500个问题 + 历史对话 + 标准答案</div>
            </div>
            <div className="arch-arrow">↓</div>
            <div className="arch-box">
              <div className="arch-title">Step 1: Session Storage</div>
              <div className="arch-content">存储用户-助手历史对话（按时间戳组织）</div>
            </div>
            <div className="arch-arrow">↓</div>
            <div className="arch-box">
              <div className="arch-title">Step 2: Learning Space</div>
              <div className="arch-content">从对话中自动提取用户偏好、事实、技能</div>
            </div>
            <div className="arch-arrow">↓</div>
            <div className="arch-box">
              <div className="arch-title">Step 3: LLM (GPT-4o)</div>
              <div className="arch-content">基于记忆回答问题</div>
            </div>
            <div className="arch-arrow">↓</div>
            <div className="arch-box">
              <div className="arch-title">评估系统</div>
              <div className="arch-content">GPT-4o 作为裁判，判断答案正确性</div>
            </div>
          </div>
        </section>

        {/* Plan Section */}
        <section id="plan">
          <h2>📅 执行计划</h2>

          <div className="card">
            <div className="timeline">
              <div className="timeline-item done">
                <div className="timeline-title">Phase 1: 环境准备</div>
                <div className="timeline-desc">下载 LongMemEval 数据集、配置测试脚本、验证 API 连接</div>
              </div>
              <div className="timeline-item done">
                <div className="timeline-title">Phase 2: 基线测试</div>
                <div className="timeline-desc">不使用 Acontext，直接将历史对话传给 LLM，建立性能基线</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-title">Phase 3: Acontext 集成测试</div>
                <div className="timeline-desc">使用 Acontext Session Storage 存储历史，测试记忆检索能力</div>
              </div>
              <div className="timeline-item pending">
                <div className="timeline-title">Phase 4: Learning Space 测试</div>
                <div className="timeline-desc">使用 Learning Space 自动提取技能/记忆，测试高级记忆能力</div>
              </div>
              <div className="timeline-item pending">
                <div className="timeline-title">Phase 5: 结果分析与报告</div>
                <div className="timeline-desc">对比各组实验数据，生成测试报告和优化建议</div>
              </div>
            </div>
          </div>
        </section>

        {/* Expected Results */}
        <section>
          <h2>📈 预期成果</h2>

          <div className="card">
            <ol>
              <li><strong>量化报告</strong>：Acontext 在 LongMemEval 上的准确率数据</li>
              <li><strong>能力画像</strong>：5 个维度的能力雷达图</li>
              <li><strong>对比分析</strong>：与基线方案的性能对比</li>
              <li><strong>优化建议</strong>：基于测试结果的产品改进方向</li>
              <li><strong>营销素材</strong>：可用于市场推广的测试数据</li>
            </ol>
          </div>
        </section>

        {/* Resources */}
        <section>
          <h2>💰 资源需求</h2>

          <div className="card">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>资源</th>
                    <th>用途</th>
                    <th>预估成本</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>OpenAI API Key</td>
                    <td>LLM 推理 + 答案评估</td>
                    <td>~$50-100 (500条测试)</td>
                  </tr>
                  <tr>
                    <td>Acontext API Key</td>
                    <td>记忆存储与检索</td>
                    <td>已有</td>
                  </tr>
                  <tr>
                    <td>计算资源</td>
                    <td>运行测试脚本</td>
                    <td>本地/云服务器</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{textAlign: 'center', padding: '60px 0'}}>
          <h2>开始测试</h2>
          <p style={{marginBottom: '24px'}}>准备好运行 Acontext 记忆能力测试了吗？</p>
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center'}}>
            <a href="https://github.com/mbt1909432/acontext-memory-bench" className="btn btn-primary">
              查看 GitHub 仓库
            </a>
            <a href="https://docs.acontext.io" className="btn btn-outline">
              Acontext 文档
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Acontext Memory Benchmark · 基于 LongMemEval (ICLR 2025) · 2026</p>
      </footer>
    </main>
  );
}
