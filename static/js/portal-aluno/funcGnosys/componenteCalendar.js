Gnosys.preloadDateRangeBegin = function preloadDateRangeBegin(day) {
  try {
    idDateRangeBegin = jQueryGnosys(
      "#" + day.component.id + "-dateRangeBegin"
    ).text();
    dataAux = Richfaces.getComponent(
      "calendar",
      document.getElementById(idDateRangeBegin)
    ).getSelectedDate();

    if (dataAux != null && dataAux != undefined) {
      return dataAux.getTime() <= day.date.getTime();
    } else {
      return true;
    }
  } catch (error) {
    return true;
  }
};

Gnosys.isDateBeforeCurrentDate = function preloadDateRangeBegin(day) {
  return day.date < new Date();
};
