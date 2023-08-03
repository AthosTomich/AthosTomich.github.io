if (jQuery.browser.msie && jQuery.browser.version == 9) {
  window.XMLSerializer = function () {};
  window.XMLSerializer.prototype.serializeToString = function (oNode) {
    return oNode.xml;
  };
}
