import classnames from 'classnames';
import * as React from 'react';
import { WingBlankProps } from './props-type';
import './style';

export default class WingBlank extends React.Component<WingBlankProps, any> {
  static defaultProps = {
    prefixCls: 'cook-wing-blank',
    size: 'lg',
  };

  render() {
    const { prefixCls, size, className, children, style } = this.props;
    const wrapCls = classnames(prefixCls, `${prefixCls}-${size}`, className);

    return (
      <div className={wrapCls} style={style}>
        {children}
      </div>
    );
  }
}
