import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { addThemeProvider, mouseClick } from '../../utils/testUtils';
import FilterChip, { FilterChipProps } from './FilterChip';

const mockFn = jest.fn();

const filterChipProps: FilterChipProps = {
  text: 'Some text',
  image: "some location",
  onClick: mockFn
}

describe('Filter chip', () => {
  let rendered: RenderResult;
  beforeEach(() => {
    rendered = render(
      addThemeProvider(<FilterChip {...filterChipProps} />)
    );
  });
  afterEach(() => {
    if (rendered) rendered.unmount();
  });
  it('renders the chip correctly', () => {
    const { getByText, getByTestId } = rendered;
    expect(getByText(/Some text/)).toBeInTheDocument();
    expect(getByTestId("filter-chip-image")).toHaveAttribute("src","some location");
  });

  it('should call the onClick function sent on clicking the chip', async () => {
    const chip = rendered.getByText(/Some text/);
    mouseClick(chip);
    expect(mockFn).toHaveBeenCalled();
  });
});
