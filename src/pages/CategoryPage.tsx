import { useLocation, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import shoes from '../assets/shoes/shoes.png';

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 46rem;
  margin: 24px auto;
  text-align: left;
`;

const CategoryTitle = styled.span`
  font-family: Pretendard;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 30px;
  text-align: left;
  width: 90%;
`;

const CategoryItemContainer = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: repeat(4, 1fr); // 4개의 열
  grid-template-rows: repeat(2, 1fr); // 2개의 행
  gap: 20px; // 셀 간격 조절
`;

const CategoryContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 22rem;
  flex-direction: column;
  align-items: left;
  text-decoration: none;
  color: inherit;
  &:hover {
    background-color: #ddd;
  }
  &:hover {
    cursor: pointer;
  }
`;

const CategoryImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 18rem;
  background-color: #e8e8e8;
`;

const ShoesImage = styled.img`
  width: 100%;
`;

const CategoryBrandTitle = styled.span`
  font-family: Pretendard;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: 3px;
  margin-left: 5px;
  color: #959595;
`;

const CategoryProductTitle = styled.span`
  font-family: Pretendard;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 3px;
  margin-left: 5px;
`;

const CategoryPriceTitle = styled.span`
  font-family: Pretendard;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: 0;
  margin-left: 5px;
  color: #959595;
`;

export default function CategoryPage() {
  const navigate = useNavigate();
  const { state } = useLocation(); // state 속성 추출
  const { shoesData } = state; // state 객체 내부의 shoesData 속성 추출 후 { shoesData }에 저장

  const categoryClickHandler = (shoe) => {
    navigate('/detail', { state: { shoesDetail: shoe } });
    console.log(shoe);
  };

  // console.log(shoesData.id);

  // console.log(shoesData);
  return (
    <>
      <NavBar />
      <CategoryContainer>
        <CategoryTitle>스니커즈</CategoryTitle>
        <CategoryItemContainer>
          {shoesData.map((shoe) => (
            <CategoryContentContainer
              onClick={() => categoryClickHandler(shoe)}
            >
              <CategoryImageContainer>
                <ShoesImage src={shoe.thumbnail} alt="shoes image" />
              </CategoryImageContainer>
              <CategoryBrandTitle>{shoe.brand}</CategoryBrandTitle>
              <CategoryProductTitle>{shoe.title}</CategoryProductTitle>
              <CategoryPriceTitle>₩ {shoe.price}</CategoryPriceTitle>
            </CategoryContentContainer>
          ))}
          {/* <CategoryContentContainer to="/detail">
            <CategoryImageContainer>
              <ShoesImage src={runningshoes.thumbnail} alt="shoes image" />
            </CategoryImageContainer>
            <CategoryBrandTitle>NIKe</CategoryBrandTitle>
            <CategoryProductTitle>NIKE W DUNK LOW PRM</CategoryProductTitle>
            <CategoryPriceTitle>₩ 139,000</CategoryPriceTitle>
          </CategoryContentContainer> */}
        </CategoryItemContainer>
      </CategoryContainer>
    </>
  );
}
