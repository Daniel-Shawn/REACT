import Proptypes from 'prop-types'


export function UserDetails(props){
    let user = props.user
    return (
        <>
            <div className='userProfile'>
            <p><span>ID: </span>{user.id}</p>
            <p><span>Name: </span>{user.name}</p>
            <p><span>Email: </span>{user.email}</p>
            </div>
        </>
    )
}

UserDetails.prototype = {
    user: {
        id: Proptypes.number.isRequired,
        name: Proptypes.string.isRequired,
        email: Proptypes.string.isRequired
    }
}




