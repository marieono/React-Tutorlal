import React from 'react';
import { List } from './List';
import { Form } from './From';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: 'list' }
  }

  render() {
    const { tab } = this.state;
    return (
      <div>
        <header>
          <ul>
            <il onClick={() => this.setState({ tab: 'list' })}>リスト</il>
            <il onClick={() => this.setState({ tab: 'form' })}>フォーム</il>
          </ul>
        </header>
        <hr />
        {
          tab === 'list' ? <List /> : <Form />
        }
      </div>
    )
  }
}

export default App;