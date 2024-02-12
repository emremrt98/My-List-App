import React from 'react'
import { Modal } from 'react-native';

export default function CustomModal({ children, animation, setModalVisible, modalVisible }) {
    return (
        <Modal
            animationType={animation}
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            {children}
        </Modal>
    )
}
