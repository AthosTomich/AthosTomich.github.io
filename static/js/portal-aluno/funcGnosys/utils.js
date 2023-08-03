/*******************************************************************************
 * Desabilitar / Habilitar botao por seletor
 ******************************************************************************/
Gnosys.disable = function (seletor) {
  var seletorString = "'" + seletor + "'";
  var t = setTimeout(
    "jQueryGnosys(" + seletorString + ").attr('disabled', true)",
    50
  );
};

Gnosys.enable = function (seletor) {
  var seletorString = "'" + seletor + "'";
  var t = setTimeout(
    "jQueryGnosys(" + seletorString + ").attr('disabled', false)",
    50
  );
};

Gnosys.enableButton = function (seletor) {
  Gnosys.enable(seletor);
};

Gnosys.disableButton = function (seletor) {
  Gnosys.disable(seletor);
};

/*******************************************************************************
 * Funcao responsavel pela conversao Latin
 ******************************************************************************/
Gnosys.oemLowerChars = function (str) {
  return str
    .toLowerCase()
    .replace(/[áàãâä\u00e5]/g, "a")
    .replace(/[éèẽêë]/g, "e")
    .replace(/[íìĩîï]/g, "i")
    .replace(/[óòõôö]/g, "o")
    .replace(/[úùũûü]/g, "u")
    .replace(/[ńǹñ]/g, "n")
    .replace(/[çĉ]/g, "c");
};

/*******************************************************************************
 * Colocar atributo placeholder em inputs indicados (usa title como padrão)
 ******************************************************************************/
Gnosys.bindPlaceHolder = function (seletor) {
  jQueryGnosys(".ajax").attr("placeholder", function () {
    return jQueryGnosys(this).attr("title");
  });
  jQueryGnosys(".placeholder").attr("placeholder", function () {
    return jQueryGnosys(this).attr("title");
  });
};

Gnosys.loadPanel = undefined;

/*******************************************************************************
 * Funcao responsavel pelo fadeIn das tabelas com classes "resultado" e "fade"
 ******************************************************************************/
Gnosys.bindFadeInTable = function () {
  var resultTable = jQueryGnosys(".resultado.fade");

  if (resultTable.length) {
    if (Gnosys.loadPanel) {
      Gnosys.loadPanel.fadeOut(500);
    }

    resultTable.fadeIn(500);
  }
};

/*******************************************************************************
 * Funcao responsavel pelo fadeOut das tabelas com classes "resultado" e "fade"
 ******************************************************************************/
Gnosys.bindFadeOutTable = function () {
  var resultTable = jQueryGnosys(".resultado.fade");
  if (resultTable.length) {
    if (!Gnosys.loadPanel) {
      Gnosys.loadPanel = jQueryGnosys('<div id="loadPanel" />')
        .hide()
        .appendTo(jQueryGnosys("span#gnosys-filtro-resultado-consulta"));
    }

    Gnosys.loadPanel.css({
      position: "absolute",
      background:
        "#ffffff url(/static/img/portal-aluno/ajaxLoader.gif) center 100px no-repeat",
      left: 0,
      top: resultTable.offset().top,
      height: resultTable.outerHeight() * 2,
      width: "100%",
      zIndex: 5,
      opacity: 0.9,
    });

    Gnosys.loadPanel.fadeIn(500);
    resultTable.fadeOut(500);
  }
};

/*******************************************************************************
 * Função responsável por exibir um painel por cima da tela, bloqueando qualquer
 * interação do usuário com os componentes.
 ******************************************************************************/
Gnosys.mostrarBlockPanel = function (idElementoPai) {
  var idElementoPai = idElementoPai || "#gnosys-wrapper";

  jQueryGnosys(idElementoPai).append(
    "<div id='blockPanel' class='gnosys-blockpanel'> Aguarde...</div>"
  );
  var TAMANHO_TEXTO_E_IMAGEM = 120;

  var panel = jQueryGnosys("#blockPanel");
  var elementHeight = jQueryGnosys(idElementoPai).height();
  var elementWidth = jQueryGnosys(idElementoPai).width();
  var paddingTop =
    jQueryGnosys(idElementoPai).scrollTop() +
    elementHeight / 2 -
    TAMANHO_TEXTO_E_IMAGEM;

  var backgroundPositionY = paddingTop + 75;

  panel.height(elementHeight);
  panel.width(elementWidth);
  panel.css("padding-top", paddingTop + "px");
  panel.css("background-position", "50% " + backgroundPositionY + "px");
  panel.fadeIn();

  return true;
};

/*******************************************************************************
 * Função responsável por esconder o blockPanel.
 ******************************************************************************/
Gnosys.esconderBlockPanel = function () {
  var panel = jQueryGnosys("#blockPanel");
  panel.fadeOut();
  panel.remove();

  return true;
};

/*********************************************************************************************************
 * Função responsável por fechar o modal apenas quando não existir nenhuma mensagem de erro a ser exibida.
 **********************************************************************************************************/
Gnosys.fecharModal = function (idModal) {
  if (
    jQueryGnosys("#" + idModal + "Container .gnosys-mensagem").size() == 0 &&
    jQueryGnosys("#" + idModal + "Container .gnosys-mensagens").size() == 0
  ) {
    Richfaces.hideModalPanel(idModal);
  }
};

/*********************************************************************************************************
 * Função responsável por impedir que a tecla <enter> seja pressionada num cmpText.
 **********************************************************************************************************/
Gnosys.desabilitarTeclaEnter = function (seletor) {
  jQueryGnosys(seletor).keypress(function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
};

/*********************************************************************************************************
 * Função responsável por verificar a foto do avatar.
 **********************************************************************************************************/

Gnosys.buscarAvatar = function () {
  var id = jQueryGnosys("#avatarId").val();
  var img = jQueryGnosys("#gnosys-login img.gnosys-login-foto");
  var erroAvatar = img.on("error", function () {
    img.attr("src", "/static/img/portal-aluno/avatar.png");
  });

  img.attr("src", "https://sigadocker.ufrj.br/fotos/" + id);
};

/*******************************************************************************
 * Funcao responsavel por dar um scroll para o campo invalido se existir ou para
 * o topo da pagina se nao existir um campo invalido.
 ******************************************************************************/
Gnosys.scrollToInvalid = function () {
  if (jQueryGnosys(".gnosys-mensagem-erro").size() !== 0)
    jQueryGnosys.scrollTo(jQueryGnosys(".gnosys-mensagem-erro").parent());
  else jQueryGnosys.scrollTo(0);
};

/*******************************************************************************
 * Funcao responsavel por dar um scroll para o campo pelo id.
 ******************************************************************************/
Gnosys.scrollToElementById = function (elementId) {
  var element = document.getElementById(elementId);
  element.scrollIntoView();
};
