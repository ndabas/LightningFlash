/*
 *  Command Bar Globals
 *  Created by Nikhil Dabas ( ndabas@hotmail.com ).
 */

// Global Methods

function SetStyleDefault(sPropName, sPropVal)
{
  style[sPropName] = (style[sPropName] == null || style[sPropName] == "")
    ? sPropVal : style[sPropName];
}

function SetCustomStyleDefault(sCSSName, sScriptName, sDefault)
{
  if (currentStyle[sCSSName] == null)
    style[sCSSName] = sDefault;
  else
    style[sCSSName] = currentStyle[sCSSName];
  
  style[sScriptName] = style[sCSSName];
}

function UpdatePrompt()
{
  if(Prompt)
  {
    var parts = Prompt.split("|");
    Status = parts[0];
    Title = parts[1];
    title = parts[1];
  }
}

function CancelEvent()
{
  event.cancelBubble = true;
  event.returnValue = false;
}

// Global Constants

CB_ACTIVE_CURSOR = "hand";

CB_COLOR_BG = "#eee";
CB_COLOR_FG = "#000";
CB_COLOR_DISABLED = "#999";
CB_FONT_FAMILY = "Tahoma, Verdana, Arial, sans-serif";

CB_BAR_BORDER_DARK = "#666 solid 1px";
CB_BAR_BORDER_LIGHT = "#ccc solid 1px";
CB_BAR_HEIGHT = "29px";

CB_STS_BAR_HEIGHT = "20px";

CB_CTL_HEIGHT = "25px";
CB_CTL_BORDER_NORMAL = "#eee solid 1px";
CB_CTL_BORDER_ACTIVE = "#00c solid 1px";
CB_CTL_COLOR_BG_NORMAL = "#eee";
CB_CTL_COLOR_BG_ACTIVE = "#9cf";

CB_INPUT_CTL_HEIGHT = "18px";
CB_INPUT_CTL_BORDER_NORMAL = "#fff solid 1px";
CB_INPUT_CTL_BORDER_ACTIVE = "#00c solid 1px";
CB_INPUT_CTL_COLOR_BG = "#fff";

CB_MNU_BORDER = "#666 solid 1px";
CB_MNU_COLOR_SEPERATOR = "#666";

CB_MNUI_COLOR_BG_NORMAL = "#fff";
CB_MNUI_COLOR_BG_ACTIVE = "#9cf";
CB_MNUI_IMAGE_EMPTY = "images\\trans.gif";
CB_MNUI_IMAGE_CHECKED = "images\\check.gif";

CB_FILTER_SHADOW = "progid:DXImageTransform.Microsoft.Shadow(" +
  "direction=135,color=#999999,strength=4)";
CB_FILTER_DISABLED = "progid:DXImageTransform.Microsoft.BasicImage(" +
  " Rotation=0,Mirror=0,Invert=0,XRay=0,Grayscale=1,Opacity=1.00)";
CB_FILTER_IMAGE_DISABLED = "progid:DXImageTransform.Microsoft.Alpha(" +
  " style=0,opacity=50)";

// Debug

var Debugging = true;

function TRACE(sMessage)
{
  if(!Debugging)
    return;
  
  if(!window.CBDebugWnd || window.CBDebugWnd.closed)
  {
    var sWndProps = "toolbar=0,location=0,directories=0,status=0,";
    sWndProps += "menubar=0,scrollbars=1,resizable=1,width=600,height=100";
    window.CBDebugWnd = open ("Debug.htm", "Debug", sWndProps);
  }
  
  window.CBDebugWnd.WriteMessage(sMessage);
}


// The Skin Manager class

function SkinMan(oElement, sBaseName)
{
	this.elem = oElement;
	this.baseName = sBaseName;
	this.ApplyClass = SkinMan_ApplyClass;
}

function SkinMan_ApplyClass(auxName)
{
	// Remove any existing skin
	var classes = this.elem.className.split(" ");
	for(key in classes)
	{
	  if(classes[key].indexOf(this.baseName) == 0)
	    classes[key] = "";
	}
	// Add the specified skin
	this.elem.className = classes.join(" ");
	// Trim the string
	this.elem.className = this.elem.className.replace(/(^\s*)|(\s*$)/g, "");
	this.elem.className += " " + this.baseName + auxName;
	
	return true;
}