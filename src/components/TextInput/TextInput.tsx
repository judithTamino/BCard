import { FunctionComponent } from 'react';
import { useField } from 'formik';

interface TextInputProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
}

const TextInput: FunctionComponent<TextInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name} className='form-label'>
        {label}
      </label>
      <input className='form-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <p className='form-error'>{meta.error}</p>
      ) : null}
    </>
  );
};

export default TextInput;
