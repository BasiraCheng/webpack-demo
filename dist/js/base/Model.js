window.Model = function (options) {
  let resourceName = options.resourceName;
  return {
    init: function () {
      var APP_ID = 'v1bWSRjLy4xNSdyAbHLHeYCU-gzGzoHsz';
      var APP_KEY = 'czImqANFMm3D8qklozrOsML0';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    fetch: function () {
      var query = new AV.Query(resourceName);
      return query.find();
    },
    save: function (object) {
      var X = AV.Object.extend(resourceName);
      var x = new X();
      return x.save(object);
    }
  };
};