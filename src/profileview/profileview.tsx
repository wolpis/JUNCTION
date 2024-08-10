
import { Fragment } from "react/jsx-runtime"
import { HeaderBar } from "../mainpage/mainpage_compo"
import { ProfileBanner } from "./profileview_compo"
import { useParams } from 'react-router-dom'

const Profile = () => {
    const { userId } = useParams()
    return (
        <Fragment>
            <HeaderBar />
            <ProfileBanner userId={userId} />
        </Fragment>
    )
}

export default Profile;