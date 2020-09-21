import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Label } from 'semantic-ui-react';
import { StyledDiv } from '../App';
import { 
  decreaseCounter as decreaseCounterAction,
  increaseCounter as increaseCounterAction
} from '../redux/count/actions';
import { ApplicationState } from '../redux/types';

export interface CounterProps {
  count: any;
  decreaseCounter: any;
  increaseCounter: any;
}

export const Counter: React.FC<CounterProps> = ({
  count,
  increaseCounter,
  decreaseCounter
}: CounterProps) => {
  const [increaseBy, setIncreaseBy] = useState<number>(0)
  return (
    <StyledDiv>
      <Button primary onClick={() => increaseCounter(increaseBy)}>Increase</Button>
      <Input type="number" value={increaseBy} onChange={(e, { value }) => {
        setIncreaseBy(Number(value))
      }}></Input>
      <Button primary onClick={() => decreaseCounter(increaseBy)}>Decrease</Button>
      <Label>{count.count}</Label><br/>
    </StyledDiv>
  );
};

function mapStateToProps(
  state: ApplicationState
): Partial<CounterProps> {
  const { count } = state;
  return {
    count
  };
}
  
const mapActionToProps: Partial<CounterProps> = {
  increaseCounter: increaseCounterAction,
  decreaseCounter: decreaseCounterAction
};

export default connect(
  mapStateToProps,
  mapActionToProps
 )(Counter);
