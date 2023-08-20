// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqsItem, isChange, updateBtn} = props
  const {id, questionText, answerText} = faqsItem
  const statusAlt = isChange ? 'plus' : 'minus'
  const statusChange = isChange
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
  const onChangeBtn = () => {
    updateBtn(id)
  }
  return (
    <li className="list-container">
      <div className="main-text-con">
        <p className="questionText">{questionText}</p>
        <button type="button" className="btn" onClick={onChangeBtn}>
          <img src={statusChange} className="plus-minus-img" alt={statusAlt} />
        </button>
      </div>
      <div className="answer-text-con">
        <hr className="separator" />
        <p className="answerText">{answerText}</p>
      </div>
    </li>
  )
}

export default FaqItem
