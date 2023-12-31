var sbjQuery = oldJQuery;
sbjQuery.fn.SpinButton = function (cfg) {
  return this.each(function () {
    this.spinCfg = {
      min: cfg && !isNaN(parseFloat(cfg.min)) ? Number(cfg.min) : null,
      max: cfg && !isNaN(parseFloat(cfg.max)) ? Number(cfg.max) : null,
      step: cfg && cfg.step ? Number(cfg.step) : 1,
      page: cfg && cfg.page ? Number(cfg.page) : 10,
      upClass: cfg && cfg.upClass ? cfg.upClass : "up",
      downClass: cfg && cfg.downClass ? cfg.downClass : "down",
      reset: cfg && cfg.reset ? cfg.reset : this.value,
      delay: cfg && cfg.delay ? Number(cfg.delay) : 500,
      interval: cfg && cfg.interval ? Number(cfg.interval) : 100,
      _btn_width: 20,
      _btn_height: 12,
      _direction: null,
      _delay: null,
      _repeat: null,
      digits: cfg && cfg.digits ? Number(cfg.digits) : 1,
    };
    this.adjustValue = function (i) {
      var v = this.value.toLowerCase();
      if (v == "am") {
        this.value = "PM";
        return;
      } else if (v == "pm") {
        this.value = "AM";
        return;
      }
      v =
        (isNaN(this.value) ? this.spinCfg.reset : Number(this.value)) +
        Number(i);
      if (this.spinCfg.min !== null)
        v =
          v < this.spinCfg.min
            ? this.spinCfg.max != null
              ? this.spinCfg.max
              : this.spinCfg.min
            : v;
      if (this.spinCfg.max !== null)
        v =
          v > this.spinCfg.max
            ? this.spinCfg.min != null
              ? this.spinCfg.min
              : this.spinCfg.max
            : v;
      var value = String(v);
      while (value.length < this.spinCfg.digits) value = "0" + value;
      this.value = value;
    };
    sbjQuery(this)
      .keydown(function (e) {
        switch (e.keyCode) {
          case 38:
            this.adjustValue(this.spinCfg.step);
            break;
          case 40:
            this.adjustValue(-this.spinCfg.step);
            break;
          case 33:
            this.adjustValue(this.spinCfg.page);
            break;
          case 34:
            this.adjustValue(-this.spinCfg.page);
            break;
        }
      })
      .bind("mousewheel", function (e) {
        if (e.wheelDelta >= 120) this.adjustValue(this.spinCfg.step);
        else if (e.wheelDelta <= -120) this.adjustValue(-this.spinCfg.step);
        e.preventDefault();
      })
      .change(function (e) {
        this.adjustValue(0);
      });
    var self = this;
    var btnUp = $(this.id + "BtnUp");
    sbjQuery(btnUp)
      .mousedown(function (e) {
        var adjust = function () {
          self.adjustValue(self.spinCfg.step);
        };
        adjust();
        self.spinCfg._delay = window.setTimeout(function () {
          adjust();
          self.spinCfg._repeat = window.setInterval(
            adjust,
            self.spinCfg.interval
          );
        }, self.spinCfg.delay);
        self.spinCfg._repeater = true;
        return false;
      })
      .mouseup(function (e) {
        self.spinCfg._repeater = false;
        window.clearInterval(self.spinCfg._repeat);
        window.clearTimeout(self.spinCfg._delay);
      })
      .dblclick(function (e) {
        if (sbjQuery.browser.msie) self.adjustValue(self.spinCfg.step);
      })
      .mouseout(function (e) {
        if (self.spinCfg._repeater) {
          self.spinCfg._repeater = false;
          window.clearInterval(self.spinCfg._repeat);
          window.clearTimeout(self.spinCfg._delay);
        }
      });
    var btnDown = $(this.id + "BtnDown");
    sbjQuery(btnDown)
      .mousedown(function (e) {
        var adjust = function () {
          self.adjustValue(-self.spinCfg.step);
        };
        adjust();
        self.spinCfg._delay = window.setTimeout(function () {
          adjust();
          self.spinCfg._repeat = window.setInterval(
            adjust,
            self.spinCfg.interval
          );
        }, self.spinCfg.delay);
        self.spinCfg._repeater = true;
        return false;
      })
      .mouseup(function (e) {
        self.spinCfg._repeater = false;
        window.clearInterval(self.spinCfg._repeat);
        window.clearTimeout(self.spinCfg._delay);
      })
      .dblclick(function (e) {
        if (sbjQuery.browser.msie) self.adjustValue(-self.spinCfg.step);
      })
      .mouseout(function (e) {
        if (self.spinCfg._repeater) {
          self.spinCfg._repeater = false;
          window.clearInterval(self.spinCfg._repeat);
          window.clearTimeout(self.spinCfg._delay);
        }
      });
    if (this.addEventListener) {
      this.addEventListener(
        "DOMMouseScroll",
        function (e) {
          if (e.detail > 0) this.adjustValue(-this.spinCfg.step);
          else if (e.detail < 0) this.adjustValue(this.spinCfg.step);
          e.preventDefault();
        },
        false
      );
    }
  });
  function coord(el, prop) {
    var c = el[prop],
      b = document.body;
    while ((el = el.offsetParent) && el != b) {
      if (!sbjQuery.browser.msie || el.currentStyle.position != "relative")
        c += el[prop];
    }
    return c;
  }
};
