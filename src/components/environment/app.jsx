import React from 'react';
import Button from '../atoms/button';

export default class App extends React.Component {
  render() {
    return (
        <div>
          <h1>Hello, todos!!</h1>
          <Button value="click me" > </Button>
        </div>
    );
  }
}