import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div className="display">
      <span>
        {result}
      </span>
    </div>
  );
};

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
