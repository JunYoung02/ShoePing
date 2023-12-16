import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';
import Login from './Login';
import SignUp from './SignUp';
import ShoePing from '../assets/logo/ShoePing.png';
//  import { CategoryType } from '../utils/types';

const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.2rem;
  border-bottom: 1px solid #ebe7e7;
`;

const Logo = styled.img`
  height: 2.5rem;
  margin-top: 0.4rem;
  margin-left: 1.2rem;

  &:hover {
    cursor: pointer;
  }
`;

const CategoryUl = styled.ul`
  padding: 0;
`;

const Category = styled.a`
  font-family: Pretendard;
  font-size: 1rem;
  margin: 0 1.6rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const AuthenticationDiv = styled.div``;

const Authentication = styled.a`
  font-family: Pretendard;
  font-size: 1rem;
  margin-right: 1.8rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export type Product = {
  brand: string;
  price: number;
  thumbnail: string;
  title: string;
  styleNo: string;
  color: string;
  subtitle: string;
};

function NavBar() {
  const [running, setRunning] = useState<Product[]>([]); // 러닝화
  const [slippers, setSlippers] = useState<Product[]>([]); // 슬리퍼
  const [sneakers, setSneakers] = useState<Product[]>([]); // 스니커즈

  const [login, setLogin] = useState(false); // 로그인 모달 띄우기
  const [signUp, setSignUp] = useState(false); // 회원가입 모달 띄우기

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      // 러닝화 데이터 가져오기
      const runningCollectionRef = collection(db, 'running');
      const runningSnapshot = await getDocs(runningCollectionRef);
      const runningArray = runningSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Product),
      }));
      setRunning(runningArray);

      // 슬리퍼
      const slippersCollectionRef = collection(db, 'slippers');
      const slippersSnapshot = await getDocs(slippersCollectionRef);
      const slippersArray = slippersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Product),
      }));
      setSlippers(slippersArray);

      const sneakersCollectionRef = collection(db, 'sneakers');
      const sneakersSnapshot = await getDocs(sneakersCollectionRef);
      const sneakersArray = sneakersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Product),
      }));
      setSneakers(sneakersArray);
    };

    fetchData();
  }, []);

  const runningHandler = () => {
    navigate('/category', { state: { shoesData: running } });
  };

  const slippersHandler = () => {
    navigate('/category', { state: { shoesData: slippers } });
  };

  const sneakersHandler = () => {
    navigate('/category', { state: { shoesData: sneakers } });
  };

  const loginHandler = () => {
    setLogin(!login);
  };

  const signUpHandler = () => {
    setSignUp(!signUp);
  };

  const changeModalPage = () => {
    setLogin(!login);
    setSignUp(!signUp);
  };

  console.log(running, sneakers, slippers);

  return (
    <>
      {login && (
        <Login onConfirm={loginHandler} changeModal={changeModalPage} />
      )}

      {signUp && (
        <SignUp onConfirm={signUpHandler} changeModal={changeModalPage} />
      )}
      <NavigationBar>
        <Logo src={ShoePing} alt="ShoePing Logo" />
        <CategoryUl>
          <Category onClick={sneakersHandler}>스니커즈</Category>
          <Category onClick={runningHandler}>러닝화</Category>
          <Category onClick={slippersHandler}>슬리퍼</Category>
          <Category>구두</Category>
          <Category>부츠</Category>
          <Category>샌들</Category>
          <Category>로퍼</Category>
        </CategoryUl>
        <AuthenticationDiv>
          <Authentication onClick={loginHandler}>로그인</Authentication>
          <Authentication onClick={signUpHandler}>회원가입</Authentication>
        </AuthenticationDiv>
      </NavigationBar>
    </>
  );
}

export default NavBar;
