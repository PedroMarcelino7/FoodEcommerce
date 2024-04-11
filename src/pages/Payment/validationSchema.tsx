import * as yup from 'yup'

import { isValidPhone, isValidCPF, isValidCNPJ } from '@brazilian-utils/brazilian-utils'

export const schema = yup
    .object({
        fullName: yup
            .string()
            .required('Nome é obrigatório')
            .min(3, 'Nome muito curto')
            .matches(/(\w.+\s).+/gi, 'Nome está incompleto'),
        email: yup
            .string()
            .required('E-mail é obrigatório')
            .email('E-mail inválido'),
        mobile: yup
            .string()
            .required('Número de telefone é obrigatório')
            .transform((value) => value.replace(/[^\d]/g, ''))
            .test('validateMobile', 'Número de telefone inválido', (value => isValidPhone(value))),
    })
    .required()

export type FieldValues = yup.InferType<typeof schema>