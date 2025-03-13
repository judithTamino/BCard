import { FunctionComponent } from 'react';
import { useField } from 'formik';
import './TextInput.css';

interface TextInputProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required:boolean;
}

const TextInput: FunctionComponent<TextInputProps> = ({ label, required, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name} className='form-label'>
        {label}
      </label>
      <input className={required ? 'input input-required' : 'input'} {...field} {...props} />
      {meta.touched && meta.error ? (
        <p className='form-error'>{meta.error}</p>
      ) : null}
    </>
  );
};

export default TextInput;
