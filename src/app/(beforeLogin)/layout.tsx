import { ReactNode } from 'react';
import styles from '@/app/page.module.css';

// 페러렐 라우트
// 동시에 두 페이지를 보여줄 수 있는 기술
// 사용시 주의점: 폴더 디렉토리의 위계 구조가 중요함
// layout, page.tsx가 @modal과 같은 폴더 내 형제 관계로 위치해 있어야 사용이 가능.

// modal을 이렇게 넘겨줄 수 있게 된다.
// 같은 폴더 내에서만 사용. 레이아웃에서 사용하는 것.
// modal을 더 쓰고 싶다면 추가가 가능하다 (그러나 추천하지 않음 - 컨트롤이나 위계가 헷갈리게 될 것)
// 추가 방법: @modal2이런 식으로 만들고 아래 Props에 modal2: ReactNode이런식으로 추가 후 사용
type Props = { children: ReactNode; modal: ReactNode };
export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {/* 비포 로그인 레이아웃 */}
      {children}
      {modal}
      {/* 모달 추가하면 이렇게 쓴다 - 당연히 Props 타입에도 추가하고.. */}
      {/* {modal2} */}
    </div>
  );
}

// 주소가 localhost:3001일 때는 children->page.tsx, modal->@modal/default.tsx
// 주소가 localhost:3001/i/flow/login 때는 chldren->i/flow/login/page.tsx, modal->@modal/i/flow/login/page.tsx
