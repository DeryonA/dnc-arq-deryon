import './Button.css'
import whiteArrow from '../../assets/white-arrow.svg'

function Button( { arrow, buttonStyle, loading, children, ...props}) {
    return (

        <button className={`button ${buttonStyle}`} {...props}>
            {children} {arrow && <img src={whiteArrow}/>}
        </button>
    )
}

export default Button