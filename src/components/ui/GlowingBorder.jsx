import React from 'react';

const GlowingBorder = ({
    children,
    className = "",
    innerClassName = "bg-white dark:bg-gray-900",
    roundedClass = "rounded-xl",
    gradient = "bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#10b981_50%,#00000000_100%)]",
    duration = "3s"
}) => {
    return (
        <div className={`relative ${roundedClass} overflow-hidden p-[1px] ${className}`}>
            <div className={`absolute inset-[-100%] animate-[spin_3s_linear_infinite] ${gradient} will-change-transform`} />
            <div className={`relative h-full ${roundedClass} overflow-hidden ${innerClassName}`}>
                {children}
            </div>
        </div>
    );
};

export default GlowingBorder;
