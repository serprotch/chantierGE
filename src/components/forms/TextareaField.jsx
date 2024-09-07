// components/TextareaField.js
import { useState } from 'react';
import '../../sass/Field.scss'
const TextareaField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  className
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);

  return (
    <div className={`form-group ${className} ${isActive || value ? 'active' : ''}`}>
      <label htmlFor={name}>{label} *</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        id={name}
        required
        className={`form-control textarea-field input-field ${isActive || value ? 'active-input' : ''}`}
      />
    </div>
  );
};

export default TextareaField;
