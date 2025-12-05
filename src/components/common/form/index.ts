import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import { Field } from '@/components/ui/field';
import { Label } from '@/components/ui/label';
import { FormButton } from './form-button';
import { FormErrorMessage } from './form-error-message';
import { FormInput } from './form-input';
import { FormInputMoney } from './form-input-money';
import FormInputNumber from './form-input-number';

export const Form = {
  Provider: FormProvider,
  Field,
  Label,
  Input: FormInput,
  InputMoney: FormInputMoney,
  InputNumber: FormInputNumber,
  ErrorMessage: FormErrorMessage,
  Button: FormButton,
  useForm,
  useFormContext,
  zodResolver,
};
