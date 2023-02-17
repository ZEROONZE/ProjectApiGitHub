import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { Button, ButtonTransaction, Form } from "./styles";
import CloseFvg from "../../assets/close.svg";
import EntradaImg from "../../assets/income.svg";
import SaidasImg from "../../assets/outcome.svg";
import { ToastContainer, toast } from "react-toastify";
import { Error } from "../../components/Error/Error";
import React from "react";
import { apiGitHub } from "../../services/Api";
import { RepoProps } from "../../Types/user";
import { Repositorys } from "../Repositorys";
import { Search } from "../Search";

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
