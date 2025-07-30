const ChildA1 =(props) => {
    console.log(props.Children);

    return (
        <div>
        <h1>Children components</h1>
        {props.Children}
        </div>
    )

}
export default ChildA1;