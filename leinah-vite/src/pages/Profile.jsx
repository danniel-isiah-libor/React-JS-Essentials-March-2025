import CoverPhoto from '../Components/Profile/CoverPhoto.jsx'
import UserDetails from '../Components/Profile/UserDetails.jsx'
import UserFeed from '../Components/Profile/UserFeed.jsx'

export default function Profile() {
    return (
        <>
            <CoverPhoto />
            <div className='mx-auto max-w-screen-lg'>
                <UserDetails />
                <UserFeed />
            </div>

        </>
    )
}
