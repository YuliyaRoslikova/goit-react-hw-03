import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 symbols long')
    .max(50, 'Too Long!')
    .required('This is a required field'),
  number: Yup.string()
    .min(3, 'Name must be at least 3 symbols long')
    .max(50, 'Too Long!')
    .required('This is a required field'),
});

const ContactForm = ({ onAddContact }) => {
  const nameField = useId();
  const numberField = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik initialValues={initialValues} validationSchema={userSchema} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label>Name</label>
            <Field type="text" name="name" id={nameField} />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <div className={css.formGroup}>
            <label>Number</label>
            <Field type="phone" name="number" id={numberField} />
            <ErrorMessage className={css.error} name="number" component="span" />
          </div>
          <button className={css.addContact} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
