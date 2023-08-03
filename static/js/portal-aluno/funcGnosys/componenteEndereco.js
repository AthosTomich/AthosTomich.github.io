/**********************************************************
 * Efeito de selecionar um endereco e exibir o mapa correspondente
 **********************************************************/
Gnosys.focusCepEnderecoModal = function (idModal, idCep) {
  //cep encontrado
  if (
    jQueryGnosys(
      "#" + idModal + "MensagemErroEnderecoModal .gnosys-mensagens-aviso"
    ).size() == 0
  ) {
    jQueryGnosys("#" + idModal + "Numero").focus();
  } else {
    jQueryGnosys("#" + idCep).focus();
  }
};
