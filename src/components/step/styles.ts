import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 40px;
  background: #fff;
`;

export const StepWrapper = styled.div`
  display: flex;
  justify-content: space-around; /* Căn đều khoảng cách */
  flex-wrap: wrap; /* Để không bị vỡ trên màn hình nhỏ */
  gap: 20px;
`;


export const Step = styled.div`
  width: 18%;
  text-align: center;
`;

export const Icon = styled.div`
  font-size: 50px; /* Tăng kích thước icon */
  margin-bottom: 15px;
`;

export const Title = styled.h3`
  font-size: 22px; /* Tăng kích thước tiêu đề */
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 16px; /* Tăng kích thước mô tả */
  color: #333;
`;

export const Button = styled.button`
  background: #00c853;
  color: white;
  padding: 15px 25px; /* Tăng kích thước nút */
  font-size: 18px; /* Tăng chữ trong nút */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #009624;
  }
`;


