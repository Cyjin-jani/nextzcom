// 가로채기 당해서 필요 없는거 아닌가? 할 수 있는데,
// 실행되는 경우가 있다.
// 새로고침 했을 때 실행이 되어버린다.
// 즉, 브라우저 통해서 바로 i/flow/login 으로 들어온다면 여기 페이지가 보여진다.

import LoginModal from '@/app/(beforeLogin)/_component/LoginModal';

// 원칙: 서버 컴포넌트만 클라이언트 컴포넌트를 import 할 수 있다. (사실 반대도 가능하지만 클라 컴포넌트에서 서버 컴포넌트를 가져오면 걔도 클라 컴포넌트로 바뀜.)
export default function Page() {
  return <LoginModal />;
}
