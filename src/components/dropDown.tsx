import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Colors } from "../styles/colors";
import { MoreIcon } from "./moreIcon";

type Props = {
  data: any[];
  handleClick: (v: any) => void;
  rightAligned?: boolean;
};

type ContentProps = {
  open: boolean;
  right?: boolean;
};

const Wrapper = styled.div<{ right: boolean }>`
  position: relative;
  display: inline-block;
  ${(props) => (props.right ? "float:  right" : "float: left")};
`;
const IconWrapper = styled.button`
  display: flex;
  background-color: ${Colors.black100};
  border: none;
  padding: 0;
  cursor: pointer;
`;
const Content = styled.div<ContentProps>`
  background-color: ${Colors.black100};
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  ${(props) => (props.right ? "right:  0" : "left: 0")};
`;
const Item = styled.div`
  color: ${Colors.white100};
  padding: 10px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.blue100};
  }
`;

const Dropdown = ({ data, handleClick, rightAligned = false }: Props) => {
  const [togglePopUp, setTogglePopup] = useState(false);
  const ref = useRef<any>();

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (togglePopUp && ref.current && !ref.current.contains(e.target)) {
        setTogglePopup(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [togglePopUp]);

  const onClick = useCallback(
    (v: any) => {
      setTogglePopup(!togglePopUp);
      handleClick(v);
    },
    [togglePopUp, handleClick]
  );

  return (
    <Wrapper
      ref={ref}
      right={rightAligned}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
    >
      <IconWrapper onClick={() => setTogglePopup(!togglePopUp)}>
        <MoreIcon color={Colors.white100} />
      </IconWrapper>
      <Content open={togglePopUp} right={rightAligned}>
        {data &&
          data.map((v: any, i: number) => (
            <Item key={i} onClick={() => onClick(v)} role="menuitem">
              {v.title}
            </Item>
          ))}
      </Content>
    </Wrapper>
  );
};

export default Dropdown;
