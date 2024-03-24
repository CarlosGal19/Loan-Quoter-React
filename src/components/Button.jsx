import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button
            type='button'
            className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full
                hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
            onClick={props.func}
            >{props.operator}
        </button>
    )
}

Button.propTypes = {
    operator: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired
};

export default Button;
