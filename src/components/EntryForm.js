import './EntryForm.css';
import { Form } from "react-router-dom";

function EntryForm() {
    return (
        <Form method="post" action="/thankyou">
            <label>Your Name</label>
            <input type="text" name="name" />

            <label>Your Life Story</label>
            <textarea type="text" name="lifestory" />

            <button type="submit">SUBMIT</button>
    </Form>
  );
}

export default EntryForm;
