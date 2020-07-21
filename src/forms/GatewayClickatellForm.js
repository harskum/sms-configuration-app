import { Button, ReactFinalForm } from '@dhis2/ui'
import React from 'react'
import { PropTypes } from '@dhis2/prop-types'

import { FormRow } from './FormRow'
import { dataTest } from '../dataTest'

import { FieldAuthToken } from './FieldAuthToken'
import { FieldName } from './FieldName'
import { FieldPassword } from './FieldPassword'
import { FieldUsername } from './FieldUsername'
import i18n from '../locales'

const { Form } = ReactFinalForm

export const GatewayClickatellForm = ({
    onSubmit,
    initialValues,
    passwordRequired,
}) => {
    return (
        <Form onSubmit={onSubmit} initialValues={initialValues}>
            {({ handleSubmit }) => (
                <form
                    onSubmit={handleSubmit}
                    data-test={dataTest('forms-gatewayclickatellform')}
                >
                    <FormRow>
                        <FieldName />
                    </FormRow>

                    <FormRow>
                        <FieldUsername />
                    </FormRow>

                    <FormRow>
                        <FieldPassword required={passwordRequired} />
                    </FormRow>

                    <FormRow>
                        <FieldAuthToken />
                    </FormRow>

                    <Button
                        type="submit"
                        dataTest={dataTest(
                            'forms-gatewayclickatellform-submit'
                        )}
                    >
                        {i18n.t('Add Clickatell gateway')}
                    </Button>
                </form>
            )}
        </Form>
    )
}

GatewayClickatellForm.defaultProps = {
    initialValues: {},
    passwordRequired: false,
}

GatewayClickatellForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object,
    passwordRequired: PropTypes.bool,
}
