export default function Home() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="爪爪星球宠物洗护首页">
          <span className="brand-mark">爪</span>
          <span>爪爪星球洗护</span>
        </a>
        <nav className="nav" aria-label="页面导航">
          <a href="#services">服务</a>
          <a href="#pricing">套餐</a>
          <a href="#process">流程</a>
          <a href="#booking">预约</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="宠物洗护首页横幅">
          <div className="hero-carousel" aria-hidden="true">
            <div className="hero-slide" />
            <div className="hero-slide" />
            <div className="hero-slide" />
          </div>
          <div className="hero-inner">
            <div className="eyebrow">专业洗护 · 温柔安抚 · 可预约接送</div>
            <h1>让毛孩子洗得干净，也洗得安心</h1>
            <p>
              为猫咪和狗狗提供基础洗护、精修造型、皮毛护理和除味护理。独立消毒工具，一宠一巾，全程可视化服务记录。
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#booking">
                立即预约
              </a>
              <a className="btn btn-secondary" href="#pricing">
                查看套餐
              </a>
            </div>
            <div className="quick-stats" aria-label="门店数据">
              <div className="stat">
                <strong>30+</strong>
                <span>分钟温和洗护起</span>
              </div>
              <div className="stat">
                <strong>1:1</strong>
                <span>专属洗护师陪伴</span>
              </div>
              <div className="stat">
                <strong>98%</strong>
                <span>回访满意度</span>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-head">
            <h2>洗护服务</h2>
            <p>从日常清洁到精致造型，每一步都围绕宠物皮肤状态、毛发类型和情绪反应来安排。</p>
          </div>
          <div className="service-grid">
            <article className="card">
              <div className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4 13h16" />
                  <path d="M5 13l1.2 6h11.6L19 13" />
                  <path d="M8 13V7a4 4 0 0 1 8 0v6" />
                  <path d="M9 19v2" />
                  <path d="M15 19v2" />
                </svg>
              </div>
              <h3>基础香波洗护</h3>
              <p>低刺激香波清洁、吹干梳理、耳眼护理、脚底毛修剪和指甲打磨。</p>
              <ul>
                <li>适合日常清洁维护</li>
                <li>按毛量调节吹风温度</li>
              </ul>
            </article>
            <article className="card">
              <div className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4 14c4-7 12-7 16 0" />
                  <path d="M8 14v5" />
                  <path d="M16 14v5" />
                  <path d="M10 9l2-3 2 3" />
                  <path d="M9 19h6" />
                </svg>
              </div>
              <h3>精修造型</h3>
              <p>根据犬种、毛量和主人的审美偏好做整体修剪，让造型清爽又好打理。</p>
              <ul>
                <li>泰迪、比熊、博美常规造型</li>
                <li>脸部、腿部、尾部细节修剪</li>
              </ul>
            </article>
            <article className="card">
              <div className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11Z" />
                  <path d="M9 10c1.2 1 2 1.5 3 1.5s1.8-.5 3-1.5" />
                  <path d="M8.5 7.5h.01" />
                  <path d="M15.5 7.5h.01" />
                </svg>
              </div>
              <h3>皮毛护理</h3>
              <p>针对换毛期、打结、干燥或体味明显的宠物，提供深层护理和柔顺护理。</p>
              <ul>
                <li>护理前做皮肤状态观察</li>
                <li>可搭配除味和护爪护理</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="pricing" id="pricing">
          <div className="section-head">
            <h2>热门套餐</h2>
            <p>价格会根据体型、毛量、打结程度微调。到店前可先发照片估价，减少等待和沟通成本。</p>
          </div>
          <div className="price-grid">
            <article className="card price-card">
              <h3>小型犬清爽洗</h3>
              <div className="price">
                ¥88 <small>起</small>
              </div>
              <p>适合 8kg 内小型犬，包含基础洗护、吹干、梳毛、耳眼清洁和指甲护理。</p>
              <ul>
                <li>约 45 至 70 分钟</li>
                <li>赠送宠物状态小报告</li>
              </ul>
              <a className="btn btn-secondary" href="#booking">
                预约小型犬
              </a>
            </article>
            <article className="card price-card">
              <span className="tag">人气</span>
              <h3>猫咪舒缓洗护</h3>
              <div className="price">
                ¥128 <small>起</small>
              </div>
              <p>低噪吹风、分段安抚、减少应激。适合短毛猫、长毛猫的日常清洁和梳理。</p>
              <ul>
                <li>猫咪独立安静空间</li>
                <li>不强迫，按状态调整流程</li>
              </ul>
              <a className="btn btn-primary" href="#booking">
                预约猫咪
              </a>
            </article>
            <article className="card price-card">
              <h3>造型精修护理</h3>
              <div className="price">
                ¥198 <small>起</small>
              </div>
              <p>适合需要整体造型、毛发打薄、脸圆修剪、身体线条修剪的狗狗。</p>
              <ul>
                <li>洗护加造型一次完成</li>
                <li>修剪前确认造型参考</li>
              </ul>
              <a className="btn btn-secondary" href="#booking">
                预约造型
              </a>
            </article>
          </div>
        </section>

        <section className="process" id="process">
          <div className="section-head">
            <h2>到店流程</h2>
            <p>清楚的流程能让主人放心，也让宠物少一点陌生环境里的紧张感。</p>
          </div>
          <div className="steps">
            <article className="step">
              <h3>状态评估</h3>
              <p>到店先检查皮肤、耳朵、毛结和情绪反应，确认适合的洗护方式。</p>
            </article>
            <article className="step">
              <h3>温水清洁</h3>
              <p>使用适配皮毛的香波和护毛产品，避开眼鼻并控制水温。</p>
            </article>
            <article className="step">
              <h3>低噪吹干</h3>
              <p>分区吹干和梳理，减少拉扯，长毛宠物会额外检查毛根湿度。</p>
            </article>
            <article className="step">
              <h3>交付反馈</h3>
              <p>交还前做细节整理，并反馈皮肤、毛结、耳道和指甲状态。</p>
            </article>
          </div>
        </section>

        <section className="promise">
          <div className="section-head">
            <h2>我们在意的小细节</h2>
            <p>干净只是基础，真正的好洗护是让宠物愿意下次再来。</p>
          </div>
          <div className="promise-grid">
            <div className="promise-panel">
              <h3>一宠一消毒，一宠一毛巾，洗护记录可追溯。</h3>
            </div>
            <div className="promise-list">
              <article className="promise-item">
                <h3>分区服务</h3>
                <p>猫犬分时段或分区域接待，降低气味和声音带来的紧张。</p>
              </article>
              <article className="promise-item">
                <h3>用品透明</h3>
                <p>香波、护毛素和护理品可现场确认，敏感皮肤可自备用品。</p>
              </article>
              <article className="promise-item">
                <h3>接送预约</h3>
                <p>附近 3 公里可预约接送，提前沟通宠物笼具和交接时间。</p>
              </article>
            </div>
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="booking-layout">
            <div className="contact-block">
              <h2>预约洗护</h2>
              <p>填写信息后，我们会尽快与你确认时间、体型价格和注意事项。</p>
              <div className="contact-row">
                <strong>营业时间</strong>
                <span>周一至周日 10:00 至 21:00</span>
              </div>
              <div className="contact-row">
                <strong>电话</strong>
                <span>021-8888 6626</span>
              </div>
              <div className="contact-row">
                <strong>地址</strong>
                <span>幸福路 88 号 1 层，近中心公园</span>
              </div>
              <div className="contact-row">
                <strong>到店时间</strong>
                <span>可预约 10:00 至 20:00 到店，建议提前 1 天提交</span>
              </div>
            </div>
            <form className="form" action="#" method="post">
              <div className="field">
                <label htmlFor="name">主人称呼</label>
                <input id="name" name="name" placeholder="例如：王女士" />
              </div>
              <div className="field">
                <label htmlFor="arrival-date">期望到店日期</label>
                <input id="arrival-date" name="arrivalDate" type="date" />
              </div>
              <div className="field">
                <label htmlFor="arrival-time">期望到店时段</label>
                <select id="arrival-time" name="arrivalTime" defaultValue="">
                  <option value="" disabled>
                    请选择时段
                  </option>
                  <option>10:00 - 12:00</option>
                  <option>12:00 - 14:00</option>
                  <option>14:00 - 16:00</option>
                  <option>16:00 - 18:00</option>
                  <option>18:00 - 20:00</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="phone">联系电话</label>
                <input id="phone" name="phone" placeholder="请输入手机号" />
              </div>
              <div className="field">
                <label htmlFor="pet">宠物类型</label>
                <select id="pet" name="pet" defaultValue="小型犬">
                  <option>小型犬</option>
                  <option>中大型犬</option>
                  <option>猫咪</option>
                  <option>其他宠物</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="service">服务项目</label>
                <select id="service" name="service" defaultValue="基础洗护">
                  <option>基础洗护</option>
                  <option>猫咪舒缓洗护</option>
                  <option>精修造型</option>
                  <option>皮毛护理</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="note">宠物情况</label>
                <textarea
                  id="note"
                  name="note"
                  placeholder="可以写宠物体重、毛结、皮肤敏感、是否怕吹风等"
                />
              </div>
              <button className="btn btn-primary" type="submit">
                提交预约信息
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <strong>爪爪星球宠物洗护</strong>
        <span>温柔一点，干净一点，毛孩子舒服一点。</span>
      </footer>
    </>
  );
}
