/* import className from 'classnames';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outlined,
    rounded,
    ...rest

}) {
    const classes = className(rest.className, 'flex items-center px-3 py-1.5 border',{
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-500 bg-gray-500 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-500 bg-yellow-500 text-white': warning,
        'border-red-500 bg-red-500 text-black': danger,
        'rounded-full': rounded,
        'bg-white': outlined,
        'text-blue-500': outlined && primary,
        'text-gray-900': outlined && secondary,
        'text-green-500': outlined && success,
        'text-yellow-400': outlined && warning,
        'text-red-500': outlined && danger,
    });
    return <button {...rest} className={classes}> {children}</button>
}

Button.propTypes = {
    checkVariationValue: (primary, secondary, success, warning, danger) => {
       const count = Number(!!primary)
       + Number (!!secondary )
       + Number (!!success)
       + Number (!!warning)
       + Number (!!danger)

       if (count> 1) {
        return new Error('Only one of primary, secondary, success, danger ,warning can be true')
       }
    },
}

export default Button; */

import className from 'classnames'

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outlined,
    ...rest
}) {
        const classes = className(rest.className, 'flex items-center px-3 py-1.5 border',{
            //'border-blue-500 bg-blue-500 text-white': primary,
            'border-gray-500 bg-gray-500 text-white': secondary,
            'border-green-500 bg-green-500 text-white': success,
            'border-yellow-500 bg-yellow-500 text-white': warning,
            'border-red-500 bg-red-500 text-black': danger,
            'border-blue-400 bg-blue-300 text-white' : primary,
            'rounded-full': rounded,
            'bg-white': outlined,
            'text-blue-500': outlined && primary,
            'text-gray-900': outlined && secondary,
            'text-green-500': outlined && success,
            'text-yellow-400': outlined && warning,
            'text-red-500': outlined && danger,
        });

    return (
        <button {...rest} className={classes} > {children}</button>
    )
}

export default Button;