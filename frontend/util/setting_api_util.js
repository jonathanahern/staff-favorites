export const fetchSetting = (shopId) => {
  return $.ajax({
    url: `api/settings/${shopId}`,
    method: "GET",
  });
};

export const updateSetting = (setting) =>
  $.ajax({
    url: `/api/settings/1`,
    headers: {
      "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content"),
    },
    method: "patch",
    data: { setting },
  });