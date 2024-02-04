const quotes = [
  {
    quote:
      "🔥 활활 타오르는 불은 네가 그 불 속으로 던져 넣는 모든 것들을 화염과 빛으로 변화시킨다.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "🌟 혼이 완전히 구체를 유지하는 것은 오직 자신의 밝은 빛을 그대로 유지해서, 그 빛으로 만물과 자신의 진리를 직시할 때다.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "🌊 격랑의 파도가 다 휩쓸어 버리더라도 너의 정신만은 절대로 휩쓸려 가지 않게 하라.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "🎇 등불은 꺼질 때까지는 계속해서 환하게 빛을 비춘다. 그런데 네가 죽기 전에 네 안에 있는 진리와 정의와 절제가 꺼져서야 되겠는가.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "🌌 우주 전체도 주기적으로 불로 화하거나 영원한 변화를 통해 자신을 새롭게 한다.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "🍂 모든 것은 변화하는 과정 중에 있다. 네 자신도 계속해서 변화하고 있고 서서히 죽어가고 있다. 우주 전체도 마찬가지다.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "😇 문들을 다 닫아 걸어서 칠흑같이 어두운 실내에 혼자 있을 때에도 너는 혼자 있는 것이 아니다.",
    author: "Epictetus",
  },
  {
    quote:
      "🦊 사람은 처음에는 짐승처럼 살아갈 수밖에 없지만, 본성이 우리 속에 둔 것들을 발견했을 때에는 그런 삶을 그쳐야 한다.",
    author: "Epictetus",
  },
  {
    quote:
      "😈 내가 모든 일들이 내가 원하는 대로 일어나기를 원한다면, 그것은 고귀한 것이 아니라 지독하게 악한 것이다.",
    author: "Epictetus",
  },
  {
    quote:
      "⛵ 하나의 닻을 단 배로 항해할 수 없듯이, 하나의 소망으로 삶을 살 수 없다.",
    author: "Epictetus",
  },
  {
    quote:
      "💖 어떤 사람이 너만을 사랑한다면, 그는 아무도 사랑하지 않는 자이니, 그런 사람이 너를 사랑하고 있다고 생각한다면, 그것은 착각이다.",
    author: "Epictetus",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quoteby span:first-child");
const next = document.querySelector("#quoteby span:last-child");
function changeQuote() {
  const rnQuote = () => Math.floor(Math.random() * quotes.length);
  const todaysQuote = quotes[rnQuote()];
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
}
changeQuote();
next.addEventListener("click", changeQuote);
