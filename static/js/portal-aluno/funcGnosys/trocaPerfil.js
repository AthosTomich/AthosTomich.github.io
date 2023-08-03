/*******************************************************************************
 *  Mostrar/Esconder aba meus documentos
 ******************************************************************************/

Gnosys.bindSetarPerfilAtual = function () {
  if (!jQuery("#nomePerfil").size()) return;

  var setParadigm = function (paradigm) {
    sessionStorage.setItem("paradigm", paradigm);
  };

  var perfilAtual = jQuery("#nomePerfil").text();

  if (perfilAtual.indexOf("Aluno") > 0) setParadigm("Aluno");
  else setParadigm("Professor");
};

Gnosys.bindClickMudarPerfil = function () {
  jQuery(".dropdown-element").click(function () {
    sessionStorage.setItem("paradigm", jQuery(this).text());
  });
};
