import "antd/dist/antd.css";
import { useEffect } from "react";
import { Input, Modal, Form, InputNumber, Button } from "antd";

interface ModalProps {
    isShowModal?: boolean;
    isHandleAddNewProduct?: any;
    isHandleUpdateProductById?: any;
    isHandleCancel?: any;
    title?: any;
    data?: any;
}

const ModelCustom = ({
    isShowModal,
    isHandleAddNewProduct,
    isHandleUpdateProductById,
    isHandleCancel,
    title,
    data,
}: ModalProps) => {
    const [form] = Form.useForm();
    const layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 18,
        },
    };
    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: "${label} is required!",
        types: {
            email: "${label} is not a valid email!",
            number: "${label} is not a valid number!",
        },
        number: {
            range: "${label} must be between ${min} and ${max}",
        },
    };
    const onFinish = (values: any) => {
        console.log(values);
    };
    useEffect(() => {
        form.setFieldsValue(data);
    }, [data]);
    return (
        <Modal
            title={title === "add" ? "Add new Product" : `Update ${data.name}`}
            visible={isShowModal}
            onOk={() =>
                title === "add"
                    ? isHandleAddNewProduct(form.getFieldsValue())
                    : isHandleUpdateProductById(data.key, form.getFieldsValue())
            }
            onCancel={isHandleCancel}
            okText={title === "add" ? "Add new Product" : "Save"}
        >
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
                form={form}
            >
                <Form.Item
                    name={"name"}
                    label="Name"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={"quantity"}
                    label="Quantity"
                    rules={[{ type: "number", min: 0, max: 99 }]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item name={"supplier"} label="Supplier">
                    <Input />
                </Form.Item>
                <Form.Item name={"tags"} label="Tag">
                    <Input.TextArea />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModelCustom;
