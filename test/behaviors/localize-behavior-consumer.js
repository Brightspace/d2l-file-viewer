import '../../localize-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';

window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.FileViewer = window.D2L.PolymerBehaviors.FileViewer || {};
window.D2L.PolymerBehaviors.FileViewer.LangTerms = window.D2L.PolymerBehaviors.FileViewer.LangTerms || {};
Polymer({
	is: 'localize-behavior-consumer',
	behaviors: [
		D2L.PolymerBehaviors.FileViewer.LocalizeBehavior
	]
});
