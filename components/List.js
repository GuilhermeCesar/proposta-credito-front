import Item from './Item'
import PropTypes from 'prop-types'

const List = (props)=>(
    <div>
        {props.data.map(proposta => (
            <Item key={proposta.id} data={proposta} />
        ))}
    </div>
);

List.propTypes = {
    data: PropTypes.array.isRequired
}

export default List;