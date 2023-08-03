/***************************************************************
 * Aplica mascaras
 ***************************************************************/
Gnosys.bindAplicaMascaras = function () {
  jQueryGnosys(".gnosys-mascara-dataHora").each(function () {
    Gnosys.aplicaMascara(jQueryGnosys(this), "99/99/9999 99:99", " ");
  });

  jQueryGnosys(".gnosys-mascara-data").each(function () {
    Gnosys.aplicaMascara(jQueryGnosys(this), "99/99/9999", " ");
  });

  jQueryGnosys(".gnosys-mascara-hora").each(function () {
    Gnosys.aplicaMascara(jQueryGnosys(this), "99:99", " ");
  });

  jQueryGnosys(".gnosys-mascara-cpf").each(function () {
    Gnosys.aplicaMascara(jQueryGnosys(this), "999.999.999-99", " ");
  });

  jQueryGnosys(".gnosys-mascara-identificacaoUFRJ").each(function () {
    Gnosys.aplicaMascara(
      jQueryGnosys(this),
      "***************",
      "CPF ou Passaporte"
    );
  });

  jQueryGnosys(".gnosys-mascara-rg").each(function () {
    Gnosys.aplicaMascara(jQueryGnosys(this), "99.999.999-9", " ");
  });

  jQueryGnosys(".gnosys-mascara-cep").each(function () {
    Gnosys.aplicaMascara(jQueryGnosys(this), "99999-999", " ");
  });

  jQueryGnosys(".gnosys-mascara-telefone").each(function () {
    Gnosys.aplicaMascara(jQueryGnosys(this), "99999999?9", " ");
  });

  jQueryGnosys(".gnosys-mascara-telefoneBrasil").each(function () {
    Gnosys.aplicaMascara(jQueryGnosys(this), "+99 (999) 999999999", " ");
  });

  jQueryGnosys(".gnosys-mascara-telefoneInternacional").each(function () {
    Gnosys.aplicaMascara(
      jQueryGnosys(this),
      "+999 9999999999999999999999",
      " "
    );
  });

  jQueryGnosys(".gnosys-mascara-matricula").each(function () {
    Gnosys.aplicaMascara(jQueryGnosys(this), "999999999", " ");
  });

  jQueryGnosys(".gnosys-mascara-assinatura").each(function () {
    Gnosys.aplicaMascara(
      jQueryGnosys(this),
      "****.****.****.****.****.****.****.****",
      " "
    );
  });

  jQueryGnosys(".gnosys-mascara-ano").each(function () {
    Gnosys.aplicaMascara(jQueryGnosys(this), "9999", " ");
  });

  jQueryGnosys(".gnosys-mascara-cargaHoraria").each(function () {
    Gnosys.aplicaMascara(jQueryGnosys(this), "9999", " ");
  });
};

/**********************************************************
 * Aplica mascaras atraves do plugin jquery.maskedinput-1.7.7.js
 **********************************************************/
Gnosys.aplicaMascara = function (seletor, mascara, placeholder_value) {
  placeholder_value = placeholder_value || " ";
  jQueryGnosys(seletor).mask(mascara, {
    placeholder: placeholder_value,
    translation: {
      "*": { pattern: /[A-Za-z0-9]/ },
    },
  });
};
