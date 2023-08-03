/*******************************************************************************
 * Aplicar tootltip no elemento
 ******************************************************************************/
Gnosys.removerTooltip = function () {
  jQueryGnosys(".ui-tooltip").remove();
};

Gnosys.bindAplicaTooltips = function () {
  Gnosys.removerTooltip();

  jQueryGnosys(".gnosys-campo-erro.gnosys-aplicar-tooltip").each(function () {
    var text = jQueryGnosys(this)
      .children(".gnosys-mensagem-erro")
      .hide()
      .text();

    jQueryGnosys(this)
      .children(".gnosys-input,.gnosys-select")
      .tooltip(
        {
          content: text,
          position: {
            my: "center top+5",
            at: "center bottom",
          },
        },
        {
          tooltipClass: "ui-tooltip-erro",
        }
      );
  });
};
