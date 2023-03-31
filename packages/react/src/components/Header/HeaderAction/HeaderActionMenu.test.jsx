import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { settings } from '../../../constants/Settings';

import HeaderActionMenu from './HeaderActionMenu';

const { prefix } = settings;

describe('HeaderActionMenu', () => {
  const mockProps = {
    'aria-label': 'Accessibility label',
    className: 'custom-class',
    // We use `ref` instead of `focusRef` becase `HeaderActionMenu` forwards the ref
    // to the underlying menu button
    ref: jest.fn(),
    tabIndex: -1,
    onToggleExpansion: jest.fn(),
    label: 'my-menu',
    childContent: [
      {
        metaData: {
          href: 'http://google.com',
          title: 'this is a title',
          target: '_blank',
          rel: 'noopener noreferrer',
          element: 'a',
        },
        content: 'this is my message to you',
      },
      {
        metaData: {
          href: 'http://google.com',
          target: '_blank',
          rel: 'noopener noreferrer',
          element: 'a',
          'data-testid': 'long-menu-item',
        },
        content: 'this is my message to you that is really long and should be truncated',
      },
      {
        metaData: {
          onClick: jest.fn(),
          className: 'this',
          element: 'button',
        },
        content: <span>JohnDoe@ibm.com</span>,
      },
    ],
  };

  it('should render', () => {
    const { container } = render(<HeaderActionMenu {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  it('should render aria-label', () => {
    render(<HeaderActionMenu {...mockProps} />);

    expect(screen.getByTestId('menuitem')).toHaveAttribute('aria-label', 'Accessibility label');
  });

  it('should render content prop', () => {
    const menuContent = () => <p>Some other text</p>;
    render(<HeaderActionMenu renderMenuContent={menuContent} {...mockProps} />);

    expect(screen.getByTestId('menuitem')).toHaveTextContent('Some other text');
  });

  it("should add a title to long items that truncate if they don't have one.", () => {
    jest.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockImplementation(() => 200);
    jest.spyOn(HTMLElement.prototype, 'scrollWidth', 'get').mockImplementation(() => 400);

    render(<HeaderActionMenu isExpanded {...mockProps} />);

    expect(screen.getByTestId('long-menu-item')).toBeDefined();
    expect(screen.getByTestId('long-menu-item')).toHaveAttribute(
      'title',
      'this is my message to you that is really long and should be truncated'
    );

    jest.clearAllMocks();
  });

  it('should display tooltip on hover', () => {
    render(<HeaderActionMenu {...mockProps} />);
    fireEvent.mouseEnter(screen.getByTestId('menuitem'));
    expect(screen.getByTestId('menuitem')).not.toHaveClass(`${prefix}--tooltip--hidden`);
  });
});
