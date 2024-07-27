import { Link } from "react-router-dom";

const MailboxList = ({mailBoxes}) => {
    return (
        <>
        <h1>Mail Boxes</h1>
        <ul>
        {mailBoxes.map((mailBox) => {
            return (
                <li key={mailBox._id}>
                    <Link to={`/mailboxes/${mailBox._id}`}>
                        {mailBox.boxHolder}'s Mail Box
                    </Link>
                </li>
            )
        })}
        </ul>
        </>
    )
  };
  
  export default MailboxList;
  