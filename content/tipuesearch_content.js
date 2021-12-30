var tipuesearch = {"pages": [{'title': 'About', 'text': '這是計算機程式課程 2021 Fall 的作業倉儲與網站 template \n \n 41023108 \n 網站倉儲 :\xa0 https://github.com/KEHUEISIN/cp2021_hw \n 網站連結 : https://kehueisin.github.io/cp2021_hw/ \n 其他與個人或作業相關資料說明或介紹 \n', 'tags': '', 'url': 'About.html'}, {'title': 'GitExtensions', 'text': '下載尚未個人化設定的 GitExtensions \n 利用 GitExtensions 輸入提交訊息時, 若出現字串 highlight 表示提交字串可能不會被 Github 接受, 導致 \xa0 Github Pages 轉檔錯誤 , 網頁將無法正常連線. 修正錯誤後, 以正確的提交字串 push, 可以得到正確的 轉檔結果 . \n GitExtensions 設定: \n \n GitExtensions Git config setup: \n \n 以下將請已經完成 GitExtensions 與 SSH 結合使用的學員製作"GitExtensions 導引" Wink, 說明詳細的設定流程. \n', 'tags': '', 'url': 'GitExtensions.html'}, {'title': '齒輪run', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': '齒輪run.html'}, {'title': 'runsrc', 'text': '<h2>run</h2>\n<!-- 導入 brython 程式庫 -->\n<script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script>\n<p><!-- 導入 FileSaver 與 filereader --></p>\n<p>\n<script src="./../cmsimde/static/ace/FileSaver.min.js" type="text/javascript"></script>\n<script src="./../cmsimde/static/ace/filereader.js" type="text/javascript"></script>\n</p>\n<p><!-- 導入 ace --></p>\n<p>\n<script src="./../cmsimde/static/ace/ace.js" type="text/javascript"></script>\n<script src="./../cmsimde/static/ace/ext-language_tools.js" type="text/javascript"></script>\n<script src="./../cmsimde/static/ace/mode-python3.js" type="text/javascript"></script>\n<script src="./../cmsimde/static/ace/snippets/python.js" type="text/javascript"></script>\n</p>\n<p><!-- 請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱--></p>\n<p>\n<script type="text/javascript">\nfunction doSave(storage_id, filename){\n    var blob = new Blob([localStorage[storage_id]], {type: "text/plain;charset=utf-8"});\n    filename = document.getElementById(filename).value\n    saveAs(blob, filename+".py");\n}\n</script>\n</p>\n<p><!-- 印出版次與關鍵字程式 --></p>\n<p>\n<script type="text/python3">\nfrom browser import document as doc\nimport ace\n# 清除畫布\ndef clear_bd(ev):\n    bd = doc["brython_div"]\n    bd.clear()\n# Brython 3.3.4 內建的 container 名稱為  \'container\' 且 turtle 輸出為 svg 必須使用 div 訂定 id\nAce = ace.Editor(editor_id="kw_editor", console_id="kw_console", container_id="kw__container", storage_id="kw_py_src" )\n# 從 gist 取出程式碼後, 放入 editor 作為 default 程式\ndef run():\n    # 利用 get 取下 src 變數值\n    try:\n        url = doc.query["src"]\n    except:\n        url = "https://gist.githubusercontent.com/mdecourse/e896a4705a95ac8cc4147b355b0e87ef/raw/8954b8280c524c5781dc3c0b3565bc489d3aa3a3/cango_gear1.py"\n    prog = open(url).read()\n \n    # 將程式載入編輯區\n    Ace.editor.setValue(prog)\n    Ace.editor.scrollToRow(0)\n    Ace.editor.gotoLine(0)\n    # 直接執行程式\n    #ns = {\'__name__\':\'__main__\'}\n    #exec(prog, ns)\n    # 按下 run 按鈕\n    Ace.run()\n \n# 執行程式, 顯示輸出結果與清除輸出結果及對應按鈕綁定\ndoc[\'kw_run\'].bind(\'click\', Ace.run)\ndoc[\'kw_show_console\'].bind(\'click\', Ace.show_console)\ndoc[\'kw_clear_console\'].bind(\'click\', Ace.clear_console)\ndoc[\'clear_bd\'].bind(\'click\', clear_bd)\n# 呼叫函式執行\nrun()\n</script>\n</p>\n<p><!-- 用來顯示程式碼的 editor 區域 --></p>\n<div id="kw_editor" style="width: 600px; height: 300px;"></div>\n<p><!-- 以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合 --></p>\n<!-- 存擋表單開始 --><form><label>Filename: <input id="kw_filename" placeholder="input file name" type="text"/>.py</label> <input onclick="doSave(\'kw_py_src\', \'kw_filename\');" type="submit" value="Save"/></form><!-- 存擋表單結束 -->\n<p></p>\n<!-- 執行與清除按鈕開始 -->\n<p><button id="kw_run">Run</button> <button id="kw_show_console">Output</button> <button id="kw_clear_console">清除輸出區</button><button id="clear_bd">清除繪圖區</button><button onclick="window.location.reload()">Reload</button></p>\n<!-- 執行與清除按鈕結束 -->\n<p></p>\n<!-- 程式執行 ouput 區 -->\n<div style="width: 100%; height: 100%;"><textarea autocomplete="off" id="kw_console"></textarea></div>\n<!-- Brython 程式執行的結果, 都以 brython_div 作為切入位置 -->\n<div id="brython_div"></div>\n<!-- 導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫 -->\n<script src="https://mde.tw/cp2021/cmsimde/static/Cango-24v03-min.js"></script>\n<script src="https://mde.tw/cp2021/cmsimde/static/gearUtils-09.js"></script>\n<script src="https://mde.tw/cp2021/cmsimde/static/SVGpathUtils-6v03-min.js"></script>\n<script src="https://mde.tw/cp2021/cmsimde/static/sylvester.js"></script>\n<script src="https://mde.tw/cp2021/cmsimde/static/PrairieDraw.js"></script> \n \xa0 \n', 'tags': '', 'url': 'runsrc.html'}, {'title': 'Hybrid', 'text': '無 \n', 'tags': '', 'url': 'Hybrid.html'}, {'title': 'SSH', 'text': 'SSH 指 Secure Shell:  https://en.wikipedia.org/wiki/Secure_Shell \n 而 Shell 則指:  https://en.wikipedia.org/wiki/Shell_(computing) , 若在 Ｗindows 操作系統, 可以將 Shell 解釋為提供使用者在命令列視窗 (Dos command Windows) 執行指令的解譯程式. 也就是說 Shell 其實是一組程式, 讓使用者可以透過指令操控電腦. \n 所以 SSH 就是能夠透過加密網路傳輸協議, 讓使用者安全地透過網路與電腦進行溝通的 Shell. \n 在 Mac 與 Linux 操作系統中, 可以利用 Terminal 或 X-Terminal, 以 ssh 執行 client 端程式, 透過遠端登入的方式執行 Shell commands. 在 Windows 操作系統則可以利用 Putty 作為 ssh 的 client 端, 透過網路以加密傳輸遠端登入至其他執行 sshd (即 Shell server) 的電腦. \n', 'tags': '', 'url': 'SSH.html'}, {'title': 'SSH push', 'text': 'Github 帳號用戶除了可以利用 Personal Token push 改版資料外, 也可以利用 SSH keys 將改版資料 push 到 Github. 詳細說明可以參考  SSH 了沒 . \n 以下說明 SSH push 操作步驟: \n \n 下載 putty 安裝套件, 安裝後, 將 putty 目錄取出放入隨身碟 y:\\ 目錄中 (也就是 data 目錄中). \n 修改 start_ipv4.bat 或 start_ipv6.bat, 設定 GIT_SSH 變數, 指向 putty 套件目錄中的 plink.exe, 表示隨後的 git push 將透過 putty 中的 session 設定連網. 亦即在 start_ipv4.bat 或 start_ipv6.bat 檔案中加入  set GIT_SSH=%Disk%:\\putty\\plink.exe \n 利用 putty 中的 puttygen.exe 建立 keys, 按下 generate 後, 在 puttygen 執行視窗上方以滑鼠隨意移動, 以便利用滑位置隨機建立 keys, 完成後在原先滑鼠移動位置所出現的 key, 即為 OpenSSH 格式的 public key 內容, 而此一內容就是要放到 Github 帳號 settings 中的 SSH and GPG keys 中的 new SSH key 欄位區 (此為用戶所設定的 public key). \n 接下來要利用 puttygen 建立 keys 視窗右下的 save private key, 將此一 .ppk private key 存到 home_ipv4 或 \n home_ipv6 目錄下. \n 接下來要啟動 putty.exe 建立一個能夠連線至 github.com 網站的 session, 此 session 可以取名為 github.com, 也可以取其它名稱, 只是這個 session 名稱, 將會成為 git 指令與 plink.exe 連結使用後的連線 session 名稱. 而在設定此連線到 github.com 的 session, 在無需設定 proxy 的情況下, 只需要指定 SSH - AUTH 中的 private key 存放位置. \n 最後則是配合採用 SSH 協定連線, 必須要修改倉儲中 .git/config url 的連線協定, 從原先的  https://github.com/帳號/cp2021_hw.git  改為  git@github.com:帳號/cp2021_hw.git  也就是採用 git 作為連線到 putty session 名稱 github.com, 然後採用 github 帳號檢查是否此 private key 與前述放入 Github SSH and GPG keys 的 public 成對, 若匹配成功, 則使用者利用上述的 SSH 就可以執行將改版內容 push 到 Github. \n \n 上述採 SSH 流程 push 改版資料的基本概念為: \n \n 啟動隨身系統時就告知 GIT_SSH 變數, 要利用 putty 工具作為 SSH 連線的 client 端. \n 接著要建立 OpenSSH 格式的 public key, 在 Github 帳號下完成登記. \n 至於近端則要儲存與送到 Github public 對應的 putty 格式 private key, 因為設定 putty session 時會用到此 private key. \n 接著就是利用這把近端的 private key, 建立一個能夠採 SSH 協定連線到 Github 的 putty session, 此 session 其實只有三個基本屬性: 連線主機符號名稱, 也就是 github.com, 連線 session 名稱, 以及與 session 對應的 private key 位置. \n 最後就是修改要採 SSH push 的倉儲中 .git/config url 連線協定, 從 https 改為 SSH, 並以 git 作為登入帳號, 且宣告所要使用的 putty session 名稱與登入後要驗證 key 權限的 session 名稱. \n \n \n', 'tags': '', 'url': 'SSH push.html'}, {'title': '實作心得', 'text': '在新增run的過程中，因不小心刪到Source code中的程式碼導致整個動態網頁顯示出索引錯誤，經過修正動態網頁就有顯示出來 \n 當第二次又遇到索引錯誤時，嘗試用過第一次的方法，但還是無法顯示頁面，原來問題並不是錯在同一個地方，而是config資料夾裡的config文字檔沒有內容，刪掉沒有內容的檔，從新跑了一次，就解開了。 \n 程式真的不好寫，有時會因為小細節沒打到導致程式整個無法執行。 \n', 'tags': '', 'url': '實作心得.html'}, {'title': 'HW1', 'text': 'HW1 - 網際動畫與 touch typing 佔學期成績 20%. \n HW1 必須在 2021.10.20 22:00 之前完成 . \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.10.20 22:00 關閉 \n \n 請至  https://github.com  申請 Github 帳號後, 至  https://mde.tw/cp2021/content/Task1.html \xa0 頁面, 將左右碰撞移動的紅色方塊, 改為先移動到水平畫面中心點位置後, 接著上下碰撞移動. \n 請將 1. 的程式碼存入個人 Gist 區 ( 說明 ). \n 請在 1. 的程式中, 加入與  Cango 頁面  Fourbar 程式碼相同功能的啟動按鈕, 讓使用者可以利用按鈕啟動或中斷紅色方塊上下碰撞移動. 完成後請將程式碼存入個人 Gist 區. \n 請在 Gist 檔案編輯區, 利用鍵盤輸入  https://docs.github.com/en/github/writing-on-github/editing-and-sharing-content-with-gists/creating-gists#about-gists  中的這段英文內容, 請利用手機計時, 大概需要多少時間? 請將此段練習打字的內容與所需時間存入 Gist 檔案中. \n 請至少練習 key in 這段英文內容三次, 然後看看是否已經了解如何透過電腦鍵盤 touch typing? \n 接下來請利用中文輸入  https://ithelp.ithome.com.tw/articles/10206233  的第一段中文說明, 請利用手機計時, 大概需要多少時間? \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': '紅色方塊run', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n', 'tags': '', 'url': '紅色方塊run.html'}, {'title': '紅色方塊run含起動紐', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n', 'tags': '', 'url': '紅色方塊run含起動紐.html'}, {'title': '作業1-紅色方塊html', 'text': 'from browser import html\nfrom browser import document as doc\nimport browser.timer\n\ncanvas = html.CANVAS(width = 400, height = 100)\ncanvas.id = "game-board3"\nbrython_div = doc["brython_div"]\nbrython_div <= canvas\nctx = canvas.getContext("2d")\npx = 0\npy = 50\nwidth = 20\nheight = 20\nspeedx = 2\nspeedy = 2\n\ndef game():\n    global px, py, width, height, speedx, speedy\n    ctx.clearRect(px, py, width, height)\n    ctx.fillStyle = "red"\n    px += speedx\n    if px > 200 :\n        speedx = 0\n        py += speedy\n    if py < 0 or (py + height) > canvas.height:\n        speedy = -speedy\n    ctx.fillRect(px, py, width, height)\n    \nbrowser.timer.set_interval(game, 10) \n', 'tags': '', 'url': '作業1-紅色方塊html.html'}, {'title': '紅色方塊啟動鈕html', 'text': 'from browser import html\nfrom browser import document as doc\nfrom browser import timer\n\ncanvas = html.CANVAS(width = 400, height = 100)\ncanvas.id = "game-board3"\nbrython_div = doc["brython_div"]\nbrython_div <= canvas\nbrython_div <= html.BUTTON("啟動", id="power")\nctx = canvas.getContext("2d")\npx = 0\npy = 50\nwidth = 20\nheight = 20\nspeedx = 2\nspeedy = 2\n\ndef cube():\n    global px, py, width, height, speedx, speedy\n    ctx.clearRect(px, py, width, height)\n    ctx.fillStyle = "red"\n    px += speedx\n    if px > 200 :\n        speedx = 0\n        py += speedy\n    if py < 0 or (py + height) > canvas.height:\n        speedy = -speedy\n    ctx.fillRect(px, py, width, height)\n\ncube()\n\ngame = None\n\ndef gametion(ev) :\n    global game\n    if game is None :\n        game = timer.set_interval(cube, 10)\n        doc[\'power\'].text = \'暫停\'\n    elif game == \'hold\':\n        game = timer.set_interval(cube, 10)\n        doc[\'power\'].text = \'暫停\'\n    else:\n        timer.clear_interval(game)\n        game = \'hold\'\n        doc[\'power\'].text = \'繼續\'\ndoc["power"].bind("click", gametion) \n \n', 'tags': '', 'url': '紅色方塊啟動鈕html.html'}, {'title': 'HW2', 'text': 'HW2 - 可攜程式系統與個人網站佔學期成績 20%. \n HW2 必須在 2021.11.03 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.10.25 開啟, 於  2021.11.03 22:00 關閉 \n 可攜程式系統與 Python 範例程式收集整理 \n 1. 請準備一個至少 64 GB 大小的 USB 3.0 以上隨身碟 (或外接 SSD), 根據  Task2  中的說明, 建立自己的可攜程式系統.\xa0 \n 2. 請登入 Github 帳號後, 連線至  https://github.com/mdecourse/cp2021_hw  後, 透過  Use this template  按鈕建立自己的 cp2021_hw 倉儲. 並至該倉儲的 Settings -> Pages -> Source 將 main 分支設為 Github Pages 的 root (也就是選擇將倉儲的 main 分支設為對應網站的根目錄). \n 3. 請將 HW1 與 HW2 的作業內容登錄至個人的 cp2021_hw 倉儲與網站中. (學習如何透過 git 指令修改倉儲中的版本內容) \n 4. 請在個人作業網站的 HW2 區域下增設一個 H2 頁面, 將該網頁標題命名為 run, 可以如  run  頁面中的內容, 並且利用此頁面收集 Python 範例程式. (例如: 可自動執行的貪食蛇:  https://mde.tw/cp2021/content/run.html?src=https://gist.githubusercontent.com/mdecourse/d306a1f57e53bfd6466eaae20bcb9439/raw/2160a12b9fec9707a120a383ed5d38b9b78a02cf/snake.py  將  https://gist.github.com/mdecourse/d306a1f57e53bfd6466eaae20bcb9439  作為  https://mde.tw/cp2021/content/run.html  頁面中 src 變數的值, 就可以在頁面中導入程式碼並執行) \n', 'tags': '', 'url': 'HW2.html'}, {'title': '作業2-網頁連結', 'text': '41023108-2021 Fall 計算機程式 作業網站 \n 網頁連結 : https://kehueisin.github.io/cp2021_hw/ \n 倉儲網站 : https://github.com/KEHUEISIN/cp2021_hw', 'tags': '', 'url': '作業2-網頁連結.html'}, {'title': 'W10', 'text': 'W10 之後, 開始執行  HW3  與  Final Project . \n 從 cp2021 課程內容中可知計算機程式的課程目的: \n 鼓勵每一位同學都能及早 確定努力的目標 , 證明自己具備 獨立研究與解題能力 . \n 由於  HW1  的目的在提醒電腦程式的編寫牽涉鍵盤中英文打字, 因此學員必須自行練就 touch typing 的能力, 可正確無誤快速 keyin 所需的程式碼以及相關說明內容. \n HW1  的程式編寫內容是修改一個 Brython 動畫程式, 讓紅色方塊能在使用者視覺暫留時間內移動座標位置, 可在特定位置時改變移動方向. 完成程式修改後則要求將程式碼存入個人的 Gist 區域. \n HW2  則要求使用者建立在 Windows 10 64 位元操作系統中的 Python 可攜程式系統, 主要內容帶有 Python 3.9.5 與 Portablegit 2.31.1 版, 可以用來啟動近端採 Flask 編寫的  https://github.com/mdecourse/cp2021_hw  課程動態網頁, 並用瀏覽器編輯後將動態網頁轉為只帶有 html, css 與 javascript 的靜態網頁後, 推送至 Github Pages 網站中伺服. \n HW2  除了建立可攜程式系統外, 也要求將  HW1  中的 Gist 程式碼, 以  run.txt  ( runsrc ) 的動態內容執行. \n 至於從  HW2  進展到  HW3  網際 Brython 貪食蛇的編寫與修改, 需要: \n \n 配合各種程式語法, 從 教科書導讀 中, 整理 Brython 與 CPython 的程式語法說明 \n 在個人課程網頁中, 整理  4 小時 Python 互動課程 的內容. \n 將線上課程中的 Python  程式範例 , 分門別類改寫為 Brython 程式, 並依照  Practice2  格式以按鈕導入執行. \n 了解  Pathfinding Snake 程式 執行原理 (資料結構與演算法,  搜尋圖解 1,  搜尋圖解 2), 將程式改為 Brython 格式後, 直接在  Practice2  的按鈕中執行. \n \n HW3  Snake Game 的程式設計未來可以發展為 AI 程式競賽 ( Snakes AI Competition 2020 and 2021 Report.pdf ). ( 參考1 ,  參考2 ,  參考3 ,  參考4 ) \n 各學員完成上述各項內容後, 可以自選題目完成  Final Project . \n References: \n https://github.com/mdecourse/snake-game \n https://kevinkparsons.com/snake-game.html  ( snake_game in Excel ) \n snake_curses_and_tk.zip \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '1a 抽點 10 位學員 查驗其作業倉儲與網站 ( 1a 學員倉儲與網站 ). \n 1b 抽點 10 位學員 查驗其作業倉儲與網站 ( 1b 學員倉儲與網站 ). \n 教科書 ( Programming with Python ) 2.6 Exercises, 共有三個題目 (1b 上課範例 - 倉儲  w11_1b  網站  https://mde.tw/w11_1b ): \n \n \n 請分別在個人網頁上利用  Examples.txt  製作一個標題為 W11 的 H2 頁面, 並將上列解題程式製作為按鈕 (button). \n', 'tags': '', 'url': 'W11.html'}, {'title': 'Examples', 'text': '這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕. (本動態頁面檔案  Examples.txt ) \n 1. 從 1 累加到 100 (以下列 button 呈現). \n 2. 教科書 ( Programming with Python ) 2.6 Exercises, 共有三個題目, 請分別將程式製作為按鈕 (button). \n 3. 請利用  Canvas  繪製 Fig. 3.7 的流程圖 (Flow Chart). \n 4. 請利用 Canvas 繪製你所編寫"從 1 累加到 10"程式的流程圖 (Flow Chart). \n 5. 請各班各組合力完成 3.5 Exercises 中的 14 個題目. \n 6. 請各組從 4.3 Exercises 中選擇一個題目製作為頁面中的按鈕 (button). \n 無  Canvas  繪圖需求的程式, 可放在第一區, 而採  Canvas  繪圖的程式則可放入第二區. \n 將 Gist 中的程式導入本頁面的程式段:  brython_button_prog.txt , 只要配合 button id 對應即可導入編輯區. \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  內建程式 1 ####################################### 內建程式 1 開始 \n \n \n \n  內建程式 1 ####################################### 內建程式 1 結束 \n \n  button 程式 1 ####################################### button 程式 1 開始 \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor1 結束   button 程式 1 ####################################### button 程式 1 結束 \n \n  button 程式 2 ####################################### button 程式 2 開始 \n 第二編輯區程式 ( 編輯  Snake 原始碼): \n 查驗輸入字串 Snake \n  判斷輸入字串是否aA1$, 且至少 8 個字元-開始  \n \n \n  判斷輸入字串是否aA1$, 且至少 8 個字元-結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor2 結束  \n \n  button 程式 2 ####################################### button 程式 2  結束 \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n References: \n https://zerojudge.tw/ \n https://shaform.com/csdream/docs/problem-solving/ \n https://onlinejudge.org/ \n', 'tags': '', 'url': 'Examples.html'}, {'title': 'W12', 'text': 'w12demo.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 100 p261 ROC flag \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n', 'tags': '', 'url': 'W12.html'}, {'title': 'Exam', 'text': '', 'tags': '', 'url': 'Exam.html'}, {'title': 'W13', 'text': '\n \n \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n \n Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'HW3', 'text': '\n HW3 - AI 貪食蛇佔學期成績 30%. \n HW3 必須在 2021.12.22 22:00 之前完成. \n HW3 具體項目成果回報區 將於 2021.11.09 開啟, 於  2021.12.22 22:00 關閉 \n 網際貪食蛇的逆襲, 誰的 自動執行貪食蛇 能夠破紀錄? 目前直覺貪食蛇紀錄為 45 節 (除了蛇身節數外, 應該還要置入出現紅色標的物後的總完食時間). \n 手動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式的改進. \n 參考資料: \n https://mde.tw/cp2021/content/Task3.html \n Brython snake 原始來源:  https://medium.com/swlh/sick-of-javascript-just-use-browser-python-4b9679efe08b \n https://github.com/mdecourse/snake-Q-Learning \n https://towardsdatascience.com/teaching-a-computer-how-to-play-snake-with-q-learning-93d0a316ddc0 \n https://github.com/mdecourse/SnakeQlearning \n https://medium.com/@italohdc/learnsnake-teaching-an-ai-to-play-snake-using-reinforcement-learning-q-learning-b63ac23dfdd1 \n https://towardsdatascience.com/snake-played-by-a-deep-reinforcement-learning-agent-53f2c4331d36 \n https://www.geeksforgeeks.org/ai-driven-snake-game-using-deep-q-learning/ \n https://www3.hs-albsig.de/wordpress/point2pointmotion/2020/10/09/deep-reinforcement-learning-with-the-snake-game/ \n 2016_Exploration of Reinforcement Learning to SNAKE.pdf \n train_a_snake_with_reinforceme.pdf \n https://medium.com/@hugo.sjoberg88/using-reinforcement-learning-and-q-learning-to-play-snake-28423dd49e9b \n https://github.com/mdecourse/Snake-Reinforcement-Learning \n Autonomous-Agents-in-Snake-Game-via-Deep-Reinforcement-Learning.pdf \n 延伸應用: \n \n \n \n \n https://github.com/mdecourse/snake-ai-pytorch \n', 'tags': '', 'url': 'HW3.html'}, {'title': '貪食蛇', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n', 'tags': '', 'url': '貪食蛇.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 30% \n Final Project 必須在 2022.01.05 22:00 之前完成 . \n Final Project 具體項目成果回報區 將於 2021.11.09 開啟, 於  2022.01.05 22:00 關閉 \n 利用 Brython 寫一個會 令人想玩 的網際遊戲. \n 參考章節: \n \n 專題摘要 \n 資料蒐集 \n 設計動機 \n 設計方法 \n 結果與討論 \n 附錄 \n \n 參考資料: \n https://github.com/collections/web-games \n https://github.com/topics/web-game \n https://github.com/topics/browser-game \n https://github.com/leereilly/g', 'tags': '', 'url': 'Final Project.html'}]};