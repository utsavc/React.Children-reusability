import classNames from "classnames"

export default function Button({children,size,variant,className,...rest}){
    const variantClass=variant && `btn-${variant}`
    const allClasses=classNames(size,className,variantClass)

    return(
        <>
        <button className={allClasses} {...rest}>{children}</button>
        
        </>
    )
}