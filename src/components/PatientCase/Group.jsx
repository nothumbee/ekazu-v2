import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button, List, Typography, Card } from "antd";
import Property from "./Property";
import useExam from "./useExam";
import ExaminingModalLoading from "../Loading/ExaminingModalLoading";

const { Title } = Typography;

const StyledCard = styled(Card)`
  &&& {
    width: 100%;
    background-color: #fafafa;
    margin: 20px 0;
  }
`;

const Group = ({ group }) => {
  const [{ visible, examining }, { handleExaminate, setVisible }] = useExam();

  return (
    <>
      <StyledCard>
        <Title level={3}>{group.title}</Title>

        {group.isPartialExam && !visible && (
          <Button type='primary' onClick={handleExaminate}>
            Provést všechna vyšetření v této skupině
          </Button>
        )}

        <List
          itemLayout='vertical'
          size='large'
          bordered
          dataSource={group.properties}
          renderItem={(property) => (
            <List.Item>
              <Property property={property} visible={visible} />
            </List.Item>
          )}
        />
      </StyledCard>
      {examining && <ExaminingModalLoading />}
    </>
  );
};

export default Group;

Group.propTypes = {
  group: PropTypes.object.isRequired,
};
