export default function Button({
                                   onClick,
                                   variant = 'primary',
                                   size = 'medium',
                                   disabled = false,
                                   type = 'button',
                                   className = '',
                               }) {
    const variants = {

    };

    const sizes = {

    };

    const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`;

    return (
        <button>
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={buttonClasses}
        </button>
    )
}