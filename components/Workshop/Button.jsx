// Modules
import classnames from 'classnames'

// TODO => Button (primary and warning) sont des booleans
const Button = ({ primary, warning }) => {
    const classes = classnames("rounded border border-black p-2 hover:bg-black hover:text-white tracking-wide", {
        "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white": primary,
        "border-red-500 text-red-500 hover:bg-red-500 hover:text-white": warning
    })

    return <button className={classes}>Button</button>
}

export default Button
