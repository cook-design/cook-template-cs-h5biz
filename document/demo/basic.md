---
order: 1
title: 基础示例
demoType: ""
demoUrl: ""
---

基础示例

```jsx
import WingBlank from "{{ name }}";
import PropTypes from 'prop-types';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

PlaceHolder.propTypes = {
  className: PropTypes.string,
};

const Demo = () => (
  <div>
    <WingBlank><PlaceHolder /></WingBlank>
    <WingBlank size="md"><PlaceHolder /></WingBlank>
    <WingBlank size="sm"><PlaceHolder /></WingBlank>
  </div>
);

ReactDOM.render(<Demo />, mountNode);
```

```css
.cook-wing-blank {
  margin-bottom: 0.2rem;
}

.placeholder {
  background-color: #ebebef;
  color: #bbb;
  text-align: center;
  height: 0.6rem;
  line-height: 0.6rem;
  width: 100%;
  font-size: 0.28rem;
}
```
