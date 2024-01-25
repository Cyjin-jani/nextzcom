'use client';
// onClick 같은게 있거나 useXxx(Hook) 같은게 있다면, 그 컴포넌트는 아주 높은 확률로 클라이언트 컴포넌트이기 때문에, use client를 써준다.

import style from './logoutButton.module.css';

export default function LogoutButton() {
  const me = {
    // 임시로 내 정보 있는것처럼
    id: 'zerohch0',
    nickname: '나다',
    image: '/profile.jpg',
  };

  const onLogout = () => {};

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.image} alt={me.id} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
