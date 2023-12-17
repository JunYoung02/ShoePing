import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import styled from 'styled-components';
import ShoePing from '../assets/logo/ShoePing.png';
import CloseBtn from '../assets/close/close.png';

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background: rgba(0, 0, 0, 0.45);
`;

const Modal = styled.div`
  position: fixed;
  border: 1px solid #000000;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 417px;
  height: 531px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Logo = styled.img`
  height: 2.5rem;
  margin: 2.5rem auto 0 auto;
`;

const Close = styled.img`
  position: absolute;
  margin-left: 70%;
  margin-top: 10%;
  cursor: pointer;
`;

const Header = styled.p`
  font-size: 1.5rem;
  font-weight: 900;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ImputBox = styled.input`
  width: 17.75rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #efefef;
  padding: 0.3rem;
  margin-bottom: 1rem;
  placeholder: #d3d3d3;
`;

const Button = styled.button`
  border: none;
  background-color: #ffe4e1;
  width: 17.625rem;
  height: 2.5rem;
  border-radius: 70px;
  font-size: 0.875rem;
  font-weight: 700;
  margin-top: 3.3rem;
  cursor: pointer;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  margin-top: 1.875rem;
`;

const YelloFont = styled.p`
  font-size: 0.875rem;
  color: #fbedc8;
  font-weight: 900;
`;

const RedFont = styled.p`
  font-size: 0.875rem;
  color: #e75d97;
  cursor: pointer;
  font-weight: 900;
`;
function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onConfirm } = props;
  const { changeModal } = props;
  const auth = getAuth();

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, '로그인 성공');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage, '로그인 실패');
      });
  };

  return (
    <div>
      <Backdrop />
      <Modal>
        <Close onClick={onConfirm} src={CloseBtn} alt="CloseBtn" />
        <Logo src={ShoePing} alt="ShoePing" />
        <Header>로그인</Header>
        <Form>
          <ImputBox
            type="text"
            placeholder="이메일"
            value={email}
            onChange={emailChangeHandler}
          />
          <ImputBox
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={passwordChangeHandler}
          />
          <Button type="submit" onClick={onSubmitHandler}>
            로그인
          </Button>
        </Form>
        <FlexRow>
          <YelloFont>아직 회원이 아니신기요?</YelloFont>
          <RedFont onClick={changeModal}>회원가입</RedFont>
        </FlexRow>
      </Modal>
    </div>
  );
}

export default Login;
