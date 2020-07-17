import { Button, ReactFinalForm } from '@dhis2/ui'
import React from 'react'
import { PropTypes } from '@dhis2/prop-types'

import { FieldName } from './FieldName'
import { FieldUsername } from './FieldUsername'
import { FieldPassword } from './FieldPassword'
import { FormRow } from './FormRow'
import { dataTest } from '../dataTest'
import i18n from '../locales'

const { Form } = ReactFinalForm

export const GatewayBulkSMSForm = ({ onSubmit, initilValues }) => {
    return (
        <Form onSubmit={onSubmit} initilValues={initilValues}>
            {({ handleSubmit }) => (
                <form
                    onSubmit={handleSubmit}
                    data-test={dataTest('forms-gatewaybulksmsform')}
                >
                    <FormRow>
                        <FieldName />
                    </FormRow>

                    <FormRow>
                        <FieldUsername />
                    </FormRow>

                    <FormRow>
                        <FieldPassword />
                    </FormRow>

                    <Button type="submit">
                        {i18n.t('Add BulkSMS gateway')}
                    </Button>
                </form>
            )}
        </Form>
    )
}

GatewayBulkSMSForm.defaultProps = {
    initialValues: {},
}

GatewayBulkSMSForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initilValues: PropTypes.object,
}