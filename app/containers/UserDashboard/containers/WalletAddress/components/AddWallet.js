import React from 'react';
import {
  Button,
  Header,
  Form,
  Modal,
  Dropdown,
  Popup,
} from 'semantic-ui-react';
import InputField from 'components/common/Forms/InputField';

const AddWallet = ({
  hideModal,
  showModal,
  isRequesting,
  handleChange,
  handleSubmit,
  data,
  errors,
  title,
}) => (
  <Modal
    size="tiny"
    onClose={() => hideModal(true)}
    closeOnDimmerClick={false}
    //   onOpen={() => setOpen(true)}
    open={showModal}
    closeIcon
    trigger={<Button>Show Modal</Button>}
  >
    <Header icon="plus circle" content={title} />
    <Modal.Content>
      <Form size="large">
        <Form.Field>
          <InputField
            label="Wallet Name"
            name="label"
            type="text"
            placeholder="Wallet Name..."
            value={data.label || ''}
            onChange={handleChange}
            error={errors.label ? 'Enter a value' : null}
          />
        </Form.Field>
        <Form.Field>
          <Button
            onClick={handleSubmit}
            color=" "
            fluid
            disabled={isRequesting ? true : false}
          >
            {isRequesting ? 'Loading...' : 'Create New Wallet'}
          </Button>
        </Form.Field>
      </Form>
    </Modal.Content>
  </Modal>
);

export default AddWallet;
