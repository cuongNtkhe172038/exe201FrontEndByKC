import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, MiddleBlockSection1, ContentWrapper1, RoundedImage, StyledRow } from "./styles";
import { SvgIcon } from "../../common/SvgIcon";
interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  icon: string;
  t: TFunction;
}

const MiddleBlock = ({ title, content, button, icon, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h1>{t(title)}</h1>
              <MiddleBlockSection1>

                  <RoundedImage>
                    <SvgIcon src={icon} width="100%" height="auto" />
                  </RoundedImage>

                  <StyledRow justify="center" align="middle" gutter={[32, 32]}>


                    <ContentWrapper1>
                      <Col lg={24} md={24} sm={24} xs={24}>
                        <h1>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4381e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-chevron-up"><circle cx="12" cy="12" r="10" /><path d="m8 14 4-4 4 4" /></svg>
                          {t("Tăng uy tín cho thương hiệu")}</h1>
                        <Content>
                          {t("Tạo website bán hàng với giao diện chuyên nghiệp, đẹp mắt. Tối ưu trải nghiệm người dùng (UX), giúp khách hàng dễ dàng tìm kiếm và mua sắm trực tuyến, từ đó nâng cao độ tin cậy và hình ảnh thương hiệu của bạn trong mắt khách hàng.")}
                        </Content>

                        <h1>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4381e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-codesandbox"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="7.5 4.21 12 6.81 16.5 4.21" /><polyline points="7.5 19.79 7.5 14.6 3 12" /><polyline points="21 12 16.5 14.6 16.5 19.79" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" x2="12" y1="22.08" y2="12" /></svg>
                          {t("Mở rộng phạm vi tiếp cận khách hàng")}</h1>
                        <Content>
                          {t("Website bán hàng cho phép doanh nghiệp tiếp cận khách hàng mọi lúc, mọi nơi, không bị giới hạn bởi địa lý. Điều này giúp mở rộng thị trường và tăng cơ hội bán hàng, đồng thời nhắm tới đối tượng khách hàng tiềm năng một cách hiệu quả.")}
                        </Content>

                        <h1>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4381e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-alarm-clock-check"><circle cx="12" cy="13" r="8" /><path d="M5 3 2 6" /><path d="m22 6-3-3" /><path d="M6.38 18.7 4 21" /><path d="M17.64 18.67 20 21" /><path d="m9 13 2 2 4-4" /></svg>
                          {t("Tiết kiệm thời gian, chi phí")}</h1>
                        <Content>
                          {t("Không còn phải lo lắng về chi phí thuê mặt bằng, chi phí cố định, nhân sự hay các dịch vụ đi kèm như cửa hàng truyền thống, chỉ với 16.000đ/ngày, bạn đã sở hữu ngay một website chuyên nghiệp, bán hàng 24/7.")}
                        </Content>

                        <h1>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4381e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-badge-percent"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m15 9-6 6" /><path d="M9 9h.01" /><path d="M15 15h.01" /></svg>
                          {t("Tăng tỷ lệ chuyển đổi đơn hàng")}</h1>
                        <Content>
                          {t("Một website chuyên nghiệp với các tính năng như tìm kiếm sản phẩm nhanh chóng, giỏ hàng tiện lợi, thanh toán đa dạng và bảo mật cao không chỉ tăng trải nghiệm người dùng mà còn tăng tỷ lệ chuyển đổi đơn hàng.")}
                        </Content>

                        <Button name="submit" onClick={() => scrollTo("mission")} >
                          {t("Tư vấn ngay")}
                        </Button>
                      </Col>
                    </ContentWrapper1>
                  </StyledRow>
        
              </MiddleBlockSection1>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>


  );
};

export default withTranslation()(MiddleBlock);
