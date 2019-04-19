---
order: 1
title: demo1
demoType: ''
demoUrl: ''
---

移动端模板

````jsx
import TemplateWap from '{{ name }}';

class Demo extends React.Component {
  componentDidMount() {
    console.log('TemplateWap did mount');
  }

  render() {
    return (
      <TemplateWap title="test" />
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
body {
  background: #fff;
}
````
