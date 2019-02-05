import '@polymer/polymer/polymer-legacy.js';
import 'd2l-video/d2l-video.js';
import './d2l-pdf-viewer.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-file-viewer">
	<template strip-whitespace="">
		<style>
			:host {
				display: inline-block;
			}

			d2l-video,
			d2l-pdf-viewer {
				width: 100%;
			}
		</style>

		<template is="dom-if" if="[[_isFileType(fileType, 'video')]]">
			<d2l-video src="[[fileSrc]]" auto-load=""></d2l-video>
		</template>
		<template is="dom-if" if="[[_isFileType(fileType, 'img')]]">
			<img src="[[fileSrc]]">
		</template>
		<template is="dom-if" if="[[_isFileType(fileType, 'pdf')]]">
			<d2l-pdf-viewer src="[[fileSrc]]"></d2l-pdf-viewer>
		</template>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
/**
 * `<d2l-file-viewer>`
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
Polymer({
	is: 'd2l-file-viewer',
	listeners: {
		'd2l-pdf-viewer-load-failed': '_onFileLoadFailed'
	},
	properties: {
		fileType: {
			type: String
		},
		fileSrc: {
			type: String
		},
		loadFailed: {
			type: Boolean,
			reflectToAttribute: true
		}
	},
	_isFileType: function(a, b) {
		return a === b;
	},
	_onFileLoadFailed: function() {
		this.loadFailed = true;
	}
});
