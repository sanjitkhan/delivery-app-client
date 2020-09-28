import React from "react";
import { Icon, Label } from "semantic-ui-react";
import styled from "styled-components";
import { GenericCallBack } from "../../utils/utils";

export interface FilterChipProps {
  text: string;
  image?: any;
  onClick: GenericCallBack;
}

const StyledLabel = styled(Label)`
  &&& {
    border-radius: 15px;
    padding: 8px 18px;
    font-weight: 100;
    background-color: ${props => props.theme.colors.primary.normal};
    color: ${props => props.theme.colors.grey.white};
    font-size: 14px;
    font-variant-caps: all-small-caps;
    margin: 3px;
  }
  &&& img {
    height: 20px !important;
    vertical-align: middle;
    position: relative;
    top: -1px;
  }
  i {
    position: relative;
    top: -1px;
  }
`;
const FilterChip: React.FC<FilterChipProps> = ({
  text,
  image,
  onClick
}:FilterChipProps) => {
  return (
    <StyledLabel 
      onClick={e => {
        e.stopPropagation();
        onClick(e);
      }}
      image={!!image}
    >
      {image && <img data-testid="filter-chip-image" src={image} alt={text + " image"} />}
      {text}
      <Icon
        name='delete'
        size='big'
      />
    </StyledLabel>
  );
}

export default FilterChip;