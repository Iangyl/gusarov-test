import { Tip } from '../../assets';
import { fontSize } from '../../styles';
import { ILabelContainer } from './LabelContainer.types';
import classNames from 'classnames';

const LabelContainer = ({
  id,
  tip,
  label,
  required,
  children,
  size = 'm',
  labelPosition = 'above',
}: ILabelContainer) => {
  return (
    <div
      className={classNames(
        labelPosition === 'inline-left'
          ? 'flex justify-between items-center'
          : ''
      )}
    >
      <div className={classNames('flex items-center gap-1')}>
        <label
          className={classNames('font-medium', fontSize[size])}
          htmlFor={id}
        >
          {label}
        </label>
        {tip && <Tip />}
      </div>
      {children}
    </div>
  );
};

export default LabelContainer;
