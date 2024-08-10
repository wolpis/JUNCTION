import style from "./profileview.module.css"

export const ProfileBanner = ({ userId }: { userId: string | undefined }) => {
    return (
        <div className={style.banner}>
            <div className={style.profile_banner} />
            <img src="/pfp.png" className={style.profile_image} />
            <div className={style.profile_name}>
                <span>CodingJoa</span>
                <div className={style.tier}><img src="/Diamond.png" /><p>diamond</p></div>
            </div>
            <p>Coding Joa. Front-end Developer/Interested in Artificial Intelligence. Self intro is okay for Two Line.</p>
        </div>
    )
}
