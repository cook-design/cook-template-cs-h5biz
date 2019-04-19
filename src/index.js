import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List } from 'kb-cook';
import './style';

const prefix = 'mo-template-wap';

class TemplateWap extends Component {
  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    title: '',
  }

  renderHeader = () => this.props.title;

  render() {
    const { className, ...others } = this.props;
    const cls = classNames({
      [`${prefix}`]: true,
      [className]: className,
    });

    return (
      <div {...others} className={cls}>
        <List renderHeader={this.renderHeader}>
          <List.Item>list</List.Item>
          <List.Item>list</List.Item>
        </List>
      </div>
    );
  }
}

export default TemplateWap;
