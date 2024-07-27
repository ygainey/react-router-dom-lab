import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailBoxes }) => {
  const { mailId } = useParams(); 
  const singleMailBox = mailBoxes.find((mailBox) => mailBox._id === parseInt(mailId));
  return (
    <>     
          <h2>Mailbox {singleMailBox._id}</h2>
          <dl>
            <dt>Owner:</dt>
            <dd>{singleMailBox.boxHolder}</dd>
            <dt>Size:</dt>
            <dd>{singleMailBox.boxSize}</dd>
          </dl>
       
    </>
  );
};

export default MailboxDetails;
