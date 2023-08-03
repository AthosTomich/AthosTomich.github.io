var jQueryChamadasGnosys = jQuery.noConflict();

/**********************************************************
 * Efeito retratil dos componentes
 **********************************************************/
Gnosys.bindAplicaEfeitoRetratil = function () {
  jQueryChamadasGnosys(".gnosys-retratil-trigger").each(function () {
    var trigger = jQueryChamadasGnosys(this);
    var div = [];
    var parent = trigger;

    while (div.length == 0) {
      div = parent.siblings(".gnosys-retratil");
      parent = parent.parent();
    }

    div.data("originalHeight", div.height());

    jQueryChamadasGnosys(this).off("click");

    jQueryChamadasGnosys(this).click(function () {
      trigger
        .toggleClass("gnosys-retratil-fechado")
        .toggleClass("gnosys-retratil-aberto");
      div.slideToggle("slow");
      return false;
    });
  });

  jQueryChamadasGnosys(".gnosys-retratil-trigger").each(function () {
    if (jQueryChamadasGnosys(this).hasClass("gnosys-retratil-fechado")) {
      jQueryChamadasGnosys(this)
        .click()
        .toggleClass("gnosys-retratil-fechado")
        .toggleClass("gnosys-retratil-aberto");
    }
  });
};
