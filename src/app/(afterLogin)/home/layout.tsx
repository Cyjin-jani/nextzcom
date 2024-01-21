import { ReactNode } from 'react';

export default async function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      홈 레이아웃
      {children}
    </div>
  );
}

// 페이지를 넘나들 때, layout은 리렌더링이 안되고, 여기 안의 페이지들만 리렌더링이 된다. (why?)
// 만약, 페이지 넘어갈 때 마다 레이아웃도 리렌더를 하고 싶다면, template.tsx를 사용한다. (layout.tsx 대신 선택해야 함. 공존x)
// 페이지 넘나들 때 공통적으로 무언가 수행하거나, 기록 등을 할 때 template을 사용.
// ex. ga를 심어서 무언가 전달할때?
// 페이지 넘나들 때 마다 리렌더라기 보다는 매번 새롭게 template이 mount된다고 보면 됨.
// 근데 보통의 경우 template 대신 layout을 씀.
