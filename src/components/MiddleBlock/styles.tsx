import styled from "styled-components";
import { Row } from "antd";
export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;

font-family: Arial, sans-serif; 
  
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
  font-family: Arial, sans-serif; 
`;

export const ContentWrapper = styled.div`
  width: 100%; /* Đảm bảo rộng toàn bộ */
 
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; /* Giữ nội dung căn giữa */
  
  h1 {
    width: 100%; /* Để tiêu đề dàn rộng */
    text-align: center;
  }
`;
export const MiddleBlockSection1 = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  font-family: Arial, sans-serif; 
  color: black; /* Chữ màu đen */

 
  }

  p {
    font-size: 1rem; /* Cỡ chữ khoảng 16px */
    font-weight: 400; /* Giữ độ đậm phù hợp */
    text-align: left; /* Căn trái để chữ thẳng hàng */
    width: 100%;
    
    margin: 0 auto;
    line-height: 1.6; /* Khoảng cách dòng tương tự ảnh */
  }

  h2 {
    font-size: 1.25rem; /* Cỡ chữ tiêu đề khoảng 20px */
    font-weight: bold;
    text-align: left; /* Căn lề trái */
    width: 100%;
    
    margin: 1rem auto 0.5rem;
  }
    
`;

export const ContentWrapper1 = styled.div`
  width: 100%;
  
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -120px; 
  margin-left:20px;
  h1 {
    width: 100%;
    text-align: left;
    font-size: 24px;
    color: black;
    display: flex;
    align-items: center; /* Căn giữa SVG với chữ */
    
    svg {
      margin-right: 8px; /* Tạo khoảng cách giữa icon và chữ */
    }
  }
 button {
      font-size: 25px;
    }



  p, span, div {
    color: black;
    text-align: justify;
    font-size: 18px;
  }
`;
export const RoundedImage = styled.div`
  border-radius: 15px; /* Bo góc ảnh */
  overflow: hidden; /* Giữ phần ảnh không bị tràn */
  width: 100%;
  height: auto;
  margin-top: -120px;
  
`;
export const StyledRow = styled(Row).attrs({
  justify: "center",
  align: "middle",
  gutter: [32, 32],
})`
  width: 70%;
  

`;







