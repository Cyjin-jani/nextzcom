'use client';
// 이 redirect는 서버 컴포넌트에서만 동작하게끔 되어있다.
// import { redirect } from 'next/navigation';

// export default function Login() {
//   redirect('/i/flow/login');
//   // next 13버전부터 쉽게 리다이렉트 할 수 있는 기능이 추가되었다.
// }

// 우선은 클라에서 동작할 수 있도록 코드를 수정해보자.
import { useRouter } from 'next/navigation';
import Main from '../_component/Main';

export default function Login() {
  const router = useRouter();
  router.replace('/i/flow/login'); // push대신 replace를 쓰는 이유는 아래 설명..

  // 로그인이 배경인 채로 모달이 뜨는 것이므로 여기도 main의 page.tsx와 같아야 한다.
  return <Main />;
}

/**
 * push의 경우
 * localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
 * 각 단계에서 뒤로가기 하면 바로 전 단계로 뒤로가기 됨
 * 이 케이스에선 문제가 된다.
 * 왜냐? login페이지로 도달하면 i/flow/login으로 가도록 했기 때문.
 * 그래서 메인 페이지를 뒤로가기만 클릭해서는 도달할 수 없게 되는 루프가 발생한다
 * 이를 빠져나오기 위해서, replace를 사용한다
 */

/**
 * replace의 경우
 *  localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
 * 만약, /i/flow/login페이지에서 뒤로가기 하면, replace로 이동했기 때문에 /login이 아니라, localhost:3000으로 이동해버린다.
 * 즉, history를 없앤다고 보면 된다
 */
