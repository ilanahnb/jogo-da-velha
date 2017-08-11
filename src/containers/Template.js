import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'

injectTapEventPlugin()

class Template extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <header>
            <h1>Jogo da Velha</h1>
            <RaisedButton
              label={'Test Button'}
              primary={true}
              onTouchTap={()=>console.log('testing button')}
            />
          </header>
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Template
