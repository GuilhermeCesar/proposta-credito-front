export default (props)=>(
    {props.data.map(proposta => (
        <Item data={proposta}>
    ))}
)