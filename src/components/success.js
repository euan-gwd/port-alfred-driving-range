import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import styled from "react-emotion";

const Success = () => {
  return (
    <SuccessWrapper>
      <FontAwesomeIcon
        icon={["far", "check-square"]}
        size="5x"
        color="#064614"
      />
      <h2>Thank You</h2>
    </SuccessWrapper>
  );
};

export default Success;

const SuccessWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;
