import { Tip } from '../../assets';
import { Tooltip } from '../../components';
import { useTooltipPosition } from '../../hooks';
import { fontSize } from '../../styles';
import { TooltipWrapper } from '../TooltipWrapper';
import { ILabelContainer } from './LabelContainer.types';
import classNames from 'classnames';

const LabelContainer = ({
  id,
  tip,
  hint,
  label,
  error,
  required,
  disabled,
  children,
  size = 'm',
  labelPosition = 'above',
}: ILabelContainer) => {
  const { tooltipPosition, isTooltipVisible, showTooltip, hideTooltip } =
    useTooltipPosition();
  return (
    <div
      className={classNames(
        'label-container',
        labelPosition === 'inline-left'
          ? 'flex justify-between items-center'
          : ''
      )}
    >
      <div className={classNames('flex items-center gap-1')}>
        <label
          className={classNames(
            'font-medium',
            fontSize[size],
            !disabled ? 'text-midnight-ink' : 'text-smokey-slate',
            'break-words whitespace-pre-wrap'
          )}
          htmlFor={id}
        >
          {label}
          {required && <span className="text-sunset-ember"> *</span>}
        </label>
        {tip && (
          <div
            onMouseEnter={(event) =>
              showTooltip(event as unknown as MouseEvent)
            }
            onMouseMove={(event) => showTooltip(event as unknown as MouseEvent)}
            onMouseLeave={hideTooltip}
          >
            <Tip className="cursor-pointer" />
          </div>
        )}
      </div>
      {children}
      {(hint || error) && (
        <p
          className={classNames(
            !disabled ? 'text-moonlit-charcoal' : 'text-snowflake-silk',
            error && 'text-sunset-ember',
            'font_size_xs mt-1 break-words whitespace-pre-wrap'
          )}
        >
          {error || hint}
        </p>
      )}
      {isTooltipVisible && tip && (
        <Tooltip
          tip={tip}
          style={{
            position: 'fixed',
            top: tooltipPosition.y - 50,
            left: tooltipPosition.x - 55,
            zIndex: 1000,
          }}
        />
      )}
    </div>
  );
};

export default LabelContainer;
