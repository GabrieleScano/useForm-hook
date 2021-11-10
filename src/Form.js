import { Form, Button } from 'semantic-ui-react';

export default function FormValidation() {
    return (
        <Form>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' type="text" />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' type="text" />
            </Form.Field>
            <Form.Field>
                <label>Email</label>
                <input placeholder='Email' type="email" />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='Password' type="password" />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}