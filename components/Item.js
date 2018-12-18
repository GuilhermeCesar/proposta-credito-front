import PropTypes from 'prop-types'

const Item = (props) => {
    const { data } = props
    const { customer } = data
    return (
        <div>
            <div>{customer.fullName}</div>
            <div>{customer.socialId}</div>
            <div>{data.status}</div>
        </div>
    )
} 
   

Item.propTypes = {
    data: PropTypes.object.isRequired
}

export default Item


