var jQueryGnosys = jQuery.noConflict();

jQueryGnosys(document).ready(function ($) {
  /**
   * https://community.jboss.org/wiki/HowToDetectReRenderEvents
   * Em 9/4/12
   */
  if (typeof A4J != "undefined") {
    var oldFinish = A4J.AJAX.finishRequest;
    A4J.AJAX.finishRequest = function (request) {
      oldFinish(request);

      var options = request.options;
      if (!request._oncomplete_aborted) {
        //HACK BEGIN
        Gnosys.onAjaxRequestComplete();
        //HACK END
      }
    };
  }

  jQueryGnosys(document).trigger("gnosys-ready-only");
  jQueryGnosys(document).trigger("gnosys-ready");

  //Focus on input field
  jQueryGnosys("input[name=inputUsername]").focus();
});

jQueryGnosys(document).bind("gnosys-ready", function ($) {
  // wiki
  Gnosys.Wiki.bindRecuperarAjudasWiki();

  // tour
  Gnosys.Tour.bindCriarTour();

  // templateVisualizacao
  Gnosys.bindAjustarBarraSuperiorTemplateVisualizacao();

  // compenenteRetratil
  Gnosys.bindAplicaEfeitoRetratil();

  // filtro
  Gnosys.bindSeparadorCamposFiltroForm();
  Gnosys.bindRetrairFiltro();
  Gnosys.bindLimparCamposFiltro();
  Gnosys.bindFiltroBlockPanel();
  Gnosys.bindQuickSearchResultadoFiltro();
  Gnosys.bindQuickSearchResultadoFiltroForm();

  // utils
  Gnosys.bindPlaceHolder();
  //Gnosys.bindFadeOutTable();
  Gnosys.bindFadeInTable();

  // mascaras
  Gnosys.bindAplicaMascaras();

  // modal
  Gnosys.bindColorirGnosysCampoModal();

  // colunas
  Gnosys.bindAdicionarSeparadoresColunas();

  // decorVisInformacoes
  Gnosys.bindCriarMenuDecorVisInformacoes();
  Gnosys.bindColorirGnosysCampoDecorVisInformacoes();

  // tooltips
  Gnosys.bindAplicaTooltips();

  Gnosys.buscarAvatar();

  //trocaPerfil
  Gnosys.bindSetarPerfilAtual();
  Gnosys.bindClickMudarPerfil();
});

/***************************************************************
 * Executa os procedimentos necessarios para recompor os
 * comportamentos dinamicos das paginas apos a execucao de
 * requisicoes ajax que provoquem renderizacao parcial do
 * conteudo da pagina.
 ***************************************************************/
Gnosys.beforeAjaxRequest = function () {
  Gnosys.bindFadeOutTable();
  return true;
};

/***************************************************************
 * Executa os procedimentos necessarios para recompor os
 * comportamentos dinamicos das paginas apos a execucao de
 * requisicoes ajax que provoquem renderizacao parcial do
 * conteudo da pagina.
 ***************************************************************/
Gnosys.onAjaxRequestComplete = function () {
  jQueryGnosys(document).trigger("gnosys-ready");
};
