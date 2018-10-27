'use strict';

(function() {
	var shape = {
		D2L: {
			PolymerBehaviors: {
				FileViewer: {
					LangTerms: {}
				}
			}
		}
	};

	function createNamespace(scope, target) {
		for (var namespace in scope) {
			target[namespace] = target[namespace] || {};

			createNamespace(scope[namespace], target[namespace]);
		}
	}

	try {
		if (typeof window.D2L.PolymerBehaviors.FileViewer !== 'object') {
			throw Error();
		}
	} catch {
		createNamespace(shape, window);
	}
})();
