const emo_button = document.getElementById("emoji_dance"); //找到哪个id代表的行，然后asign 到 const "button"

const emoji_list = [
  "(づ｡◕‿‿◕｡)づ",
  "(っ●ω●)っ",
  "(づ′▽`)づ",
  "(ノ◕ヮ◕)",
  "(ง •̀_•́)ง",
  "ヽ(・∀・)ﾉ",
  "(╯✧∇✧)╯",
  "(つ´ω`)つ",
  "ｷﾀ━━━━(ﾟ∀ﾟ)━━━━!!",
  "━(ﾟ∀ﾟ)━( ﾟ∀)━( ﾟ)━( )━( )━(ﾟ)━(∀ﾟ)━(ﾟ∀ﾟ)━",
  "(〃∀〃)"
];


function sleep(t) {
  return new Promise(resolve => setTimeout(resolve, t))
}

let click_time = 0


emo_button.addEventListener("click", async () => {

  console.log("NEVER GONE GIVE YO UP");



  //快乐小程序
  click_time += 1
  if (click_time == 2) {
    alert("d(d＇∀＇)haha, fun right? try click more time")
  } else if (click_time == 5) {
    alert("OK,hey, STOP cliking me. you are goon break it");
  } else if (click_time == 15) {
    alert("STOOOOOOP!! WHAT ARE YOU DOING∑(ι´Дン)ノ")
  } else if (click_time == 30) {
    alert("AHHHHHHHHHH")
    alert("∑(✘Д✘๑ )")
    document.body.innerHTML = "<h1 style='color:red;text-align:center;margin-top:40vh;'>💀 Page crashed 💀</h1>";
    document.title = "💥 Page Crashed";
    setTimeout(() => window.location.replace("about:blank"), 1000);
  }



  // 循环每一个emoji
  let i = 0
  while (i < 5000000) {
    //改变emoji
    emo_button.textContent = emoji_list[i % 10];
    i += 1;
    await sleep(300)

  }

});
