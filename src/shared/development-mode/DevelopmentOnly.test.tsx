import { RenderResult, cleanup, render } from '@testing-library/react';
import React from 'react';

import DevelopmentOnly from './DevelopmentOnly';
import * as isDevelopment from './isDevelopment';

const renderComponent = (): RenderResult => {
  return render(
    <DevelopmentOnly>
      <h1>Hello</h1>
    </DevelopmentOnly>
  );
};

afterEach(cleanup);

describe('DevelopmentMode', () => {
  const mockDevelopmentMode = jest.spyOn(isDevelopment, 'default');

  it('does not render when not development', () => {
    mockDevelopmentMode.mockImplementation(() => false);

    const result = renderComponent();

    expect(result.baseElement.querySelector('h1')).toBeNull();
  });

  it('renders when development', () => {
    mockDevelopmentMode.mockImplementation(() => true);

    const result = renderComponent();

    expect(result.baseElement.querySelector('h1')).not.toBeNull();
  });
});
