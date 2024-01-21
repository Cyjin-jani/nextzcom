import styles from '@/app/(beforeLogin)/_component/main.module.css';
import Image from 'next/image';
import zLogo from '../../../../public/zlogo.png';
import Link from 'next/link';

export default function Main() {
  return (
    <>
      <div className={styles.left}>
        {/* next/image에서 불러오는 이미지 - 알아서 최적화를 해준다. */}
        <Image src={zLogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        {/* next에서는 link를 꼭 써야 하고 일반 a태그는 쓰면 안됨.
        왜냐. 일반 a태그는 새로고침 되면서 넘어가기 때문.
        넥스트, 리액트 등에서는 페이지 이동 시 새로고침 되며 이동하도록 하면 안됨 (why?) */}
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </>
  );
}
