import './Spinner.css';

import { FunctionComponent } from 'react';

interface SpinnerProps {}

const Spinner: FunctionComponent<SpinnerProps> = () => {
  return <div className='spinner'></div>;
};

export default Spinner;
