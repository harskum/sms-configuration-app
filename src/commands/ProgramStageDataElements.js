import { InputFieldFF, ReactFinalForm } from '@dhis2/ui'
import { PropTypes } from '@dhis2/prop-types'
import React from 'react'

import { FIELD_COMMAND_SMS_CODES_NAME } from './fieldNames'

const { Field } = ReactFinalForm

export const ProgramStageDataElements = ({
    programStageDataElements,
    smsCodes,
}) => {
    return (
        <>
            {programStageDataElements.map(({ dataElement }) => (
                <Field
                    key={dataElement.id}
                    name={`${FIELD_COMMAND_SMS_CODES_NAME}.${dataElement.id}`}
                    label={dataElement.displayName}
                    component={InputFieldFF}
                    format={value => value?.code || null}
                    parse={code => {
                        const currentValue = smsCodes[dataElement.id]

                        const newValue = {
                            ...currentValue,
                            code,
                            dataElement,
                        }

                        return newValue
                    }}
                />
            ))}
        </>
    )
}

ProgramStageDataElements.propTypes = {
    programStageDataElements: PropTypes.arrayOf(
        PropTypes.shape({
            dataElement: PropTypes.shape({
                displayName: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
            }),
        })
    ).isRequired,
    smsCodes: PropTypes.objectOf(
        PropTypes.shape({
            code: PropTypes.string.isRequired,
            dataElement: PropTypes.shape({
                id: PropTypes.string.isRequired,
            }).isRequired,
            compulsory: PropTypes.bool,
            optionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        })
    ),
}
