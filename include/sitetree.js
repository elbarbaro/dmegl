/* [nodename, id, name, navigationtext, href, isnavigation, childs[], templatename] */

if (typeof(decodeURIComponent) == 'undefined') {
  decodeURIComponent = function(s) {
    return unescape(s);
  }
}

function jdecode(s) {
    s = s.replace(/\+/g, "%20")
    return decodeURIComponent(s);
}

var POS_NODENAME=0;
var POS_ID=1;
var POS_NAME=2;
var POS_NAVIGATIONTEXT=3;
var POS_HREF=4;
var POS_ISNAVIGATION=5;
var POS_CHILDS=6;
var POS_TEMPLATENAME=7;
var POS_TARGET=8;
var theSitetree=[ 
	['PAGE','4101',jdecode('Home'),jdecode(''), jdecode('%2F4101.html'), 'true',[],'',''],
	['PAGE','4152',jdecode('Topics'),jdecode(''), jdecode('%2F4152.html'), 'true',[],'',''],
	['PAGE','4173',jdecode('Participants'),jdecode(''), jdecode('%2F4173.html'), 'true',[],'',''],
	['PAGE','15001',jdecode('Collaborators'),jdecode(''), jdecode('%2F15001.html'), 'true',[],'',''],
	['PAGE','4194',jdecode('Activities'),jdecode(''), jdecode('%2F4194.html'), 'true',[],'',''],
	['PAGE','23401',jdecode('Smart+Satellites'),jdecode(''), jdecode('%2F23401.html'), 'true',[],'',''],
	['PAGE','12801',jdecode('Events'),jdecode(''), jdecode('%2F12801.html'), 'true',[],'',''],
	['PAGE','14801',jdecode('Contact'),jdecode(''), jdecode('%2F14801.html'), 'true',[],'','']];
var siteelementCount=8;
theSitetree.topTemplateName='Office';
theSitetree.paletteFamily='727D9C';
theSitetree.keyvisualId='11163';
theSitetree.keyvisualName='kv_11163.jpg';
theSitetree.fontsetId='32062';
theSitetree.graphicsetId='13879';
theSitetree.contentColor='000000';
theSitetree.contentBGColor='FFFFFF';
var localeDef={
  language: 'en',
  country: 'US'
};
var prodDef={
  wl_name: 'powweb',
  product: 'WSCSYSSSSLY0XRNC'
};
var theTemplate={
				hasFlashNavigation: 'false',
				hasFlashLogo: 	'false',
				hasFlashCompanyname: 'false',
				hasFlashElements: 'false',
				hasCompanyname: 'false',
				name: 			'Office',
				paletteFamily: 	'727D9C',
				keyvisualId: 	'11163',
				keyvisualName: 	'kv_11163.jpg',
				fontsetId: 		'32062',
				graphicsetId: 	'13879',
				contentColor: 	'000000',
				contentBGColor: 'FFFFFF',
				a_color: 		'000000',
				b_color: 		'000000',
				c_color: 		'000000',
				d_color: 		'000000',
				e_color: 		'000000',
				f_color: 		'000000',
				hasCustomLogo: 	'false',
				contentFontFace:'Arial, Helvetica, sans-serif',
				contentFontSize:'12',
				useFavicon:     'false'
			  };
var webappMappings = {};
webappMappings['5000']=webappMappings['5000--']={
webappId:    '5000',
documentId:  '4101',
internalId:  '-',
customField: '20150403-102852'
};
webappMappings['5000']=webappMappings['5000--']={
webappId:    '5000',
documentId:  '4152',
internalId:  '-',
customField: '20140902-185030'
};
webappMappings['5000']=webappMappings['5000--']={
webappId:    '5000',
documentId:  '4173',
internalId:  '-',
customField: '20160922-191540'
};
webappMappings['5000']=webappMappings['5000--']={
webappId:    '5000',
documentId:  '4194',
internalId:  '-',
customField: '20150616-193726'
};
webappMappings['5000']=webappMappings['5000--']={
webappId:    '5000',
documentId:  '23401',
internalId:  '-',
customField: '20160126-174449'
};
webappMappings['5000']=webappMappings['5000--']={
webappId:    '5000',
documentId:  '12801',
internalId:  '-',
customField: '20161005-112339'
};
webappMappings['5000']=webappMappings['5000--']={
webappId:    '5000',
documentId:  '14801',
internalId:  '-',
customField: '20150414-165255'
};
webappMappings['5000']=webappMappings['5000--']={
webappId:    '5000',
documentId:  '15001',
internalId:  '-',
customField: '20150414-191514'
};
var webAppHostname = 'cgiwsc.enhancedsitebuilder.com:80';
var canonHostname = 'cmworker03.yourhostingaccount.com';
var accountId     = 'AENDU0I7K971';
var companyName   = 'Data+Mining+Engineering+Group';
var htmlTitle	  = 'Data+Mining+Engineering+Group';
var metaKeywords  = 'Data+Mining+Engineering+Group+CUDA+HPC+Ontologies+Web+Semantic+Software';
var metaContents  = 'Data+Mining+Engineering+Group';
theSitetree.getById = function(id, ar) {
	if (typeof(ar) == 'undefined'){
		ar = this;
	}
	for (var i=0; i < ar.length; i++) {
		if (ar[i][POS_ID] == id){
			return ar[i];
		}
		if (ar[i][POS_CHILDS].length > 0) {
			var result=this.getById(id, ar[i][POS_CHILDS]);
			if (result != null){
				return result;
			}
		}
	}
	return null;
};

theSitetree.getParentById = function(id, ar) {
	if (typeof(ar) == 'undefined'){
		ar = this;
	}
	for (var i=0; i < ar.length; i++) {
		for (var j = 0; j < ar[i][POS_CHILDS].length; j++) {
			if (ar[i][POS_CHILDS][j][POS_ID] == id) {
				// child found
				return ar[i];
			}
			var result=this.getParentById(id, ar[i][POS_CHILDS]);
			if (result != null){
				return result;
			}
		}
	}
	return null;
};

theSitetree.getName = function(id) {
	var elem = this.getById(id);
	if (elem != null){
		return elem[POS_NAME];
	}
	return null;
};

theSitetree.getNavigationText = function(id) {
	var elem = this.getById(id);
	if (elem != null){
		return elem[POS_NAVIGATIONTEXT];
	}
	return null;
};

theSitetree.getHREF = function(id) {
	var elem = this.getById(id);
	if (elem != null){
		return elem[POS_HREF];
	}
	return null;
};

theSitetree.getIsNavigation = function(id) {
	var elem = this.getById(id);
	if (elem != null){
		return elem[POS_ISNAVIGATION];
	}
	return null;
};

theSitetree.getTemplateName = function(id, lastTemplateName, ar) {
	if (typeof(lastTemplateName) == 'undefined'){
		lastTemplateName = this.topTemplateName;
	}
	if (typeof(ar) == 'undefined'){
		ar = this;
	}
	for (var i=0; i < ar.length; i++) {
		var actTemplateName = ar[i][POS_TEMPLATENAME];
		if (actTemplateName == ''){
			actTemplateName = lastTemplateName;
		}
		if (ar[i][POS_ID] == id) {
			return actTemplateName;
		}
		if (ar[i][POS_CHILDS].length > 0) {
			var result=this.getTemplateName(id, actTemplateName, ar[i][POS_CHILDS]);
			if (result != null){
				return result;
			}
		}
	}
	return null;
};

theSitetree.getByXx = function(lookup, xx, ar) {
    if (typeof(ar) == 'undefined'){
    	ar = this;
    }
    for (var i=0; i < ar.length; i++) {
        if (ar[i][xx] == lookup){
        	return ar[i];
        }
        if (ar[i][POS_CHILDS].length > 0) {
        	var result=this.getByXx(lookup, xx, ar[i][POS_CHILDS]);
            if (result != null){
                return result;
               }
        }
    }
    return null;
};

function gotoPage(lookup) {
	if(__path_prefix__ == "/servlet/CMServeRES" && typeof (changePage) == 'function'){
		changePage(lookup);
		return;
	}
	var page = theSitetree.getHREF(lookup);
	if (!page) {
		var testFor = [ POS_NAME, POS_NAVIGATIONTEXT ];
		for (var i=0 ; i < testFor.length ; i++) {
			var p = theSitetree.getByXx(lookup, testFor[i]);
			if (p != null) {
				page = p[POS_HREF];
				break;
			}
		}
	}
	document.location.href = (new URL(__path_prefix__ + page, true, true)).toString();
};
