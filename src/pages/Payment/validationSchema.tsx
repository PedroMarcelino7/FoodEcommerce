import * as yup from 'yup'

import { isValidPhone, isValidCPF, isValidCNPJ } from '@brazilian-utils/brazilian-utils'

export const schema = yup
    .object({
        // SECTION 1
        fullName: yup
            .string()
            .required('Nome é obrigatório.')
            .min(3, 'Nome muito curto.')
            .matches(/(\w.+\s).+/gi, 'Nome está incompleto.'),
        email: yup
            .string()
            .required('E-mail é obrigatório.')
            .email('E-mail inválido.'),
        mobile: yup
            .string()
            .required('Número de telefone é obrigatório.')
            .transform((value) => value.replace(/[^\d]/g, ''))
            .test('validateMobile', 'Número de telefone inválido.', (value => isValidPhone(value))),
        document: yup
            .string()
            .required('CPF/CNPJ é obrigatório.')
            .transform((value) => value.replace(/[^\d]/g, ''))
            .test('validateDocument', 'CPF/CNPJ inválido.', (value => isValidCPF(value) || isValidCNPJ(value))),

        // SECTION 2
        zipCode: yup
            .string()
            .required('CEP é obrigatório.')
            .transform((value) => value.replace(/[^\d]+/g, '')),
        street: yup
            .string()
            .required('Endereço é obrigatório.'),
        number: yup
            .string()
            .required('Número da residência é obrigatório.'),
        complement: yup
            .string(),
        neighborhood: yup
            .string()
            .required('Bairro é obrigatório.'),
        city: yup
            .string()
            .required('Cidade é obrigatória.'),
        state: yup
            .string()
            .required('Estado é obrigatório.'),
    })
    .required()

export type FieldValues = yup.InferType<typeof schema>