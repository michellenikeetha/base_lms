import React from "react";
import PropTypes from "prop-types";

const shapes = {
    square: "rounded-[0px]",
    round: "rounded-lg"
};

const variants = {
    filled: "bg-[#f8fafc] text-[#334155]",
    blue_gray_900: "bg-[#2c2c2c] text-[#ffffff]",
    white_A700: "bg-[#ffffff] text-[#12121260]",
}

const sizes = {
    sm: "h-[52px] px-4 text-[14px]",
    x1: "h-[86px] px-6 text-[14px]",
    lg: "h-[72px] px-6 text-[14px]",
    md: "h-[58px] px-4 text-[16px]",
    xs: "h-[48px] px-3.5 text-[16px]",
};

const Input = React.forwardRef (
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type = "text",
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "xs",
            color = "",
            ...restProps
        },
        ref,
    ) => {
      return (
        <label
            className={`${className} flex items-center justify-center cursor-text ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
            >
                {!!label && label}
                {!!prefix && prefix}
                <input
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    onChange={onChange}
                    ref={ref}
                    {...restProps}
                />
                {!!suffix && suffix}
            </label>
      );
    },
);

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    onChange: PropTypes.func,
    shape: PropTypes.oneOf(["square", "round"]),
    variant: PropTypes.oneOf(["fill"]),
    size: PropTypes.oneOf(["sm", "x1", "lg", "md", "xs"]),
    color: PropTypes.oneOf(["gray_50", "blue_gray_900", "white_A700"]),
};

export { Input };