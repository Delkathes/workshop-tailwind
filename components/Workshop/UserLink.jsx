// Constants
import { external } from 'components/ExternalLink'
import { user, href, avatar } from 'constants/github'

// Component
import Avatar from 'components/Workshop/Avatar'

// TODO => UserLink
const UserLink = () => (
    <a href={href} {...external}>
        <Avatar src={avatar} />
        <div>{user}</div>
    </a>
)

export default UserLink
