// TodoInput

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export interface TodoInputProps {
  type:
    | 'text'
    | 'textarea'
    | 'date'
    | 'select'
    | 'number'
    | 'checkbox'
    | 'radio'
    | 'file'
    | 'color'
    | 'email'
    | 'password'
    | 'search'
    | 'tel'
    | 'url'
    | 'week'
    | 'month'
    | 'time'
    | 'datetime-local'
    | 'range'
    | 'image'
    | 'timeStamp';
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
  step?: number;
  pattern?: string;
  debounce?: number;
  value?: string | number | boolean | Date;
  onChange?: (value: string | number | boolean | Date) => void;
  validation?: (value: string | number | boolean | Date) => boolean;
  error?: string;
}

const TodoInput({
  value,
  onChange,
  type,
  label,
  placeholder,
  required,
  disabled,
  readOnly,
  maxLength,
  minLength,
  max,
  min,
  step,
  pattern,
  debounce,
}: TodoInputProps) {
  const [inputValue, setInputValue] = useState(value);
  return <>

  </>;
}

e
