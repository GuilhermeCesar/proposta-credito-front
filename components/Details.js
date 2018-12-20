import PropTypes from 'prop-types';

const Details = (props) => (
    <div>
        { props.data
            ? <h1>Há!! ${props.data.id}</h1>
            : <h4>Clique em um item para visualizar</h4>
        }
    </div>

)

Details.propTypes = {
    data: PropTypes.object,
};

export default Details;