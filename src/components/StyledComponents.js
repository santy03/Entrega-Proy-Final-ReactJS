import styled from "styled-components";

//Item
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    diplay: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`;

const ProductContainer = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:white;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 1;
`;
const Icon = styled.div`
    font-size: 12px;
    width: 100px;
    height: 40px;
    background-color: gold;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: white;
        transform: scale(1.3);
    }
`;

//ItemCount
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;


//ItemList
const ProductsContainer = styled.div`
    padding: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

//ItemDetail
const DetailContainer = styled.div`
`;

const WrapperDetail = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const ImageDetail = styled.img`
    width: 112%;
    height:70vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price  = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

//Cart
const WrapperCart = styled.div`
    padding: 20px;
`;

const TitleCart = styled.h1`
    background-color: gold;
    border-radius: 50px;
    font-size:3rem;
    font-weight: 300;
    text-align: center;
    font-family: 'Source Serif Pro', serif;
`;

const ContentCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ImageCart = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  font-family: 'Source Serif Pro', serif;
  width: 200px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "gold"};
  color ${(props) => props.type === "filled" && "white"};
`;

const TopText = styled.span`
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;


const Summary = styled.div`
  flex: 1.2;
  border: 1px solid gold;
  border-radius: 30px;
  padding: 10px;
  height: 62vh;
  background-color: black;
`;

const SummaryTitle = styled.h1`
  color: gold;
  text-align: center;
  font-weight: 200;
  font-size: 2rem;
  font-family: 'Source Serif Pro', serif;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
  font-size: 1.2rem;
  color: white;
`;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: white;
  color: #000000;
  font-weight: 600;
  border: 1px solid gold;
  font-family: 'Patua One';
`;

export { ProductsContainer, ProductContainer,Circle, Image, Info, Icon,ProductAmount, ProductAmountContainer, DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price, WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductPrice, TopButton, Top, TopText, Bottom, Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, Button }
