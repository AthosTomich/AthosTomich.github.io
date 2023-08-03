/**********************************************************
 * Ajustar a barra superior no template templateVisualizacao
 **********************************************************/
Gnosys.bindAjustarBarraSuperiorTemplateVisualizacao = function () {
  if (
    jQueryGnosys("#gnosys-abas-conteudo-barra-superior").children().size() > 0
  ) {
    jQueryGnosys("#gnosys-abas-conteudo-barra-superior").addClass("visivel");
  }
};
