import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const Basic = () => (
<div>
<h1>Sign Up</h1>
<Formik
initialValues={{
Email: '',
Password: '',

}}
onSubmit={async (values) => {
await new Promise((r) => setTimeout(r, 500));
alert(JSON.stringify(values, null, 2));
}}
>
<Form>

<label htmlFor="Password">Last Name</label>
<Field id="Password" name="Password" placeholder="Field Required" />


<Field
id="email"
name="email"
placeholder="Field Required"
type="email"
/>
<button type="submit">Submit</button>
</Form>
</Formik>
</div>
);

ReactDOM.render(<Basic />, document.getElementById('root'));
