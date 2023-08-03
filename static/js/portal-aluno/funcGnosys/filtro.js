/*******************************************************************************
 * Retrair / Expandir filtro
 ******************************************************************************/
Gnosys.retrairFiltro = function (duracao) {
  jQueryGnosys("#gnosys-filtro").slideToggle(duracao);
  jQueryGnosys("#gnosys-filtro-barra-superior a#btnRetrairFiltro").blur();
  jQueryGnosys("#gnosys-filtro-barra-superior a#btnRetrairFiltro")
    .toggleClass("retrair")
    .toggleClass("expandir");
};

Gnosys.bindRetrairFiltro = function () {
  jQueryGnosys("#gnosys-filtro-barra-superior a#btnRetrairFiltro").unbind(
    "click"
  );
  jQueryGnosys("#gnosys-filtro-barra-superior a#btnRetrairFiltro").click(
    function () {
      Gnosys.retrairFiltro("slow");
    }
  );
};

/*******************************************************************************
 * Limpar campos do filtro
 ******************************************************************************/
Gnosys.limparCamposFiltro = function () {
  jQueryGnosys("#gnosys-filtro-campos :input").val("");
  jQueryGnosys("#gnosys-filtro-campos :checkbox").attr("checked", false);
  jQueryGnosys("#gnosys-filtro-campos :radio").attr("checked", false);
  jQueryGnosys("#gnosys-filtro-campos select").attr("selectedIndex", 0);
};

Gnosys.bindLimparCamposFiltro = function () {
  jQueryGnosys(
    "#gnosys-filtro #btnReiniciar, #gnosys-filtro #btnReiniciarForm"
  ).unbind("click");
  jQueryGnosys(
    "#gnosys-filtro #btnReiniciar, #gnosys-filtro #btnReiniciarForm"
  ).click(function () {
    Gnosys.limparCamposFiltro();
  });
};

/*******************************************************************************
 * Exibir blockPanel quando clicar na lupa
 ******************************************************************************/
Gnosys.bindFiltroBlockPanel = function () {
  jQueryGnosys(".lupa a").click(function () {
    Gnosys.mostrarBlockPanel();
  });
};

/*******************************************************************************
 * Quando o resultado e novamente renderizado por uma requisicao ajax, deve-se
 * fazer um "rebind" da tabela resultado com o plug-in "quickSearch".
 ******************************************************************************/
Gnosys.bindQuickSearchResultadoFiltro = function () {
  jQueryGnosys("#gnosys-filtro-resultado-controle input.qs_input").quicksearch(
    "#gnosys-filtro-resultado tbody tr",
    {
      // stripeRows: ['par','impar'],
      prepareQuery: function (val) {
        return Gnosys.oemLowerChars(val).split(" ");
      },
      testQuery: function (query, txt, _row) {
        txt = Gnosys.oemLowerChars(txt);
        for (var i = 0; i < query.length; i += 1) {
          if (txt.indexOf(query[i]) === -1) {
            return false;
          }
        }
        return true;
      },
    }
  );

  if (
    jQueryGnosys("#gnosys-filtro-resultado-controle-fecharBuscar").is(
      ":visible"
    )
  ) {
    jQueryGnosys("#gnosys-filtro-resultado-controle-buscar form").show();
  }
};

/*******************************************************************************
 * Abrir / Fechar campo de busca do QuickSearch plugin
 ******************************************************************************/
Gnosys.bindQuickSearchResultadoFiltroForm = function () {
  // Para abrir campo de busca
  jQueryGnosys("#gnosys-filtro-resultado-controle-abrirBuscar").unbind("click");
  jQueryGnosys("#gnosys-filtro-resultado-controle-abrirBuscar").click(
    function () {
      jQueryGnosys("#gnosys-filtro-resultado-controle-buscar form").show(
        "fast"
      );
      jQueryGnosys("#gnosys-filtro-resultado-controle-fecharBuscar").show(
        "fast"
      );
      jQueryGnosys(this).addClass("gnosys-qs-aberto");
      jQueryGnosys("#gnosys-filtro-resultado-controle input.qs_input").focus();
      return false;
    }
  );

  //Para fechar campo de busca
  jQueryGnosys("#gnosys-filtro-resultado-controle-fecharBuscar").unbind(
    "click"
  );
  jQueryGnosys("#gnosys-filtro-resultado-controle-fecharBuscar").click(
    function () {
      jQueryGnosys(this).hide();
      jQueryGnosys("#gnosys-filtro-resultado-controle-buscar form").hide();
      jQueryGnosys("#gnosys-filtro-resultado-controle-abrirBuscar").removeClass(
        "gnosys-qs-aberto"
      );
      return false;
    }
  );
};

/*******************************************************************************
 * Inserir divs com "display: table-row" e separar os campos do filtro
 ******************************************************************************/
Gnosys.bindSeparadorCamposFiltroForm = function () {
  jQueryGnosys(
    "#gnosys-filtro-campos .gnosys-filtro-separador-campos"
  ).remove();
  jQueryGnosys("#gnosys-filtro-campos .gnosys-campo").each(function (
    index,
    element
  ) {
    if (index % 2) {
      jQueryGnosys(
        '<div class="gnosys-filtro-separador-campos"></div>'
      ).insertAfter(this);
      jQueryGnosys(
        '<div class="gnosys-filtro-separador-campos"></div>'
      ).insertAfter(this);
    }
  });
};
