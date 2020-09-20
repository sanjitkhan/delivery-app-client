import React from 'react';
import { Button, Label, Input } from 'semantic-ui-react';
import { 
  increaseCounter as increaseCounterAction,
  decreaseCounter as decreaseCounterAction
} from './redux/count/actions';
import { connect } from 'react-redux';
import { ApplicationState } from './redux/types';
import { FormattedDate, injectIntl, WrappedComponentProps } from 'react-intl';
import messages from './messages/messages';
import styled from 'styled-components';

export type GenericCallBack = (...args: any[]) => any;

export interface AppProps extends WrappedComponentProps {
  count: any;
  increaseCounter: any;
  decreaseCounter: any;
}

interface AppState {
  increaseBy: number;
}

const StyledDiv = styled.div`
  text-align: center;
  background-color: ${props => props.theme.background.pageBackground}
`;

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      increaseBy: 0
    }
  }
  render() {
    const {
      count: { count },
      increaseCounter,
      decreaseCounter,
      intl: { formatMessage }
    } = this.props;
    const { increaseBy } = this.state;
    return (
      <StyledDiv>
        <div>abc</div>
        <Button primary onClick={() => increaseCounter(increaseBy)}>Increase</Button>
        <Input type="number" value={increaseBy} onChange={(e, { value }) => {
          this.setState((state) => ({
            increaseBy: Number(value)
          }));
        }}></Input>
        <Button primary onClick={() => decreaseCounter(increaseBy)}>Decrease</Button>
        <Label>{count}</Label><br/>
        <FormattedDate
          value={new Date(1459913574887)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
        {formatMessage(messages.car)}
        {formatMessage(messages.bus)}
      </StyledDiv>
    );
  }
}

function mapStateToProps(
  state: ApplicationState
): Partial<AppProps> {
  const { count } = state;
  return {
    count
  };
}
  
const mapActionToProps: Partial<AppProps> = {
  increaseCounter: increaseCounterAction,
  decreaseCounter: decreaseCounterAction
};

export default connect(
  mapStateToProps,
  mapActionToProps
 )(injectIntl(App));
