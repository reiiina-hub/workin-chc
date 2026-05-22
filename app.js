const mapData = {
    story: {
        title: "嘉人視角專區 👀",
        content: `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                <div class="placeholder-card" style="border-top: 5px solid #ff7675;">
                    <h2 style="color: #ff7675; margin-bottom: 10px;">女力領導</h2>
                    <p style="color: #636e72; line-height: 1.6;">在嘉新，我們相信多元共融的力量。這裡有著無數傑出的女性領導者，她們以堅韌、細膩與創新的思維，帶領團隊在各個事業體中不斷突破。閱讀她們的故事，看見溫柔而堅定的女力如何推動企業前進。</p>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #74b9ff; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(116, 185, 255, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('story_care')">
                    <h2 style="color: #74b9ff; margin-bottom: 10px;">全面員工支持與關懷</h2>
                    <p style="color: #636e72; line-height: 1.6; font-weight: bold; margin-bottom: 10px;">360 度全方位福利</p>
                    <p style="color: #636e72; line-height: 1.6;">從「日常彈性」、「身心健康」、「財富保障」到「生老病死」的全方位照顧。我們提供優於法規的假勤與各項補助，做為嘉人們最安心的後盾，打造工作與生活雙贏的幸福職場。</p>
                    <div style="margin-top: 15px; font-weight: bold; color: #74b9ff; text-align: right;">探索完整福利 ▶</div>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #a29bfe;">
                    <h2 style="color: #a29bfe; margin-bottom: 10px;">嘉人計畫</h2>
                    <p style="color: #636e72; line-height: 1.6; font-weight: bold; margin-bottom: 10px;">實習生怎麼說</p>
                    <p style="color: #636e72; line-height: 1.6;">「嘉人計畫」是我們培育未來人才的搖籃。在這裡，實習生不只是旁觀者，而是實際參與專案的實作夥伴。聽聽歷屆實習生分享他們在嘉新的成長歷程、獲得的啟發，以及這段寶貴經歷如何影響他們的職涯發展。</p>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #fdcb6e; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(253, 203, 110, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('story_benefits')">
                    <h2 style="color: #fdcb6e; margin-bottom: 10px;">生活由我定義</h2>
                    <p style="color: #636e72; line-height: 1.6; font-weight: bold; margin-bottom: 10px;">彈性工作日常</p>
                    <p style="color: #636e72; line-height: 1.6;">早鳥還是夜貓？別人補班我們在幹嘛？透過真實的嘉人視角，帶你偷看我們的貼心福利，了解嘉新如何實踐「工作與生活完美平衡」！</p>
                    <div style="margin-top: 15px; font-weight: bold; color: #fdcb6e; text-align: right;">偷偷看嘉人動態 👀 ▶</div>
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

                <!-- Card 3 -->
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
                            <li><b>專屬假勤：</b> 新人假（通過試用期即享 2 日）、生日假（當月半日）、志工假（每年 6 天）。</li>
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
                    <p style="color: #636e72; line-height: 1.6;">嘉新致力於與自然和諧共存，透過導入綠能與先進的環保科技，實踐節能減碳的承諾。點擊探索我們如何結合科技與環保，創造永續的綠色典範。</p>
                    <div style="margin-top: 15px; font-weight: bold; color: #2ecc71; text-align: right;">探索環境故事 ▶</div>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #f39c12; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(243, 156, 18, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('esg_s')">
                    <h2 style="color: #f39c12; margin-bottom: 10px;">S 社會共榮</h2>
                    <p style="color: #636e72; line-height: 1.6;">我們深信企業必須回饋社會。透過長期投入教育資源與危機時刻的在地送暖，嘉新將關懷化為實際行動。點擊了解那些改變社會的動人故事。</p>
                    <div style="margin-top: 15px; font-weight: bold; color: #f39c12; text-align: right;">探索社會故事 ▶</div>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #3498db; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(52, 152, 219, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('esg_g')">
                    <h2 style="color: #3498db; margin-bottom: 10px;">G 透明治理</h2>
                    <p style="color: #636e72; line-height: 1.6;">透明的溝通與責任是我們治理的核心。從高層主管的「公開認錯」到 ESG 目標的直接掛鉤，我們堅持「玩真的」。點擊查看我們的治理之道。</p>
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
                            <div style="color: #7f8c8d; font-size: 0.95rem; font-weight: bold; letter-spacing: 1px;">水庫綠能開發</div>
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

                <!-- 太陽能與生態共存 -->
                <div style="margin-bottom: 30px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="padding: 30px;">
                        <h2 style="color: #2ecc71; font-size: 1.8rem; margin-bottom: 15px;">☀️ 空間再利用與低衝擊綠能：阿公店水庫</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">相較於大規模開發綠地設置太陽能板，嘉新的方向更偏向既有空間再利用與低衝擊改造。以岡山基地周邊為例，鄰近的阿公店水庫是台灣重要的水域型太陽能示範場域。該區系統採浮力式設計，不需大量破壞土地植被，僅占水庫面積約 3.5%。</p>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-top: 10px;">水面型太陽能還具有降低水分蒸發、減少藻類增生等優點，這反映出我們對永續能源的重要理念。</p>
                    </div>
                </div>

                <!-- TNFD 與生物多樣性 -->
                <div style="margin-bottom: 30px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="padding: 30px;">
                        <h2 style="color: #2ecc71; font-size: 1.8rem; margin-bottom: 15px;">🦋 生物多樣性潛力與 TNFD 前瞻規劃</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-bottom: 15px;">阿公店水庫不僅是綠能示範場域，其集水區涵蓋水域、低海拔次生林與草生地，更具備支持多元生態的複合型棲地特徵。周邊的生態池與水岸綠帶，已成為森林性鳥類、兩棲類與水域生物的潛在棲息地。</p>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-bottom: 15px;">為了進一步提升區域生態韌性與自然碳匯，我們正評估導入如九芎、台灣海棗等原生樹種，進行棲地連結與增匯型植群經營。從「低衝擊」邁向「積極復育」，這正是我們響應 TNFD 自然資本管理的長期承諾。</p>
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
                    <div style="flex: 1; min-width: 300px; background: #fdfbf7; padding: 40px; display: flex; flex-direction: column; justify-content: center; align-items: center; border-right: 1px solid #f1f2f6;">
                        <div style="width: 80px; height: 80px; border-radius: 50%; background: #ffeaa7; display: flex; justify-content: center; align-items: center; font-size: 2rem; margin-bottom: 15px;">📚</div>
                        <div style="color: #b2bec3; font-size: 0.9rem;">圖片佔位區</div>
                    </div>
                    <div style="flex: 2; min-width: 300px; padding: 40px;">
                        <h2 style="color: #f39c12; font-size: 1.6rem; margin-bottom: 15px;">深耕教育與情緒陪伴</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-bottom: 15px;">嘉新兆福文化基金會已連續超過六十年提供獎助學金，協助弱勢學生安心就學。除了實質金錢補助，我們更看重孩子的心理成長。</p>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">近年推出最具代表性的「小海狸永續助學計畫」，導入社會情緒學習（SEL）課程，幫助偏鄉孩童建立情緒認知與面對挫折的能力。計畫上路至今，超過九成家長與老師皆表示孩子的情緒穩定度與自我認同感有顯著提升。</p>
                    </div>
                </div>

                <!-- 支柱二：由內而外的志工文化 (右圖左文) -->
                <div style="display: flex; flex-wrap: wrap; flex-direction: row-reverse; margin-bottom: 40px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="flex: 1; min-width: 300px; background: #fdfbf7; padding: 40px; display: flex; flex-direction: column; justify-content: center; align-items: center; border-left: 1px solid #f1f2f6;">
                        <div style="width: 80px; height: 80px; border-radius: 50%; background: #fab1a0; display: flex; justify-content: center; align-items: center; font-size: 2rem; margin-bottom: 15px;">🤝</div>
                        <div style="color: #b2bec3; font-size: 0.9rem;">圖片佔位區</div>
                    </div>
                    <div style="flex: 2; min-width: 300px; padding: 40px;">
                        <h2 style="color: #f39c12; font-size: 1.6rem; margin-bottom: 15px;">由內而外的志工陪伴文化</h2>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem; margin-bottom: 15px;">嘉新的公益不是單純捐錢，而是建立長期的社會陪伴關係。我們鼓勵員工成為社會的支持力量，讓永續精神融入企業文化。</p>
                        <p style="color: #636e72; line-height: 1.8; font-size: 1.1rem;">在「正向大人陪伴計畫」中，員工們親身參與，陪伴弱勢青少年挑戰單車環島，或是透過料理活動建立情感連結。這種由內而外的參與模式，讓員工在服務中重新理解工作的價值與社會責任。</p>
                    </div>
                </div>

                <!-- 支柱三：文化傳承與健康生活 (左圖右文) -->
                <div style="display: flex; flex-wrap: wrap; margin-bottom: 50px; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="flex: 1; min-width: 300px; background: #fdfbf7; padding: 40px; display: flex; flex-direction: column; justify-content: center; align-items: center; border-right: 1px solid #f1f2f6;">
                        <div style="width: 80px; height: 80px; border-radius: 50%; background: #55efc4; display: flex; justify-content: center; align-items: center; font-size: 2rem; margin-bottom: 15px;">🏛️</div>
                        <div style="color: #b2bec3; font-size: 0.9rem;">圖片佔位區</div>
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
                        <p style="color: #636e72; font-size: 1rem; line-height: 1.6; text-align: justify; margin: 0;"><strong>阿公店水庫與 TNFD</strong><br>整合碳管理與生態復育，發展自然解方（NbS），這不僅是環保議題，更是因應未來供應鏈與資本市場要求的風險管理利器。</p>
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
                    <p style="color: #636e72; line-height: 1.6;">從 1954 年的第一袋五洲牌水泥開始，我們就與台灣的土地同生共息。我們深知，高品質的生活必須建立在最穩固的基礎之上。嘉新從水泥起家，現在更透過資產開發賦予舊空間新生命。這不只是建築的翻新，而是對城市韌性的承諾——讓老舊的靈魂長出新生的質感，為永續生活築起第一道防線。</p>
                    <div style="background: rgba(142, 68, 173, 0.05); padding: 15px; border-left: 4px solid #8e44ad; border-radius: 4px; margin-top: 15px;">
                        <p style="color: #8e44ad; font-size: 1.05rem; font-weight: bold; margin: 0; font-style: italic;">「穩定，是 Quality of Life 最堅毅的基石。」</p>
                    </div>
                    <div style="margin-top: 15px; font-weight: bold; color: #8e44ad; text-align: right;">探索故事 ▶</div>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #d35400; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(211, 84, 0, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('story_scene_2')">
                    <h2 style="color: #d35400; margin-bottom: 10px;">優雅旅宿｜在異地找回生活的留白</h2>
                    <p style="color: #636e72; line-height: 1.6;">如果生活是一場長跑，旅宿就是一段優雅的留白。嘉新跨越產業邊界，將對建築的嚴謹轉化為精緻服務的藝術。無論是沖繩 Hotel Collective 的南國熱情，還是中山大樓的摩登轉身，我們在每一個細節處雕琢「家」的溫度。讓旅行不再只是移動，而是一次感官的洗禮，找回失落已久的生活節奏。</p>
                    <div style="background: rgba(211, 84, 0, 0.05); padding: 15px; border-left: 4px solid #d35400; border-radius: 4px; margin-top: 15px;">
                        <p style="color: #d35400; font-size: 1.05rem; font-weight: bold; margin: 0; font-style: italic;">「優雅，是 Quality of Life 最細膩的感官體驗。」</p>
                    </div>
                    <div style="margin-top: 15px; font-weight: bold; color: #d35400; text-align: right;">閱讀部落格 ▶</div>
                </div>
                <div class="placeholder-card" style="border-top: 5px solid #16a085; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(22, 160, 133, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)';" onclick="navigateTo('story_scene_3')">
                    <h2 style="color: #16a085; margin-bottom: 10px;">細膩醫養｜守護生命中最溫柔的時刻</h2>
                    <p style="color: #636e72; line-height: 1.6;">高品質的生活，應該在生命的每一個轉折點都得到尊嚴的對待。從「人之初」產後護理之家的細膩呵護，到全齡照護的策略佈局，我們將醫療專業化作隱形的守護力量。嘉新讓專業退到幕後，將溫暖推向第一線，陪伴你在最脆弱也最神聖的時刻，感受被悉心照料的幸福。</p>
                    <div style="background: rgba(22, 160, 133, 0.05); padding: 15px; border-left: 4px solid #16a085; border-radius: 4px; margin-top: 15px;">
                        <p style="color: #16a085; font-size: 1.05rem; font-weight: bold; margin: 0; font-style: italic;">「健康，是 Quality of Life 最深刻的溫柔關懷。」</p>
                    </div>
                    <div style="margin-top: 15px; font-weight: bold; color: #16a085; text-align: right;">閱讀部落格 ▶</div>
                </div>
            </div>
        `
    },
    story_scene_1: {
        title: "城市韌性 🏙️",
        content: `
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
                        <div class="timeline-title">華麗轉身，水泥廠變黃金地</div>
                        <p class="timeline-text">隨着2001年高雄岡山廠停產，嘉新轉為貿易通路商，外購水泥供應市場，並開始玩起「空間魔法」。</p>
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
                        <p class="timeline-text">嘉新跨足港口儲運，斥資新台幣25億餘元蓋了台北港第一散貨中心，並非常前衛地採用了「全密閉式環保裝卸設施」，水泥大亨搖身一變成為兼顧環保的港口物流巨頭。</p>
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
        title: "優雅旅宿 🏨",
        content: `
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
        title: "細膩醫養 🏥",
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
                                    <a href="https://spoti.fi/42ZvSbr" target="_blank" style="background: #f1f2f6; padding: 6px; border-radius: 6px; color: #2c3e50; text-decoration: none; font-weight: bold; font-size: 0.9rem; transition: background 0.2s;">🎧 Spotify</a>
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
                
                <a href="#" target="_blank" class="social-card threads" onclick="alert('Threads 連結尚未提供，敬請期待！'); return false;">
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
                    <div class="social-summary">投資人與企業資訊</div>
                </a>
                
                <a href="https://www.104.com.tw/company/5gonzzc?jobsource=google" target="_blank" class="social-card job104">
                    <img src="assets/icon_104.png" alt="104人力資源" class="social-icon">
                    <div class="social-title">104 人力銀行</div>
                    <div class="social-summary">最新職缺與投遞</div>
                </a>
            </div>
        `
    }
};

function navigateTo(viewId) {
    const mapView = document.getElementById('map-view');
    const contentView = document.getElementById('content-view');

    if (viewId === 'map') {
        mapView.classList.add('active');
        mapView.classList.remove('hidden');
        contentView.classList.remove('active');
        contentView.classList.add('hidden');

        if (typeof gtag === 'function') {
            gtag('event', 'return_to_map');
        }
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
        }
    }
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
let currentQuestionIndex = 0;
let userScores = { A: 0, B: 0, C: 0, D: 0 };

function renderQuizWelcome() {
    currentQuestionIndex = 0;
    userScores = { A: 0, B: 0, C: 0, D: 0 };

    const container = document.getElementById('quiz-container');
    if (!container) return;

    container.innerHTML = `
        <div class="quiz-welcome animate-fade-in">
            <div class="quiz-welcome-icon">🎯</div>
            <h2 style="font-size: 2rem; margin-bottom: 20px; color: #0D2D5A;">找到你在嘉新的位置</h2>
            <p style="color: #636e72; line-height: 1.8; margin-bottom: 30px;">
                探索你的職涯基因，看你的性格傾向與嘉新四大事業體中哪一個最契合。<br>
                <span style="font-size: 0.9rem; color: #a4b0be; display: inline-block; margin-top: 10px;">約 15 秒完成，共 6 個問題</span>
            </p>
            <button onclick="startQuiz()" class="quiz-start-btn">開始測驗 ▶</button>
            <div style="margin-top: 40px; font-size: 0.85rem; color: #b2bec3;">
                「以70年水泥為基，守護從森林到人文的生命棲位」
            </div>
        </div>
    `;
}

function startQuiz() {
    currentQuestionIndex = 0;
    userScores = { A: 0, B: 0, C: 0, D: 0 };
    renderQuestion(currentQuestionIndex);
}

function renderQuestion(index) {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    const q = quizQuestions[index];
    const progressPercent = ((index + 1) / quizQuestions.length) * 100;

    let optionsHtml = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, i) => {
        optionsHtml += `
            <button onclick="handleAnswer('${opt.type}')" class="quiz-option">
                <span class="quiz-option-letter">${letters[i]}</span>
                <span class="quiz-option-text">${opt.text}</span>
            </button>
        `;
    });

    container.innerHTML = `
        <div class="quiz-question-view animate-fade-in">
            <div class="quiz-progress-wrapper">
                <div class="quiz-progress-text">
                    <span>測驗進度</span>
                    <span>${index + 1} / ${quizQuestions.length}</span>
                </div>
                <div class="quiz-progress-bg">
                    <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
                </div>
            </div>
            
            <div class="fact-box">
                <span class="fact-badge">嘉新真實成績</span>
                <p class="fact-text">「${q.fact}」</p>
            </div>
            
            <h3 class="quiz-question-title">${q.question}</h3>
            
            <div class="quiz-options-list">
                ${optionsHtml}
            </div>
        </div>
    `;
}

function handleAnswer(type) {
    userScores[type]++;

    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

function showResult() {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    let maxScore = -1;
    let winner = 'A';
    for (let key in userScores) {
        if (userScores[key] > maxScore) {
            maxScore = userScores[key];
            winner = key;
        }
    }

    const result = quizResults[winner];

    let traitsHtml = '';
    result.traits.forEach(trait => {
        traitsHtml += `<span class="trait-tag">#${trait}</span>`;
    });

    container.innerHTML = `
        <div class="quiz-result-view animate-fade-in">
            <div class="result-icon-wrapper">
                <span class="result-icon">${result.icon}</span>
            </div>
            <div class="result-subtitle" style="color: ${result.color};">測驗分析結果</div>
            <h2 class="result-title">${result.title}</h2>
            <div class="result-bu-tag">匹配：${result.bu}</div>
            
            <div class="result-desc-box">
                <p>${result.desc}</p>
                <div class="traits-container">
                    ${traitsHtml}
                </div>
            </div>
            
            <div class="result-actions">
                <button onclick="window.open('https://www.104.com.tw/company/5gonzzc?jobsource=google', '_blank')" class="quiz-start-btn" style="background-color: ${result.color}; border-color: ${result.color}; box-shadow: 0 4px 15px ${result.color}40;">
                    查看最新職缺
                </button>
                <button onclick="renderQuizWelcome()" class="quiz-retry-btn">
                    ↻ 重新測驗
                </button>
            </div>
            
            <div class="result-footer">
                <div class="footer-icons">🌱 🏢 ❤️</div>
                <div class="footer-text">© 嘉新企業團 CHC Group. 永續、女力、以人為本</div>
            </div>
        </div>
    `;
}
