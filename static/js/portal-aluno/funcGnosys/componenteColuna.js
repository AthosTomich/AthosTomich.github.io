/**********************************************************
 * Ajuste de tamanho automático nas colunas
 **********************************************************/
Gnosys.adicionarSeparadoresColunas = function (blocoColuna) {
  // conteudo do bloco
  var blocoColunaConteudo = jQueryGnosys(blocoColuna)
    .children(".gnosys-blococoluna-conteudo")
    .first();

  // verifica quantas colunas são num bloco
  var regex = /gnosys-blococoluna(\d)+/g;
  var numeroColunas = parseInt(
    regex.exec(jQueryGnosys(blocoColuna).attr("class"))[1],
    10
  );

  // remove os separadores de colunas existentes
  jQueryGnosys(blocoColunaConteudo)
    .children(".gnosys-blococoluna-separador")
    .remove();

  var totalColunas = jQueryGnosys(blocoColunaConteudo).children().size();

  // adiciona os separadores
  for (var i = numeroColunas; i < totalColunas; i += numeroColunas + 1) {
    jQueryGnosys(blocoColunaConteudo)
      .children(":nth-child(" + i + ")")
      .after('<div class="gnosys-blococoluna-separador"></div>');
    totalColunas += 1;
  }
};

Gnosys.bindAdicionarSeparadoresColunas = function () {
  jQueryGnosys(".gnosys-blococoluna").each(function () {
    Gnosys.adicionarSeparadoresColunas(this);
  });
};
