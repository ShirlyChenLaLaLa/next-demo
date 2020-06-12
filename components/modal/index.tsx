import React, { useContext } from 'react';
import ReactModal from 'react-modal';
import theme from '~theme';
import classNames from 'classnames';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  className?: string;
}

const CommonModal: React.FunctionComponent<ModalProps> = props => {
  const { isOpen, onClose, children } = props;
  return (
    <>
      <ReactModal
        onRequestClose={() => {
          if (onClose) {
            onClose();
          }
        }}
        overlayClassName="common-modal__overlay"
        className="common-modal__content"
        isOpen={isOpen}
        ariaHideApp={false}
      >
        <div className="common-modal__children">{children}</div>
      </ReactModal>
      <style jsx global>{`
        .common-modal {
          &__overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            z-index: ${theme.zIndex.onTop};
            background-color: rgba(76, 76, 76, 0.6);
          }
          &__content {
            display: flex;
            flex-direction: column;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            margin: 68px auto;
            align-item: center;
            min-width: 300px;
            max-width: 600px;
            border-radius: 4px;
            background-color: ${theme.colors.white};
            justify-content: center;
            outline: none;
          }
          &__children {
            flex: 1;
            overflow: scroll;
          }
        }
      `}</style>
    </>
  );
};

export default CommonModal;
