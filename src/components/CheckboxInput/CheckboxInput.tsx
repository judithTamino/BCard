import { FunctionComponent } from 'react';
import { useField } from 'formik';
import './CheckboxInput.css';

interface CheckboxInputProps {
  children: string;
  name: string;
}

const CheckboxInput: FunctionComponent<CheckboxInputProps> = ({
  children,
  ...props
}) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className='checkbox-label'>
        <input type="checkbox" {...field} {...props}  className='form-checkbox'/>
        <p>{children}</p>

      </label>
      {meta.touched && meta.error ? (
        <p className='form-error'>{meta.error}</p>
      ) : null}
    </>
  );
};

export default CheckboxInput;
