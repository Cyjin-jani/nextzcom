// import styles from '../page.module.css'; // css module을 사용
// css를 위해 선택할 수 있는 기술들은 아래와 같음.
// tailwind -> 호불호 너무 심함, 가독성이 안좋음.
// styled component (server component ssr에 문제가 좀 있음) or Emotion (next 13이랑 잘 안돌아감)
// sass
// css module -> 간단하게 가자
// vanilla extract -> 요즘 핫함. ssr도 잘됨 근데, windows와 문제가 있음 (mac은 괜찮지만...)
import Main from './_component/Main';
// 넥스트에서 png파일을 임포트 해서 사용 가능

export default function Home() {
  return <Main />;
}
