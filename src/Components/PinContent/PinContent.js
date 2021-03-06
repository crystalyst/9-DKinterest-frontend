import React from "react";
import styled from "styled-components";
import TextContent from "./TextContent/TextContent";
import ImageContent from "./ImageContent/ImageContent";

const PinContent = ({ pin }) => {
  return (
    <Container>
      <ContentBox>
        <ImageContent source={pin.imgUrl} link={pin.link} />
        <TextContent {...pin} />
      </ContentBox>
    </Container>
  );
};

export default PinContent;

const Container = styled.div`
  width: 100%;
`;

const ContentBox = styled.div`
  width: 1016px;
  margin: 20px auto 32px;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
  display: flex;
`;
