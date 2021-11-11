// Write your code here
import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLoggedin: false}

  onClickEvent = () => {
    this.setState(prevState => ({isLoggedin: !prevState.isLoggedin}))
  }

  render() {
    const {isLoggedin} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <Message isLoggedin={isLoggedin} />
          {isLoggedin ? (
            <Logout logout={this.onClickEvent} />
          ) : (
            <Login login={this.onClickEvent} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
