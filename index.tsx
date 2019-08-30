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
          head: [{ first: 'Einkommen', second: 'CHF' }],
          body: [
            {
              'this-is-the-cell-key': <p>Nettoeinkommen</p>,
              'this-is-another-key': <p>3&apos;450</p>
            },
            {
              'this-is-the-cell-key': <p>Nebeneinkommen</p>,
              'this-is-another-key': <p>234</p>
            },
            {
              'this-is-the-cell-key': (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Massa tempor nec feugiat nisl pretium.
                </p>
              ),
              'this-is-another-key': <p>234</p>
            }
          ],
          foot: [{ first: 'Footnote', second: '#1' }]
        }}
      />
    );
  }
}

render(<App />, document.getElementById('root'));
