import React from 'react';
import { FormattedDate, injectIntl, WrappedComponentProps } from 'react-intl';
import { StyledDiv } from '../App';
import messages from '../messages/messages';

export const DateTime: React.FC<WrappedComponentProps> = ({
  intl: { formatMessage }
}: WrappedComponentProps) => {
  return (
    <StyledDiv>
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
};

export default injectIntl(DateTime);
