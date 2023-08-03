/**********************************************************
 * Cria o menu no template decorVisSeletorMatricula
 **********************************************************/
Gnosys.desabilitarDecorVisSeletorMatricula = function () {
  Gnosys.disable("gnosys-decor-vis-seletor-matricula-aluno");
  jQueryGnosys(
    "#gnosys-decor-vis-seletor-matricula-informacoes-blockpanel"
  ).addClass("mostrar");
};

Gnosys.habilitarDecorVisSeletorMatricula = function () {
  Gnosys.enable("gnosys-decor-vis-seletor-matricula-aluno");
  jQueryGnosys(
    "#gnosys-decor-vis-seletor-matricula-informacoes-blockpanel"
  ).removeClass("mostrar");
};
