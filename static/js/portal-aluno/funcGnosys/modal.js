/**********************************************************
 * Zebra dos campos do modal
 **********************************************************/
Gnosys.bindColorirGnosysCampoModal = function () {
  jQueryGnosys(".gnosys-modal").each(function (indexModal, elementModal) {
    jQueryGnosys(elementModal)
      .find(".gnosys-campo")
      .each(function (index, element) {
        if (jQueryGnosys(element).parents("table.resultado").size() > 0) {
          return;
        }

        jQueryGnosys(element).removeClass("even").removeClass("odd");

        if (index % 2 == 0) {
          jQueryGnosys(element).addClass("even");
        } else {
          jQueryGnosys(element).addClass("odd");
        }
      });
  });
};
