import { SingleSelectFieldFF, ReactFinalForm } from '@dhis2/ui'
import React from 'react'
import i18n from '../../locales'
import { dataTest } from '../../shared'

const { Field } = ReactFinalForm

const options = [
    { label: 'UNKNOWN', value: 'UNKNOWN' },
    { label: 'INTERNATIONAL', value: 'INTERNATIONAL' },
    { label: 'NATIONAL', value: 'NATIONAL' },
    { label: 'NETWORK_SPECIFIC', value: 'NETWORK_SPECIFIC' },
    { label: 'SUBSCRIBER_NUMBER', value: 'SUBSCRIBER_NUMBER' },
    { label: 'ALPHANUMERIC', value: 'ALPHANUMERIC' },
    { label: 'ABBREVIATED', value: 'ABBREVIATED' },
]

export const FieldTypeOfNumber = () => (
    <Field
        required
        dataTest={dataTest('smsgateway-fieldtypeofnumber')}
        name="typeOfNumber"
        label={i18n.t('Type of number')}
        component={SingleSelectFieldFF}
        options={options}
        defaultValue={options[0]}
    />
)
