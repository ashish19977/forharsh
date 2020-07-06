import React from 'react'
import '../App.css'

const Header = props => {
  return <div className='header-div'>{props.title}</div>
}

export default Header

// export default class Header extends React.Component {
//   render() {
//     return <div className='header-div'>{this.props.title}</div>
//   }
// }
