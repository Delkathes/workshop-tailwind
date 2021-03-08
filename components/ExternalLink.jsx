export const external = {
    target: '_blank',
    rel: 'external noopener noreferrer'
}

const ExternalLink = ({ link, children, ...HtmlProps }) => (
    <a href={link} {...HtmlProps} {...external}>
        {children}
        <style jsx>{`
            a {
                color: #65a;
                font-weight: 600;
            }
            a:hover {
                color: #438;
            }
        `}</style>
    </a>
)

//? EXPORTS
export default ExternalLink
