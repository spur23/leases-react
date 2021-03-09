import { InputTypes } from '../../App';
import { InputStyled } from './StyledInput';
import { LabelStyled } from './StyledLabel';

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
    show
  } = props.config;

  if (show === undefined || show) {
    if (type === InputTypes.Select) {
      return (
        <InputStyled>
          <LabelStyled>{label}</LabelStyled>
          <select name={name} id={id} value={value} onChange={onChange}>
            {options.map((option, index) => (
              <option key={`${option}-${index}`} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </InputStyled>
      );
    }
    return (
      <InputStyled>
        <LabelStyled>{label}</LabelStyled>
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        />
      </InputStyled>
    );
  } else {
    return null;
  }
};

export default Input;
