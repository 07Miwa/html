function rollDice() {
  // 1〜6のランダムな数字を生成
  const result = Math.floor(Math.random() * 6) + 1;

  // resultのidを持つ要素に結果を表示
  document.getElementById("result").textContent = `サイコロの結果: ${result}`;
}
