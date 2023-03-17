import './PeForm.scss'

const PEForm = ({formInfo, placeholderText}) => {
  return (
    <div className="Create__Form">
       <form>
        <label className="form__info">{formInfo}</label>
        <input type="text" 
          className="inputBar"
          required
          placeholder={placeholderText}
        />
       </form>
    </div>
  )
}

export default PEForm
