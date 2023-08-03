/**!
 * Adeus IE6 v1.0.2
 * http://mateus007.github.com/Adeus-IE6/
 *
 * Copyright 2010
 * By Mateus Souza - http://www.mateussouza.com
 * Licensed under MIT and GPL License - http://www.opensource.org/licenses/mit-license.php || http://www.gnu.org/licenses/gpl.html
 *
 * modded by Siga Dev Team for IE8 Compat Mode detection
 */
(function ($) {
  $(window).bind("load", function () {
    if ($.browser.msie && $.browser.version <= 7) {
      var AdeusIE6;

      if (document.documentMode)
        //if IE8 Compat Mode
        AdeusIE6 =
          '<div id="adeus-ei6-fundo" style="margin: 0;padding: 0;position: absolute;top: 0;left: 0;display: block;z-index: 9999;width: 100%;height: 100%;min-height: 100%;opacity: .5;filter:alpha(opacity=50);background: #000;"></div><div id="adeus-ie6" style="margin: 0;padding: 0;border: 1px solid #096182;background: #83bed4;width: 648px;height: 475px;font-family: Arial, Helvetica, sans-serif;font-size: 15px;position: absolute;top: 50%;left: 50%;z-index: 9999;margin-left: -274px;margin-top: -189px;"><div id="adeus-ie6-topo" style="margin: 0;padding: 0;background: #b5d8e5;border-top: 1px solid #f1f8fa;border-bottom: 1px solid #6d909e;padding: 20px;"><h3 style="margin: 0;padding: 0;margin-bottom: 15px;font-size: 23px;font-weight: normal;font-family: Arial, Helvetica, sans-serif;line-height: 22px;">Você está usando o navegador em <i>modo de compatibilidade</i>...</h3><p style="margin: 0;padding: 0;color: #494848;margin-bottom: 15px;font-size: 15px;line-height: 22px;padding-right: 15px;">A sua versão do Internet Explorer é suportada por este site, mas não enquanto o modo de compatibilidade estiver habilitado. Pedimos que vá no menu FERRAMENTAS e desmarque a opção MODO DE COMPATIBILIDADE. Após isto, recarregue a página. </p><p>Baixe o Internet Explorer 9 ou experimente um dos outros navegadores apresentados abaixo.</p><ul style="margin: 0;padding: 0;margin-left: 26px;line-height: 25px;font-size: 16px;"><li>Ganhe mais Segurança.</li><li>Fique livre de Ví­rus e Spywares.</li><li>Tenha melhores experiências visuais.</li><li>Total compatibilidade com este website e muito mais.</li></ul></div><div id="adeus-ie6-rodape" style="margin: 0;padding: 0;padding: 20px 15px 20px 20px;border-top: 1px solid #FFF;color: #FFF;"><div id="adeus-ie-botao"><a style="margin: 0;padding: 0;background: url(http://mateus007.github.com/Adeus-IE6/img/ie.png) no-repeat left top;text-indent: -9999em;overflow: hidden;display: block;float: left;height: 80px;margin-left: -3px;margin-top: -5px;width: 260px;" href="http://www.microsoft.com/brasil/windows/internet-explorer/" title="Atualize j&Atilde;&iexcl; seu Internet Explorer para uma versão mais recente!!!">Atualizar navegador</a></div><div id="adeus-ie6-outros" style="margin: 0;padding: 0;font-size: 12px;float: right;width: 235px;display: block;"><span style="margin: 0;padding: 0;margin-bottom: 5px;display: block;line-height: 15px;">Use também outros navegadores:</span><a style="margin: 0;padding: 0;"href="http://www.google.com/chrome?hl=pt-BR" title="Google Chrome"><img style="margin: 0;padding: 0;border: 0;display: inline;" align="left" src="http://mateus007.github.com/Adeus-IE6/img/chrome.png" alt="Google Chrome" title="Google Chrome" /></a><a style="margin: 0;padding: 0;" href="http://pt-br.www.mozilla.com/pt-BR/" title="Firefox"><img style="margin: 0;padding: 0;border: 0;display: inline;" align="left" src="http://mateus007.github.com/Adeus-IE6/img/firefox.png" alt="Firefox" title="Firefox" /></a><a style="margin: 0;padding: 0;" href="http://www.apple.com/br/safari/download/" title="Safari"><img style="margin: 0;padding: 0;border: 0;display: inline;" align="left" src="http://mateus007.github.com/Adeus-IE6/img/safari.png" alt="Safari" title="Safari" /></a><a style="margin: 0;padding: 0;" href="http://www.opera.com/download/" title="Opera"><img style="margin: 0;padding: 0;border: 0;display: inline;" align="left" src="http://mateus007.github.com/Adeus-IE6/img/opera.png" alt="Opera" title="Opera" /></a></div></div></div>';
      // is IE6-7
      else
        AdeusIE6 =
          '<div id="adeus-ei6-fundo" style="margin: 0;padding: 0;position: absolute;top: 0;left: 0;display: block;z-index: 9999;width: 100%;height: 100%;min-height: 100%;opacity: .5;filter:alpha(opacity=50);background: #000;"></div><div id="adeus-ie6" style="margin: 0;padding: 0;border: 1px solid #096182;background: #83bed4;width: 548px;height: 375px;font-family: Arial, Helvetica, sans-serif;font-size: 15px;position: absolute;top: 50%;left: 50%;z-index: 9999;margin-left: -274px;margin-top: -189px;"><div id="adeus-ie6-topo" style="margin: 0;padding: 0;background: #b5d8e5;border-top: 1px solid #f1f8fa;border-bottom: 1px solid #6d909e;padding: 20px;"><h3 style="margin: 0;padding: 0;margin-bottom: 15px;font-size: 23px;font-weight: normal;font-family: Arial, Helvetica, sans-serif;line-height: 22px;">Você está usando um navegador muito antigo...</h3><p style="margin: 0;padding: 0;color: #494848;margin-bottom: 15px;font-size: 15px;line-height: 22px;padding-right: 15px;">A sua versão do Internet Explorer (<span>' +
          jQuery.browser.version +
          '</span>) não é mais suportada por este site. Para ter melhor navegação (em toda a Internet, inclusive), por favor atualize seu navegador. Os motivos são muitos:</p><ul style="margin: 0;padding: 0;margin-left: 26px;line-height: 25px;font-size: 16px;"><li>Ganhe mais Segurança.</li><li>Fique livre de Ví­rus e Spywares.</li><li>Tenha melhores experiências visuais.</li><li>Total compatibilidade com este website e muito mais.</li></ul></div><div id="adeus-ie6-rodape" style="margin: 0;padding: 0;padding: 20px 15px 20px 20px;border-top: 1px solid #FFF;color: #FFF;"><div id="adeus-ie-botao"><a style="margin: 0;padding: 0;background: url(http://mateus007.github.com/Adeus-IE6/img/ie.png) no-repeat left top;text-indent: -9999em;overflow: hidden;display: block;float: left;height: 80px;margin-left: -3px;margin-top: -5px;width: 260px;" href="http://www.microsoft.com/brasil/windows/internet-explorer/" title="Atualize já seu Internet Explorer para uma versão mais recente!!!">Atualizar navegador</a></div><div id="adeus-ie6-outros" style="margin: 0;padding: 0;font-size: 12px;float: right;width: 235px;display: block;"><span style="margin: 0;padding: 0;margin-bottom: 5px;display: block;line-height: 15px;">Use também outros navegadores:</span><a style="margin: 0;padding: 0;" href="http://www.google.com/chrome?hl=pt-BR" title="Google Chrome"><img style="margin: 0;padding: 0;border: 0;display: inline;" align="left" src="http://mateus007.github.com/Adeus-IE6/img/chrome.png" alt="Google Chrome" title="Google Chrome"/></a><a style="margin: 0;padding: 0;" href="http://pt-br.www.mozilla.com/pt-BR/" title="Firefox"><img style="margin: 0;padding: 0;border: 0;display: inline;" align="left" src="http://mateus007.github.com/Adeus-IE6/img/firefox.png" alt="Firefox" title="Firefox"/></a><a style="margin: 0;padding: 0;" href="http://www.apple.com/br/safari/download/" title="Safari"><img style="margin: 0;padding: 0;border: 0;display: inline;" align="left" src="http://mateus007.github.com/Adeus-IE6/img/safari.png" alt="Safari" title="Safari"/></a><a style="margin: 0;padding: 0;" href="http://www.opera.com/download/" title="Opera"><img style="margin: 0;padding: 0;border: 0;display: inline;" align="left" src="http://mateus007.github.com/Adeus-IE6/img/opera.png" alt="Opera" title="Opera"/></a></div></div></div>';

      function ajustaPosicaoAdeusIE6(e) {
        //Propriedades Window
        var $w = $(window),
          wh = $w.height(),
          ww = $w.width(),
          wst = $w.scrollTop(),
          wsl = $w.scrollLeft(),
          //Propriedades Body
          mt = parseFloat($("body").css("margin-top")),
          ml = parseFloat($("body").css("margin-left"));

        $("body").css({
          height: wh - mt - 20,
          width: ww - ml - 20,
        });

        $("#adeus-ei6-fundo").css({
          height: wh + wst,
          width: ww + wsl,
        });

        $("#adeus-ie6").css({
          top: $("body").height() / 2 + mt + wst,
          left: $("body").width() / 2 + ml + wsl,
        });
      }

      $("body")
        .css({
          overflow: "hidden",
          display: "block",
        })
        .append(AdeusIE6);

      ajustaPosicaoAdeusIE6();

      //Resize
      $(window).resize(ajustaPosicaoAdeusIE6).scroll(ajustaPosicaoAdeusIE6);

      //$('#adeus-ie6 p span').html($.browser.version);

      $("#adeus-ei6-fundo").hide().fadeIn(1000);
    }
  });
})(jQuery);
