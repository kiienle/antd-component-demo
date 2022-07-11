import { useState } from "react";
import { Button, Col, Row, Alert, Modal } from "antd";

interface ModalProps {
    title?: string;
    onOk?: any;
    onCancel?: any;
    isModalVisible?: boolean;
    children: JSX.Element;
}
const Modals: React.FC<ModalProps> = ({
    title,
    onOk,
    onCancel,
    isModalVisible,
    children,
}: ModalProps) => {
    return (
        <Modal
            title={title}
            visible={isModalVisible}
            onOk={onOk}
            onCancel={onCancel}
        >
            {children}
        </Modal>
    );
};

export default Modals;
