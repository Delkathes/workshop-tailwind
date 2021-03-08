// Constants
import { external } from 'components/ExternalLink'
import { user, href, avatar } from 'constants/github'

// Component
import Avatar from 'components/Workshop/Avatar'

// TODO => UserLink
const UserLink = () => (
    <a href={href} {...external} className="flex items-center hover:text-blue-500">
        <Avatar src={avatar} />
        <div className="ml-2">{user}</div>
    </a>
)

export default UserLink
