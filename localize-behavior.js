import '@polymer/polymer/polymer-legacy.js';
import 'd2l-localize-behavior/d2l-localize-behavior.js';
import './lang/ar.js';
import './lang/de.js';
import './lang/en.js';
import './lang/es.js';
import './lang/fr.js';
import './lang/ja.js';
import './lang/ko.js';
import './lang/nb.js';
import './lang/nl.js';
import './lang/pt.js';
import './lang/sv.js';
import './lang/tr.js';
import './lang/zh-tw.js';
import './lang/zh.js';

window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.FileViewer = window.D2L.PolymerBehaviors.FileViewer || {};
window.D2L.PolymerBehaviors.FileViewer.LangTerms = window.D2L.PolymerBehaviors.FileViewer.LangTerms || {};
/**
* Localizes the d2l-file-viewer components.
* @polymerBehavior
*/
D2L.PolymerBehaviors.FileViewer.LocalizeBehaviorImpl = {
	properties: {
		/**
		* Localization resources.
		*/
		resources: {
			value: function() {
				return window.D2L.PolymerBehaviors.FileViewer.LangTerms;
			}
		}
	}
};

/** @polymerBehavior */
D2L.PolymerBehaviors.FileViewer.LocalizeBehavior = [
	D2L.PolymerBehaviors.LocalizeBehavior,
	D2L.PolymerBehaviors.FileViewer.LocalizeBehaviorImpl
];
