import {useState} from 'react';

const useForm = (iniTialValue: any) => {
  const [form, setForm] = useState(iniTialValue);

  return [
    form,
    (formType: any, formValue: string | number) => {
      if (formType === 'reset') {
        return setForm(iniTialValue);
      }
      return setForm({...form, [formType]: formValue});
    },
  ];
};

export default useForm;
