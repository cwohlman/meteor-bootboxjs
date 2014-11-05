Package.describe({
  summary: "Programmatic dialog boxes using Twitter's bootstrap modals",
  version: "4.4.0",
  git: "https://github.com/cwohlman/meteor-bootboxjs.git",
  name: "cwohlman:bootboxjs"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.0");

  api.use('jquery', 'client');
  api.use('ui', 'client');

  api.add_files('lib/bootbox.js', "client");
  api.add_files('meteor-addons.js', "client");
});
