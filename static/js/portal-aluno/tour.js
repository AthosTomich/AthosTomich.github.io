var Gnosys = Gnosys || {};

Gnosys.Tour = Gnosys.Tour || {};

Gnosys.Tour.estadoAtual = 0;
Gnosys.Tour.estados = [];

// depende da página da wiki
Gnosys.Tour.nomeLocalStorage = function () {
  return Gnosys.Wiki.pagina.trim().replace(/ /g, "+") + "Tour";
};

//depende da página da wiki
Gnosys.Tour.nomeModulo = function () {
  return Gnosys.Wiki.pagina.split(" ")[0];
};

Gnosys.Tour.bindCriarTour = function () {
  if (Gnosys.Tour.estados.length === 0) {
    jQueryGnosys("#gnosys-tour-icon").hide();
  } else {
    if (Gnosys.Tour.estados.length === 1) {
      Gnosys.Tour.estados[0].buttons = { Fechar: 0 };
      Gnosys.Tour.estados[0].focus = 0;
      Gnosys.Tour.estados[0].submit = Gnosys.Tour.submeter;
    } else {
      Gnosys.Tour.estados[0].buttons = {
        "Próx.": 1,
        "Não preciso de ajuda": 2,
      };
      Gnosys.Tour.estados[0].focus = 0;
      Gnosys.Tour.estados[0].submit = Gnosys.Tour.submeter;

      for (var i = 1; i < Gnosys.Tour.estados.length - 1; i++) {
        Gnosys.Tour.estados[i].buttons = { "Ant.": -1, "Próx.": 1 };
        Gnosys.Tour.estados[i].focus = 1;
        Gnosys.Tour.estados[i].submit = Gnosys.Tour.submeter;
      }

      Gnosys.Tour.estados[Gnosys.Tour.estados.length - 1].buttons = {
        "Ok, entendi": 2,
      };
      Gnosys.Tour.estados[Gnosys.Tour.estados.length - 1].focus = 0;
      Gnosys.Tour.estados[Gnosys.Tour.estados.length - 1].submit =
        Gnosys.Tour.submeter;
    }

    if (!Gnosys.Tour.verificarJaExecutouTourAntes()) {
      Gnosys.Tour.iniciarTour();
    }

    jQueryGnosys("#gnosys-tour-icon").show();
    jQueryGnosys("#gnosys-tour-icon").click(function () {
      _gaq.push(["_trackEvent", Gnosys.Tour.nomeModulo(), "abrirTour"]);
      jQueryGnosys("#gnosys-tour-icon").fadeOut();
      Gnosys.Tour.iniciarTour();
    });
  }
};

jQueryGnosys(window).on("load", function () {
  jQueryGnosys(".gnosys-wiki img").css("cursor", "pointer");
  jQueryGnosys('.gnosys-wiki img[src$="/tour.png"]').click(function () {
    jQueryGnosys("#gnosys-tour-icon").click();
  });
});

Gnosys.Tour.verificarJaExecutouTourAntes = function () {
  if (
    typeof Storage !== "undefined" &&
    !localStorage.getItem(Gnosys.Tour.nomeLocalStorage())
  ) {
    return false;
  }
  return true;
};

Gnosys.Tour.iniciarTour = function () {
  // carrega o tour
  Gnosys.Tour.estadoAtual = 0;
  jQueryGnosys.prompt(Gnosys.Tour.estados, {
    loaded: Gnosys.Tour.carregarTour,
    close: Gnosys.Tour.fecharTour,
  });
  Gnosys.Tour.ClicarFora();
};

Gnosys.Tour.carregarTour = function (event, value, message, formVals) {
  _gaq.push([
    "_trackEvent",
    Gnosys.Tour.nomeModulo(),
    "carregarTour",
    "" + Gnosys.Tour.estadoAtual,
  ]);
};

Gnosys.Tour.fecharTour = function (event, value, message, formVals) {
  jQueryGnosys(".dropdown-content").css("display", "");
  if (typeof Storage !== "undefined") {
    localStorage.setItem(Gnosys.Tour.nomeLocalStorage(), new Date());
  }

  jQueryGnosys("#gnosys-tour-icon").fadeIn();
  _gaq.push([
    "_trackEvent",
    Gnosys.Tour.nomeModulo(),
    "fecharTour",
    "" + Gnosys.Tour.estadoAtual,
  ]);
};

Gnosys.Tour.submeter = function (event, value, message, formVals) {
  Gnosys.Tour.estadoAtual += value;
  var top = 0;
  // Alterando visibilidade do menu dropdown quando o passo do tour for para apresenta-lo
  if (Gnosys.Tour.estadoAtual === 2) {
    jQueryGnosys(".dropdown-content").css("display", "block");
    //Alterando altura do tour para a altura do menu dropdown
    top = jQueryGnosys(".dropdown-content").height();
    Gnosys.Tour.estados[Gnosys.Tour.estadoAtual].position.y = top + 10;
  } else {
    jQueryGnosys(".dropdown-content").css("display", "");
  }

  if (value === -1) {
    jQueryGnosys.prompt.prevState();
    return false;
  } else if (value === 1) {
    jQueryGnosys.prompt.nextState();
    return false;
  }
};

Gnosys.Tour.ClicarFora = function () {
  jQueryGnosys(".jqifade").click(function () {
    jQueryGnosys(".jqiclose").click();
  });
  jQueryGnosys(".jqi").keyup(function (e) {
    if (e.keyCode === 27) {
      jQueryGnosys(".jqiclose").click();
    }
  });
};
