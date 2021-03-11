// Modules
import classnames from 'classnames'

// classnames("unchanging style", {
//     "my-dyn-style": condition,
//     "my-other-dyn-style": !condition
// })

// TODO => Button (primary and warning)
const Button = ({ primary, warning }) => (
    <button className={classnames('lol')}>Button</button>
)

export default Button
