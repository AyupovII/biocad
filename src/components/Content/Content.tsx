
import { Button, TextField } from '@mui/material'
import style from './Content.module.scss'
import { useState } from 'react';
import Result from '../Result/Result';

const allowedPattern = /^[ARNDCEQGHILKMFPSTWYV-]*$/;

const Content: React.FC = () => {
  const [value, setValue] = useState({ first: "", second: "" });
  const [textError, setTextError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);
  const handleChange = (type: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setIsValid(false);
    const input = event.target.value.toUpperCase();
    if (allowedPattern.test(input)) {
      setValue((oldValue) => { return { ...oldValue, [type]: input } });
    }
  }
  console.log(value)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.first.length !== value.second.length) {
      setTextError("Длина аминокислот должна быть одинаковой");
      setIsValid(false);
    }
    else {
      setTextError(null);
      setIsValid(true);
    }
  }

  return (
    <div className={style.content}>
      <form className={style.form} onSubmit={onSubmit}>
        <div className={style.fieldWrapper}>
          <TextField
            className={style.field}
            label="Аминокислоты №1"
            variant="standard"
            value={value.first}
            slotProps={{
              input: {
                required: true,
              },
            }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("first", e)}
          />
          <p>length = {value.first.length}</p>
        </div>

        <div className={style.fieldWrapper}>
          <TextField
            className={style.field}
            label="Аминокислоты №2"
            variant="standard"
            value={value.second}
            slotProps={{
              input: {
                required: true,
              },
            }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("second", e)}
          />
          <p>length = {value.second.length}</p>
        </div>
        <Button variant="contained" type='submit'>Сравнить</Button>
        <div>{textError && <span className={style.error}>{textError}</span>}</div>
      </form>
      {isValid && <Result first={value.first} second={value.second} />}
    </div>
  )
}

export default Content