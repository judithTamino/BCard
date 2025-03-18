import { FunctionComponent } from 'react';
import './TextareaInput.css';
import { useField } from 'formik';

interface TextareaInputProps {
  label: string;
  name: string;
  required: boolean;
}

const TextareaInput: FunctionComponent<TextareaInputProps> = ({
  label,
  name,
  required,
}) => {
  const [field, meta] = useField(name);

  return (
    <>
      <label htmlFor={name} className='form-label'>
        {label}
      </label>
      <textarea
        {...field}
        id={name}
        rows={4}
        cols={50}
        className={required ? 'input input-required' : 'input'}
      />
      {meta.touched && meta.error ? (
        <p className='form-error'>{meta.error}</p>
      ) : null}
    </>
  );
};

export default TextareaInput;
