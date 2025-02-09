const Input = ({
  name,
  type,
  value,
  tabIndex,
  placeholder,
  required = false,
  autoComplete = false,
  onChange,
}) => (
  <input
    id={name}
    name={name}
    type={type}
    value={value}
    tabIndex={tabIndex}
    required={required}
    placeholder={placeholder}
    autoComplete={autoComplete ? "on" : "off"}
    onChange={onChange}
    className="input"
  />
);

export default Input;
