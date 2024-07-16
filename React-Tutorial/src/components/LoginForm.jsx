import '../App.css'


export function LoginForm() {
    return (
        <>
        <p>Login to acess your account and more..</p>
        <form onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const username = formData.get('emailLogin');
            const password = formData.get('passwordLogin');

        }}>
            
            <input type="email" name="emailLogin" placeholder='Your email'/>
            <input type="password" name="passwordLogin" placeholder='Your password'/>
            <button type="submit" name="loginBtn">Login Now</button>

        </form>
        </>
    )
}









