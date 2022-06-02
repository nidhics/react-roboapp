const ScrollView = (props) => {
//props.childern is inbuilt in react with parent, containing cardList
    return (
        <div style={{overflow:"scroll", border:"5px solid black", height:"800px"}}>
            {props.children}
        </div>
    )

}

export default ScrollView