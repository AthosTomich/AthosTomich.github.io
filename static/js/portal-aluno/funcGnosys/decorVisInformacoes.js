/**********************************************************
 * Cria o menu no template decorVisInformacoes
 **********************************************************/
Gnosys.bindCriarMenuDecorVisInformacoes = function () {
  jQueryGnosys("#gnosys-decor-vis-informacoes-menu li").remove();

  jQueryGnosys("#gnosys-decor-vis-informacoes-dados h3.gnosys-titulo").each(
    function () {
      jQueryGnosys("#gnosys-decor-vis-informacoes-menu").append(
        '<li><a href="#' +
          this.id +
          '">' +
          Gnosys.recuperarTextoParaMenuDecorVisInformacoes(jQueryGnosys(this)) +
          "</a></li>"
      );
    }
  );

  if (jQueryGnosys(".sticky-wrapper").size() === 0) {
    jQueryGnosys("#gnosys-decor-vis-informacoes-lateral").sticky({
      topSpacing: 10,
    });
  }

  jQueryGnosys("#gnosys-decor-vis-informacoes-menu a").click(function (e) {
    e.preventDefault();
    jQueryGnosys.scrollTo(jQueryGnosys(this).attr("href"), 500);
  });
};

Gnosys.recuperarTextoParaMenuDecorVisInformacoes = function (titulo) {
  var elemento = jQueryGnosys(titulo).clone();
  elemento.find(".gnosys-bloco-extra").remove();
  return elemento.text();
};

/**********************************************************
 * Zebra dos campos do template decorVisInformacoes
 **********************************************************/
Gnosys.bindColorirGnosysCampoDecorVisInformacoes = function () {
  jQueryGnosys("#gnosys-decor-vis-informacoes-dados .gnosys-campo").each(
    function (index, element) {
      if (jQueryGnosys(element).parents("table.resultado").size() > 0) {
        return;
      }

      jQueryGnosys(element).removeClass("even").removeClass("odd");

      if (index % 2 == 0) {
        jQueryGnosys(element).addClass("even");
      } else {
        jQueryGnosys(element).addClass("odd");
      }
    }
  );
};
