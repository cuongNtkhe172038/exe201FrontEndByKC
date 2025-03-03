import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import ProductSlider  from "../../components/swiper/slider";
import StepComponent from "../../components/step/step"; // Thêm import StepComponent
import { CustomNavLinkSmall, Span } from "../../components/Header/styles";
import { SvgIcon } from "../../common/SvgIcon";
import { useNavigate } from "react-router-dom";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));


const Home = () => {
  var navigate = useNavigate();
  return (
    <>
     <div
  style={{
    position: "relative",
    // width: "100vw",
    height: "800px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // background: "rgba(150, 192, 237, 0.4)",
  }}
>
  {/* Các nút trên góc trái */}
  

    
    

<div style={{ 
      position: "absolute", 
      top: "20px", 
      left: "90px", 
      display: "flex", 
      flexDirection: "row", 
      gap: "15px"  
    }}
  >
    <CustomNavLinkSmall >
      <Span style={{
        fontWeight: "bold", 
        color: "#FFFFFF", 
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)"
      }}>
        {("Kênh website          |")}
      </Span>
    </CustomNavLinkSmall>
    <CustomNavLinkSmall >
      <Span style={{
        fontWeight: "bold", 
        color: "#FFFFFF", 
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)"
      }}>
        {("Web bán hàng")}
      </Span>
    </CustomNavLinkSmall>
    <CustomNavLinkSmall >
      <Span style={{
        fontWeight: "bold", 
        color: "#FFFFFF", 
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)"
      }}>
        {("Web doanh nghiệp")}
      </Span>
      
    </CustomNavLinkSmall>
    <CustomNavLinkSmall >
      <Span style={{
        fontWeight: "bold", 
        color: "#FFFFFF", 
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)"
      }}>
        {("Bảng giá")}
      </Span>
    </CustomNavLinkSmall>
    <CustomNavLinkSmall >
      <Span style={{
        fontWeight: "bold", 
        color: "#FFFFFF", 
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)"
      }}>
        {("Giao diện")}
      </Span>
    </CustomNavLinkSmall>
  </div>

  {/* Ảnh nền */}
  <SvgIcon src="becodee2.jpg" width="100%" height="auto" />

  {/* Button lớn ở giữa */}
  <button
  onClick={()=>navigate("/Login")}
  style={{
    position: "absolute",
    top: "80%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 30px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#000",
    background: "linear-gradient(to right,rgb(132, 232, 207),rgb(100, 224, 208))",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    transition: "0.3s",
    width: "350px",
    fontFamily:"arial",
  }}
  onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
  onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
>
  Dùng Thử Miễn Phí
  <div
    style={{
      width: "40px",
      height: "40px",
      background: "#fff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "10px",
    }}
  >
    ➝
  </div>
</button>
</div>

<Container>

      <ScrollToTop />
      
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="becodee3.jpg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        icon="Tạo Ra Một Website Đẹp (Bài đăng Facebook) (1).gif"
      />

<ProductSlider />
<StepComponent />
       <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      
      
      
    </Container>
    </>
  );
};

export default Home;
