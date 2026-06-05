const internsData = [
    {
        id: "serene",
        name: "Serene",
        dept: "人文處",
        school: "師大國際人資所",
        quote: "最驚喜的是超舒適的新辦公環境，還有各種健康促進活動，讓人真的感受到公司滿滿的用心！",
        date: "2025/10/03",
        theme: "environment",
        themeColor: "#ff7675",
        avatarEmoji: "🌸",
        avatarBg: "linear-gradient(135deg, #ff9f43, #ff7675)"
    },
    {
        id: "anita",
        name: "Anita",
        dept: "總管理處",
        school: "師大管理研究所",
        quote: "因為就博會上傳統產業積極轉型被吸引而加入。最喜歡這裡溫馨的工作氛圍與全新辦公空間！期許在實習期間能將課堂知識應用到專案中，與同事們一起激盪出更多火花！",
        date: "2025/10/17",
        theme: "growth",
        themeColor: "#fdcb6e",
        avatarEmoji: "🍬",
        avatarBg: "linear-gradient(135deg, #ffeaa7, #fdcb6e)"
    },
    {
        id: "delphine",
        name: "Delphine",
        dept: "秘書室",
        school: "輔大日文系",
        quote: "曾在零售業打工的她，笑說：『一杯手搖飲加上開心的工作氛圍，就是最完美的組合！』",
        date: "2025/11/21",
        theme: "vibe",
        themeColor: "#a29bfe",
        avatarEmoji: "🥤",
        avatarBg: "linear-gradient(135deg, #c7ecee, #a29bfe)"
    },
    {
        id: "andrew",
        name: "Andrew",
        dept: "董秘室",
        school: "台大會計系",
        quote: "最愛的福利是豪華健身房，設備齊全、空間寬敞又免費，讓運動咖超滿意！",
        date: "2026/01/15",
        theme: "environment",
        themeColor: "#74b9ff",
        avatarEmoji: "🏋️",
        avatarBg: "linear-gradient(135deg, #81ecec, #74b9ff)"
    },
    {
        id: "amber",
        name: "Amber",
        dept: "永續發展辦公室",
        school: "台科工管系",
        quote: "最驚訝的是實習生有真正被賦權的空間——提出的想法有被實踐的可能，不只是打雜。也沒想到公司有羽球社，跨部門互動讓我每週一都期待去打球。核心感受是『被認真看待』。",
        date: "2023/12/01",
        theme: "empowerment",
        themeColor: "#2ecc71",
        avatarEmoji: "🌱",
        avatarBg: "linear-gradient(135deg, #55efc4, #2ecc71)"
    },
    {
        id: "mike",
        name: "Mike",
        dept: "永續發展辦公室",
        school: "政大外交所",
        quote: "從完全看不懂永續報告書的新手，成長到可以上台報告。我特別珍惜每次簡報機會，連以前猶豫要不要報名歌唱比賽的緊張感，都在這些『被撐住』的時刻化為力量，發現自己不同的能耐！",
        date: "2023/12/01",
        theme: "growth",
        themeColor: "#1abc9c",
        avatarEmoji: "📊",
        avatarBg: "linear-gradient(135deg, #e8f8f5, #1abc9c)"
    },
    {
        id: "carol",
        name: "Carol",
        dept: "策略經營處",
        school: "台科財金所",
        quote: "帶著對傳產的刻板印象進來，實際卻發現氛圍超友善、彈性上下班，還有高級健身房！印象最深的是『總經理早午餐』——能直接跟總經理對談，感受到被真誠對待，而非只是個實習生。",
        date: "2023/12/01",
        theme: "vibe",
        themeColor: "#e67e22",
        avatarEmoji: "💡",
        avatarBg: "linear-gradient(135deg, #f39c12, #e67e22)"
    },
    {
        id: "chenghan",
        name: "Sam",
        dept: "稽核室",
        school: "東吳資管系",
        quote: "主管給予高度自主性，讓我自己決定如何達成目標。我用程式能力實際加速了稽核流程，還設計了視覺化圖表與稽核平台。這段經歷不只提升技術，也讓我更確立了未來方向！",
        date: "2023/12/01",
        theme: "empowerment",
        themeColor: "#9b59b6",
        avatarEmoji: "💻",
        avatarBg: "linear-gradient(135deg, #dec0f1, #9b59b6)"
    },
    {
        id: "angel",
        name: "Angel",
        dept: "總務部",
        school: "輔大日文系",
        quote: "一開始覺得總務的事務不起眼，後來體悟到『像一顆螺絲，無論大小都有其重要性』。主管與同事在我需要簡報報告時，給予大量練習陪伴，讓我感受到努力真的有被看見！",
        date: "2023/12/01",
        theme: "empowerment",
        themeColor: "#95a5a6",
        avatarEmoji: "⚙️",
        avatarBg: "linear-gradient(135deg, #dfe6e9, #95a5a6)"
    },
    {
        id: "tingwei",
        name: "David",
        dept: "資訊處",
        school: "致理資管系",
        quote: "在 Eric 的帶領下從陌生到上手，第一次執行設備維修時獲得團隊充分支持與引導，緊張感瞬間被溫暖化解。團隊的細心與溫馨讓我更有信心面對新挑戰！",
        date: "2023/12/01",
        theme: "growth",
        themeColor: "#3498db",
        avatarEmoji: "🔌",
        avatarBg: "linear-gradient(135deg, #74b9ff, #3498db)"
    },
    {
        id: "yujie",
        name: "Jamie",
        dept: "人力資源處",
        school: "銘傳國企系",
        quote: "沒想到自己一個人可以完成那麼多活動策劃（實習生分享會、執行長下午茶、萬聖節活動等）。主管給我框架內的高度彈性，讓我感受到自己是『團隊裡重要的一員』，而非只是普通小實習生！",
        date: "2023/12/01",
        theme: "empowerment",
        themeColor: "#e74c3c",
        avatarEmoji: "❤️",
        avatarBg: "linear-gradient(135deg, #ff7675, #e74c3c)"
    }
];

const mapData = {
    story: {
        title: "嘉人視角專區 👀",
        content: `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                <div class="placeholder-card" style="border-top: 5px solid #ff7675; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(255, 118, 117, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('story_women_leadership')">
                    <h2 style="color: #ff7675; margin-bottom: 10px;">在嘉裡，DEI 不是口號</h2>
                    <p style="color: #636e72; line-height: 1.6; font-weight: bold; margin-bottom: 10px;">女力領導與多元共融</p>
                    <p style="color: #636e72; line-height: 1.6;">在嘉新，我們相信多元共融的力量。透過高比例女性決策者的引領與友善家庭政策的實踐，我們為每位同仁編織支持網，讓工作與生活能自在平衡。點擊探索嘉新如何將 DEI 融入日常。</p>
                    <div style="margin-top: 15px; font-weight: bold; color: #ff7675; text-align: right;">探索 DEI 實踐故事 ▶</div>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #74b9ff; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(116, 185, 255, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('story_care')">
                    <h2 style="color: #74b9ff; margin-bottom: 10px;">全面員工支持與關懷</h2>
                    <p style="color: #636e72; line-height: 1.6; font-weight: bold; margin-bottom: 10px;">360 度全方位福利</p>
                    <p style="color: #636e72; line-height: 1.6;">從「日常彈性」、「身心健康」、「財富保障」到「生老病死」的全方位照顧。我們 offer 優於法規的給假與各項補助，做為嘉人們最安心的後盾，打造工作與生活雙贏的幸福職場。</p>
                    <div style="margin-top: 15px; font-weight: bold; color: #74b9ff; text-align: right;">探索完整福利 ▶</div>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #fdcb6e; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(253, 203, 110, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('story_benefits')">
                    <h2 style="color: #fdcb6e; margin-bottom: 10px;">生活由我定義</h2>
                    <p style="color: #636e72; line-height: 1.6; font-weight: bold; margin-bottom: 10px;">工作與生活</p>
                    <p style="color: #636e72; line-height: 1.6;">是工作，還是生活？每個人心裡都有不同的答案。來聽聽在不同階段與職涯的嘉人們，分享他們如何在嘉新幸福地「工作與生活」！</p>
                    <div style="margin-top: 15px; font-weight: bold; color: #fdcb6e; text-align: right;">看個人動態 ▶</div>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #a29bfe; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(162, 155, 254, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('story_interns')">
                    <h2 style="color: #a29bfe; margin-bottom: 10px;">嘉人計畫</h2>
                    <p style="color: #636e72; line-height: 1.6; font-weight: bold; margin-bottom: 10px;">實習生怎麼說</p>
                    <p style="color: #636e72; line-height: 1.6;">聽聽在不同部門實習的年輕夥伴們，如何在嘉新獲得專業成長與溫暖支持。最真實的實習心得分享，帶你一窺嘉人的日常實習生活！</p>
                    <div style="margin-top: 15px; font-weight: bold; color: #a29bfe; text-align: right;">看看實習小檔案 ▶</div>
                </div>
            </div>
        `
    },
    story_women_leadership: {


        title: "在嘉裡，DEI 不是口號 🌸",
        content: `
            <div style="max-width: 950px; margin: 0 auto; padding-bottom: 40px;">
                <!-- 頂部指標看板 -->
                <div class="women-leader-header animate-fade-in">
                    <h2 style="color: #d63031; font-size: 1.8rem; margin-bottom: 15px; font-weight: bold;">在「嘉」裡，DEI 不是口號</h2>
                    <p style="color: #455a64; line-height: 1.8; font-size: 1.1rem; margin-bottom: 0;">
                        我們深信，真正的多元共融是尊重每個人的獨特性與生活角色。不論性別、年齡、背景，在嘉新，我們提供公平且具包容性的舞台，讓每位夥伴都能無後顧之憂地施展才華、兼顧家庭，並找到最真實的自我歸屬感。
                    </p>
                    
                    <div class="women-leader-metrics">
                        <div class="women-metric-num">60%</div>
                        <div>
                            <div class="women-metric-label">女性主管比例</div>
                            <div class="women-metric-sub">遠超產業平均，以實質行動賦能優秀女性，打造公平的決策舞台。</div>
                        </div>
                    </div>
                </div>

                <!-- 總經理專欄 -->
                <h3 style="font-size: 1.4rem; color: #2d3436; font-weight: bold; margin-bottom: 20px; letter-spacing: 1px;">
                    🎙️ 總經理專欄特寫
                </h3>
                
                <div class="gm-column-section animate-fade-in">
                    <div class="gm-profile-info">
                        <div class="leader-card-header">
                            <div class="leader-avatar">🧗‍♀️</div>
                            <div class="leader-info">
                                <div class="leader-name-row">
                                    <span class="leader-name">Liz</span>
                                    <span class="leader-dept">總經理</span>
                                </div>
                                <span class="leader-nickname">#嘉新極限體能王</span>
                            </div>
                        </div>
                        <div class="leader-motto-box">
                            <p class="leader-motto">「活出自己的色彩」</p>
                        </div>
                        
                        <div class="leader-tab-nav" style="margin-bottom: 15px;">
                            <button class="leader-tab-btn active" onclick="switchWomenLeaderTab('liz', 'dei')">💼 職涯與 DEI</button>
                            <button class="leader-tab-btn" onclick="switchWomenLeaderTab('liz', 'family')">🏡 生活與家人</button>
                        </div>
                        
                        <div class="leader-tab-content-wrapper" style="min-height: 140px;">
                            <div id="liz-dei" class="leader-tab-content active">
                                <p class="leader-content-p">
                                    身為台灣水泥業首位且唯一的女性總經理，Liz 提倡透明與透明領導，積極推動多元、平等與共融（DEI）核心價值。她堅信：「不論種族、年齡、性別、經濟條件，每個人皆能被尊重、找到自己的價值。」藉由打造工作與生活平衡的職場，讓每位員工能在生活中活出自己的色彩。
                                </p>
                            </div>
                            <div id="liz-family" class="leader-tab-content">
                                <p class="leader-content-p">
                                    Liz 是養育三位大中小男孩的三寶媽，也是熱愛攀岩、SUP 的極限運動迷。她曾因產後憂鬱走過低谷，因而積極推動 EAP 心理諮商，並親身示範成為公司首位申請育兒留停的主管。她對孩子說過最動人的話：「就像你們在游泳池游泳，我希望你可以游得越遠越好，而媽媽就是『岸』，累了隨時游回來休息。」
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="gm-video-wrapper">
                        <div style="font-weight: bold; color: #2d3436; margin-bottom: 15px; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
                            <span>📚</span> 媒體專訪與影音連結
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <a href="https://www.youtube.com/watch?v=-DvsYo51fgQ" target="_blank" style="display: flex; align-items: center; padding: 12px 15px; background: #fff5f5; border: 1px solid #ffe3e3; border-radius: 12px; text-decoration: none; color: #2d3436; transition: all 0.2s;" onmouseover="this.style.borderColor='#ff7675'; this.style.transform='translateX(3px)';" onmouseout="this.style.borderColor='#ffe3e3'; this.style.transform='translateX(0)';">
                                <div style="font-size: 1.8rem; margin-right: 12px; filter: drop-shadow(0 2px 5px rgba(255, 118, 117, 0.15));">🎥</div>
                                <div style="flex-grow: 1;">
                                    <div style="font-weight: bold; font-size: 0.95rem; color: #d63031;">與軒軒講 EP 26 專訪影音 ↗</div>
                                    <div style="font-size: 0.8rem; color: #636e72; margin-top: 2px;">Liz 暢談女性領導力與生活哲學</div>
                                </div>
                            </a>
                            
                            <a href="https://womany.net/read/article/32979" target="_blank" style="display: flex; align-items: center; padding: 12px 15px; background: #fdfbf7; border: 1px solid #fcf6ec; border-radius: 12px; text-decoration: none; color: #2d3436; transition: all 0.2s;" onmouseover="this.style.borderColor='#ff9f43'; this.style.transform='translateX(3px)';" onmouseout="this.style.borderColor='#fcf6ec'; this.style.transform='translateX(0)';">
                                <div style="font-size: 1.8rem; margin-right: 12px; filter: drop-shadow(0 2px 5px rgba(253, 159, 67, 0.15));">📰</div>
                                <div style="flex-grow: 1;">
                                    <div style="font-weight: bold; font-size: 0.95rem; color: #e67e22;">女人迷 Womany 人物專訪 ↗</div>
                                    <div style="font-size: 0.8rem; color: #636e72; margin-top: 2px;">從自身產後憂鬱經驗推動嘉新 DEI 變革</div>
                                </div>
                            </a>
                            
                            <a href="https://www.cna.com.tw/news/afe/202210230034.aspx" target="_blank" style="display: flex; align-items: center; padding: 12px 15px; background: #f5f6fa; border: 1px solid #dfe6e9; border-radius: 12px; text-decoration: none; color: #2d3436; transition: all 0.2s;" onmouseover="this.style.borderColor='#74b9ff'; this.style.transform='translateX(3px)';" onmouseout="this.style.borderColor='#dfe6e9'; this.style.transform='translateX(0)';">
                                <div style="font-size: 1.8rem; margin-right: 12px; filter: drop-shadow(0 2px 5px rgba(116, 185, 255, 0.15));">🎙️</div>
                                <div style="flex-grow: 1;">
                                    <div style="font-weight: bold; font-size: 0.95rem; color: #0984e3;">中央社 CNA 獨家專訪 ↗</div>
                                    <div style="font-size: 0.8rem; color: #636e72; margin-top: 2px;">被當咖啡小妹不尷尬，立志成為女性職場典範</div>
                                </div>
                            </a>

                            <a href="https://womany.net/collections/2024CHCGROUP" target="_blank" style="display: flex; align-items: center; padding: 12px 15px; background: #f8f9fa; border: 1px solid #eee; border-radius: 12px; text-decoration: none; color: #2d3436; transition: all 0.2s;" onmouseover="this.style.borderColor='#a29bfe'; this.style.transform='translateX(3px)';" onmouseout="this.style.borderColor='#eee'; this.style.transform='translateX(0)';">
                                <div style="font-size: 1.8rem; margin-right: 12px; filter: drop-shadow(0 2px 5px rgba(162, 155, 254, 0.15));">🔗</div>
                                <div style="flex-grow: 1;">
                                    <div style="font-weight: bold; font-size: 0.95rem; color: #6c5ce7;">「嘉新跟你想的不一樣」專題頁 ↗</div>
                                    <div style="font-size: 0.8rem; color: #636e72; margin-top: 2px;">深入探索嘉新企業品牌精神與多元福利</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- 過渡分隔線 1 -->
                <div class="dei-transition-divider">
                    <div class="dei-transition-line"></div>
                    <div class="dei-transition-text">✨ 「60% 的女性主管，是嘉新 DEI 最直接的體現」</div>
                </div>

                <!-- 核心女力群像 -->
                <h3 style="font-size: 1.4rem; color: #2d3436; font-weight: bold; margin-bottom: 25px; text-align: center; letter-spacing: 1px;">
                    ✨ 優秀女性主管特輯
                </h3>
                
                <div class="leader-grid">
                    <!-- Leader 1: Jennifer -->
                    <div class="leader-card">
                        <div class="leader-card-header">
                            <div class="leader-avatar">🌸</div>
                            <div class="leader-info">
                                <div class="leader-name-row">
                                    <span class="leader-name">Jennifer</span>
                                    <span class="leader-dept">人力資源處</span>
                                </div>
                                <span class="leader-nickname">#嘉新凍齡高手</span>
                            </div>
                        </div>
                        <div class="leader-motto-box">
                            <p class="leader-motto">「相信自己」</p>
                        </div>
                        
                        <div class="leader-tab-nav">
                            <button class="leader-tab-btn active" onclick="switchWomenLeaderTab('jennifer', 'dei')">💼 職涯與 DEI</button>
                            <button class="leader-tab-btn" onclick="switchWomenLeaderTab('jennifer', 'family')">🏡 生活與家人</button>
                        </div>
                        
                        <div class="leader-tab-content-wrapper">
                            <div id="jennifer-dei" class="leader-tab-content active">
                                <p class="leader-content-p">
                                    「DEI 是不要讓任何事侷限你的發展，勇敢築夢，要相信未來掌握在自己的手中！」作為人資處的舵手，她致力於打破隱性偏見，創造一個對所有背景員工都友善且能發揮所長的支持系統。
                                </p>
                            </div>
                            <div id="jennifer-family" class="leader-tab-content">
                                <p class="leader-content-p">
                                    被同事們封為「凍齡高手」的 Jennifer，在生活中時刻保持著自信與熱情。她認為最好的保養品是積極的生活態度與健康的作息，並鼓勵同仁在工作之餘建立健全的個人生活與家庭連結。
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Leader 2: Jane -->
                    <div class="leader-card">
                        <div class="leader-card-header">
                            <div class="leader-avatar">🍳</div>
                            <div class="leader-info">
                                <div class="leader-name-row">
                                    <span class="leader-name">Jane</span>
                                    <span class="leader-dept">財務處</span>
                                </div>
                                <span class="leader-nickname">#嘉新愛心名廚</span>
                            </div>
                        </div>
                        <div class="leader-motto-box">
                            <p class="leader-motto">「正面思考，人生美好」</p>
                        </div>
                        
                        <div class="leader-tab-nav">
                            <button class="leader-tab-btn active" onclick="switchWomenLeaderTab('jane', 'dei')">💼 職涯與 DEI</button>
                            <button class="leader-tab-btn" onclick="switchWomenLeaderTab('jane', 'family')">🏡 生活與家人</button>
                        </div>
                        
                        <div class="leader-tab-content-wrapper">
                            <div id="jane-dei" class="leader-tab-content active">
                                <p class="leader-content-p">
                                    「DEI 對我來說，不僅僅是多元、共融、公平，更是同心協力實現共同的目標、像家人般和睦相處的關鍵！」她在財務處嚴謹的工作中帶入細膩與溫暖，讓團隊能在充滿互信的環境下前進。
                                </p>
                            </div>
                            <div id="jane-family" class="leader-tab-content">
                                <p class="leader-content-p">
                                    Jane 是兩個男孩的母親。她擁有全集團公認的「神廚級」好手藝，平日熱愛為家人下廚。她更把這份母愛延伸，在聖誕節為弱勢孩童親自烹飪一整桌的愛心聖誕大餐，用溫馨美食傳遞社會關懷與光芒。
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Leader 3: 曉芸 -->
                    <div class="leader-card">
                        <div class="leader-card-header">
                            <div class="leader-avatar">👟</div>
                            <div class="leader-info">
                                <div class="leader-name-row">
                                    <span class="leader-name">Sharing</span>
                                    <span class="leader-dept">總管理處</span>
                                </div>
                                <span class="leader-nickname">#青春系學姐</span>
                            </div>
                        </div>
                        <div class="leader-motto-box">
                            <p class="leader-motto">「真誠勇敢，堅持無愧」</p>
                        </div>
                        
                        <div class="leader-tab-nav">
                            <button class="leader-tab-btn active" onclick="switchWomenLeaderTab('xiaoyun', 'dei')">💼 職涯與 DEI</button>
                            <button class="leader-tab-btn" onclick="switchWomenLeaderTab('xiaoyun', 'family')">🏡 生活與家人</button>
                        </div>
                        
                        <div class="leader-tab-content-wrapper">
                            <div id="xiaoyun-dei" class="leader-tab-content active">
                                <p class="leader-content-p">
                                    「DEI 的發展是要讓員工覺得被尊重、被公平對待、被信任，是創造一個充滿幸福感的工作環境的關鍵。」她相信唯有建立在高度互信上的彈性，才能激發出跨世代同仁的創造力。
                                </p>
                            </div>
                            <div id="xiaoyun-family" class="leader-tab-content">
                                <p class="leader-content-p">
                                    充滿朝氣與活力的Sharing，是同仁眼中的「青春系學姐」。她維持身心靈健康與體態的秘訣，就是每週在嘉新大樓的五星級健身房 #fitcollective 重訓揮汗，用自律和運動活出精彩飽滿的個人生活。
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Leader 4: Mandy -->
                    <div class="leader-card">
                        <div class="leader-card-header">
                            <div class="leader-avatar">🏡</div>
                            <div class="leader-info">
                                <div class="leader-name-row">
                                    <span class="leader-name">Mandy</span>
                                    <span class="leader-dept">稽核室</span>
                                </div>
                                <span class="leader-nickname">#嘉新好媳婦代表</span>
                            </div>
                        </div>
                        <div class="leader-motto-box">
                            <p class="leader-motto">「樂在工作，享受人生」</p>
                        </div>
                        
                        <div class="leader-tab-nav">
                            <button class="leader-tab-btn active" onclick="switchWomenLeaderTab('mandy', 'dei')">💼 職涯與 DEI</button>
                            <button class="leader-tab-btn" onclick="switchWomenLeaderTab('mandy', 'family')">🏡 生活與家人</button>
                        </div>
                        
                        <div class="leader-tab-content-wrapper">
                            <div id="mandy-dei" class="leader-tab-content active">
                                <p class="leader-content-p">
                                    「DEI 的關鍵是能尊重每個人的差異，提供包容性和公平的工作環境，才能讓員工真正樂於工作，從而創造出幸福的生活。」她將稽核的客觀性與包容思維結合，促進部門之間的和諧溝通。
                                </p>
                            </div>
                            <div id="mandy-family" class="leader-tab-content">
                                <p class="leader-content-p">
                                    身為「好媳婦代表」的 Mandy，能輕鬆將家人照顧得妥妥當當，同時在稽核工作上展現專業。她特別感謝嘉新優於勞基法的給假福利與彈性工時，讓她能在高壓工作與家庭生活間取得完美平衡。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 過渡分隔線 2 -->
                <div class="dei-transition-divider">
                    <div class="dei-transition-line"></div>
                    <div class="dei-transition-text">🌱 「DEI 不只是主管的事 ── 聽聽不同角色的嘉人怎麼說」</div>
                </div>

                <!-- DEI 實踐：嘉人真心話 -->
                <div class="testimonial-section animate-fade-in">
                    <div class="testimonial-grid">
                        <!-- Card 1: 菱真 -->
                        <div class="testimonial-card">
                            <div>
                                <div class="testimonial-header">
                                    <div class="testimonial-avatar">🌸</div>
                                    <div class="testimonial-info">
                                        <span class="testimonial-name">Annie</span>
                                        <span class="testimonial-dept">財務處</span>
                                    </div>
                                </div>
                                <div class="testimonial-tags">
                                    <span class="testimonial-tag">#加入嘉新第3年</span>
                                    <span class="testimonial-tag">#找到工作與生活的節奏</span>
                                </div>
                                <p class="testimonial-quote">
                                    「加入嘉新大家庭近 3 年，我深刻體會到公司『以人為本』的職場文化。嘉新重視同仁的工作與生活平衡以及身心健康，透過多元活動、感恩節餐會等，促進跨部門的情感連結，讓我在忙碌工作中也能找到支持與歸屬感。」
                                </p>
                            </div>
                        </div>
                        
                        <!-- Card 2: 茹蘭 -->
                        <div class="testimonial-card">
                            <div>
                                <div class="testimonial-header">
                                    <div class="testimonial-avatar">📁</div>
                                    <div class="testimonial-info">
                                        <span class="testimonial-name">Nancy</span>
                                        <span class="testimonial-dept">董秘室</span>
                                    </div>
                                </div>
                                <div class="testimonial-tags">
                                    <span class="testimonial-tag">#十年資深</span>
                                    <span class="testimonial-tag">#還在持續成長</span>
                                </div>
                                <p class="testimonial-quote">
                                    「進入董事會秘書室工作超過十年，隨著公司事業版圖發展與變革，讓我在部門輪調上獲得主管專業支持。公司透過多元溝通管道與培訓計畫，鼓勵不同世代同仁在合作中培養默契，進一步推動了我的職涯成長。」
                                </p>
                            </div>
                        </div>
                        
                        <!-- Card 3: 伯謙 -->
                        <div class="testimonial-card">
                            <div>
                                <div class="testimonial-header">
                                    <div class="testimonial-avatar">🍼</div>
                                    <div class="testimonial-info">
                                        <span class="testimonial-name">Max</span>
                                        <span class="testimonial-dept">策略經營處</span>
                                    </div>
                                </div>
                                <div class="testimonial-tags">
                                    <span class="testimonial-tag">#在嘉新15年</span>
                                    <span class="testimonial-tag">#從單身到育兒都被支持</span>
                                </div>
                                <p class="testimonial-quote">
                                    「在嘉新工作已超過 15 年，從單身、外派到育兒，公司一直是我堅實的後盾。無論是彈性工時、遠距辦公還是產後護理之家資源，福利都遠超法規，特別讓職場爸爸能更輕鬆地在事業與家庭之間取得完美平衡。」
                                </p>
                            </div>
                        </div>
                        
                        <!-- Card 4: 以炘 -->
                        <div class="testimonial-card">
                            <div>
                                <div class="testimonial-header">
                                    <div class="testimonial-avatar">⚖️</div>
                                    <div class="testimonial-info">
                                        <span class="testimonial-name">Nicy</span>
                                        <span class="testimonial-dept">法務處</span>
                                    </div>
                                </div>
                                <div class="testimonial-tags">
                                    <span class="testimonial-tag">#新世代</span>
                                    <span class="testimonial-tag">#被信任才能走得遠</span>
                                </div>
                                <p class="testimonial-quote">
                                    「身為法務，主管對新世代員工的包容讓我能自在表達意見，並以開放式問題引導我探索解決方案、共同討論。這種被信任與被支持的工作氛圍，大大提升了我面對未來挑戰的解決能力。」
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 返回按鈕 -->
                <div style="text-align: center; margin-top: 40px;">
                    <button onclick="navigateTo('story')" style="background: white; color: #ff7675; border: 2px solid #ff7675; padding: 12px 35px; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; transition: all 0.2s; box-shadow: 0 4px 15px rgba(255, 118, 117, 0.05);">
                        ← 返回嘉人視角
                    </button>
                </div>
            </div>
        `
    },
    story_benefits: {
        title: "生活由我定義 🛋️",
        content: `
            <div style="max-width: 600px; margin: 0 auto; padding-bottom: 40px; display: flex; flex-direction: column; gap: 25px;">
                
                <!-- Card 1 -->
                <div style="background: white; border-radius: 15px; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #f1f2f6;">
                    <div style="display: flex; align-items: center; margin-bottom: 15px;">
                        <div style="width: 50px; height: 50px; border-radius: 50%; background: #ffeaa7; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-right: 15px;">👩🏻‍💻</div>
                        <div>
                            <div style="font-weight: bold; color: #2d3436; font-size: 1.1rem;">嘉人 H 小姐</div>
                            <div style="color: #b2bec3; font-size: 0.9rem;">2 小時前</div>
                        </div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <h3 style="color: #fdcb6e; margin-bottom: 10px; font-size: 1.3rem;">✨ 彈性上下班 ╳ 每月 3 日遠距辦公日</h3>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">早鳥型還是夜貓型？<br>在嘉新你都可以做自己～<br><br>每天早起精神百倍，或偶爾睡晚一點點 😴<br>還有每月 3 次不用出門的遠距日，<br>上班模式自由選，工作生活完美平衡！</p>
                    </div>
                    <div style="color: #0984e3; font-weight: bold; font-size: 0.95rem;">
                        #嘉新以人為本 #WorkLifeBalance
                    </div>
                </div>

                <!-- Card 2 -->
                <div style="background: white; border-radius: 15px; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #f1f2f6;">
                    <div style="display: flex; align-items: center; margin-bottom: 15px;">
                        <div style="width: 50px; height: 50px; border-radius: 50%; background: #a29bfe; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-right: 15px;">🙋🏻‍♂️</div>
                        <div>
                            <div style="font-weight: bold; color: #2d3436; font-size: 1.1rem;">嘉人 W 先生</div>
                            <div style="color: #b2bec3; font-size: 0.9rem;">昨天</div>
                        </div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <h3 style="color: #6c5ce7; margin-bottom: 10px; font-size: 1.3rem;">✨ 新人假 2 日 ╳ 生日假半日</h3>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">加入嘉新滿三個月，立馬解鎖 2 天假 🔓<br>恭喜你正式升級、擺脫新手慌張期！<br><br>生日還加碼半天幸福特權 🎂<br>努力工作的你，值得更多小確幸！</p>
                    </div>
                    <div style="color: #0984e3; font-weight: bold; font-size: 0.95rem;">
                        #新人禮包解鎖 #生日好好放個假
                    </div>
                </div>

                <!-- Card 3 -->
                <div style="background: white; border-radius: 15px; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #f1f2f6;">
                    <div style="display: flex; align-items: center; margin-bottom: 15px;">
                        <div style="width: 50px; height: 50px; border-radius: 50%; background: #81ecec; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-right: 15px;">👨🏽‍💻</div>
                        <div>
                            <div style="font-weight: bold; color: #2d3436; font-size: 1.1rem;">嘉人 C 先生</div>
                            <div style="color: #b2bec3; font-size: 0.9rem;">5 小時前</div>
                        </div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <h3 style="color: #00cec9; margin-bottom: 10px; font-size: 1.3rem;">✨ 補班日免進辦公室 ╳ 重要節日前一天彈性下班</h3>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">別人補班心酸酸，嘉人躺平好舒坦～ 🏖️<br>補班日免進公司，好好生活快樂滿分！<br><br>節日前一天，下午自由下班去，<br>提前開啟放假模式，返鄉出遊不塞車 🚗</p>
                    </div>
                    <div style="color: #0984e3; font-weight: bold; font-size: 0.95rem;">
                        #嘉新以人為本 #放假總是快一步
                    </div>
                </div>

                <div style="text-align: center; margin-top: 20px;">
                    <button onclick="navigateTo('story')" style="background: white; color: #fdcb6e; border: 2px solid #fdcb6e; padding: 10px 30px; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; transition: all 0.2s;">
                        ← 返回嘉人視角
                    </button>
                </div>
            </div>
        `
    },
    story_care: {
        title: "全面員工支持與關懷 🎁",
        content: `
            <div style="max-width: 800px; margin: 0 auto; padding-bottom: 40px;">
                <p style="text-align: center; color: #636e72; font-size: 1.1rem; margin-bottom: 30px;">嘉新從四大維度出發，為員工編織全方位的支持網，做您最安心的後盾。</p>
                
                <div style="display: flex; flex-direction: column; gap: 20px;">
                    <!-- Category 1 -->
                    <div style="background: white; border-radius: 15px; border-left: 8px solid #fdcb6e; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                        <h3 style="color: #fdcb6e; font-size: 1.4rem; margin-bottom: 15px; display: flex; align-items: center;"><span style="font-size: 1.8rem; margin-right: 10px;">⚖️</span> 彈性自主｜工作與生活平衡</h3>
                        <ul style="color: #636e72; line-height: 1.8; font-size: 1.05rem; padding-left: 20px; margin: 0;">
                            <li><b>彈性出勤：</b> 上班 07:30-09:30／下班 16:30-18:30。</li>
                            <li><b>遠距辦公：</b> 每月可申請 3 日。</li>
                            <li><b>節慶小確幸：</b> 重要節日前半天提早下班。</li>
                            <li><b>專屬給假：</b> 新人假（通過試用期即享 2 日）、生日假（當月半日）、志工假（每年 6 天）。</li>
                        </ul>
                    </div>

                    <!-- Category 2 -->
                    <div style="background: white; border-radius: 15px; border-left: 8px solid #ff7675; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                        <h3 style="color: #ff7675; font-size: 1.4rem; margin-bottom: 15px; display: flex; align-items: center;"><span style="font-size: 1.8rem; margin-right: 10px;">🍼</span> 友善家庭｜迎接新生命與全齡照護</h3>
                        <ul style="color: #636e72; line-height: 1.8; font-size: 1.05rem; padding-left: 20px; margin: 0;">
                            <li><b>好孕與育兒：</b> 生育禮金 $10,000＋幸福禮包（價值 $5,000）；育兒補助每年每名最高 $6,000。</li>
                            <li><b>優照護專案：</b> 幼兒與長輩「臨時照顧補助」，每年每名最高 $6,000。</li>
                            <li><b>生養假期（優於法規）：</b> 產檢假 10 天、陪產檢及陪產假 10 天。</li>
                            <li><b>子女教育：</b> 依福委會獎助學金辦法核給。</li>
                        </ul>
                    </div>

                    <!-- Category 3 -->
                    <div style="background: white; border-radius: 15px; border-left: 8px solid #00b894; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                        <h3 style="color: #00b894; font-size: 1.4rem; margin-bottom: 15px; display: flex; align-items: center;"><span style="font-size: 1.8rem; margin-right: 10px;">🏃🏻‍♀️</span> 身心健康｜活力與醫療照護</h3>
                        <ul style="color: #636e72; line-height: 1.8; font-size: 1.05rem; padding-left: 20px; margin: 0;">
                            <li><b>醫療防護：</b> 免費流感疫苗、健康檢查、心理健康講座、職場護理師駐點、24 小時 EAP 服務、CPR & AED 訓練。</li>
                            <li><b>專屬健檢假：</b> 每年 1 天。</li>
                            <li><b>運動與活力：</b> 員工專屬五星級健身房、各項運動社團（籃球、街舞、瑜珈等）。</li>
                        </ul>
                    </div>

                    <!-- Category 4 -->
                    <div style="background: white; border-radius: 15px; border-left: 8px solid #0984e3; padding: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                        <h3 style="color: #0984e3; font-size: 1.4rem; margin-bottom: 15px; display: flex; align-items: center;"><span style="font-size: 1.8rem; margin-right: 10px;">🛡️</span> 安心後盾｜生活轉折與財富保障</h3>
                        <ul style="color: #636e72; line-height: 1.8; font-size: 1.05rem; padding-left: 20px; margin: 0;">
                            <li><b>全薪照顧假（優於法規）：</b> 無剩餘特休者，全薪病假／全薪家庭照顧假皆為一年上限 3 日。</li>
                            <li><b>優於法規喪假：</b> 父母、配偶喪亡者可申請 10 天。</li>
                            <li><b>員工持股信託計畫：</b> 參加者每月提撥固定薪資，<b>公司相對提撥 100% 獎勵金</b>，保障未來財富！</li>
                        </ul>
                    </div>
                </div>

                <div style="text-align: center; margin-top: 30px;">
                    <button onclick="navigateTo('story')" style="background: white; color: #74b9ff; border: 2px solid #74b9ff; padding: 10px 30px; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; transition: all 0.2s;">
                        ← 返回嘉人視角
                    </button>
                </div>
            </div>
        `
    },
    story_interns: {
        title: "實習生小檔案 👀",
        content: `
            <div id="interns-container" class="interns-container">
                <!-- Content will be rendered dynamically by renderInternProfiles() -->
            </div>
        `
    },
    quiz: {
        title: "職缺測驗 🎯",
        content: `
            <div id="quiz-container" class="quiz-container">
                <!-- Content will be injected by JS -->
            </div>
        `
    },
    units: {
        title: "嘉新永續方舟 🌱",
        content: `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                <div class="placeholder-card" style="border-top: 5px solid #2ecc71; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(46, 204, 113, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('esg_e')">
                    <h2 style="color: #2ecc71; margin-bottom: 10px;">E 環境共好</h2>
                    <p style="color: #636e72; line-height: 1.6;">嘉新致力於與自然和諧共存，以節能減碳為核心，推動低碳物流與建物綠化，並在岡山實踐屋頂型太陽能與 TNFD 規劃。點擊探索我們如何結合科技與生態，創造永續的綠色典範。</p>
                    <div style="margin-top: 15px; font-weight: bold; color: #2ecc71; text-align: right;">探索環境故事 ▶</div>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #f39c12; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(243, 156, 18, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('esg_s')">
                    <h2 style="color: #f39c12; margin-bottom: 10px;">S 社會共榮</h2>
                    <p style="color: #636e72; line-height: 1.6;">我們深信，企業的成功在於與社會一同前行。嘉新以「人」為核心，深耕教育與陪伴，推動由內而外的員工志工文化，並將健康與文化傳承融入營運。不只單向給予，更在長期的陪伴中與社會共同成長、攜手共榮。</p>
                    <div style="margin-top: 15px; font-weight: bold; color: #f39c12; text-align: right;">探索社會故事 ▶</div>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #3498db; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(52, 152, 219, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('esg_g')">
                    <h2 style="color: #3498db; margin-bottom: 10px;">G 透明治理</h2>
                    <p style="color: #636e72; line-height: 1.6;">我們深信，誠信與透明的治理是企業永續的基石。嘉新建立由上而下的治理架構，主動接軌 SBTi 科學減碳與 TCFD 氣候揭露等國際標準，並將永續指標轉化為企業的長期商業價值與核心競爭力。</p>
                    <div style="margin-top: 15px; font-weight: bold; color: #3498db; text-align: right;">探索治理故事 ▶</div>
                </div>
            </div>
        `
    },
    esg_e: {
        title: "環境共好 🌱",
        content: `
            <div style="max-width: 900px; margin: 0 auto; padding-bottom: 40px;">
                
                <!-- 引言與環境數據儀表板 -->
                <div style="background: linear-gradient(135deg, #e8f8f5 0%, #ffffff 100%); padding: 40px; border-radius: 15px; margin-bottom: 40px; border-left: 5px solid #2ecc71; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <h2 style="color: #27ae60; font-size: 1.8rem; margin-bottom: 20px;">從高碳產業到永續企業的綠色蛻變</h2>
                    <p style="color: #455a64; line-height: 1.8; font-size: 1.15rem; margin-bottom: 25px;">在多數人的印象中，水泥產業往往代表高耗能與高碳排。然而，嘉新近年逐漸打破傳統刻板印象，將環境友善視為轉型的核心。我們不只減少破壞，更積極尋求與自然共存的解方；從太陽能綠電、低碳物流到老建物的近零碳改造，每一步都在實踐我們對地球家園的溫柔承諾。</p>
                    
                    <div style="display: flex; gap: 20px; justify-content: space-around; background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.03); flex-wrap: wrap;">
                        <div style="text-align: center; flex: 1; min-width: 120px;">
                            <div style="font-size: 2.5rem; color: #2ecc71; font-weight: 900; margin-bottom: 5px;">-42<span style="font-size: 1.5rem;">%</span></div>
                            <div style="color: #7f8c8d; font-size: 0.95rem; font-weight: bold; letter-spacing: 1px;">SBTi 減碳目標</div>
                        </div>
                        <div style="width: 2px; background: #ecf0f1;"></div>
                        <div style="text-align: center; flex: 1; min-width: 120px;">
                            <div style="font-size: 2.2rem; color: #2ecc71; font-weight: 900; margin-bottom: 5px; padding-top: 5px;">低衝擊</div>
                            <div style="color: #7f8c8d; font-size: 0.95rem; font-weight: bold; letter-spacing: 1px;">降低環境干擾</div>
                        </div>
                        <div style="width: 2px; background: #ecf0f1;"></div>
                        <div style="text-align: center; flex: 1; min-width: 120px;">
                            <div style="font-size: 2.2rem; color: #2ecc71; font-weight: 900; margin-bottom: 5px; padding-top: 5px;">近零碳</div>
                            <div style="color: #7f8c8d; font-size: 0.95rem; font-weight: bold; letter-spacing: 1px;">既有建築綠化</div>
                        </div>
                    </div>
                </div>

                <!-- 碳盤查與減碳承諾 -->
                <div style="margin-bottom: 30px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="padding: 30px;">
                        <h2 style="color: #2ecc71; font-size: 1.8rem; margin-bottom: 15px;">🎯 科學基礎減量承諾 (SBTi)</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">為推動低碳轉型，嘉新於 2024 年正式通過 SBTi（科學基礎減量目標倡議）審查，承諾 2030 年前範疇一與範疇二碳排放量減少 42%。我們完成海內外營運據點的碳盤查，並導入 ISO 50001 與 ISO 14001 管理系統，透過汰換高耗能設備與提升能源效率，從營運流程中實質降低碳排強度。</p>
                    </div>
                </div>

                <!-- 岡山植相盤點與 TNFD -->
                <div style="margin-bottom: 30px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="padding: 30px;">
                        <h2 style="color: #2ecc71; font-size: 1.8rem; margin-bottom: 15px;">🌿 岡山植相盤點與簡易 TNFD 前瞻規劃</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-bottom: 15px;">岡山周邊植相呈現低海拔次生林、草生地與既有園藝植栽混合的環境特徵。現地可見構樹、茄苳、苦楝、台灣欒樹、雀榕、稜果榕、榕樹、姑婆芋、血桐、無患子、芒草、相思樹等台灣低海拔常見原生或本土化植物，顯示基地周邊仍具備一定程度的在地生態基礎與自然演替潛力。</p>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-bottom: 0;">依簡易 TNFD 架構初步辨識，岡山的自然資本重點不在於大型原始森林，而是低海拔次生林加上一些人為引進的植物。這些區域可提供鳥類、蝶類、授粉昆蟲及小型生物覓食、停棲與遷移節點。未來若能以原生樹種補植、外來園藝種控管、草地低干擾管理與基地邊界綠帶串聯為方向，可逐步由「維持綠化」提升至「自然資本管理」。</p>
                    </div>
                </div>

                <!-- 原生種保留與外來園藝種管理 -->
                <div style="margin-bottom: 30px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="padding: 30px;">
                        <h2 style="color: #2ecc71; font-size: 1.8rem; margin-bottom: 15px;">🦋 原生種保留與外來園藝種管理</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-bottom: 15px;">本區具代表性的原生與在地風土植物包括台灣欒樹、茄苳、構樹、苦楝、雀榕、稜果榕、榕樹、姑婆芋、血桐、無患子、山芙蓉、光臘樹、盤龍木、皮孫木、潺槁樹與芒草等。這些植物多具有低海拔適應性強、耐乾旱或耐擾動、可提供果實與棲地資源等特性，適合作為岡山後續生態復育與綠帶營造的優先物種。</p>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-bottom: 0;">相較之下列，阿勃勒、黃金風鈴木、火焰木、馬拉巴栗、小葉欖仁、朱槿、椰子、龍船花等多屬外來或園藝栽培植物，雖具景觀與遮蔭功能，但較不宜作為生物多樣性提升的主軸。後續規劃可採「保留既有大樹、優先補植原生種、逐步降低外來園藝種比例」的方式，讓基地綠化從視覺景觀轉向具生態功能的棲地營造。</p>
                    </div>
                </div>

                <!-- 空間再利用與低衝擊綠能：屋頂型太陽能 -->
                <div style="margin-bottom: 30px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="padding: 30px;">
                        <h2 style="color: #2ecc71; font-size: 1.8rem; margin-bottom: 15px;">☀️ 空間再利用與低衝擊綠能：屋頂型太陽能</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-bottom: 15px;">相較於開發綠地設置太陽能板，岡山的太陽能規劃將聚焦於既有屋頂與建體上方空間再利用。透過將太陽能系統設置於廠房、倉儲或既有建築物屋頂，可避免額外占用草生地、樹叢與基地邊界綠帶，降低對現地植被、土壤透水性與生物棲地的干擾。</p>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-bottom: 0;">此作法兼具能源轉型與自然保育效益：一方面提升既有建築空間的能源產出效率，回應低碳營運與再生能源使用；另一方面也保留基地內可供原生植栽復育、生態綠帶串聯與雨水入滲的地面空間。對我們而言，屋頂型太陽能可被定位為「不新增土地開發壓力的低衝擊綠能方案」，與 TNFD 所強調的自然資本風險管理方向相互呼應。</p>
                    </div>
                </div>

                <!-- 低碳物流 -->
                <div style="margin-bottom: 30px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="padding: 30px;">
                        <h2 style="color: #2ecc71; font-size: 1.8rem; margin-bottom: 15px;">🚢 低碳物流與綠色港口儲運</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">水泥產業過去經常伴隨揚塵與高碳排運輸問題，而嘉新則積極強化低碳儲運與港口管理。我們在基隆港推動低碳水泥儲運設施，大幅降低粉塵與環境衝擊。透過海運本身較低碳排的優勢，並整合港口運輸系統，將減碳概念延伸至物流鏈的每一個環節。</p>
                    </div>
                </div>

                <!-- 綠建築與健康空間 -->
                <div style="margin-bottom: 30px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="padding: 30px;">
                        <h2 style="color: #2ecc71; font-size: 1.8rem; margin-bottom: 15px;">🌿 綠建築與健康生活空間的延伸</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-bottom: 15px;">嘉新的 ESG 不只停留在水泥本業。位於沖繩的 Hotel Collective 是沖繩首間取得 LEED 國際綠建築認證的飯店，導入 VRV 變頻空調與雨水回收系統，大幅降低能耗。此外，嘉新旗下「人之初」月子中心則導入 WELL 健康建築概念，重視空氣品質與居住健康，將 ESG 結合生活品質與人的需求。</p>
                    </div>
                </div>

                <!-- 嘉新大樓 -->
                <div style="margin-bottom: 50px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="padding: 30px;">
                        <h2 style="color: #2ecc71; font-size: 1.8rem; margin-bottom: 15px;">🏢 五十歲老建物的近零碳轉型：嘉新大樓</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-bottom: 15px;">這棟 1967 年落成的大樓，近年嘉新投入近 5,000 萬元進行資產活化與節能升級，導入 EMS 智慧能源管理系統與 ISO 50001 標準。2025 年，嘉新大樓更取得 EEWH-EB 鑽石級與 EEWH-BERSe 第1+級雙認證，成為既有建築綠化與近零碳建築的代表案例。</p>
                    </div>
                </div>

                <!-- 底部：金句引語區塊 -->
                <div style="position: relative; background: #2ecc71; padding: 50px 40px; border-radius: 15px; text-align: center; box-shadow: 0 10px 30px rgba(46, 204, 113, 0.2); margin-bottom: 40px; overflow: hidden;">
                    <div style="position: absolute; top: -20px; left: 20px; font-size: 120px; font-family: serif; color: rgba(255,255,255,0.15); line-height: 1; font-weight: bold;">“</div>
                    <h3 style="color: white; font-size: 1.6rem; line-height: 1.6; position: relative; z-index: 1; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">綠能不必須犧牲自然環境，<br>而是思考如何與既有生態完美共存。</h3>
                    <div style="position: absolute; bottom: -50px; right: 20px; font-size: 120px; font-family: serif; color: rgba(255,255,255,0.15); line-height: 1; font-weight: bold;">”</div>
                </div>
                
                <div style="text-align: center;">
                    <button onclick="navigateTo('units')" style="background: white; color: #2ecc71; border: 2px solid #2ecc71; padding: 10px 30px; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; transition: all 0.2s; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                        ← 返回永續方舟
                    </button>
                </div>
            </div>
        `
    },
    esg_s: {
        title: "社會共榮 🤝",
        content: `
            <div style="max-width: 900px; margin: 0 auto; padding-bottom: 40px;">
                
                <!-- 引言與數據儀表板 -->
                <div style="background: linear-gradient(135deg, #fff3e0 0%, #ffffff 100%); padding: 40px; border-radius: 15px; margin-bottom: 40px; border-left: 5px solid #f39c12; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <h2 style="color: #f39c12; font-size: 1.8rem; margin-bottom: 20px;">ESG不只是環保：嘉新如何創造社會影響力</h2>
                    <p style="color: #455a64; line-height: 1.8; font-size: 1.15rem; margin-bottom: 25px;">許多人一提到 ESG，往往只想到減碳與環保，卻忽略了「社會 (Social)」面向。嘉新將「人」視為永續發展的核心，不只是降低碳排，更積極回應社會需求、陪伴弱勢，用實際行動展現一間企業能為社會帶來多大的正向改變。</p>
                    
                    <div style="display: flex; gap: 20px; justify-content: space-around; background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.03); flex-wrap: wrap;">
                        <div style="text-align: center; flex: 1; min-width: 120px;">
                            <div style="font-size: 2.5rem; color: #f39c12; font-weight: 900; margin-bottom: 5px;">60<span style="font-size: 1.5rem;">+</span></div>
                            <div style="color: #7f8c8d; font-size: 0.95rem; font-weight: bold; letter-spacing: 1px;">深耕教育 (年)</div>
                        </div>
                        <div style="width: 2px; background: #ecf0f1;"></div>
                        <div style="text-align: center; flex: 1; min-width: 120px;">
                            <div style="font-size: 2.5rem; color: #f39c12; font-weight: 900; margin-bottom: 5px;">450<span style="font-size: 1.5rem;">+</span></div>
                            <div style="color: #7f8c8d; font-size: 0.95rem; font-weight: bold; letter-spacing: 1px;">陪伴孩童 (位)</div>
                        </div>
                        <div style="width: 2px; background: #ecf0f1;"></div>
                        <div style="text-align: center; flex: 1; min-width: 120px;">
                            <div style="font-size: 2.5rem; color: #f39c12; font-weight: 900; margin-bottom: 5px;">900<span style="font-size: 1.5rem;">萬</span></div>
                            <div style="color: #7f8c8d; font-size: 0.95rem; font-weight: bold; letter-spacing: 1px;">年度獎學金 (元)</div>
                        </div>
                    </div>
                </div>

                <!-- 支柱一：深耕教育與情緒陪伴 (左圖右文) -->
                <div style="display: flex; flex-wrap: wrap; margin-bottom: 40px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="flex: 1; min-width: 300px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; border-right: 1px solid #f1f2f6;">
                        <img src="assets/20250830_嘉新獎學金頒獎典禮298s_熊愛攝影-1536x1024.jpg" alt="嘉新兆福文化基金會獎學金頒獎典禮" style="width: 100%; height: 100%; object-fit: cover; min-height: 280px; display: block;">
                    </div>
                    <div style="flex: 2; min-width: 300px; padding: 40px;">
                        <h2 style="color: #f39c12; font-size: 1.6rem; margin-bottom: 15px;">深耕教育與情緒陪伴</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-bottom: 15px;">嘉新兆福文化基金會已連續超過六十年提供獎助學金，協助弱勢學生安心就學。除了實質金錢補助，我們更看重孩子的心理成長。</p>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">近年推出最具代表性的「小海狸永續助學計畫」，導入社會情緒學習（SEL）課程，幫助偏鄉孩童建立情緒認知與面對挫折的能力。計畫上路至今，超過九成家長與老師皆表示孩子的情緒穩定度與自我認同感有顯著提升。</p>
                    </div>
                </div>

                <!-- 支柱二：由內而外的志工文化 (右圖左文) -->
                <div style="display: flex; flex-wrap: wrap; flex-direction: row-reverse; margin-bottom: 40px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="flex: 1; min-width: 300px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; border-left: 1px solid #f1f2f6;">
                        <img src="assets/正向大人.jpg" alt="正向大人陪伴計畫" style="width: 100%; height: 100%; object-fit: cover; min-height: 280px; display: block;">
                    </div>
                    <div style="flex: 2; min-width: 300px; padding: 40px;">
                        <h2 style="color: #f39c12; font-size: 1.6rem; margin-bottom: 15px;">由內而外的志工陪伴文化</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-bottom: 15px;">嘉新的公益不是單純捐錢，而是建立長期的社會陪伴關係。我們鼓勵員工成為社會的支持力量，讓永續精神融入企業文化。</p>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">在「正向大人陪伴計畫」中，員工們親身參與，陪伴弱勢青少年挑戰單車環島，或是透過料理活動建立情感連結。這種由內而外的參與模式，讓員工在服務中重新理解工作的價值與社會責任。</p>
                    </div>
                </div>

                <!-- 支柱三：文化傳承與健康生活 (左圖右文) -->
                <div style="display: flex; flex-wrap: wrap; margin-bottom: 50px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="flex: 1; min-width: 300px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; border-right: 1px solid #f1f2f6;">
                        <img src="assets/沖繩工藝.jpg" alt="沖繩傳統工藝展示" style="width: 100%; height: 100%; object-fit: cover; min-height: 280px; display: block;">
                    </div>
                    <div style="flex: 2; min-width: 300px; padding: 40px;">
                        <h2 style="color: #f39c12; font-size: 1.6rem; margin-bottom: 15px;">文化傳承與健康空間營造</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-bottom: 15px;">嘉新將「以人為本」的理念延伸至健康照護與生活空間。旗下「人之初」產後護理之家重視居住健康，提供安心的調養環境。</p>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">而沖繩 Hotel Collective 也不只是觀光旅宿，更是文化交流的平台。我們透過展示沖繩傳統工藝、支持地方活動，將在地文化保存與傳承融入企業營運之中。</p>
                    </div>
                </div>

                <!-- 底部：金句引語區塊 -->
                <div style="position: relative; background: #f39c12; padding: 50px 40px; border-radius: 15px; text-align: center; box-shadow: 0 10px 30px rgba(243, 156, 18, 0.2); margin-bottom: 40px; overflow: hidden;">
                    <div style="position: absolute; top: -20px; left: 20px; font-size: 120px; font-family: serif; color: rgba(255,255,255,0.15); line-height: 1; font-weight: bold;">“</div>
                    <h3 style="color: white; font-size: 1.6rem; line-height: 1.6; position: relative; z-index: 1; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">真正成功的 ESG，不只是企業變得更好，<br>而是讓整個社會一起變得更好。</h3>
                    <div style="position: absolute; bottom: -50px; right: 20px; font-size: 120px; font-family: serif; color: rgba(255,255,255,0.15); line-height: 1; font-weight: bold;">”</div>
                </div>

                <div style="text-align: center;">
                    <button onclick="navigateTo('units')" style="background: white; color: #f39c12; border: 2px solid #f39c12; padding: 10px 30px; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; transition: all 0.2s; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                        ← 返回永續方舟
                    </button>
                </div>
            </div>
        `
    },
    esg_g: {
        title: "透明治理 ⚖️",
        content: `
            <div style="max-width: 900px; margin: 0 auto; padding-bottom: 40px;">
                
                <!-- 引言與由上而下治理架構 -->
                <div style="background: linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%); padding: 40px; border-radius: 15px; margin-bottom: 40px; border-left: 5px solid #00bcd4; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <h2 style="color: #00838f; font-size: 1.8rem; margin-bottom: 20px;">ESG如何成為企業競爭力？以嘉新企業團為例</h2>
                    <p style="color: #455a64; line-height: 1.8; font-size: 1.15rem; margin-bottom: 25px;">過去，ESG 常被視為法規遵循或公關行銷。然而在全球淨零趨勢下，ESG 已成為影響企業競爭力的重要核心。對轉型中的嘉新而言，這不只是責任，更是長期的商業策略。</p>
                    
                    <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
                        <h4 style="color: #00acc1; margin-bottom: 15px; text-align: center; font-size: 1.1rem; letter-spacing: 1px;">由上而下的永續治理架構</h4>
                        <div style="display: flex; flex-direction: column; align-items: center; gap: 15px;">
                            <div style="background: #00bcd4; color: white; padding: 12px 30px; border-radius: 30px; font-weight: bold; font-size: 1.1rem; width: 220px; text-align: center; box-shadow: 0 4px 10px rgba(0, 188, 212, 0.3);">董事會</div>
                            <div style="color: #b2ebf2; font-size: 1.2rem;">▼</div>
                            <div style="background: #26c6da; color: white; padding: 12px 30px; border-radius: 30px; font-weight: bold; font-size: 1.1rem; width: 220px; text-align: center; box-shadow: 0 4px 10px rgba(38, 198, 218, 0.3);">永續發展委員會</div>
                            <div style="color: #b2ebf2; font-size: 1.2rem;">▼</div>
                            <div style="background: #4dd0e1; color: white; padding: 12px 30px; border-radius: 30px; font-weight: bold; font-size: 1.1rem; width: 220px; text-align: center; box-shadow: 0 4px 10px rgba(77, 208, 225, 0.3);">永續長與永續辦公室</div>
                        </div>
                    </div>
                </div>

                <!-- 國際接軌與永續殊榮 (2x2 Badge Grid) -->
                <h2 style="color: #00838f; font-size: 1.6rem; margin-bottom: 25px; text-align: center;">接軌國際，展現永續硬實力</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 20px; margin-bottom: 50px;">
                    <div style="background: white; padding: 25px; border-radius: 12px; display: flex; align-items: center; gap: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.04); border-top: 4px solid #00acc1;">
                        <div style="font-size: 2.5rem;">🌍</div>
                        <div>
                            <h4 style="color: #00838f; margin: 0 0 5px 0; font-size: 1.1rem;">SBTi 科學基礎減量</h4>
                            <p style="color: #636e72; margin: 0; font-size: 0.95rem; line-height: 1.5;">2024 年通過審查，承諾 2030 年前減少 42% 範疇一與二碳排。</p>
                        </div>
                    </div>
                    <div style="background: white; padding: 25px; border-radius: 12px; display: flex; align-items: center; gap: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.04); border-top: 4px solid #00acc1;">
                        <div style="font-size: 2.5rem;">📊</div>
                        <div>
                            <h4 style="color: #00838f; margin: 0 0 5px 0; font-size: 1.1rem;">TCFD 氣候揭露</h4>
                            <p style="color: #636e72; margin: 0; font-size: 0.95rem; line-height: 1.5;">加入 TCFD 支持者，以國際標準管理氣候風險，降低資訊不對稱。</p>
                        </div>
                    </div>
                    <div style="background: white; padding: 25px; border-radius: 12px; display: flex; align-items: center; gap: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.04); border-top: 4px solid #00acc1;">
                        <div style="font-size: 2.5rem;">🏆</div>
                        <div>
                            <h4 style="color: #00838f; margin: 0 0 5px 0; font-size: 1.1rem;">TCSA 台灣企業永續獎</h4>
                            <p style="color: #636e72; margin: 0; font-size: 0.95rem; line-height: 1.5;">榮獲白金級肯定，且於公司治理評鑑位居前段班，深獲市場認可。</p>
                        </div>
                    </div>
                    <div style="background: white; padding: 25px; border-radius: 12px; display: flex; align-items: center; gap: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.04); border-top: 4px solid #00acc1;">
                        <div style="font-size: 2.5rem;">📈</div>
                        <div>
                            <h4 style="color: #00838f; margin: 0 0 5px 0; font-size: 1.1rem;">CDP 氣候變遷 B級</h4>
                            <p style="color: #636e72; margin: 0; font-size: 0.95rem; line-height: 1.5;">國際問卷獲 B 級評價，S&P Global CSA 評比亦優於產業平均。</p>
                        </div>
                    </div>
                </div>

                <!-- 商業價值轉化 (3-Column Value Cards) -->
                <h2 style="color: #00838f; font-size: 1.6rem; margin-bottom: 25px; text-align: center;">將永續化為長期商業價值</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 50px;">
                    <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); text-align: center;">
                        <div style="font-size: 2.5rem; margin-bottom: 15px;">🌟</div>
                        <h4 style="color: #00838f; font-size: 1.2rem; margin-bottom: 15px;">強化品牌吸引力</h4>
                        <p style="color: #636e72; font-size: 1rem; line-height: 1.6; text-align: justify; margin: 0;"><strong>Hotel Collective</strong><br>取得 LEED 綠建築認證，透過節能空調與低碳營運，迎合現代永續旅遊趨勢，實質提升國際品牌價值與吸引力。</p>
                    </div>
                    <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); text-align: center;">
                        <div style="font-size: 2.5rem; margin-bottom: 15px;">📉</div>
                        <h4 style="color: #00838f; font-size: 1.2rem; margin-bottom: 15px;">提升長期資產價值</h4>
                        <p style="color: #636e72; font-size: 1rem; line-height: 1.6; text-align: justify; margin: 0;"><strong>嘉新大樓</strong><br>為五十歲老建物進行空調與能源升級，取得 EEWH 綠建築雙認證。雖需短期投入，卻能長效降低能源支出，拉高資產效益。</p>
                    </div>
                    <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); text-align: center;">
                        <div style="font-size: 2.5rem; margin-bottom: 15px;">🛡️</div>
                        <h4 style="color: #00838f; font-size: 1.2rem; margin-bottom: 15px;">未來氣候風險控管</h4>
                        <p style="color: #636e72; font-size: 1rem; line-height: 1.6; text-align: justify; margin: 0;"><strong>TNFD（自然相關財務揭露）</strong><br>整合碳管理與生態復育，發展自然解方（NbS），這不僅是環保議題，更是因應未來供應鏈與資本市場要求的風險管理利器。</p>
                    </div>
                </div>

                <!-- 底部：金句引語區塊 -->
                <div style="position: relative; background: #00bcd4; padding: 50px 40px; border-radius: 15px; text-align: center; box-shadow: 0 10px 30px rgba(0, 188, 212, 0.2); margin-bottom: 40px; overflow: hidden;">
                    <div style="position: absolute; top: -20px; left: 20px; font-size: 120px; font-family: serif; color: rgba(255,255,255,0.15); line-height: 1; font-weight: bold;">“</div>
                    <h3 style="color: white; font-size: 1.5rem; line-height: 1.6; position: relative; z-index: 1; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">ESG 不只是成本，而是創造品牌價值、提升投資人信任<br>與強化市場競爭力的重要工具。</h3>
                    <div style="position: absolute; bottom: -50px; right: 20px; font-size: 120px; font-family: serif; color: rgba(255,255,255,0.15); line-height: 1; font-weight: bold;">”</div>
                </div>

                <div style="text-align: center;">
                    <button onclick="navigateTo('units')" style="background: white; color: #00acc1; border: 2px solid #00acc1; padding: 10px 30px; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; transition: all 0.2s; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                        ← 返回永續方舟
                    </button>
                </div>
            </div>
        `
    },
    culture: {
        title: "企業故事長廊 🏢",
        content: `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                <div class="placeholder-card" style="border-top: 5px solid #8e44ad; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(142, 68, 173, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('story_scene_1')">
                    <h2 style="color: #8e44ad; margin-bottom: 10px;">城市韌性｜築起跨越半世紀的底氣</h2>
                    <p style="color: #636e72; line-height: 1.6;">從1954年的第一袋五洲牌水泥開始,我們就與台灣的土地同生共息。嘉新從水泥起家,透過賦予舊空間新生命――讓老舊的靈魂長出新生的質感,為永續生活築第一道防線。</p>
                    <div style="background: rgba(142, 68, 173, 0.05); padding: 10px 12px; border-left: 4px solid #8e44ad; border-radius: 4px; margin-top: 15px;">
                        <p style="color: #8e44ad; font-size: 0.95rem; font-weight: bold; margin: 0; font-style: italic;">「穩定，是 Quality of Life 最堅毅的基石。」</p>
                    </div>
                    <div style="margin-top: 15px; font-weight: bold; color: #8e44ad; text-align: right;">探索故事 ▶</div>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #d35400; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(211, 84, 0, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('story_scene_2')">
                    <h2 style="color: #d35400; margin-bottom: 10px;">優雅旅宿｜在異地找回生活的留白</h2>
                    <p style="color: #636e72; line-height: 1.6;">如果生活是一場長跑,旅宿就是一段優雅的留白。嘉新跨越產業邊界,將對建築的嚴謹轉化為精緻服務的藝術。我們在每一個細節處雕琢「家」的溫度。讓旅行不再只是移動,而是一次感官的洗禮。</p>
                    <div style="background: rgba(211, 84, 0, 0.05); padding: 10px 12px; border-left: 4px solid #d35400; border-radius: 4px; margin-top: 15px;">
                        <p style="color: #d35400; font-size: 0.95rem; font-weight: bold; margin: 0; font-style: italic;">「優雅，是 Quality of Life 最細膩的感官體驗。」</p>
                    </div>
                    <div style="margin-top: 15px; font-weight: bold; color: #d35400; text-align: right;">閱讀部落格 ▶</div>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #16a085; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(22, 160, 133, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('story_scene_3')">
                    <h2 style="color: #16a085; margin-bottom: 10px;">細膩醫養｜守護生命中最溫柔的時刻</h2>
                    <p style="color: #636e72; line-height: 1.6;">高品質的生活,應該在生命的每一個轉折點都得到尊嚴的對待。從產後護理之家到全齡照護的策略布局,我們將醫療專業化作隱形的守護力量，在最脆弱也最神聖的時刻,讓您感受被悉心照料的幸福。</p>
                    <div style="background: rgba(22, 160, 133, 0.05); padding: 10px 12px; border-left: 4px solid #16a085; border-radius: 4px; margin-top: 15px;">
                        <p style="color: #16a085; font-size: 0.95rem; font-weight: bold; margin: 0; font-style: italic;">「健康，是 Quality of Life 最深刻的溫柔關懷。」</p>
                    </div>
                    <div style="margin-top: 15px; font-weight: bold; color: #16a085; text-align: right;">閱讀部落格 ▶</div>
                </div>
            </div>
        `
    },
    story_scene_1: {
        title: "城市韌性｜築起跨越半世紀的底氣 🏙️",
        content: `
            <div style="max-width: 800px; margin: 0 auto 30px auto; padding: 25px 30px; background: #fbf5fc; border-left: 5px solid #8e44ad; border-radius: 8px; font-size: 1.1rem; line-height: 1.8; color: #455a64; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
                從台灣第一家純民營水泥廠出發，嘉新一路走到資產管理、物流與多元事業體，每一次轉型，都是一次重新出發。讓我們一同穿梭時空，回到那些改變嘉新命運的關鍵時刻。
            </div>
            <div class="timeline-container">
                <div class="timeline-item">
                    <div class="timeline-dot" style="border-color: #8e44ad; box-shadow: 0 0 0 6px rgba(142, 68, 173, 0.15);"></div>
                    <div class="timeline-item-content">
                        <div class="timeline-year" style="color: #8e44ad;">1954年</div>
                        <div class="timeline-title">冒險的起點</div>
                        <p class="timeline-text">創辦人張敏鈺先生創立了嘉新水泥股份有限公司，以五洲牌水泥行銷全台。在那個百廢待興的年代，嘉新成為了台灣第一家純民營的水泥廠，打破了當時的市場既有格局，用「品質為先，客戶為重」的鋼鐵紀律開始闖蕩江湖。</p>
                        <img src="assets/city_resilience_cement.png" alt="1954年 冒險的起點">
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot" style="border-color: #d35400; box-shadow: 0 0 0 6px rgba(211, 84, 0, 0.15);"></div>
                    <div class="timeline-item-content">
                        <div class="timeline-year" style="color: #d35400;">1967年</div>
                        <div class="timeline-title">台北街頭最酷的地標</div>
                        <p class="timeline-text">現今座落在中山北路上看起來充滿歷史感的「嘉新大樓」，在1967年落成時，可是全台灣最時髦、最科技化的辦公大樓！它是台灣建築史中第一棟擁有中央空調、雙層隔音鋁窗及複層外牆的大樓，提供了最先進的辦公環境典範。這棟大樓的落成，也悄悄為嘉新未來的資產管理事業埋下了伏筆。</p>
                        <img src="assets/elegant_hospitality.png" alt="1967年 台北街頭最酷的地標">
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot" style="border-color: #16a085; box-shadow: 0 0 0 6px rgba(22, 160, 133, 0.15);"></div>
                    <div class="timeline-item-content">
                        <div class="timeline-year" style="color: #16a085;">1990年代</div>
                        <div class="timeline-title">開啟大航海時代</div>
                        <p class="timeline-text">隨着台灣市場飽和與環保政策轉變，嘉新果斷開啟西進與國際化戰略，在大陸江蘇鎮江打造了京陽水泥廠，成功建立了一條龍的生產與儲運體系，並在2003年成功推動京陽水泥在香港上市。</p>
                        <img src="assets/大航海時代.jpg" alt="1990年代 開啟大航海時代">
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot" style="border-color: #0984e3; box-shadow: 0 0 0 6px rgba(9, 132, 227, 0.15);"></div>
                    <div class="timeline-item-content">
                        <div class="timeline-year" style="color: #0984e3;">2000年代初</div>
                        <div class="timeline-title">華麗轉身，從製造走向通路</div>
                        <p class="timeline-text">隨着2001年高雄岡山廠停產，嘉新轉為貿易通路商，外購水泥供應市場，走向更靈活的市場角色。</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot" style="border-color: #ff7675; box-shadow: 0 0 0 6px rgba(255, 118, 117, 0.15);"></div>
                    <div class="timeline-item-content">
                        <div class="timeline-year" style="color: #ff7675;">2004年</div>
                        <div class="timeline-title">玩轉金融科技</div>
                        <p class="timeline-text">嘉新把旗下的 IBM 智慧型大樓，推動成為台灣第一件不動產證券化（REITs）商品，震驚金融圈，隨後在2005年高價出售給南山人壽，完美展現了資產活化的神操作！</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot" style="border-color: #fdcb6e; box-shadow: 0 0 0 6px rgba(253, 203, 110, 0.15);"></div>
                    <div class="timeline-item-content">
                        <div class="timeline-year" style="color: #fdcb6e;">2006年</div>
                        <div class="timeline-title">制霸港口物流</div>
                        <p class="timeline-text">嘉新跨足港口儲運，斥資新台幣25億餘元蓋了台北港第一散雜貨中心，並非常前衛地採用了「全密閉式環保裝卸設施」，水泥大亨搖身一變成為兼顧環保的港口物流巨頭。</p>
                        <img src="assets/港口物流.jpg" alt="2006年 制霸港口物流">
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot" style="border-color: #2ecc71; box-shadow: 0 0 0 6px rgba(46, 204, 113, 0.15);"></div>
                    <div class="timeline-item-content">
                        <div class="timeline-year" style="color: #2ecc71;">2010年代至今</div>
                        <div class="timeline-title">打造永續新世代</div>
                        <p class="timeline-text">接棒的張剛綸董事長留下一句名言：「水泥是我們的本，所以不能放，只能轉。」近年為分散投資風險，嘉新與台泥合作，透過換股方式成為台泥主要股東，持續參與台泥企業團的國際化佈局與循環經濟轉型。嘉新也成為全台灣第一家完成全集團溫室氣體盤查的水泥業上市公司，把永續 DNA 刻進骨子裏。</p>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 50px; width: 100%;">
                    <button onclick="navigateTo('culture')" style="background: white; color: #8e44ad; border: 2px solid #8e44ad; padding: 10px 30px; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; transition: all 0.2s; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                        ← 返回故事長廊
                    </button>
                </div>
            </div>
        `
    },
    story_scene_2: {
        title: "優雅旅宿｜在異地找回生活的留白 🏨",
        content: `
            <div style="max-width: 800px; margin: 0 auto 30px auto; padding: 25px 30px; background: #fff8f5; border-left: 5px solid #d35400; border-radius: 8px; font-size: 1.1rem; line-height: 1.8; color: #455a64; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
                從一間羅馬飯店開始，到沖繩的自有品牌誕生，嘉新在不同城市之間，慢慢摸索出旅宿的下一種可能。讓我們一同走進時間軸，看見這段國際旅宿的起點與延伸。
            </div>
            <div class="timeline-container">
                <div class="timeline-item">
                    <div class="timeline-dot" style="border-color: #d35400; box-shadow: 0 0 0 6px rgba(211, 84, 0, 0.15);"></div>
                    <div class="timeline-item-content">
                        <div class="timeline-year" style="color: #d35400;">2015年</div>
                        <div class="timeline-title">羅馬 A.ROMA 飯店</div>
                        <p class="timeline-text">與雲朗集團共同投資四星級城市度假酒店「A.ROMA」，佔股四成，開啟了嘉新經營國際飯店的學習之路。<br><br><a href="https://www.ldchotelsitaly.com/en/hotelaroma-rome/" target="_blank" style="color: #d35400; font-weight: bold; text-decoration: none;">點我看更多資訊 ▶</a></p>
                        <img src="assets/羅馬飯店.jpg" alt="2015年 羅馬 A.ROMA 飯店">
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot" style="border-color: #d35400; box-shadow: 0 0 0 6px rgba(211, 84, 0, 0.15);"></div>
                    <div class="timeline-item-content">
                        <div class="timeline-year" style="color: #d35400;">2016年</div>
                        <div class="timeline-title">沖繩豐崎海濱土地</div>
                        <p class="timeline-text">以約 15 億日圓標下沖繩豐崎臨海土地（36,938 平方公尺），預計將開發為觀光度假酒店，進一步擴大日本沖繩的旅宿版圖。</p>
                        <img src="assets/沖繩豐崎.jpg" alt="2016年 沖繩豐崎海濱土地">
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot" style="border-color: #d35400; box-shadow: 0 0 0 6px rgba(211, 84, 0, 0.15);"></div>
                    <div class="timeline-item-content">
                        <div class="timeline-year" style="color: #d35400;">2019年</div>
                        <div class="timeline-title">HOTEL COLLECTIVE</div>
                        <p class="timeline-text">位於日本沖繩那霸市中心「國際通」，佔地 1,453 坪。歷經多年規劃，打造出樓高 13 層、配備 260 間房與大型宴會廳的國際型商務觀光酒店。這是嘉新第一個全新自有品牌的飯店，強調結合設計美學、藝文展覽、美食與在地人文互動的「Collective 凝聚」精神，並於2001年榮獲LEED綠建築認證。<br><br><a href="https://hotelcollective.jp/tc/" target="_blank" style="color: #d35400; font-weight: bold; text-decoration: none;">點我看更多資訊 ▶</a></p>
                        <img src="assets/hotel_collective.jpg" alt="2019年 HOTEL COLLECTIVE">
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 50px; width: 100%;">
                    <button onclick="navigateTo('culture')" style="background: white; color: #d35400; border: 2px solid #d35400; padding: 10px 30px; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; transition: all 0.2s; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                        ← 返回故事長廊
                    </button>
                </div>
            </div>
        `
    },
    story_scene_3: {
        title: "細膩醫養｜守護生命中最溫柔的時刻 🏥",
        content: `
            <div style="max-width: 900px; margin: 0 auto; padding-bottom: 40px;">
                
                <!-- 主視覺圖片 -->
                <img src="assets/人之初.jpg" alt="人之初產後護理之家" style="width: 100%; height: 350px; object-fit: cover; border-radius: 15px; margin-bottom: 30px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); display: block;">

                <!-- 引言區塊 -->
                <div style="background: linear-gradient(135deg, #e0f2f1 0%, #ffffff 100%); padding: 40px; border-radius: 15px; margin-bottom: 40px; border-left: 5px solid #16a085; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <h2 style="color: #16a085; font-size: 1.8rem; margin-bottom: 20px;">跨出舒適圈，陪伴人生重要時刻</h2>
                    <p style="color: #455a64; line-height: 1.8; font-size: 1.15rem; margin-bottom: 15px;">2016 年，在資源有限的情況下，嘉新企業團跨出舒適圈，投入全新的健康照護領域，成立嘉和健康生活股份有限公司。因為團隊相信，健康不只是醫療，更是一種陪伴，存在於人生每一個重要時刻。</p>
                    <p style="color: #455a64; line-height: 1.8; font-size: 1.15rem; margin-bottom: 25px;">而「<strong>人之初產後護理之家</strong>」，正是這段旅程的起點。從迎接新生命開始，人之初希望陪伴每位媽咪走過產後恢復、身心調適與家庭角色轉換，用專業與溫度，讓照護不只是服務，而是一份安心。</p>
                    
                    <div style="display: flex; gap: 30px; justify-content: center; background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
                        <div style="text-align: center;">
                            <div style="font-size: 2.5rem; color: #16a085; font-weight: 900; margin-bottom: 5px;">2,732</div>
                            <div style="color: #7f8c8d; font-size: 0.95rem; font-weight: bold; letter-spacing: 1px;">陪伴媽咪 (位)</div>
                        </div>
                        <div style="width: 2px; background: #ecf0f1;"></div>
                        <div style="text-align: center;">
                            <div style="font-size: 2.5rem; color: #16a085; font-weight: 900; margin-bottom: 5px;">2,888</div>
                            <div style="color: #7f8c8d; font-size: 0.95rem; font-weight: bold; letter-spacing: 1px;">照顧寶寶 (位)</div>
                        </div>
                    </div>
                    <p style="text-align: center; color: #16a085; font-weight: bold; margin-top: 20px; font-size: 1.05rem;">— 邁向亞太地區女性全方位健康照護品牌 —</p>
                </div>

                <!-- 翻轉卡片區塊 -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-bottom: 40px;">
                    
                    <!-- Card 1 -->
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style="background: white; border-top: 6px solid #74b9ff; box-shadow: 0 4px 15px rgba(0,0,0,0.05); position: relative;">
                                <h3 style="font-size: 1.5rem; margin: 0; color: #74b9ff; line-height: 1.4;">什麼是WELL<br>健康建築條件？</h3>
                                <div style="position: absolute; bottom: 20px; font-size: 0.9rem; color: #a4b0be; width: 100%; text-align: center; left: 0;">(移入或點擊)</div>
                            </div>
                            <div class="flip-card-back" style="background: white; border: 2px solid #74b9ff; color: #2c3e50;">
                                <h4 style="color: #74b9ff; margin-bottom: 10px; font-size: 1.1rem;">打造安全、健康的環境</h4>
                                <p style="font-size: 1.05rem; line-height: 1.6; text-align: left; margin: 0; margin-bottom: 15px;">嚴選建材與傢俱，融合陽光、空氣、水三大元素，打造安全、健康的環境品質，讓媽媽與寶寶都能安心休息。</p>
                                <img src="assets/健康建築.jpg" style="width: 100%; height: 100px; object-fit: cover; border-radius: 8px;" alt="健康建築">
                            </div>
                        </div>
                    </div>
                    
                    <!-- Card 2 -->
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style="background: white; border-top: 6px solid #ffb142; box-shadow: 0 4px 15px rgba(0,0,0,0.05); position: relative;">
                                <h3 style="font-size: 1.5rem; margin: 0; color: #ffb142; line-height: 1.4;">月子餐吃什麼？</h3>
                                <div style="position: absolute; bottom: 20px; font-size: 0.9rem; color: #a4b0be; width: 100%; text-align: center; left: 0;">(移入或點擊)</div>
                            </div>
                            <div class="flip-card-back" style="background: white; border: 2px solid #ffb142; color: #2c3e50;">
                                <h4 style="color: #ffb142; margin-bottom: 10px; font-size: 1.1rem;">養身，也養好日常</h4>
                                <p style="font-size: 0.95rem; line-height: 1.6; text-align: left; margin: 0; margin-bottom: 15px;">以東方坐月子調養概念為基礎，由中央廚房每日現煮，嚴選食材並融入多國料理手法。結合中醫師、營養師與主廚團隊，依產後不同階段提供客製化營養補給，讓媽咪養身，也能輕盈無負擔。</p>
                                <img src="assets/月子餐.jpg" style="width: 100%; height: 100px; object-fit: cover; border-radius: 8px;" alt="月子餐">
                            </div>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style="background: white; border-top: 6px solid #1dd1a1; box-shadow: 0 4px 15px rgba(0,0,0,0.05); position: relative;">
                                <h3 style="font-size: 1.5rem; margin: 0; color: #1dd1a1; line-height: 1.4;">想聽更多故事？</h3>
                                <div style="position: absolute; bottom: 20px; font-size: 0.9rem; color: #a4b0be; width: 100%; text-align: center; left: 0;">(移入或點擊)</div>
                            </div>
                            <div class="flip-card-back" style="background: white; border: 2px solid #1dd1a1; color: #2c3e50;">
                                <h4 style="color: #1dd1a1; margin-bottom: 10px; font-size: 1.1rem;">陪伴不同人生階段</h4>
                                <p style="font-size: 0.95rem; line-height: 1.5; margin-bottom: 15px; text-align: left;">集結館內外專家觀點，從孕期、產後恢復到育兒、婚姻與女性健康，透過深入淺出的對談陪伴女性。</p>
                                <div style="display: flex; flex-direction: column; gap: 8px; width: 100%;">
                                    <a href="https://apple.co/44ePl9g" target="_blank" style="background: #f1f2f6; padding: 6px; border-radius: 6px; color: #2c3e50; text-decoration: none; font-weight: bold; font-size: 0.9rem; transition: background 0.2s;">🍎 Apple Podcast</a>
                                    <a href="https://open.spotify.com/show/03Mlj39cZNzgU4oKXbYJU1?si=e68329cc3b384560" target="_blank" style="background: #f1f2f6; padding: 6px; border-radius: 6px; color: #2c3e50; text-decoration: none; font-weight: bold; font-size: 0.9rem; transition: background 0.2s;">🎧 Spotify</a>
                                    <a href="https://bit.ly/441nhGH" target="_blank" style="background: #f1f2f6; padding: 6px; border-radius: 6px; color: #2c3e50; text-decoration: none; font-weight: bold; font-size: 0.9rem; transition: background 0.2s;">🎵 SoundOn</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <button onclick="navigateTo('culture')" style="background: white; color: #16a085; border: 2px solid #16a085; padding: 10px 30px; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; transition: all 0.2s;">
                        ← 返回故事長廊
                    </button>
                </div>
            </div>
        `
    },
    benefits: {
        title: "社群傳送門 🌐",
        content: `
            <p style="text-align: center; color: #636e72; font-size: 1.1rem; margin-bottom: 30px;">點擊下方卡片，深入了解嘉新企業團的多元面貌與最新動態。</p>
            <div class="social-grid">
                <a href="https://www.facebook.com/p/嘉新企業團-100063882524535/" target="_blank" class="social-card fb">
                    <img src="assets/icon_fb.png" alt="Facebook" class="social-icon">
                    <div class="social-title">Facebook</div>
                    <div class="social-summary">企業官方動態</div>
                </a>
                
                <a href="https://www.threads.net/@workin.chc" target="_blank" class="social-card threads">
                    <img src="assets/icon_threads.png" alt="Threads" class="social-icon">
                    <div class="social-title">Threads</div>
                    <div class="social-summary">嘉新日常與快訊</div>
                </a>
                
                <a href="https://www.instagram.com/chcgroup_career.tw" target="_blank" class="social-card ig">
                    <img src="assets/icon_ig.png" alt="Instagram" class="social-icon">
                    <div class="social-title">Instagram</div>
                    <div class="social-summary">職場生活與活動</div>
                </a>
                
                <a href="https://www.chcgroup.com.tw/" target="_blank" class="social-card website">
                    <img src="assets/icon_chc.png" alt="嘉新官網" class="social-icon">
                    <div class="social-title">嘉新官網</div>
                    <div class="social-summary">完整官方資訊</div>
                </a>
                
                <a href="https://www.104.com.tw/company/5gonzzc?jobsource=google&from=social_portal" target="_blank" class="social-card job104">
                    <img src="assets/icon_104.png" alt="104人力資源" class="social-icon">
                    <div class="social-title">104 人力銀行</div>
                    <div class="social-summary">最新職缺與投遞</div>
                </a>
            </div>
        `
    }
};

// GA4 Custom Engagement Tracking variables (Precise Dwell Time & 5s Threshold)
let viewStartTime = null;
let lastActiveView = null;
let lastActiveTitle = null;
let engagementTimer = null;

function navigateTo(viewId) {
    const mapView = document.getElementById('map-view');
    const contentView = document.getElementById('content-view');

    // Clear previous view's engagement timer
    if (engagementTimer) {
        clearTimeout(engagementTimer);
        engagementTimer = null;
    }

    // 1. Calculate and send dwell time for the PREVIOUS view before navigating away
    if (viewStartTime && lastActiveView && lastActiveView !== 'map') {
        const durationSeconds = Math.round((Date.now() - viewStartTime) / 1000);

        // Track only if they stayed at least 1 second to avoid misclicks
        if (durationSeconds >= 1 && typeof gtag === 'function') {
            gtag('event', 'feature_dwell_time', {
                'feature_name': lastActiveView,
                'feature_title': lastActiveTitle,
                'duration_seconds': durationSeconds
            });
        }
    }

    if (viewId === 'map') {
        mapView.classList.add('active');
        mapView.classList.remove('hidden');
        contentView.classList.remove('active');
        contentView.classList.add('hidden');

        if (typeof gtag === 'function') {
            gtag('event', 'return_to_map');
        }

        // Reset variables when returning to map
        viewStartTime = null;
        lastActiveView = null;
        lastActiveTitle = null;
    } else {
        const data = mapData[viewId];
        if (data) {
            document.getElementById('content-title').innerText = data.title;
            // Add a small fade effect when updating content
            const contentBody = document.getElementById('content-body');
            contentBody.style.opacity = 0;
            setTimeout(() => {
                contentBody.innerHTML = data.content;
                contentBody.style.opacity = 1;
                contentBody.style.transition = 'opacity 0.3s ease';

                if (viewId === 'quiz') {
                    renderQuizWelcome();
                } else if (viewId === 'story_interns') {
                    renderInternProfiles();
                }
            }, 150);

            mapView.classList.remove('active');
            mapView.classList.add('hidden');
            contentView.classList.add('active');
            contentView.classList.remove('hidden');

            if (typeof gtag === 'function') {
                gtag('event', 'view_feature', {
                    'feature_name': viewId,
                    'feature_title': data.title
                });
            }

            // Start timing the current view
            viewStartTime = Date.now();
            lastActiveView = viewId;
            lastActiveTitle = data.title;

            // 2. Set a timer to check if user stays on this view for more than 5 seconds
            engagementTimer = setTimeout(() => {
                if (lastActiveView === viewId && typeof gtag === 'function') {
                    gtag('event', 'feature_read_engaged', {
                        'feature_name': viewId,
                        'feature_title': data.title
                    });
                }
            }, 5000);
        }
    }
}

// ==========================================
// 實習生小檔案邏輯 (Intern Profiles Logic)
// ==========================================
let activeInternDept = '全部';

function renderInternProfiles() {
    const container = document.getElementById('interns-container');
    if (!container) return;

    // 1. 實習計畫說明與架構圖 HTML
    const programHtml = `
        <div class="program-section">
            <h2 class="program-title">💡 嘉人實習計畫</h2>
            
            <!-- 核心亮點說明卡片 -->
            <div style="background: white; border-radius: 12px; padding: 25px; border: 1px solid #f1f2f6; margin-bottom: 35px; box-shadow: 0 4px 15px rgba(0,0,0,0.01);">
                <div style="font-weight: bold; color: #d35400; font-size: 1.15rem; margin-bottom: 12px; border-bottom: 2px solid #fcf6ec; padding-bottom: 8px; display: inline-block;">
                    ✨ 學習 × 成長 × 轉正機會
                </div>
                <p style="color: #636e72; line-height: 1.8; font-size: 1.05rem; margin: 0;">
                    為強化未來人才儲備，嘉新持續推動「嘉人實習計劃」，提供明確的學習目標、專業導師的一對一引導，以及完善的培訓機制，並特別給予表現優秀者轉正機會，確保優秀人才能順利銜接正式職涯，展現我們對人才永續發展的承諾。
                </p>
            </div>

            <!-- 7大磐石體驗時間軸 -->
            <h3 style="font-size: 1.25rem; color: #2d3436; font-weight: bold; margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
                🚀 嘉人實習生「7大磐石體驗」計畫
            </h3>
            
            <div class="program-timeline">
                <!-- Step 1 -->
                <div class="timeline-step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <div class="step-title">🗺️ 職場導航｜新人引導</div>
                        <div class="step-desc">
                            為確保實習生快速適應工作環境與企業文化，我們配置專業指導員提供必要協助，包括工作內容說明、辦公環境介紹，以及團隊成員認識，幫助實習生順利展開實習旅程。
                        </div>
                    </div>
                </div>

                <!-- Step 2 -->
                <div class="timeline-step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <div class="step-title">🍕 破冰盛宴｜融合餐會</div>
                        <div class="step-desc">
                            透過輕鬆的餐敘方式，讓實習生與指導員、團隊成員進行互動交流，建立良好關係，同時分享企業文化與實習心得，加速融入團隊。
                        </div>
                    </div>
                </div>

                <!-- Step 3 -->
                <div class="timeline-step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <div class="step-title">⚡ 戰力強化｜新人訓練</div>
                        <div class="step-desc">
                            提供一系列的培訓課程，涵蓋企業文化、職場技能及專業知識，讓實習生具備基礎職場能力，為後續工作奠定穩固基礎。
                        </div>
                    </div>
                </div>

                <!-- Step 4 -->
                <div class="timeline-step">
                    <div class="step-number">4</div>
                    <div class="step-content">
                        <div class="step-title">🚢 沉浸式探索｜企業參訪</div>
                        <div class="step-desc">
                            安排參觀嘉新旗下重要據點，如嘉新國際基隆港，讓實習生深入了解公司水泥與裝卸倉儲業務運作，拓展視野並增強對企業的認識。
                        </div>
                    </div>
                </div>

                <!-- Step 5 -->
                <div class="timeline-step">
                    <div class="step-number">5</div>
                    <div class="step-content">
                        <div class="step-title">🎯 跨界挑戰｜跨部門合作專案</div>
                        <div class="step-desc">
                            鼓勵實習生參與跨部門合作專案，培養溝通協調能力與團隊合作精神，並在實際運作中學習解決問題，提升綜合職能。
                        </div>
                    </div>
                </div>

                <!-- Step 6 -->
                <div class="timeline-step">
                    <div class="step-number">6</div>
                    <div class="step-content">
                        <div class="step-title">📈 成長回顧｜月分享會</div>
                        <div class="step-desc">
                            每月舉辦實習生分享會，讓大家交流學習成果、職場體驗與心得，並透過回饋機制優化實習計畫，確保每位實習生都能獲得豐富的學習收穫。
                        </div>
                    </div>
                </div>

                <!-- Step 7 -->
                <div class="timeline-step">
                    <div class="step-number">7</div>
                    <div class="step-content">
                        <div class="step-title">🏆 終極SHOWTIME｜期末分享會</div>
                        <div class="step-desc">
                            期末分享會是嘉人實習計畫的重要環節，讓實習生有機會分享在實習期間的學習成果、挑戰突破與心得體驗，向全體同仁展示精彩成果！
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 2. 實習生心聲主題分類定義
    const themes = [
        {
            key: "growth",
            title: "🌱 挑戰與成長 (Growth & Practice)",
            color: "#fdcb6e",
            desc: "在被支持的環境中跨出舒適圈，將課堂知識轉化為實戰能耐。"
        },
        {
            key: "empowerment",
            title: "💪 賦權與價值 (Empowerment & Trust)",
            color: "#2ecc71",
            desc: "拒絕打雜！在這裡，我們提出的想法有被實踐的可能，深刻感受被認真對待。"
        },
        {
            key: "environment",
            title: "🥰 福利與環境 (Welfare & Health)",
            color: "#ff7675",
            desc: "超舒適的新辦公空間與五星級豪華健身房，運動健檢福利滿滿。"
        },
        {
            key: "vibe",
            title: "☕ 氛圍與日常 (Vibe & Culture)",
            color: "#a29bfe",
            desc: "彈性自主的上下班時間、超歡樂的工作氛圍，還有能直接跟總經理暢聊的早午餐日常。"
        }
    ];

    // 3. 生成各個主題的心聲卡片軌道
    let themesHtml = `
        <div style="margin-top: 40px; border-top: 1px solid #f1f2f6; padding-top: 20px;">
            <h2 style="font-size: 1.6rem; color: #2d3436; text-align: center; margin-bottom: 10px; font-weight: bold;">📣 嘉人實習生真實心聲</h2>
            <p style="text-align: center; color: #b2bec3; font-size: 0.95rem; margin-bottom: 30px;">（左右滑動卡片可瀏覽不同實習生的觀點心得）</p>
        </div>
    `;

    themes.forEach(theme => {
        // Filter interns belonging to this theme
        const themeInterns = internsData.filter(i => i.theme === theme.key);

        if (themeInterns.length > 0) {
            themesHtml += `
                <div class="theme-section">
                    <h3 class="theme-section-title">
                        <span style="color: ${theme.color};">${theme.title}</span>
                    </h3>
                    <p style="color: #b2bec3; font-size: 0.9rem; margin-top: -10px; margin-bottom: 15px; padding-left: 5px;">${theme.desc}</p>
                    
                    <div class="interns-track">
            `;

            themeInterns.forEach(intern => {
                themesHtml += `
                        <div class="intern-card" style="border-left-color: ${intern.themeColor};">
                            <div>
                                <!-- Card Header -->
                                <div class="intern-card-header">
                                    <div class="intern-avatar" style="background: ${intern.avatarBg};">${intern.avatarEmoji}</div>
                                    <div class="intern-info">
                                        <div class="intern-name-row">
                                            <span class="intern-name">${intern.name}</span>
                                            <span class="intern-badge" style="background-color: ${intern.themeColor};">${intern.dept}</span>
                                        </div>
                                        <span class="intern-school">${intern.school}</span>
                                    </div>
                                </div>
                                
                                <!-- Card Content -->
                                <div class="intern-quote-box">
                                    <p class="intern-quote">「${intern.quote}」</p>
                                </div>
                            </div>
                        </div>
                `;
            });

            themesHtml += `
                    </div>
                </div>
            `;
        }
    });

    // 4. 合併所有內容渲染至容器
    container.innerHTML = `
        <p class="interns-intro" style="margin-bottom: 40px;">
            在嘉新，實習生是推動企業前進的真實力量。看看「嘉人計畫」的規劃，並聽聽實習生們最真實的第一視角分享。
        </p>
        ${programHtml}
        ${themesHtml}
        
        <div style="text-align: center; margin-top: 40px; margin-bottom: 20px;">
            <button onclick="navigateTo('story')" style="background: white; color: #a29bfe; border: 2px solid #a29bfe; padding: 12px 35px; border-radius: 30px; font-size: 1.1rem; cursor: pointer; font-weight: bold; transition: all 0.2s; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
                ← 返回嘉人視角
            </button>
        </div>
    `;
}

// Handle closing the intro overlay
function closeIntro() {
    const introOverlay = document.getElementById('intro-overlay');
    if (introOverlay) {
        introOverlay.classList.add('hidden');

        // Optional: Track that the user entered the map from the intro
        if (typeof gtag === 'function') {
            gtag('event', 'enter_map_from_intro');
        }
    }
}

// ==========================================
// Quiz Logic (Native JS)
// ==========================================
const QUIZ_ICONS = {
    Target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    ShieldCheck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    Users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    Rocket: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 3.4-2 3.4s2.14-.5 3.4-2c1.26-1.5 2-3.4 2-3.4s-2.14.5-3.4 2Z"/><path d="M12 12c-3 3-7 3-7 3s0-4 3-7c2-2 5-3 8-3 3 0 6 3 6 3s-1 6-3 8c-1 1-3 2-4 2Z"/><path d="M9 15s.5 2.5 2 4c1.5 1.5 4 2 4 2s-.5-2.5-2-4"/><path d="M15 9s2.5.5 4 2c1.5 1.5 2 4 2 4s-2.5-.5-4-2"/><path d="m9 15 3-3"/></svg>`,
    Building: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>`,
    Monitor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
    Sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5z"/><path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z"/></svg>`,
    ChevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
    RefreshCw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M16 3h5v5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 21H3v-5"/></svg>`
};

let currentQuizQuestionIndex = 0;
let quizAnswers = [];
let quizShuffledOptions = [];
let quizSelectedDeptId = null;
let quizDimensionScores = null;
let quizPrimaryPersona = null;
let quizTopDepartments = [];

function renderQuizWelcome() {
    currentQuizQuestionIndex = 0;
    quizAnswers = [];
    quizShuffledOptions = [];
    quizSelectedDeptId = null;
    quizDimensionScores = null;
    quizPrimaryPersona = null;
    quizTopDepartments = [];

    const container = document.getElementById('quiz-container');
    if (!container) return;

    container.innerHTML = `
        <div class="quiz-welcome animate-fade-in">
            <div class="quiz-welcome-icon-container">
                ${QUIZ_ICONS.Sparkles}
            </div>
            <h1 class="quiz-welcome-title">
              嘉新企業團<br/>職場人格快測
            </h1>
            <p class="quiz-welcome-subtitle">
              只需 5 題，發掘你的職場超能力。<br/>找到你在嘉新的最佳位置！
            </p>
            <button onclick="startQuiz()" class="quiz-start-btn">
              開始測驗 ${QUIZ_ICONS.ChevronRight}
            </button>
        </div>
    `;
}

function startQuiz() {
    currentQuizQuestionIndex = 0;
    quizAnswers = [];
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    const q = QUESTIONS[currentQuizQuestionIndex];
    const progressPercent = ((currentQuizQuestionIndex + 1) / QUESTIONS.length) * 100;

    // Shuffle options using Fisher-Yates algorithm
    const optionsCopy = [...q.options];
    for (let i = optionsCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
    }
    quizShuffledOptions = optionsCopy;

    let optionsHtml = '';
    quizShuffledOptions.forEach((opt, idx) => {
        const letter = String.fromCharCode(65 + idx); // A, B, C, D
        optionsHtml += `
            <button onclick="handleQuizAnswer(${idx})" class="quiz-option">
                <span class="quiz-option-letter">${letter}</span>
                <span class="quiz-option-text">${opt.text}</span>
            </button>
        `;
    });

    container.innerHTML = `
        <div class="quiz-question-view animate-fade-in">
            <!-- Progress Bar -->
            <div class="quiz-progress-wrapper">
                <div class="quiz-progress-text">
                    <span>測驗進度</span>
                    <span>${currentQuizQuestionIndex + 1} / ${QUESTIONS.length}</span>
                </div>
                <div class="quiz-progress-bg">
                    <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
                </div>
            </div>

            <!-- Question -->
            <h2 class="quiz-question-title">${q.q}</h2>

            <!-- Options -->
            <div class="quiz-options-list">
                ${optionsHtml}
            </div>
        </div>
    `;
}

function handleQuizAnswer(shuffledOptIdx) {
    const selectedOption = quizShuffledOptions[shuffledOptIdx];
    quizAnswers.push(selectedOption.traits);

    if (currentQuizQuestionIndex < QUESTIONS.length - 1) {
        currentQuizQuestionIndex++;
        renderQuizQuestion();
    } else {
        renderQuizLoading();
    }
}

function renderQuizLoading() {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    container.innerHTML = `
        <div class="quiz-loading-container animate-fade-in">
            <div class="quiz-loading-spinner">
                ${QUIZ_ICONS.RefreshCw}
            </div>
            <h3 class="quiz-loading-text">分析您的專屬特質...</h3>
        </div>
    `;

    setTimeout(calculateQuizResults, 1500);
}

function calculateQuizResults() {
    // 1. Sum up all trait scores
    const scores = { S: 0, P: 0, H: 0, A: 0, X: 0, T: 0 };
    quizAnswers.forEach(traits => {
        Object.entries(traits).forEach(([trait, score]) => {
            scores[trait] += score;
        });
    });

    // Clean scores for visualization (Math.floor)
    const cleanScores = {
        S: Math.floor(scores.S), P: Math.floor(scores.P),
        H: Math.floor(scores.H), A: Math.floor(scores.A),
        X: Math.floor(scores.X), T: Math.floor(scores.T)
    };
    quizDimensionScores = cleanScores;

    // 2. Determine primary persona and sorted traits (adding small random factor to prevent ties)
    const sortedTraits = Object.keys(scores)
        .map(trait => ({ trait, score: scores[trait] + (Math.random() * 0.1) }))
        .sort((a, b) => b.score - a.score);

    const primary = sortedTraits[0].trait;
    quizPrimaryPersona = primary;

    const scoreS = cleanScores.S;
    const scoreP = cleanScores.P;
    const scoreH = cleanScores.H;
    const scoreA = cleanScores.A;
    const scoreX = cleanScores.X;
    const scoreT = cleanScores.T;

    // 3. Recommended Departments Decision Tree
    let primaryMatches = [];
    let secondaryMatches = [];

    if (primary === 'S') {
        if (scoreT >= scoreH) primaryMatches.push('IN');
        else if (scoreH > scoreT) primaryMatches.push('GM');
        if (Math.abs(scoreS - scoreH) <= 2 && scoreT >= 2) primaryMatches.push('SU');
    }
    else if (primary === 'P') {
        if (scoreT >= 3) primaryMatches.push('FI');
        else {
            primaryMatches.push('AU');
            primaryMatches.push('BS');
        }
    }
    else if (primary === 'H') {
        if (scoreX >= 3) primaryMatches.push('TC');
        else if (scoreS >= 2 && scoreS <= 4) primaryMatches.push('SU');
        else primaryMatches.push('AS');
    }
    else if (primary === 'A') {
        if (scoreS >= 3) primaryMatches.push('SA');
        if (scoreT >= 3) primaryMatches.push('IT');
        if (scoreS < 3 && scoreT < 3) primaryMatches.push('GA');
    }
    else if (primary === 'T') {
        if (scoreA >= 3) primaryMatches.push('IT');
        if (scoreS >= 3) primaryMatches.push('IN');
        if (scoreA < 3 && scoreS < 3) primaryMatches.push('FI');
    }
    else if (primary === 'X') {
        if (scoreP >= 3) primaryMatches.push('GA');
        if (scoreH >= 3) primaryMatches.push('AS');
        if (scoreP < 3 && scoreH < 3) primaryMatches.push('TC');
    }

    // Default fallbacks for primary matches
    if (primaryMatches.length === 0) {
        if (primary === 'S') primaryMatches.push('GM');
        if (primary === 'P') primaryMatches.push('BS');
        if (primary === 'H') primaryMatches.push('TC');
        if (primary === 'A') primaryMatches.push('SA');
        if (primary === 'T') primaryMatches.push('IT');
        if (primary === 'X') primaryMatches.push('GA');
    }

    // 4. Secondary Recommendations
    const secondaryTrait = sortedTraits[1].trait;
    const tryAddSecondary = (deptId) => {
        if (!primaryMatches.includes(deptId) && !secondaryMatches.includes(deptId)) {
            secondaryMatches.push(deptId);
        }
    };

    if (secondaryTrait === 'S') {
        if (scoreT >= scoreH) tryAddSecondary('IN');
        else if (scoreH > scoreT) tryAddSecondary('GM');
        if (Math.abs(scoreS - scoreH) <= 2 && scoreT >= 2) tryAddSecondary('SU');
    }
    else if (secondaryTrait === 'P') {
        if (scoreT >= 3) tryAddSecondary('FI');
        else { tryAddSecondary('AU'); tryAddSecondary('BS'); }
    }
    else if (secondaryTrait === 'H') {
        if (scoreX >= 3) tryAddSecondary('TC');
        else if (scoreS >= 2 && scoreS <= 4) tryAddSecondary('SU');
        else tryAddSecondary('AS');
    }
    else if (secondaryTrait === 'A') {
        if (scoreS >= 3) tryAddSecondary('SA');
        if (scoreT >= 3) tryAddSecondary('IT');
        if (scoreS < 3 && scoreT < 3) tryAddSecondary('GA');
    }
    else if (secondaryTrait === 'T') {
        if (scoreA >= 3) tryAddSecondary('IT');
        if (scoreS >= 3) tryAddSecondary('IN');
        if (scoreA < 3 && scoreS < 3) tryAddSecondary('FI');
    }
    else if (secondaryTrait === 'X') {
        if (scoreP >= 3) tryAddSecondary('GA');
        if (scoreH >= 3) tryAddSecondary('AS');
        if (scoreP < 3 && scoreH < 3) tryAddSecondary('TC');
    }

    // 5. Fallback logic based on weights to fill up to 3 recommendations
    const fallbackScores = { SU: 0, BS: 0, AU: 0, GM: 0, AS: 0, SA: 0, GA: 0, IN: 0, TC: 0, FI: 0, LE: 0, IT: 0 };
    fallbackScores.GM = scoreS * 1.5; fallbackScores.IN = scoreS + scoreT; fallbackScores.SU = scoreS + scoreH;
    fallbackScores.BS = scoreP * 1.5; fallbackScores.AU = scoreP * 1.2; fallbackScores.FI = scoreP + scoreT; fallbackScores.LE = scoreP * 1.1;
    fallbackScores.TC = scoreH + scoreX;
    fallbackScores.SA = scoreA + scoreS;
    fallbackScores.IT = scoreT + scoreA;
    fallbackScores.GA = scoreX + scoreP; fallbackScores.AS = scoreX + scoreH;

    const fallbackSorted = Object.keys(fallbackScores)
        .sort((a, b) => fallbackScores[b] - fallbackScores[a]);

    let finalDeptIds = [...primaryMatches, ...secondaryMatches];
    finalDeptIds = [...new Set(finalDeptIds)]; // deduplicate

    let idx = 0;
    while (finalDeptIds.length < 3 && idx < fallbackSorted.length) {
        if (!finalDeptIds.includes(fallbackSorted[idx])) {
            finalDeptIds.push(fallbackSorted[idx]);
        }
        idx++;
    }

    finalDeptIds = finalDeptIds.slice(0, 3);
    quizTopDepartments = finalDeptIds.map(id => DEPARTMENTS[id]);

    renderQuizResult();
}

function renderQuizResult() {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    const persona = TRAIT_PERSONAS[quizPrimaryPersona];
    const totalScore = Object.values(quizDimensionScores).reduce((a, b) => a + b, 0);

    // Get sorted dimensions to display the top 3
    const sortedDimensions = Object.entries(quizDimensionScores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    let chartRowsHtml = '';
    sortedDimensions.forEach(([trait, score]) => {
        const percentage = totalScore > 0 ? Math.round((score / totalScore) * 100) : 0;
        const config = DIMENSION_LABELS[trait];
        chartRowsHtml += `
            <div class="quiz-chart-row">
                <div class="quiz-chart-label">${config.label}</div>
                <div class="quiz-chart-bar-wrapper" style="background-color: ${config.light};">
                    <div class="quiz-chart-bar" style="width: 0%; background-color: ${config.color};"></div>
                </div>
                <div class="quiz-chart-val">${percentage}%</div>
            </div>
        `;
    });

    let deptsHtml = '';
    quizTopDepartments.forEach((dept, idx) => {
        const isSelected = quizSelectedDeptId === dept.id;
        const cardClass = isSelected ? 'quiz-dept-card selected' : 'quiz-dept-card';

        let responsibilitiesListHtml = '';
        dept.responsibilities.forEach(resp => {
            responsibilitiesListHtml += `
                <li class="quiz-dept-resp-item">
                    <span class="quiz-dept-resp-bullet">•</span>
                    <span>${resp}</span>
                </li>
            `;
        });

        deptsHtml += `
            <div class="${cardClass}" id="dept-card-${dept.id}">
                <button class="quiz-dept-header" onclick="toggleQuizDeptCard('${dept.id}')">
                    <div class="quiz-dept-number">${idx + 1}</div>
                    <div class="quiz-dept-title">${dept.name}</div>
                    <div class="quiz-dept-arrow">
                        ${QUIZ_ICONS.ChevronRight}
                    </div>
                </button>
                <div class="quiz-dept-content-wrapper" id="dept-content-wrapper-${dept.id}" style="height: 0px;">
                    <div class="quiz-dept-content">
                        <div class="quiz-dept-sep"></div>
                        <h4 class="quiz-dept-resp-title">主要職掌業務</h4>
                        <ul class="quiz-dept-resp-list">
                            ${responsibilitiesListHtml}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    });

    const hashKeywords = persona.keywords.split('｜').map(kw => `#${kw.trim()}`).join(' ');

    container.innerHTML = `
        <div class="quiz-result-view animate-fade-in" style="overflow-y: auto;">
            <!-- Header: Persona Icon & Title -->
            <div class="quiz-result-icon-wrapper">
                ${QUIZ_ICONS[persona.icon]}
            </div>
            <h2 class="quiz-result-title">${persona.title}</h2>
            <p class="quiz-result-desc">${persona.desc}</p>

            <!-- Keywords -->
            <div class="quiz-result-keywords-box">
                <div class="quiz-result-keywords-title">關鍵特質</div>
                <div class="quiz-result-keywords-text">${hashKeywords}</div>
            </div>

            <!-- Chart -->
            <div class="quiz-chart-box">
                <h3 class="quiz-chart-title">您的職場特質組成</h3>
                <div class="space-y-3.5">
                    ${chartRowsHtml}
                </div>
            </div>

            <!-- Recommended Departments -->
            <div style="margin-top: auto; width: 100%;">
                <h3 class="quiz-depts-title">點擊查看適合您的部門與職掌</h3>
                <div class="quiz-depts-list">
                    ${deptsHtml}
                </div>
            </div>

            <!-- Retry Button -->
            <button onclick="renderQuizWelcome()" class="quiz-retry-btn-new">
                ${QUIZ_ICONS.RefreshCw} 回到首頁重新測驗
            </button>
        </div>
    `;

    // Trigger chart animation after render
    setTimeout(() => {
        const bars = container.querySelectorAll('.quiz-chart-bar');
        bars.forEach((bar, idx) => {
            const trait = sortedDimensions[idx][0];
            const score = quizDimensionScores[trait];
            const percentage = totalScore > 0 ? Math.round((score / totalScore) * 100) : 0;
            bar.style.width = `${percentage}%`;
        });
    }, 50);
}

function toggleQuizDeptCard(deptId) {
    const card = document.getElementById(`dept-card-${deptId}`);
    const contentWrapper = document.getElementById(`dept-content-wrapper-${deptId}`);
    if (!card || !contentWrapper) return;

    const isSelected = card.classList.contains('selected');

    // Close all other cards first to create an accordion effect
    const allCards = document.querySelectorAll('.quiz-dept-card');
    allCards.forEach(c => {
        c.classList.remove('selected');
        const wrapper = c.querySelector('.quiz-dept-content-wrapper');
        if (wrapper) {
            wrapper.style.height = '0px';
        }
    });

    if (!isSelected) {
        card.classList.add('selected');
        const content = contentWrapper.querySelector('.quiz-dept-content');
        if (content) {
            const scrollHeight = content.scrollHeight;
            contentWrapper.style.height = `${scrollHeight}px`;
        }
        quizSelectedDeptId = deptId;
    } else {
        quizSelectedDeptId = null;
    }
}



function switchWomenLeaderTab(leaderId, tabName) {
    // 1. Get the card container of the target leader
    const activeContent = document.getElementById(`${leaderId}-${tabName}`);
    if (!activeContent) return;

    const card = activeContent.closest('.leader-card, .gm-column-section');
    if (!card) return;

    // 2. Update active button styles
    const buttons = card.querySelectorAll('.leader-tab-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('onclick').includes(tabName)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 3. Toggle content visibility with animation
    const contents = card.querySelectorAll('.leader-tab-content');
    contents.forEach(content => {
        if (content.id === `${leaderId}-${tabName}`) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
}

// ==========================================
// GA4 External Links & Outbound Click Tracking
// ==========================================
document.addEventListener('click', function (e) {
    const anchor = e.target.closest('a');
    if (anchor && anchor.href) {
        const url = anchor.href;

        // Track only external links (different hostname or not local)
        if (!url.includes(window.location.hostname) && url.startsWith('http')) {
            let linkType = 'other';

            // Classify links based on their domain
            if (url.includes('facebook.com')) {
                linkType = 'facebook';
            } else if (url.includes('threads.net')) {
                linkType = 'threads';
            } else if (url.includes('instagram.com')) {
                linkType = 'instagram';
            } else if (url.includes('104.com.tw')) {
                // Distinguish between Quiz 104 link and Social Portal 104 link
                if (url.includes('from=quiz')) {
                    linkType = '104_quiz';
                } else {
                    linkType = '104_social_portal';
                }
            } else if (url.includes('apple.co') || url.includes('spotify.com') || url.includes('spoti.fi') || url.includes('soundon')) {
                linkType = 'podcast';
            }

            if (typeof gtag === 'function') {
                gtag('event', 'click_external_link', {
                    'link_url': url,
                    'link_type': linkType,
                    'link_text': anchor.innerText.trim() || anchor.title || 'icon_click'
                });
            }
        }
    }
});

// ==========================================
// GA4 Tab Close / Visibility Change Tracking (Dwell Time Protection)
// ==========================================
window.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden' && viewStartTime && lastActiveView && lastActiveView !== 'map') {
        const durationSeconds = Math.round((Date.now() - viewStartTime) / 1000);
        if (durationSeconds >= 1 && typeof gtag === 'function') {
            gtag('event', 'feature_dwell_time', {
                'feature_name': lastActiveView,
                'feature_title': lastActiveTitle,
                'duration_seconds': durationSeconds
            });
        }
        viewStartTime = null; // Reset to avoid double reporting
    }
});


