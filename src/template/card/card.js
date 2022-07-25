import PropTypes from "prop-types"

export const Card = ({ width, height, background, rounded, children, className }) => {
  return (
    <div className={`card relative box-border rounded-lg h-[${height}px] max-w-[${width}px] rounded-[${rounded}px] bg-${background} ${className}`}>
      {children}
    </div>
  )
}

Card.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  background: PropTypes.string,
  rounded: PropTypes.number,
  className: PropTypes.string,
  click: PropTypes.any,
  children: PropTypes.any
}