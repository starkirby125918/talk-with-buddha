// JavaScript Document

$("#error-alert").hide();
$("#copy-alert").hide();

var password = "takuron.top";

String.prototype.replaceAll = function (s1, s2) {
  var reg = new RegExp(s1, "g");
  return this.replace(reg, s2);
};

function encrypt() {
  var msg = $("#text-decryped").val();
  var key = $("#text-key").val();

  if (msg.length < 1) {
    $("#error-alert").show();
    $("#copy-alert").hide();
    $("#error-alert").text(
      "无言者，纵真神再临，亦不可渡。（请输入待加密的明文）"
    );
  } else {
    if (key.length < 1) {
      key = password;
    }

    $("#text-encryped").val(togod(msg, key));
    $("#error-alert").hide();
    $("#copy-alert").hide();
  }
}

function decrypt() {
  var msg = $("#text-decryped").val();
  var key = $("#text-key").val();

  if (msg.length < 1) {
    $("#error-alert").show();
    $("#copy-alert").hide();
    $("#error-alert").text(
      "无言者，纵真神再临，亦不可渡。（请输入待解密的密文）"
    );
  } else {
    if (msg.substring(0, 4) != "呐呐呐，") {
      $("#error-alert").show();
      $("#copy-alert").hide();
      $("#error-alert").text(
        "施主可曾记得此为何高僧所言？（不是佛语，请确定密文来源本网站并且密文以“佛又曰：开头”）"
      );
    } else {
      if (key.length < 1) {
        key = password;
      }

      try {
        $("#error-alert").hide();
        var str = toman(msg, key);
      } catch (err) {
        $("#error-alert").show();
        $("#copy-alert").hide();
        $("#error-alert").text(
          "施主可曾记得此为何高僧所言？（佛语有误，请确定密钥正确并未被篡改）"
        );
      } finally {
        $("#text-encryped").val(str);
      }
    }
  }
}

function copyUrl2() {
  var Url2 = document.getElementById("text-encryped");
  Url2.select();
  document.execCommand("Copy");
  $("#copy-alert").show();
  $("#error-alert").hide();
}

function togod(msg, key) {
  var str = CryptoJS.AES.encrypt(msg, key).toString();

  str = str.substring(10);

  str = str.replaceAll("e", "哒");
  str = str.replaceAll("E", "Ω");
  str = str.replaceAll("t", "閨");
  str = str.replaceAll("T", "呢");
  str = str.replaceAll("a", "大丈夫");
  str = str.replaceAll("A", "喵");
  str = str.replaceAll("o", "酱");
  str = str.replaceAll("O", "君");
  str = str.replaceAll("i", "嘤");
  str = str.replaceAll("I", "萌");
  str = str.replaceAll("n", "乳");
  str = str.replaceAll("N", "本当");
  str = str.replaceAll("s", "果咩纳塞");
  str = str.replaceAll("S", "哟");
  str = str.replaceAll("h", "☆");
  str = str.replaceAll("H", "★");
  str = str.replaceAll("r", "Σ");
  str = str.replaceAll("R", "罪");
  str = str.replaceAll("d", "米娜");
  str = str.replaceAll("D", "桑");
  str = str.replaceAll("l", "牙白");
  str = str.replaceAll("L", "无路赛");
  str = str.replaceAll("c", "岂可修");
  str = str.replaceAll("C", "诶");
  str = str.replaceAll("u", "多西忒");
  str = str.replaceAll("U", "命");
  str = str.replaceAll("m", "ε");
  str = str.replaceAll("M", "啊诺");
  str = str.replaceAll("w", "嘛");
  str = str.replaceAll("W", "呀");
  str = str.replaceAll("f", "嘞");
  str = str.replaceAll("F", "傲娇");
  str = str.replaceAll("g", "鬼畜");
  str = str.replaceAll("G", "病");
  str = str.replaceAll("y", "宅");
  str = str.replaceAll("Y", "腐");
  str = str.replaceAll("p", "基");
  str = str.replaceAll("P", "姬");
  str = str.replaceAll("b", "爆");
  str = str.replaceAll("B", "漫");
  str = str.replaceAll("v", "吾");
  str = str.replaceAll("V", "社");
  str = str.replaceAll("k", "学园");
  str = str.replaceAll("K", "桥豆麻袋");
  str = str.replaceAll("j", "搜噶");
  str = str.replaceAll("J", "摩多");
  str = str.replaceAll("x", "表");
  str = str.replaceAll("X", "里");
  str = str.replaceAll("q", "番");
  str = str.replaceAll("Q", "幼");
  str = str.replaceAll("z", "御");
  str = str.replaceAll("Z", "姐");
  str = str.replaceAll("0", "妹");
  str = str.replaceAll("1", "汝");
  str = str.replaceAll("2", "辈");
  str = str.replaceAll("3", "魔");
  str = str.replaceAll("4", "豚");
  str = str.replaceAll("5", "氪");
  str = str.replaceAll("6", "娘");
  str = str.replaceAll("7", "推");
  str = str.replaceAll("8", "厨");
  str = str.replaceAll("9", "α");
  str = str.replaceAll("\\+", "β");
  str = str.replaceAll("/", "贴贴");
  str = str.replaceAll("=", "γ");

  return "呐呐呐，" + str;
}

function toman(msg, key) {
  str = msg.substring(4);

  str = str.replaceAll("哒", "e");
  str = str.replaceAll("Ω", "E");
  str = str.replaceAll("閨", "t");
  str = str.replaceAll("呢", "T");
  str = str.replaceAll("大丈夫", "a");
  str = str.replaceAll("喵", "A");
  str = str.replaceAll("酱", "o");
  str = str.replaceAll("君", "O");
  str = str.replaceAll("嘤", "i");
  str = str.replaceAll("萌", "I");
  str = str.replaceAll("乳", "n");
  str = str.replaceAll("本当", "N");
  str = str.replaceAll("果咩纳塞", "s");
  str = str.replaceAll("哟", "S");
  str = str.replaceAll("☆　", "h");
  str = str.replaceAll("★", "H");
  str = str.replaceAll("Σ", "r");
  str = str.replaceAll("罪", "R");
  str = str.replaceAll("米娜", "d");
  str = str.replaceAll("桑", "D");
  str = str.replaceAll("牙白", "l");
  str = str.replaceAll("无路赛", "L");
  str = str.replaceAll("岂可修", "c");
  str = str.replaceAll("诶", "C");
  str = str.replaceAll("多西忒", "u");
  str = str.replaceAll("命", "U");
  str = str.replaceAll("ε", "m");
  str = str.replaceAll("啊诺", "M");
  str = str.replaceAll("嘛", "w");
  str = str.replaceAll("呀", "W");
  str = str.replaceAll("嘞", "f");
  str = str.replaceAll("傲娇", "F");
  str = str.replaceAll("鬼畜", "g");
  str = str.replaceAll("病", "G");
  str = str.replaceAll("宅", "y");
  str = str.replaceAll("腐", "Y");
  str = str.replaceAll("基", "p");
  str = str.replaceAll("姬", "P");
  str = str.replaceAll("爆", "b");
  str = str.replaceAll("漫", "B");
  str = str.replaceAll("吾", "v");
  str = str.replaceAll("社", "V");
  str = str.replaceAll("学园", "k");
  str = str.replaceAll("桥豆麻袋", "K");
  str = str.replaceAll("搜噶", "j");
  str = str.replaceAll("摩多", "J");
  str = str.replaceAll("表", "x");
  str = str.replaceAll("里", "X");
  str = str.replaceAll("番", "q");
  str = str.replaceAll("幼", "Q");
  str = str.replaceAll("御", "z");
  str = str.replaceAll("姐", "Z");
  str = str.replaceAll("妹", "0");
  str = str.replaceAll("汝", "1");
  str = str.replaceAll("辈", "2");
  str = str.replaceAll("魔", "3");
  str = str.replaceAll("豚", "4");
  str = str.replaceAll("氪", "5");
  str = str.replaceAll("娘", "6");
  str = str.replaceAll("推", "7");
  str = str.replaceAll("厨", "8");
  str = str.replaceAll("α", "9");
  str = str.replaceAll("β", "+");
  str = str.replaceAll("贴贴", "/");
  str = str.replaceAll("γ", "=");

  var st = CryptoJS.AES.decrypt(`U2FsdGVkX1` + str, key).toString(
    CryptoJS.enc.Utf8
  );

  return st;
}
