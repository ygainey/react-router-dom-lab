import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const MailboxForm = ({addMailBox}) => {
  
  const mailBoxTemplate = {
    _id: 0,
    boxSize: '',
    boxHolder: '',
  }

  const [formData, setFormData] = useState(mailBoxTemplate);

  const handleSubmit = (event) => {
    event.preventDefault()
    addMailBox(formData)
    setFormData(mailBoxTemplate)
  }

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <>
      <h2></h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxHolder">Name</label>
        <input 
          type="text" 
          id="boxHolder"
          name="boxHolder"
          value={formData.boxHolder}
          onChange={handleChange}
        />

        <label htmlFor="boxSize">Box Size</label>
        <input 
          type="text" 
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        
        />

        <button type="submit">Submit</button>
      </form>
    </>
  )


};
  
  export default MailboxForm;
  