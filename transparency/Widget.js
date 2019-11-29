define(['dojo/_base/declare', 'jimu/BaseWidget', 'dijit/_WidgetsInTemplateMixin', 'dojo/on', 'dojo/_base/lang', 'dijit/form/HorizontalSlider', "dijit/form/HorizontalRule", "dijit/form/HorizontalRuleLabels"], function (declare, BaseWidget, _WidgetsInTemplateMixin, on, lang) {
  return declare([BaseWidget, _WidgetsInTemplateMixin], {

    baseClass: 'transparency',
    map: null,
    value: 1,

    postCreate: function postCreate() {
      this.inherited(arguments);
      this.sceneView.when(lang.hitch(this, this._init));
      console.log('transparency::postCreate');
    },
    _init: function _init() {
      var panel = this.getPanel();
      panel.position.width = 350;
      panel.position.height = 150;
      panel.setPosition(panel.position);
      panel.panelManager.normalizePanel(panel);

      this.map = this.sceneView.map;
      this.map.ground.navigationConstraint = {
        type: "none"
      };
      this.map.ground.opacity = this.value;
      this.own(on(this.slider, 'change', lang.hitch(this, this._onSliderValueChanged)));
    },
    _onSliderValueChanged: function _onSliderValueChanged() {
      this.sceneView.map.ground.opacity = this.value - this.slider.value;
    }
  });
});
//# sourceMappingURL=Widget.js.map
