import React from "react";
import { Container, StepWrapper, Step, Icon, Title, Description, Button } from "./styles";
import { useNavigate } from "react-router-dom";

const steps = [
  
  {
    icon: "🔍",
    title: "Đăng kí dùng thử",
    description: 'Bạn click nút "Dùng thử miễn phí" và nhập đầy đủ thông tin vào form đăng ký để khởi tạo website bán hàng cho mình.',
  },
  {
    icon: "📂",
    title: "Lựa chọn giao diện",
    description: "Bạn có thể lựa chọn giao diện phù hợp trong kho giao diện của Sapo và dễ dàng tùy chỉnh trang website bán hàng.",
  },
  {
    icon: "🛒",
    title: "Đăng sản phẩm",
    description: "Sau khi lựa chọn được giao diện phù hợp, bạn đã có thể đăng những sản phẩm đầu tiên lên website của mình.",
  },
  {
    icon: "🌐",
    title: "Đăng ký tên miền",
    description: "Bạn có thể đăng ký mua tên miền tại các trang mua bán tên miền. Hoặc thiết kế web bán hàng Sapo sẽ hỗ trợ bạn.",
  },
  {
    icon: "✅",
    title: "Sẵn sàng bán hàng",
    description: "Vậy là bạn đã hoàn tất việc thiết kế website bán hàng. Mọi thứ đã sẵn sàng để bạn bắt đầu bán hàng online trên website.",
  },
];

const StepComponent = () => {
  var navigate = useNavigate();
  return (
    <Container>
      <h2>Hướng dẫn cách tạo website bán hàng với Sapo</h2>
      <p>Chỉ với 5 bước đơn giản dưới đây bạn đã sở hữu một website bán hàng chuyên nghiệp.</p>
      <StepWrapper>
        {steps.map((step, index) => (
          <Step key={index}>
          <Icon>{step.icon}</Icon>
          <Title>{index + 1}. {step.title}</Title>
          <Description>{step.description}</Description>
        </Step>
        ))}
      </StepWrapper>
      <Button onClick={()=>navigate("/Login")}>
        Dùng thử miễn phí →</Button>
    </Container>
  );
};

export default StepComponent;
