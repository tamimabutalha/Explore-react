export default function Friend(friend){
    const {name, email} = friend;
    return (
        <div className="box">
            <h3>name:{name}</h3>
            <p>email:{email} </p>
        </div>
    )
}
    
    
    