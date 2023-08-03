var Gnosys = Gnosys || {};

Gnosys.Wiki = Gnosys.Wiki || {};

Gnosys.Wiki.pagina = undefined;

Gnosys.Wiki.wikiUrl = "https://gnosys.ufrj.br/wiki/get";
//Gnosys.Wiki.wikiUrl = "http://localhost:8080/wiki/get"; //dev

Gnosys.Wiki.bindRecuperarAjudasWiki = function () {
  Gnosys.Wiki.recuperarPagina();

  Gnosys.Wiki.recuperarAjudaAutomatica(Gnosys.Wiki.pagina);

  Gnosys.Wiki.recuperarAjudaComponenteMensagemWiki();

  Gnosys.Wiki.recuperarAjudaComponenteNoticiaWiki();
};

Gnosys.Wiki.recuperarPagina = function () {
  var paginaArray = [];
  var filtroAbas = [];
  var paginaTemp = "";

  jQueryGnosys(".gnosys-aba").each(function () {
    filtroAbas.push(jQueryGnosys(this).text());

    jQueryGnosys(this).click(function () {
      Gnosys.Wiki.recuperarAjudaAutomatica(Gnosys.Wiki.pagina);
    });
  });

  paginaArray = jQueryGnosys("title").html().split("- ");

  if (filtroAbas.length == 0) {
    paginaTemp = paginaArray[0] + "- " + paginaArray[1];
  } else {
    paginaTemp =
      paginaArray[0] + "- " + jQueryGnosys(".gnosys-aba-selec").text();
  }

  // neste momento, se 'Gnosys.Wiki.pagina' for vazio, utilizamos o valor calculado em paginaTemp
  // caso contrario alguma pagina mudou este valor de proposito, vou utiliza-lo
  Gnosys.Wiki.pagina = Gnosys.Wiki.pagina || paginaTemp;
};

Gnosys.Wiki.recuperarAjudaAutomatica = function (pagina) {
  pagina = pagina.replace(/ /g, "+").trim();

  jQueryGnosys.getJSON(
    Gnosys.Wiki.wikiUrl + "?data=" + pagina + "&callback=?",
    function (data) {
      if (data.intro != "erro") {
        Gnosys.Wiki.prepararConteudoAjudaAutomatica(data.full);
        jQueryGnosys("#gnosys-help-icon").show();
      } else {
        jQueryGnosys("#gnosys-help-icon").hide();
      }
    }
  );
};

Gnosys.Wiki.recuperarAjudaComponenteMensagemWiki = function () {
  jQueryGnosys("span.gnosys-mensagem-wiki-pagina").each(function () {
    var parent = jQueryGnosys(this).parent();
    var pagina = jQueryGnosys(this).text();
    var callback = jQueryGnosys(this)
      .siblings(".gnosys-mensagem-wiki-pagina-callback")
      .text();
    if (callback.length > 0) {
      eval("callback = " + callback);
    } else {
      callback = function () {};
    }

    pagina = pagina.replace(/ /g, "+").trim();

    jQueryGnosys.getJSON(
      Gnosys.Wiki.wikiUrl + "?data=" + pagina + "&remove=toc&callback=?",
      function (data) {
        if (data.intro != "erro") {
          jQueryGnosys(parent).html(data.full);
          jQueryGnosys(parent).addClass("gnosys-mensagem-wiki");
          //Gnosys.onAjaxRequestComplete();
        }
        callback(data);
      }
    );
  });
};

Gnosys.Wiki.recuperarAjudaComponenteNoticiaWiki = function () {
  jQueryGnosys("span.gnosys-noticia-wiki").each(function () {
    var parent = jQueryGnosys(this).parent();
    var pagina = jQueryGnosys(this).text();
    var callback = jQueryGnosys(this)
      .siblings(".gnosys-mensagem-wiki-pagina-callback")
      .text();
    if (callback.length > 0) {
      eval("callback = " + callback);
    } else {
      callback = function () {};
    }

    pagina = pagina.replace(/ /g, "+").trim();

    jQueryGnosys.getJSON(
      Gnosys.Wiki.wikiUrl +
        "?data=" +
        pagina +
        "&remove=toc&callback=?&noticia=true",
      function (data) {
        if (data.intro != "erro") {
          jQueryGnosys(parent).html(data.full);
          jQueryGnosys(parent).addClass("gnosys-mensagem-wiki");

          jQueryGnosys(document).trigger("noticiasReady");
          jQueryGnosys(document).bind(
            "noticiasReady",
            Gnosys.bindAplicaEfeitoRetratilNoticias
          );
        }
        callback(data);
      }
    );
  });
};

Gnosys.Wiki.prepararConteudoAjudaAutomatica = function (html) {
  jQueryGnosys("#gnosys-help-icon").click(function () {
    _gaq.push(["_trackEvent", "Ajuda", "toggleAjuda"]);

    jQueryGnosys.prompt(
      [
        {
          title: "Ajuda",
          html: html,
          position: {
            container: "#gnosys-wrapper",
            x: (jQueryGnosys("html").width() - 800) / 2,
            y: 60,
            width: 800,
          },
          buttons: { Fechar: true },
        },
      ],
      {
        classes: {
          box: "gnosys-help",
          fade: "",
          prompt: "",
          close: "",
          title: "lead",
          message: "",
          buttons: "",
          button: "btn",
          defaultButton: "btn-primary",
        },
        loaded: function () {
          //jQueryGnosys('html, body').css({ overflow: 'hidden' });
          Gnosys.Wiki.ajustarAjudaAutomatica();
        },
        close: function (event) {
          jQueryGnosys("#gnosys-help-icon").fadeIn();
          //jQueryGnosys('html, body').css({ overflow: 'auto' });
        },
      }
    );

    jQueryGnosys(this).fadeOut();
  });
};

jQueryGnosys(window).on("load", function () {
  jQueryGnosys(".gnosys-wiki img").css("cursor", "pointer");
  jQueryGnosys('.gnosys-wiki img[src$="/help.png"]').click(function () {
    jQueryGnosys("#gnosys-help-icon").click();
  });
});

Gnosys.Wiki.ajustarAjudaAutomatica = function () {
  // atualiza ids
  jQueryGnosys(".gnosys-help").attr("id", "gnosys-help");
  jQueryGnosys("#jqi_0_buttonFechar").attr("id", "gnosys-help-fechar");

  // atualiza alturas da TOC e Conteudo
  jQueryGnosys("#gnosys-help .jqimessage").height(
    jQueryGnosys("html").height() - 320 + "px"
  );
  jQueryGnosys("#gnosys-help #toc").height(
    jQueryGnosys("#gnosys-help .jqimessage").height()
  );

  // scroll dentro da TOC
  jQueryGnosys("#gnosys-help #toc a").click(function (e) {
    e.preventDefault();
    jQueryGnosys(".jqimessage").scrollTo(jQueryGnosys(this).attr("href"), 500);
  });

  // insere num bloco
  var conteudo = jQuery('<div id="page-data"></div>');
  jQueryGnosys("#gnosys-help #toc ~ *").each(function (index, elemento) {
    conteudo.append(elemento);
  });
  jQueryGnosys("#gnosys-help #toc").after(conteudo);
};
