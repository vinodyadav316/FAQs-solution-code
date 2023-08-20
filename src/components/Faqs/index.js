// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {isClicked: true}

  isChange = () => {
    const {isClicked} = this.state
    this.setState({isClicked: !isClicked})
  }

  updateBtn = () => {
    const {isClicked} = this.state
    this.setState({isClicked: !isClicked})
  }

  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="faqs-heading">FAQs</h1>
          <ul className="un-ordered-con">
            {faqsList.map(eachItem => (
              <FaqItem
                faqsItem={eachItem}
                key={eachItem.id}
                isChange={this.isChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
