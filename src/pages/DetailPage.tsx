import styled from 'styled-components';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import shoes from '../assets/shoes/shoes.png';
import toggleBtn from '../assets/toggleBtn/toggleBtn.png';
import sample1 from '../assets/sampleImage/sample1.png';
import sample2 from '../assets/sampleImage/sample2.png';

const ShoesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 80%;
  margin: 24px auto;
`;

const ShoesImageContainer = styled.div`
  display: flex;
  flex-basis: 50%;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 46rem;
  background-color: #e8e8e8;
  margin-right: 35px;
`;

const ShoesImage = styled.img`
  width: 80%;
`;

const ShoesInformation = styled.div`
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 35px;
`;

const Company = styled.span`
  font-family: Pretendard;
  font-size: 1.2rem;
`;

const ShoesTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ShoesTitle = styled.span`
  font-family: Pretendard;
  font-size: 2.5rem;
  font-weight: 700;
`;

const ShoesSubTitle = styled.span`
  font-family: Pretendard;
  font-size: 1.1rem;
  color: #959595;
`;

const ShoesDetailContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

const ShoesDetailOptionConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ShoesDetailText = styled.span`
  font-family: Pretendard;
  font-size: 1.2rem;
  margin: 8px 0;
`;

const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0.5rem 0;
  width: 80%;
`;

const SizeText = styled.span`
  font-family: Pretendard;
  font-size: 1.2rem;
  margin: 8px 0;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #c6c6c6;
  width: 100%;
  height: 2.5rem;
`;

const DropdownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  padding: 0 1rem;
  width: 100%;
  height: 100%;
`;

const ToggleText = styled.span`
  font-family: Pretendard;
  font-size: 1rem;
  color: #616161;
`;

const ToggleBtn = styled.img`
  width: 0.625rem;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  background-color: #f9f9f9;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const BuyAndCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BuyBtn = styled.button`
  width: 80%;
  height: 3rem;
  background-color: #292929;
  border: 1px solid #c6c6c6;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 8px 0;

  &:hover {
    cursor: pointer;
  }
`;

const CartBtn = styled.button`
  width: 80%;
  height: 3rem;
  background-color: #ffffff;
  border: 1px solid #c6c6c6;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;
  color: #3a3a3a;
  margin: 8px 0;

  &:hover {
    cursor: pointer;
  }
`;

const SampleImage = styled.img`
  width: 80%;
  margin: 10px 0;

  &:hover {
    cursor: pointer;
  }
`;

function DetailPage() {
  const { state } = useLocation();
  const { shoesDetail } = state;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  console.log(shoesDetail);

  return (
    <>
      <NavBar />
      <ShoesContainer>
        <ShoesImageContainer>
          <ShoesImage src={shoesDetail.thumbnail} alt="shoes image" />
        </ShoesImageContainer>
        <ShoesInformation>
          <Company>{shoesDetail.brand}</Company>
          <ShoesTitleContainer>
            <ShoesTitle>{shoesDetail.title}</ShoesTitle>
            <ShoesSubTitle>{shoesDetail.subtitle}</ShoesSubTitle>
          </ShoesTitleContainer>
          <ShoesDetailContainer>
            <ShoesDetailOptionConatiner>
              <ShoesDetailText>COLOR</ShoesDetailText>
              <ShoesDetailText>STYLE NO</ShoesDetailText>
              <ShoesDetailText>PRICE</ShoesDetailText>
            </ShoesDetailOptionConatiner>
            <ShoesDetailOptionConatiner>
              <ShoesDetailText>{shoesDetail.color}</ShoesDetailText>
              <ShoesDetailText>{shoesDetail.styleNo}</ShoesDetailText>
              <ShoesDetailText>₩{shoesDetail.price}</ShoesDetailText>
            </ShoesDetailOptionConatiner>
          </ShoesDetailContainer>
          <SizeContainer>
            <SizeText>SIZE</SizeText>
            <DropdownContainer>
              <DropdownButton onClick={toggleDropdown}>
                <ToggleText>드롭다운 열기</ToggleText>
                <ToggleBtn src={toggleBtn} alt="toggle button" />
              </DropdownButton>
              <DropdownContent isOpen={isOpen}>
                <DropdownItem>항목 1</DropdownItem>
                <DropdownItem>항목 2</DropdownItem>
                <DropdownItem>항목 3</DropdownItem>
              </DropdownContent>
            </DropdownContainer>
          </SizeContainer>
          <BuyAndCartContainer>
            <BuyBtn>BUY</BuyBtn>
            <CartBtn>CART</CartBtn>
          </BuyAndCartContainer>
          <SampleImage src={sample1} alt="sample1 image" />
          <SampleImage src={sample2} alt="sample2 image" />
        </ShoesInformation>
      </ShoesContainer>
    </>
  );
}

export default DetailPage;
