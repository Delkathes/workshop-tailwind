// Constants
import { external } from 'components/ExternalLink'
import { user, href, avatar } from 'constants/github'

// Component
import Avatar from 'components/Workshop/Avatar'

// TODO => UserLink
const UserLink = () => (
    <a className="flex items-center hover:text-blue-400" href={href} {...external}>
        <Avatar src={avatar} />
        <div className="ml-2">{user}</div>
    </a>
)

export default UserLink
