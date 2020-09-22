import React from 'react';
import { FormattedDate, injectIntl, WrappedComponentProps } from 'react-intl';
import messages from '../messages/messages';

export const DateTime: React.FC<WrappedComponentProps> = ({
  intl: { formatMessage }
}: WrappedComponentProps) => {
  return (
    <>
      <FormattedDate
        value={new Date(1459913574887)}
        year="numeric"
        month="long"
        day="numeric"
        weekday="long"
      />
      {formatMessage(messages.car)}
      {formatMessage(messages.bus)}
    </>
  );
};

export default injectIntl(DateTime);
