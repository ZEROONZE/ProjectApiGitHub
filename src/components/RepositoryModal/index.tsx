import Modal from "react-modal";
import CloseFvg from "../../assets/close.svg";
import React from "react";
import { RepoProps } from "../../Types/user";

interface ModalRepoProps {
  isOpen: boolean;
  OnRequestClose: () => void;
  repository: RepoProps[];
}

export function ModaRepository({
  isOpen,
  OnRequestClose,
  repository,
}: ModalRepoProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={OnRequestClose}
      className="modal-content"
      overlayClassName="react-modal"
    >
      <button type="button" onClick={OnRequestClose}>
        <img src={CloseFvg} alt="fechar modal" />
      </button>
    </Modal>
  );
}
