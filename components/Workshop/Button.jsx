// Modules
import classnames from 'classnames'

// classnames("unchanging style", {
//     "my-dyn-style": condition,
//     "my-other-dyn-style": !condition
// })

// TODO => Button (primary and warning)
const Button = ({ primary, warning }) => (
    <button
        className={classnames(
            'tracking-wide px-2 py-1 border border-black rounded-lg hover:text-white hover:bg-black',
            {
                'text-blue-400 border-blue-400 hover:bg-blue-400': primary,
                'text-red-400 border-red-400 hover:bg-red-400': warning
            }
        )}
    >
        Button
    </button>
)

export default Button
