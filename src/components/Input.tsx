import { InputTypes } from '../App';

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
}

interface InputProps {
  config: ConfigObject;
}

const Input = (props: InputProps) => {
  const { label, type, name, id, value, onChange, options } = props.config;

  if (type === InputTypes.Select) {
    return (
      <>
        <label>{label}</label>
        <select name={name} id={id} value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.text}</option>
          ))}
        </select>
      </>
    );
  }
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
