import React from 'react'
import { Modal } from 'react-native';

export default function CustomModal({ children, animation = 'fade', setModalVisible, modalVisible }) {
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
