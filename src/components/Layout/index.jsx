
export default ({name, description, children, className}) => {

    return <section  className={className}>
        <h2 className={`${className}__title`}>{name}</h2>
        {description && <p className={`${className}__description`}>{description}</p>}
        {children}
    </section>
}