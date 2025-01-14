import {
    InputFieldFF,
    ReactFinalForm,
    composeValidators,
    hasValue,
    string,
} from '@dhis2/ui'
import React from 'react'
import i18n from '../../locales'
import { dataTest } from '../../shared'

const { Field } = ReactFinalForm

export const FieldHost = () => (
    <Field
        required
        dataTest={dataTest('smsgateway-fieldhost')}
        name="host"
        label={i18n.t('Host')}
        component={InputFieldFF}
        validate={composeValidators(string, hasValue)}
    />
)
