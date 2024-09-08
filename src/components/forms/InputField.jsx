import { useState } from 'react';
import '../../sass/Field.scss';
import { useTranslation } from 'react-i18next';
import '../../i18n'

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  className,
  pattern,
  inputMode
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState('');
  const { t, i18n } = useTranslation();

  const handleFocus = () => setIsActive(true);
  const handleBlur = () => {
    setIsActive(false);
    validateValue(value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Filtrer les caractères non numériques pour le champ "phone"
    const newValue = name === 'phone' ? value.replace(/\D/g, '') : value;
    
    onChange({ target: { name, value: newValue } }); // Passer la valeur filtrée à la fonction onChange
    validateValue(newValue);
  };

  const validateValue = (newValue) => {
    let errorMessage = '';
    let isValid = true;

    // Validation par défaut basée sur le type
    switch (name) {
      case 'name':
        if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(newValue)) {
          errorMessage = 'Veuillez entrer un prénom et un nom séparés par un espace.';
          isValid = false;
        }
        break;
      case 'phone':
        if (!/^\d{8}$/.test(newValue)) {
          errorMessage = 'Veuillez entrer un numéro de téléphone valide à 8 chiffres.';
          isValid = false;
        }
        break;
      case 'subject':
        if (newValue.trim() === '' || newValue.length < 3) {
          errorMessage = "L'objet doit comporter au moins 3 caractères.";
          isValid = false;
        }
        break;
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue)) {
          errorMessage = 'Veuillez entrer une adresse email valide.';
          isValid = false;
        }
        break;
      default:
        break;
    }
    setIsValid(isValid);
    setError(errorMessage);
  };

  return (
    <div className={`form-row  ${className} ${isActive || value ? 'active' : ''}`}>
      <label htmlFor={name}>{t(label)} *</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        id={name}
        className={`form-control input-field ${!isValid && 'is-invalid'} ${isActive || value ? 'active-input' : ''}`}
        pattern={pattern}
        inputMode={inputMode}
        required
      />
      {!isValid && <div className="invalid-feedback">{error || 'Champ invalide'}</div>}
    </div>
  );
};

export default InputField;
