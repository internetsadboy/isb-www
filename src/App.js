import React from 'react'
import {render} from 'react-dom'
import {isMobile} from 'react-device-detect'

let Styles = {
  container: {
    textAlign: 'center',
    height: '100vh',
    backgroundImage: "url('https://media.giphy.com/media/1CNsm9ZkHF0m4/giphy.gif')",
  },
  section: {
    alignItems: 'center',
    backgroundColor: 'white',
    display: 'block',
    height: 400,
    justifyContent: 'center',
    width: '100%',
  },
  p: {
    fontSize: 50,
    fontFamily: 'monospace',
    margin: 0,
  },
  span1: {
    color: 'black',
    fontFamily: 'georgia',
    fontSize: 20,
    fontWeight: 'bold',
  },
  span2: {
    backgroundColor: 'magenta',
    color: 'lime',
    fontFamily: 'monospace',
    fontSize: 14,
    fontWeight: 'bold',
  },
  center: {
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    WebkitTransform: 'translate(-50%,-50%)',
  },

}

const Main = props => {
  return (
    <div id="container" style={Styles.container}>
      <section style={Object.assign({}, Styles.section, Styles.center)}>
        <p style={Styles.p}>coming soon</p>
        <p>
          <span style={Styles.span1}>my </span>
          <span style={Styles.span2}>site</span>
        </p>
        <img style={Styles.img} src="https://media.giphy.com/media/bngwmeKe4yuvm/giphy.gif" />
      </section>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: null,
    }
  }

  componentDidMount() {
    this.setState({isMobile: isMobile})
  }

  render() {
    if (this.state.isMobile) {
      Styles.img = {width: '100%',};
    } else {
      Styles.img = {width: 350,};
    }

    return <Main styles={Styles}/>
  }
}

render(
  <App />,
  document.getElementById('root')
)
