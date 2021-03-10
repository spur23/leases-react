import { InputTypes } from '../../App';

interface ConfigObject {
  label: string;
  type: InputTypes;
  id: string;
  name: string;
  value: string | number;
  onChange: (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  options?: { text: string; value: string }[];
  show?: boolean;
  required?: boolean;
}

interface InputProps {
  config: ConfigObject;
}

const Input = (props: InputProps) => {
  const {
    label,
    type,
    name,
    id,
    value,
    onChange,
    options,
    show,
    required
  } = props.config;

  if (show === undefined || show) {
    if (type === InputTypes.Select) {
      return (
        <>
          <label htmlFor={id}>{label}</label>
          <select name={name} id={id} value={value} onChange={onChange}>
            {options.map((option, index) => (
              <option key={`${option}-${index}`} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </>
      );
    }
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          required={required}
        />
      </>
    );
  } else {
    return null;
  }
};

export default Input;
