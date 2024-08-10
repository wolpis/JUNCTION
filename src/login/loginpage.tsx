import styles from './loginpage.module.css'



const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.login_div}>
                <div style={{backgroundColor: "#5454CC", color:"white", padding: "14px", borderRadius:"0.5em", cursor:"pointer"}}><b>로그인 하기</b></div>
            </div>
        </div>
        
    )
}

export default LoginPage;