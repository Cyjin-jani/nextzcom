// (.) vs (..) 이게 뭐냐?
// 인터셉팅 라우터
// 마치 리눅스 환경에서 cd ./ 혹은 cd ../ 하는 것과 같은 효과.
// 여기서는 (.)i 를 해준 이유는,
// (beforeLogin) > i 를 띄워줘야 하는데, 그 친구를 대체하는 역할을 하는 것.
// 원래는 (beforeLogin) > i 산하의 page.tsx가 처리를 해야 하는데, (.)i 이렇게 작성하면 이 친구가 원래 처리해야할 page.tsx 대신 인터셉트 하여 처리함
// 그래서 인터셉팅 라우트라고 한다. (심지어 여기 케이스는 인터셉팅 라우트면서 페러렐 라우팅)

// import style from '@/app/(beforeLogin)/@modal/(.)i/flow/login/login.module.css';

import LoginModal from '@/app/(beforeLogin)/_component/LoginModal';

export default function Page() {
  return (
    <>
      {/* 난 가로채기지롱ㅋㅋ */}
      {/* 꼭 인터셉팅 라우트 부분과 본래 page가 똑같을 필요가 없다 */}
      <LoginModal />
    </>
  );
}
