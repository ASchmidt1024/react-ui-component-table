import React, { Component } from 'react';
import { render } from 'react-dom';
import { TableFromModel } from './TableBuilder';
import './style.scss';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {

  render() {
    return (
      <TableFromModel
        model={{
          head: [{ first: 'Head', second: '#1' }],
          body: [
            {
              'this-is-the-cell-key': <p>Curabitur gravida</p>,
              'this-is-another-key': <p>arcu</p>
            },
            {
              'this-is-the-cell-key': <p>Suspendisse potenti </p>,
              'this-is-another-key': <p>nullam</p>
            },
            {
              'this-is-the-cell-key': (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Massa tempor nec feugiat nisl pretium.
                </p>
              ),
              'this-is-another-key': <p>dolor</p>
            }
          ],
          foot: [{ first: 'Foot', second: '#1' }]
        }}
      />
    );
  }
}

render(<App />, document.getElementById('root'));
